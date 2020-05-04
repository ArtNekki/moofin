import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {HelpPageComponent} from './pages/help-page/help-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {UserAuthGuard} from './core/user-auth.guard';
import {DialogsPageComponent} from './pages/dialogs-page/dialogs-page.component';
import {ServicesPageComponent} from './pages/services-page/services-page.component';
import {PostsPageComponent} from './pages/posts-page/posts-page.component';
import {NotificationsPageComponent} from './pages/notifications-page/notifications-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'dialogs', component: DialogsPageComponent, canActivate: [UserAuthGuard]},
      { path: 'posts', component: PostsPageComponent, canActivate: [UserAuthGuard] },
      { path: 'notifications', component: NotificationsPageComponent, canActivate: [UserAuthGuard] },
      { path: 'services', component: ServicesPageComponent, canActivate: [UserAuthGuard] },
      { path: 'help', component: HelpPageComponent, canActivate: [UserAuthGuard] },
      { path: 'profile', component: ProfilePageComponent, canActivate: [UserAuthGuard] }
  ]},
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
