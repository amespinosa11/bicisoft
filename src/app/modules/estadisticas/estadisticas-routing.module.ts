import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroTiemposComponent } from './tablero-tiempos/tablero-tiempos.component';
import { InventarioBicicletasComponent } from './inventario-bicicletas/inventario-bicicletas.component';
import { DatosUsoBicicletasComponent } from './datos-uso-bicicletas/datos-uso-bicicletas.component';


const routes: Routes = [{ path: 'tablero-tiempos', component: TableroTiemposComponent },
{ path: 'inventario-bicicletas', component: InventarioBicicletasComponent },
{ path: 'uso-bicicletas', component: DatosUsoBicicletasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadisticasRoutingModule { }
