import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeolocalizacionRoutingModule } from './geolocalizacion-routing.module';
import { GeolocalizacionComponent } from './geolocalizacion/geolocalizacion.component';
import { MapaComponent } from './mapa/mapa.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [GeolocalizacionComponent, MapaComponent],
  imports: [CommonModule, GeolocalizacionRoutingModule, LeafletModule.forRoot()]
})
export class GeolocalizacionModule {}
