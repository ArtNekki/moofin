import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AdminLayoutComponent} from '../layouts/admin-layout/admin-layout.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertService} from '../core/services/alert.service';

import {AdminAuthGuard} from './core/admin-auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes = [
  { path: '', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      { path: 'login', component: LoginPageComponent },
      { path: 'home', component: HomePageComponent }
  ]}
];

@NgModule({
  declarations: [
    LoginPageComponent,
    AdminLayoutComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [AlertService, AdminAuthGuard]
})

export class AdminModule { }
