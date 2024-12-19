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
        path: 'accordion',
        loadChildren: () => import('./components/accordion/routes')
      },

      {
        path: 'card',
        loadChildren: () => import('./components/card/routes')
      },
      {
        path: 'collapse',
        loadChildren: () => import('./components/collapse/routes')
      },
      {
        path: 'dropdown',
        loadChildren: () => import('./components/dropdown/routes')
      },
      {
        path: 'modal',
        loadChildren: () => import('./components/modal/routes')
      },
      {
        path: 'popover',
        loadChildren: () => import('./components/popover/routes')
      },
      {
        path: 'tabs',
        loadChildren: () => import('./components/tabs/routes')
      },
      {
        path: 'tooltip',
        loadChildren: () => import('./components/tooltip/routes')
      },
      
    ]
  },

] satisfies Route[];
