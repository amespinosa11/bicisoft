import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { TableroTiemposComponent } from './tablero-tiempos/tablero-tiempos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventarioBicicletasComponent } from './inventario-bicicletas/inventario-bicicletas.component';
import { DatosUsoBicicletasComponent } from './datos-uso-bicicletas/datos-uso-bicicletas.component';

@NgModule({
  declarations: [
    TableroTiemposComponent,
    InventarioBicicletasComponent,
    DatosUsoBicicletasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EstadisticasRoutingModule
  ]
})
export class EstadisticasModule {}
