import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { TableroTiemposComponent } from './tablero-tiempos/tablero-tiempos.component';


@NgModule({
  declarations: [TableroTiemposComponent],
  imports: [
    CommonModule,
    EstadisticasRoutingModule
  ]
})
export class EstadisticasModule { }
