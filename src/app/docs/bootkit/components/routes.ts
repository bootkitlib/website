import { Route, Routes } from '@angular/router';

export default [
      {
        path: 'accordion',
        loadChildren: () => import('./accordion/routes')
      },

      {
        path: 'card',
        loadChildren: () => import('./card/routes')
      },
      {
        path: 'collapse',
        loadChildren: () => import('./collapse/routes')
      },
      {
        path: 'dropdown',
        loadChildren: () => import('./dropdown/routes')
      },
      {
        path: 'modal',
        loadChildren: () => import('./modal/routes')
      },
      {
        path: 'popover',
        loadChildren: () => import('./popover/routes')
      },
      {
        path: 'tabs',
        loadChildren: () => import('./tabs/routes')
      },
      {
        path: 'tooltip',
        loadChildren: () => import('./tooltip/routes')
      },
      {
        path: 'toast',
        loadChildren: () => import('./toast/routes')
      },
    
] satisfies Route[];
