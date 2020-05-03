import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
