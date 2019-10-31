import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { LoginComponent } from './modules/login/login.component';
import { LayoutModule } from './modules/layout/layout.module';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login/tuaficionado', component: LoginComponent },
  { path: 'login/ciudadbici', component: LoginComponent },
  { path: 'login/bicitrip', component: LoginComponent },
  { path: 'bicisoft', loadChildren: () => import(`./modules/layout/layout.module`).then(m => m.LayoutModule) },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
