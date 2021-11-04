import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../Services/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadChildren: () => import('../Views/login-view/login-view.module').then(m => m.LoginViewModule)
  },

  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('../Components/admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
