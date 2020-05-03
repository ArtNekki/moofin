import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminLayoutComponent} from '../layouts/admin-layout/admin-layout.component';
import {LoginViewComponent} from './views/login-view/login-view.component';
import {RouterModule} from '@angular/router';

const routes = [
  { path: '', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      { path: 'login', component: LoginViewComponent }
  ]}
];

@NgModule({
  declarations: [
    LoginViewComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class AdminModule { }
