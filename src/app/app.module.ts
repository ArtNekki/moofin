import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { CommonQuestionsComponent } from './views/common-questions/common-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginViewComponent,
    CommonQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
