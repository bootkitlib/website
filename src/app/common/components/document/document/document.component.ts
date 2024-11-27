import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { DocumentSectionComponent } from '../document-section/document-section.component';

@Component({
  selector: 'app-doc',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
  @Input() header!: string;
  @ContentChildren(DocumentSectionComponent) private _sectionsQuery!: QueryList<DocumentSectionComponent>;
  private _sections: DocumentSectionComponent[] = [];

  getSections() {
    return this._sectionsQuery.toArray();
  }

  constructor() { }
}
