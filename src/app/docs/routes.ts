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
        redirectTo: 'getting-started/introduction'
      },
      {
        path: 'getting-started',
        children: [
          {
            path: 'introduction',
            loadChildren: () => import('./introduction/introduction.module').then(x => x.IntroductionModule)
          },

        ]
      },
      // {
      //   path: 'angular-package',
      //   children: [
      //     {
      //       path: 'installation',
      //       loadChildren: () => import('./topics/ui-sugar-angular/installation/installation.module').then(x => x.InstallationModule)
      //     },
      //     {
      //       path: 'code',
      //       loadChildren: () => import('./topics/ui-sugar-angular/code/code-document.module').then(x => x.CodeDocumentModule)
      //     },
      //   ]
      // },
      // {
      //   path: 'angular-bootstrap-package',
      //   children: [
      //     {
      //       path: 'code',
      //       loadChildren: () => import('./topics/ui-sugar-angular/code/code-document.module').then(x => x.CodeDocumentModule)
      //     },
      //   ]
      // },
      // {
      //   path: 'more',
      //   children: [
      //     {
      //       path: 'change-log',
      //       loadChildren: () => import('./topics/more/change-log/change-log.module').then(x => x.ChangeLogModule)
      //     },
      //   ]
      // },
    ]
  }
] satisfies Route[];
