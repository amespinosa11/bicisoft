import { PagosModule } from './../pagos/pagos.module';
import { GeolocalizacionModule } from './../geolocalizacion/geolocalizacion.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from 'src/app/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { EstadisticasModule } from '../estadisticas/estadisticas.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    GeolocalizacionModule,
    EstadisticasModule,
    PagosModule,
    LayoutRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    MatMenuModule
  ],
  providers: [MaterialModule]
})
export class LayoutModule {}
