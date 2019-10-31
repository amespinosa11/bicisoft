import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeolocalizacionComponent } from './geolocalizacion/geolocalizacion.component';

const routes: Routes = [{ path: '', component: GeolocalizacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeolocalizacionRoutingModule {}
