import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
// import {AngularSvgIconModule} from 'angular-svg-icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { DialogsPageComponent } from './pages/dialogs-page/dialogs-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

// mask
// import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NavComponent } from './components/nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlertComponent } from './components/alert/alert.component';
import {AlertService} from './core/services/alert.service';
import {UserAuthGuard} from './core/user-auth.guard';
// export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ServicesPageComponent,
    PostsPageComponent,
    NotificationsPageComponent,
    DialogsPageComponent,
    LoginPageComponent,
    HelpPageComponent,
    ProfilePageComponent,
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
    // NgxMaskModule.forRoot(options),
    // AngularSvgIconModule
  ],
  providers: [AlertService, UserAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
