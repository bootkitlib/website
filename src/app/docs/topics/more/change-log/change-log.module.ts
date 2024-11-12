import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeLogComponent } from './change-log.component';
import { AppCommonModule } from 'src/app/common/common.module';
import { DocumentModule } from '../../../common/components/document/document.module';

@NgModule({
  declarations: [
    ChangeLogComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    DocumentModule,
    RouterModule.forChild([{
      path: '',
      component: ChangeLogComponent
    }])
  ],
  providers: [],
})
export class ChangeLogModule { }
