import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login/tuaficionado', component: LoginComponent },
  { path: 'login/ciudadbici', component: LoginComponent },
  { path: 'login/bicitrip', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
