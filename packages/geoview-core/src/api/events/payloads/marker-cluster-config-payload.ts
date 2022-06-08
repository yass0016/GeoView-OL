import L from 'leaflet';

import { PayloadBaseClass } from './payload-base-class';

import { EventStringId, EVENT_NAMES } from '../event';

/** Valid events that can create MarkerClusterConfigPayload */
const validEvents: EventStringId[] = [EVENT_NAMES.CLUSTER_ELEMENT.EVENT_CLUSTER_ELEMENT_ADD];

/**
 * Type Gard function that redefines a PayloadBaseClass as a MarkerClusterConfigPayload
 * if the event attribute of the verifyIfPayload parameter is valid. The type ascention
 * applies only to the the true block of the if clause.
 *
 * @param {PayloadBaseClass} verifyIfPayload object to test in order to determine if the type ascention is valid
 * @returns {boolean} returns true of the payload is valid
 */
export const payloadIsAMarkerClusterConfig = (verifyIfPayload: PayloadBaseClass): verifyIfPayload is MarkerClusterConfigPayload => {
  return validEvents.includes(verifyIfPayload.event);
};

/**
 * Class definition for MarkerClusterConfigPayload
 *
 * @exports
 * @class MarkerClusterConfigPayload
 */
export class MarkerClusterConfigPayload extends PayloadBaseClass {
  // optional marker cluster identifier
  id?: string;

  // the marker latitude
  latitude: number;

  // the marker longitude
  longitude: number;

  // the marker options
  options: L.MarkerClusterElementOptions;

  /**
   * Constructor for the class
   *
   * @param {EventStringId} event the event identifier for which the payload is constructed
   * @param {string | null} handlerName the handler Name
   * @param {number} latitude the marker latitude
   * @param {number} longitude the marker longitude
   * @param {L.MarkerClusterElementOptions} options the marker options
   * @param {string} id optional marker cluster identifier
   */
  constructor(
    event: EventStringId,
    handlerName: string | null,
    latitude: number,
    longitude: number,
    options: L.MarkerClusterElementOptions,
    id?: string
  ) {
    if (!validEvents.includes(event)) throw new Error(`MarkerClusterConfigPayload can't be instanciated for event of type ${event}`);
    super(event, handlerName);
    this.latitude = latitude;
    this.longitude = longitude;
    this.options = options;
    this.id = id;
  }
}

/**
 * Helper function used to instanciate a MarkerClusterConfigPayload object. This function
 * avoids the "new MarkerClusterConfigPayload" syntax.
 *
 * @param {EventStringId} event the event identifier for which the payload is constructed
 * @param {string | null} handlerName the handler Name
 * @param {number} latitude the marker latitude
 * @param {number} longitude the marker longitude
 * @param {L.MarkerClusterElementOptions} options the marker options
 * @param {string} id optional marker cluster identifier
 *
 * @returns {MarkerClusterConfigPayload} the MarkerClusterConfigPayload object created
 */
export const markerClusterConfigPayload = (
  event: EventStringId,
  handlerName: string | null,
  latitude: number,
  longitude: number,
  options: L.MarkerClusterElementOptions,
  id?: string
): MarkerClusterConfigPayload => {
  return new MarkerClusterConfigPayload(event, handlerName, latitude, longitude, options, id);
};