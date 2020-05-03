import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {DialogsComponent} from './views/dialogs/dialogs.component';
import {PostsComponent} from './views/posts/posts.component';
import {NotificationsComponent} from './views/notifications/notifications.component';
import {ServicesComponent} from './views/services/services.component';
import {HelpComponent} from './views/help/help.component';
import {ProfileComponent} from './views/profile/profile.component';
import {LoginComponent} from './views/login/login.component';

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
