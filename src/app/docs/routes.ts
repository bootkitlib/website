import { Route, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation.component';

export default [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bootkit/getting-started/introduction'
      },
      {
        path: 'bootkit',
        loadChildren: () => import('./bootkit/routes')
      },
      // {
      //   path: 'bootkit-pro',
      //   loadChildren: () => import('./bootkit-pro/routes')
      // },
    ]
  }
] satisfies Route[];
