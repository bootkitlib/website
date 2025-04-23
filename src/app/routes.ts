import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule)
      },
      {
        path: 'docs',
        loadChildren: () => import('./docs/routes')
      },
];
