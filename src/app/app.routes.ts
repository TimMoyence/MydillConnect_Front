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
    path: 'categorie/ordinateurs', 
    loadComponent: () => import('./views/equipment-category/equipment-category.component'), 
    data: { category: 'Ordinateurs portables' } 
  },
  { 
    path: 'categorie/logiciels', 
    loadComponent: () => import('./views/equipment-category/equipment-category.component'), 
    data: { category: 'Projecteurs' } 
  },
  { 
    path: 'categorie/reseaux', 
    loadComponent: () => import('./views/equipment-category/equipment-category.component'), 
    data: { category: 'Imprimantes' } 
  },
  { 
    path: 'categorie/outils', 
    loadComponent: () => import('./views/equipment-category/equipment-category.component'), 
    data: { category: 'Imprimantes' } 
  },
  { 
    path: 'categorie/support', 
    loadComponent: () => import('./views/equipment-category/equipment-category.component'), 
    data: { category: 'Imprimantes' } 
  },
  { 
    path: 'categorie/maintenance', 
    loadComponent: () => import('./views/equipment-category/equipment-category.component'), 
    data: { category: 'Imprimantes' } 
  },
  {
    path: 'reservation/:name',
    loadComponent: () => import('./views/make-reservation/make-reservation.component'),
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
