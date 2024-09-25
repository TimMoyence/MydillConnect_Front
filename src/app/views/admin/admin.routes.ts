import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component'),
  },
];
