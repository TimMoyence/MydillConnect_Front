import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {
    path: 'accueil',
    loadComponent: () => import('./views/accueil/accueil.component'),
    data: {
      meta: {
        title: 'Accueil | Mydill connect',
        description:
          'Découvrez les services de Mydill connect, la plateforme de gestion et reservation du reseaux informatique',
      },
    },
  },
  {
    path: 'mentions-legales',
    loadComponent: () =>
      import('./views/legal-mentions/legal-mentions.component'),
    data: {
      meta: {
        title: 'Mentions Légales - Mydill connect',
        description:
          'Consultez les mentions légales de notre site. Engagement envers la transparence et le respect de la confidentialité.',
      },
    },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./views/admin/admin.routes').then((m) => m.adminRoutes),
  },
  {
    path: '**',
    loadComponent: () => import('./views/not-found/not-found.component'),
  },
];
