import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CodeDocumentComponent as CodeDocumentComponent } from './code-document.component';
import { AppCommonModule } from 'src/app/common/common.module';
import { DocumentModule } from '../../../common/components/document/document.module';

@NgModule({
  declarations: [
    CodeDocumentComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    DocumentModule,
    RouterModule.forChild([{
      path: '',
      component: CodeDocumentComponent,
    }])
  ],
  providers: [],
})
export class CodeDocumentModule { }
