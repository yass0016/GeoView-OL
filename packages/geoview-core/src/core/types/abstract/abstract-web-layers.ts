import { Layer } from 'leaflet';

import { Extent } from 'ol/extent';

import { TileArcGISRest, Vector as VectorSource } from 'ol/source';
import { VectorImage as VectorLayer, Tile as TileLayer } from 'ol/layer';

import { TypeWebLayers, TypeBaseWebLayersConfig, TypeLayersInWebLayer, DEFAULT_LAYER_NAMES } from '../cgpv-types';

import { generateId } from '../../utils/utilities';

import { api } from '../../../app';

export abstract class AbstractWebLayersClass {
  // type of web layer
  type: TypeWebLayers;

  // layer id with default
  id: string;

  // layer name with default
  name: string;

  // layer or layer service url
  url: string;

  // map id
  protected mapId: string;

  // The actual layer
  abstract layer: TileLayer<TileArcGISRest> | VectorLayer<VectorSource> | Layer | null;

  layers: TypeLayersInWebLayer = {};

  // service entries
  entries?: string[] | number[];

  setEntries?(entries: number[]): void;

  abstract getBounds(): L.LatLngBounds | Promise<L.LatLngBounds> | Extent | Promise<Extent>;

  abstract setOpacity(opacity: number): void;

  constructor(type: TypeWebLayers, layerConfig: TypeBaseWebLayersConfig, mapId: string) {
    this.type = type;
    this.id = layerConfig.id || generateId('');
    this.name = layerConfig.name ? layerConfig.name[api.map(mapId).getLanguageCode()] : DEFAULT_LAYER_NAMES[type];
    this.url = layerConfig.url[api.map(mapId).getLanguageCode()].trim();
    this.mapId = mapId;
  }
}