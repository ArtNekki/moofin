import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineSVGModule} from 'ng-inline-svg';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AlertService} from './core/services/alert.service';
import {UserAuthGuard} from './core/user-auth.guard';
import {HttpClientModule} from '@angular/common/http';
import {SERVICES} from './core/services';
import {SimpleModalModule} from 'ngx-simple-modal';
import { DialogGoodsComponent } from './components/dialog-goods/dialog-goods.component';

import {DeviceDetectorModule} from 'ngx-device-detector';

import {CONTROLS} from './controls';
import {COMPONENTS} from './components';
import {AngularMyDatePickerModule} from 'angular-mydatepicker';
import {NgSelectModule} from '@ng-select/ng-select';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ɵs } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ...COMPONENTS,
    ...CONTROLS
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularMyDatePickerModule,
    NgSelectModule,
    DeviceDetectorModule.forRoot(),
    InlineSVGModule.forRoot(),
    SimpleModalModule.forRoot({container: 'modal-container'}),
    NgxMaskModule.forRoot(options),
  ],
  entryComponents: [DialogGoodsComponent],
  providers: [AlertService, UserAuthGuard, NgSelectConfig, ɵs, ...SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
