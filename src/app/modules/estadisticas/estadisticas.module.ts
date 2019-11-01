import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { TableroTiemposComponent } from './tablero-tiempos/tablero-tiempos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TableroTiemposComponent],
  imports: [
    CommonModule,
    EstadisticasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EstadisticasModule { }
