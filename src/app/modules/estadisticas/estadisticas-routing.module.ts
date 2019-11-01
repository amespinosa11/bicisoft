import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroTiemposComponent } from './tablero-tiempos/tablero-tiempos.component';


const routes: Routes = [{ path: 'tablero-tiempos', component: TableroTiemposComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadisticasRoutingModule { }
