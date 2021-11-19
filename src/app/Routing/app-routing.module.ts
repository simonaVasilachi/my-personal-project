// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from '../Services/auth.guard';
// import { AppLayoutComponent } from '../Views/app-layout/app-layout.component';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/login',
//     pathMatch: 'full',
//   },

//   {
//     path: 'login',
//     loadChildren: () =>
//       import('../Views/login-view/login-view.module').then(
//         (m) => m.LoginViewModule
//       ),
//   },

//   {
//     path: 'dashboard',
//     //component: AppLayoutComponent,
//     //canActivate: [AuthGuard],
//     loadChildren: () =>
//       import('../Components/dashboard/dashboard.module').then(
//         (m) => m.DashboardModule
//       ),
//   },

//   {
//     path: 'test',
//     //component: AppLayoutComponent,
//     //canActivate: [AuthGuard],
//     loadChildren: () =>
//       import('../Views/app-layout/app-layout.module').then(
//         (m) => m.AppLayoutModule),
//   },
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       // enableTracing: true
//     }),
//   ],
//   exports: [RouterModule],
// })


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../Services/auth.guard';
import { AppLayoutComponent } from '../Views/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../Views/login-view/login-view.module').then(
        (m) => m.LoginViewModule
      ),
  },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../Components/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },

      {
        path: 'test',
        loadChildren: () =>
          import('../Views/app-layout/app-layout.module').then(
            (m) => m.AppLayoutModule
          ),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}




