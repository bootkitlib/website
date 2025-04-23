import { Route, Routes } from '@angular/router';

export default [
  {
    path: 'getting-started',
    children: [
      {
        path: 'introduction',
        loadChildren: () => import('./getting-started/introduction/routes')
      },
      {
        path: 'rtl',
        loadChildren: () => import('./getting-started/rtl/routes')
      },
    ]
  },
  {
    path: 'components',
    loadChildren: () => import('./components/routes')
  },

] satisfies Route[];
