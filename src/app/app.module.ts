import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
// import {AngularSvgIconModule} from 'angular-svg-icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ServicesComponent } from './pages/services/services.component';
import { PostsComponent } from './pages/posts/posts.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { DialogsComponent } from './pages/dialogs/dialogs.component';
import { LoginComponent } from './pages/login/login.component';
import { HelpComponent } from './pages/help/help.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';

// mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NavComponent } from './shared/nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlertComponent } from './shared/alert/alert.component';
import {AlertService} from './core/alert.service';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ServicesComponent,
    PostsComponent,
    NotificationsComponent,
    DialogsComponent,
    LoginComponent,
    HelpComponent,
    ProfileComponent,
    HeaderComponent,
    NavComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options),
    // AngularSvgIconModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
