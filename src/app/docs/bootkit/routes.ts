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
        path: 'installation',
        loadChildren: () => import('./getting-started/install/routes')
      },
      {
        path: 'rtl',
        loadChildren: () => import('./getting-started/rtl/routes')
      },
    ]
  },
  {
    path: 'components',
    children: [
      {
        path: 'tabs',
        loadChildren: () => import('./components/tabs/routes')
      },
    ]
  },

] satisfies Route[];
