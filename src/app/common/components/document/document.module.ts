import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocumentTableOfContentComponent } from './document-table-of-content/document-table-of-content.component';
import { DocumentComponent } from './document/document.component';
import { DocumentSectionComponent } from './document-section/document-section.component';

const DECLARES = [
  DocumentComponent,
  DocumentSectionComponent,
  DocumentTableOfContentComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: DECLARES,
  exports: DECLARES,
  providers: [],
})
export class DocumentModule { }
