import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'geolocalizacion', pathMatch: 'full' },
      {
        path: 'geolocalizacion',
        loadChildren: () =>
          import(`../geolocalizacion/geolocalizacion.module`).then(
            m => m.GeolocalizacionModule
          )
      },
      {
        path: 'estadisticas',
        loadChildren: () =>
          import(`../estadisticas/estadisticas.module`).then(
            m => m.EstadisticasModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
