import { Component, Input, ContentChildren, QueryList, AfterContentInit, input, OnInit } from '@angular/core';
import { DocumentSectionComponent } from '../document-section/document-section.component';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-doc',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent  implements AfterContentInit  {
  header = input<string>();
  @ContentChildren(DocumentSectionComponent) public sections?: QueryList<DocumentSectionComponent>;

  constructor(private documentService: DocumentService) {
  }

  ngAfterContentInit() {
    this.documentService.document.set(this);
  }
}
