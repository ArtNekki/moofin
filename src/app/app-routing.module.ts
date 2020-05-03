import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {LoginViewComponent} from './views/login-view/login-view.component';
import {CommonQuestionsComponent} from './views/common-questions/common-questions.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginViewComponent },
      { path: 'common-questions', component: CommonQuestionsComponent }
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
