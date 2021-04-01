import { useCallback, useEffect, useMemo, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import L, { divIcon, LatLng } from 'leaflet';

import { Marker, useMap } from 'react-leaflet';

import { useEventHandlers } from '@react-leaflet/core';
import { api } from '../../api/api';
import { EVENT_NAMES } from '../../api/event';
import { MapInterface } from '../../common/map-viewer';

const useStyles = makeStyles((theme) => ({
    markerIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: theme.zIndex.tooltip,
    },
    symbologyIcon: {
        transform: 'scale(1.5)',
    },
}));

/**
 * Create a react element to display a marker when a user clicks on
 * the map at the click location
 *
 * @returns {JSX.Element} the react element with a marker on click
 */
export const ClickMarker = (): JSX.Element => {
    const [showMarker, setShowMarker] = useState(false);
    const [markerPos, setMarkerPos] = useState<LatLng>();
    const [markerIcon, setMarkerIcon] = useState<L.DivIcon>();

    const classes = useStyles();

    const map = useMap();
    const mapId = (api.mapInstance(map) as MapInterface).id;

    /**
     * Remove the marker icon
     */
    const removeIcon = useCallback(() => {
        setShowMarker(false);
    }, []);

    // attach zoom and movestart events to the map instance
    const handlers = useMemo(() => ({ zoom: removeIcon, movestart: removeIcon }), [removeIcon]);
    useEventHandlers({ instance: map }, handlers);

    /**
     * Create an icon using an svg canvas image
     */
    const icon = divIcon({
        className: classes.markerIcon,
        html: `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARuSURBVDiNjZVrbFRVEMd/5967e9vddbduN4WWYgXKKyVQWgIhkQBVqJIYCQZJI00UH2DiNxUUQwQNSfH1RYwghphoCIGADQk1QKqAGCKhCKTKq6GWbYHSdvve9u7ee8cP210LAjrJ+XAmM78zOf8zcxT/bROBYuDRkX03cA1ofliSeoDfBFYAz2UZemFZXsBf6De9gkvbQCJx7k7/4LAjrUAtcBBI/B/wDGBL6Zhg0cZ5E8YvKswJ+zRl4LqIOOC6xBO2fbytJ7a1oS16sSveDGwG/ngYuEJXatOnT06f9ErJuEINUYgLrosK5CDiID2d4LogLrbtyDeX7rSu/631msBHwPE0SB9dqa5Uzf4V5SWrpuXna6AQAQREyFqzGWPWAuwzR0j7Fag5EV+oPOILHGjuni5wFugYDTaB7Z8vmTFj1bSC/DQMEbRIAZ6FK9BL5qGCYVSWD4m1I4N9mZhJj3j9OR5dP3azf/LIvbtp8AulY0LPbF86c6oCBQKAt7Ia8+VN6BNKQNPA8GJMKcNTsRKUwrl6LlN9aTgreLSt37o9ZHcDjWnwpi+eLp01NdcfSAd6lq7GU7ma5C+1WF9tQC+ajnS3M7TtNZTpw1tZDeLiXGnIXEvEq+sHW3pN4IABTDR1fdyiotxwRtFIAZ4lVSRP1pI4+CW4Ltb3NSnxhgaw9n4GCOazr2KfrsNtv5FSPt8fztLV+GFHHteA4vL8kN/vNYw02CirANcl+eO3GWWlL4b0xTL7RO0OEBdj/rKMz2doRmk42wcUa0BuYcjvBVA5EczXt6aCHRtzzQeoUG7qsLlLMeZWko7LeqMGsW28i1fie2cnWngsAIU+wwtENEBERO55z/zLcT+7T3uN5IkGdLX1xZMA0tOJ9fX72KfrULqOtXsL0tsFgH3maOoNj8QN73gPpRskftpH/JO1uLHbAETjdgLo1ICmhlu9gwMJ206fajfUg9LwLHvpn+KCYVQwoy/e5esAhX26LuMbTLr2hdhQHGjSgGbLcaInWroyykjXLZLH9uBZsBzv82+isv2Yq98lq3ojKjuAWfU2nsUrsQ7twu1oy4B/vj0YsxyJAi3pW6qaOSb01qnqJ8r09HwQwXiqCu/SF0EEsZOpyg0PKEXi0C6sw7vBcUBckrYjCw83nWvsGf4Y2JdukKvtg1ZFxGcG54wNhdIt7TRdwGmoR4b60QsmgpMkWb8X67sa7PMnMi0Nws5LndE913saga2MamkHuFjf3DF/dn4oUJzj86eTJN6He+08+pRypC+G9f221JwYNU+ORHs71v0avQxsANrh7unWJXBj/6Wb08LZHr00LxjU0nNDBOfyWewLJ2E4nqnSdlzZ+eed6NpTNy4LfEhqunEvGOAvoOFoc+fkuusdw3l+0ygMmKZXUxrDccRKQQcs2z7S2tO55vj1K3uaYo3A+tFQePDX5CH1NS03dTV+dl7Q91jANAWXaH/C+r2jPz6i/g8jK3kv4EHg0VYETOHuz/Qq0PKwpL8BL8EAdKaMj7AAAAAASUVORK5CYII=" />`,
    });

    useEffect(() => {
        setMarkerIcon(icon);

        api.event.on(
            EVENT_NAMES.EVENT_MARKER_ICON_SHOW,
            (payload) => {
                if (payload && payload.handlerName.includes(mapId)) {
                    // toggle the marker icon
                    setShowMarker(true);

                    // update the click location
                    setMarkerPos(payload.latlng);

                    if (payload.symbology) {
                        const { symbology } = payload;
                        let iconHtml = '';

                        // get symbology image
                        if (symbology.legendImageUrl) {
                            iconHtml = `<img class='${classes.symbologyIcon}' src='${symbology.legendImageUrl}' alt='' />`;
                        } else if (symbology.imageData) {
                            iconHtml = `<img class='${classes.symbologyIcon}' src='data:${symbology.contentType};base64, ${symbology.imageData}' alt="" />`;
                        }

                        setMarkerIcon(
                            divIcon({
                                className: classes.markerIcon,
                                html: iconHtml,
                            })
                        );
                    } else {
                        setMarkerIcon(icon);
                    }
                }
            },
            mapId
        );

        api.event.on(EVENT_NAMES.EVENT_MARKER_ICON_HIDE, (payload) => {
            if (payload && payload.handlerName.includes(mapId)) {
                setShowMarker(false);
            }
        });

        return () => {
            api.event.off(EVENT_NAMES.EVENT_MARKER_ICON_SHOW);
            api.event.off(EVENT_NAMES.EVENT_MARKER_ICON_HIDE);
        };
    }, []);

    // TODO If show marker is true then display an overlay on top of the layers to hide them and only display the marker
    return showMarker ? <Marker zIndexOffset={2000} position={[markerPos?.lat || 0, markerPos?.lng || 0]} icon={markerIcon} /> : <></>;
};