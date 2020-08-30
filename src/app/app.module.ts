import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineSVGModule} from 'ng-inline-svg';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';

// mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlertComponent } from './components/alert/alert.component';
import {AlertService} from './core/services/alert.service';
import {UserAuthGuard} from './core/user-auth.guard';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {SERVICES} from './core/services';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginPageComponent,
    AlertComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InlineSVGModule.forRoot(),
    NgxMaskModule.forRoot(options),
  ],
  providers: [AlertService, UserAuthGuard, ...SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
