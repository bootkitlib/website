import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocumentCollectionItemDirective } from './document-collection-item.directive';
import { DocumentTableOfContentComponent } from './document-table-of-content/document-table-of-content.component';
import { DocumentComponent } from './document/document.component';
import { DocumentSectionComponent } from './document-section/document-section.component';
import { DocumentCollectionComponent } from './document-collection/document-collection.component';
import { TabsModule } from '@js-sugar/angular-bootstrap';

const DECLARES = [
  DocumentComponent,
  DocumentSectionComponent,
  DocumentCollectionComponent,
  DocumentCollectionItemDirective,
  DocumentTableOfContentComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TabsModule
  ],
  declarations: DECLARES,
  exports: DECLARES,
  providers: [],
})
export class DocumentModule { }
