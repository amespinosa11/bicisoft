import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  Injector
} from '@angular/core';
import { tileLayer, latLng, marker } from 'leaflet';
import * as L from 'leaflet';
import 'beautifymarker';
import { GeolocalizacionService } from 'src/app/services/geolocalizacion/geolocalizacion.service';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.scss']
})
export class GeolocalizacionComponent implements OnInit {
  options = {};
  layersControl = {};
  layers = [];

  currentLatitude: number;
  currentLongitude: number;

  map: L.Map;

  constructor(private geolocalizacionService: GeolocalizacionService) {}

  ngOnInit() {
    this.getLocation();
    this.setMarkers();
    this.setMapOptions();
    this.setMapLayers();
  }

  // get the reference to the map
  onMapReady(map: L.Map) {
    this.map = map;
  }

  getLocation(): any {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position);
          this.currentLatitude = position.coords.latitude;
          this.currentLongitude = position.coords.longitude;
          this.map.panTo(
            new L.LatLng(this.currentLatitude, this.currentLongitude)
          );
          console.log(this.currentLongitude);
          console.log(this.currentLatitude);
          this.layers.push(
            marker([this.currentLatitude, this.currentLongitude])
          );
        },
        failure => {
          if (
            failure.message.indexOf('Only secure origins are allowed') === 0
          ) {
            alert('Only secure origins are allowed by your browser.');
          }
        }
      );
    } else {
      console.log(`Your browser doesn't support geolocation`);
    }
  }

  setMapOptions() {
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '...'
        })
      ],
      zoom: 15,
      center: latLng(4.60971, -74.08175)
    };
  }

  setMapLayers() {
    this.layersControl = {
      baseLayers: {
        'Open Street Map': tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          { maxZoom: 18, attribution: '...' }
        )
      }
    };
  }

  setMarkers() {
    const marks = this.geolocalizacionService.getMarkers(3);
    for (const mark of marks) {
      this.layers.push(marker([mark[0], mark[1]]));
    }
  }
}
