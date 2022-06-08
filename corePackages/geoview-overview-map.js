"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[375],{6863:(e,t,n)=>{var o=n(1292),a=n(4702),i=n(19),r=n(9510),s=n(2746),l=n(7576),c=n(3110),p=n(2065),u=n(3457),m=n(7987),d=n(5202),g=window.cgpv,f=g.api,h=g.react,v=g.reactLeaflet,x=g.reactLeafletCore,C=f.eventNames,w=h.useState,y=h.useEffect,E=h.useCallback,b=h.useMemo,I=v.useMapEvent,Z=x.useEventHandlers;function k(e){var t=e.parentId,n=e.parentMap,o=e.zoomFactor,a=e.minimap,i=w(!1),r=(0,u.Z)(i,2),s=r[0],l=r[1],c=E((function(e){n.setView(e.latlng,n.getZoom())}),[n]);I("click",c);var p=w({height:0,width:0,top:0,left:0}),g=(0,u.Z)(p,2),h=g[0],v=g[1];function x(){if(Object.keys(a.getPanes()).length){var e=n.getZoom()-o>0?n.getZoom()-o:0;a.flyTo(n.getCenter(),e),setTimeout((function(){if(Object.keys(a.getPanes()).length){a.invalidateSize();var e=a.latLngToContainerPoint(n.getBounds().getSouthWest()),t=a.latLngToContainerPoint(n.getBounds().getNorthEast());v({height:e.y-t.y,width:t.x-e.x,top:t.y,left:e.x})}}),500)}}y((function(){return x(),f.event.on(C.OVERVIEW_MAP.EVENT_OVERVIEW_MAP_TOGGLE,(function(e){(0,m.$E)(e)&&t===e.handlerName&&(x(),l(e.status))}),t),function(){f.event.off(C.OVERVIEW_MAP.EVENT_OVERVIEW_MAP_TOGGLE,t)}}),[]);var k=E((function(){x()}),[a,n,o]),z=b((function(){return{moveend:k,zoomend:k}}),[k]);return Z({instance:n,context:{__version:1,map:n}},z),s?(0,d.jsx)("div",{}):(0,d.jsx)("div",{style:{left:"".concat(h.left,"px"),top:"".concat(h.top,"px"),width:"".concat(h.width,"px"),height:"".concat(h.height,"px"),display:"block",opacity:.5,position:"absolute",border:"1px solid rgb(0, 0, 0)",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1e3}})}var z=window.cgpv,P=z.api,j=z.react,V=z.leaflet,M=z.ui,T=z.constants,_=z.useTranslation,O=P.eventNames,R=j.useState,N=j.useEffect,B=j.useRef,L=V.DomEvent,S=M.elements,A=S.IconButton,W=S.ChevronLeftIcon,F=T.leafletPositionClasses,G=M.makeStyles((function(e){return{toggleBtn:{transform:"rotate(45deg)",color:e.palette.primary.contrastText,zIndex:e.zIndex.tooltip,"&:hover":{cursor:"pointer"}},toggleBtnContainer:{zIndex:e.zIndex.tooltip},minimapOpen:{transform:"rotate(-45deg)"},minimapClosed:{transform:"rotate(135deg)"}}}));function D(e){var t=e.parentId,n=e.minimap,o=B(null),a=_().t,i=R(!0),r=(0,u.Z)(i,2),s=r[0],l=r[1],c=G(),p=M.useTheme();return N((function(){L.disableClickPropagation(o.current)}),[]),(0,d.jsx)("div",{ref:o,className:"".concat(F.topright," ").concat(c.toggleBtnContainer),children:(0,d.jsx)(A,{className:"leaflet-control ".concat(c.toggleBtn," ").concat(s?c.minimapClosed:c.minimapOpen),style:{margin:"-".concat(p.spacing(3)),padding:0,height:"initial",minWidth:"initial"},"aria-label":a("mapctrl.overviewmap.toggle"),onClick:function(){return function(){if(l(!s),s){var e,o=null===(e=p.overrides.button)||void 0===e?void 0:e.size;n.getContainer().style.width=o.width,n.getContainer().style.height=o.height}else n.getContainer().style.width=H.width,n.getContainer().style.height=H.height;P.event.emit((0,m.s9)(O.OVERVIEW_MAP.EVENT_OVERVIEW_MAP_TOGGLE,t,s))}()},size:"large",children:(0,d.jsx)(W,{})})})}var H={width:"150px",height:"150px"},Q=window.cgpv,$=Q.api,q=Q.react,J=Q.leaflet,K=Q.reactLeaflet,U=Q.ui,X=Q.constants,Y=q.useState,ee=q.useEffect,te=q.useRef,ne=q.useMemo,oe=J.DomEvent,ae=K.MapContainer,ie=K.TileLayer,re=U.useMediaQuery,se=U.useTheme,le=U.makeStyles,ce=X.leafletPositionClasses,pe=le((function(e){return{minimap:{width:H.width,height:H.height,"-webkit-transition":"300ms linear","-moz-transition":"300ms linear","-o-transition":"300ms linear","-ms-transition":"300ms linear",transition:"300ms linear","&::before":{content:'""',display:"block",position:"absolute",width:0,height:0,borderTop:"32px solid hsla(0,0%,98%,0.9)",borderLeft:"32px solid transparent",zIndex:e.zIndex.appBar,right:0,top:0}}}}));function ue(e){var t=e.id,n=e.crs,o=e.zoomFactor,a=Y(),i=(0,u.Z)(a,2),r=i[0],s=i[1],l=pe(),c=se(),p=re(c.breakpoints.up("md")),m=$.map(t).map,g=m.getZoom()-o>0?m.getZoom()-o:0,f=$.map(t).basemap.activeBasemap,h=te(null);ee((function(){var e=h.current;e&&(oe.disableClickPropagation(e),oe.disableScrollPropagation(e))}),[]);var v=ne((function(){return(0,d.jsx)(ae,{className:l.minimap,center:m.getCenter(),zoom:g,crs:n,dragging:!1,doubleClickZoom:!1,scrollWheelZoom:!1,attributionControl:!1,zoomControl:!1,whenCreated:function(e){var t=e.getContainer();oe.disableScrollPropagation(t),t.parentElement.style.margin=c.spacing(3),s(e)},children:r?(0,d.jsxs)(d.Fragment,{children:[f.layers.map((function(e){return(0,d.jsx)(ie,{url:e.url},e.id)})),(0,d.jsx)(k,{parentId:t,parentMap:m,zoomFactor:o,minimap:r}),(0,d.jsx)(D,{parentId:t,minimap:r})]}):(0,d.jsx)("div",{})})}),[m,n,g,o,r]);return p?(0,d.jsx)("div",{style:{zIndex:1100},className:ce.topright,children:(0,d.jsx)("div",{ref:h,className:"leaflet-control leaflet-bar",children:v})}):(0,d.jsx)("div",{})}function me(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,l.Z)(e);if(t){var a=(0,l.Z)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return(0,s.Z)(this,n)}}var de=window,ge=function(e){(0,r.Z)(n,e);var t=me(n);function n(){var e;(0,o.Z)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),(0,c.Z)((0,i.Z)(e),"translations",{"en-CA":{},"fr-CA":{}}),(0,c.Z)((0,i.Z)(e),"added",(function(){var t=e.pluginProps.mapId,n=de.cgpv.api,o=n.map(t),a=o.language,i=o.projection,r=o.getMapOptions,s=o.currentProjection;n.map(t).addComponent("overviewMap",(0,d.jsx)(ue,{id:t,language:a,crs:i.getCRS(),zoomFactor:r(s).zoomFactor}))})),e}return(0,a.Z)(n,[{key:"removed",value:function(){var e=this.pluginProps.mapId;de.cgpv.api.map(e).removeComponent("overviewMap")}}]),n}(p.EV);de.plugins=de.plugins||{},de.plugins["overview-map"]=(0,p.RF)(ge)}},e=>{var t;t=6863,e(e.s=t)}]);
//# sourceMappingURL=geoview-overview-map.js.map