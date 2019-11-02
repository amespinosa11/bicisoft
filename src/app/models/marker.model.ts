import { LatLngExpression } from 'leaflet';
import { ComponentRef } from '@angular/core';

export class Marker {
  id: number;
  name: string;
  description: string;
  position: LatLngExpression;
}
