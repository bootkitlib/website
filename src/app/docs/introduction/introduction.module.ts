import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction.component';
import { AppCommonModule } from '@app/common';

@NgModule({
  declarations: [
    IntroductionComponent
  ],
  imports: [
    AppCommonModule,
    RouterModule.forChild([{
      path: '',
      component: IntroductionComponent,
      data: {
        title: 'Introduction'
      }
    }])
  ],
  providers: [],
})
export class IntroductionModule { }
