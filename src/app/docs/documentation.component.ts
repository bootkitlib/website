import { Component, AfterContentInit, computed } from '@angular/core';
import { AppCommonModule, DocumentService } from '@app/common';
import { SIDEBAR_ITEMS } from './menu-items';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css',
  standalone: true,
  imports: [
    AppCommonModule,
  ]
})
export class DocumentationComponent  {
  SIDEBAR_ITEMS = SIDEBAR_ITEMS;
  sections = computed(() => {
    return this.documentService.document()?.sections?.toArray();
  })

  constructor(protected documentService: DocumentService) {
  }

}
