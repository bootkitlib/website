import { Route, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction.component';

export default [{
  path: '',
  component: IntroductionComponent,
  data: {
    title: 'Introduction'
  }
}] satisfies Route[];
