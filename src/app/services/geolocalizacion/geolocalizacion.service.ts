import { Injectable } from '@angular/core';
import { Marker } from 'src/app/models/marker.model';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService {
  alquilerMarkers = [
    [4.60582, -74.05649],
    [4.610147, -74.075608],
    [4.600747, -74.085408]
  ];

  reparacionMarkers = [
    [4.60582, -74.05649],
    [4.610147, -74.075608],
    [4.600747, -74.085408]
  ];

  constructor() {}

  getMarkers(role: number) {
    if (role === 2) {
      return this.reparacionMarkers;
    }
    return this.alquilerMarkers;
  }
}
