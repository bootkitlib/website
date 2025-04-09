import { Route, Routes } from '@angular/router';
import { RtlComponent } from './rtl.component';

export default [{
  path: '',
  component: RtlComponent,
  data: {
    title: 'RTL'
  }
}] satisfies Route[];
