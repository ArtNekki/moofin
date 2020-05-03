import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {DialogsComponent} from './pages/dialogs/dialogs.component';
import {PostsComponent} from './pages/posts/posts.component';
import {NotificationsComponent} from './pages/notifications/notifications.component';
import {ServicesComponent} from './pages/services/services.component';
import {HelpComponent} from './pages/help/help.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dialogs', component: DialogsComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'help', component: HelpComponent },
      { path: 'profile', component: ProfileComponent }
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
