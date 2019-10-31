import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingComponent } from './modules/landing/landing.component';
import { LoginComponent } from './modules/login/login.component';
import { LayoutModule } from './modules/layout/layout.module';

@NgModule({
  declarations: [AppComponent, LandingComponent, LoginComponent],
  imports: [
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
