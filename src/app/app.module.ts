import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ServicesComponent } from './views/services/services.component';
import { PostsComponent } from './views/posts/posts.component';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { DialogsComponent } from './views/dialogs/dialogs.component';
import { LoginComponent } from './views/login/login.component';
import { HelpComponent } from './views/help/help.component';
import { ProfileComponent } from './views/profile/profile.component';

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
