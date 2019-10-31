import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeolocalizacionRoutingModule } from './geolocalizacion-routing.module';
import { GeolocalizacionComponent } from './geolocalizacion/geolocalizacion.component';
import { MapaComponent } from './mapa/mapa.component';


@NgModule({
  declarations: [GeolocalizacionComponent, MapaComponent],
  imports: [
    CommonModule,
    GeolocalizacionRoutingModule
  ]
})
export class GeolocalizacionModule { }
