import { Route, Routes } from '@angular/router';
import { InstallComponent } from './install.component';

export default [{
  path: '',
  component: InstallComponent,
  data: {
    title: 'Install'
  }
}] satisfies Route[];
