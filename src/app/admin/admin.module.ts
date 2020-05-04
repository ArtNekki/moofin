import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminLayoutComponent} from '../layouts/admin-layout/admin-layout.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BuildingPlanComponent } from './pages/building-plan/building-plan.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {UserAuthGuard} from '../core/user-auth.guard';
import {AlertService} from '../core/services/alert.service';
import {AlertComponent} from '../components/alert/alert.component';
import {SharedModule} from '../shared.module';
import { NavComponent } from './components/nav/nav.component';
import {AdminAuthGuard} from './core/admin-auth.guard';
import { BuildingComponent } from './pages/building/building.component';
import { PeoplesComponent } from './pages/peoples/peoples.component';
import { ServicesComponent } from './pages/services/services.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { CreatePorchComponent } from './pages/create-porch/create-porch.component';

const routes = [
  { path: '', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      { path: 'login', component: LoginPageComponent },
      { path: 'dashboard', component: DashboardPageComponent, canActivate: [AdminAuthGuard]},
      { path: 'building', component: BuildingComponent, canActivate: [AdminAuthGuard], children: [
          { path: 'create-porch', component: CreatePorchComponent, canActivate: [AdminAuthGuard]}
      ]},
      { path: 'people', component: PeoplesComponent, canActivate: [AdminAuthGuard]},
      { path: 'services', component: ServicesComponent, canActivate: [AdminAuthGuard]},
      { path: 'posts', component: PostsComponent, canActivate: [AdminAuthGuard]}
  ]}
];

@NgModule({
  declarations: [
    LoginPageComponent,
    AdminLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    BuildingPlanComponent,
    DashboardPageComponent,
    NavComponent,
    BuildingComponent,
    PeoplesComponent,
    ServicesComponent,
    PostsComponent,
    SubMenuComponent,
    CreatePorchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [AlertService, AdminAuthGuard]
})

export class AdminModule { }
