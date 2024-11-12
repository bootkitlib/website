import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { DocumentSectionComponent } from '../document-section/document-section.component';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements AfterContentInit {
  @Input() header!: string;
  @ContentChildren(DocumentSectionComponent) private _sectionsQuery!: QueryList<DocumentSectionComponent>;
  private _sections: DocumentSectionComponent[] = [];

  get sections() {
    return this._sections;
  }

  constructor() { }

  ngAfterContentInit(): void {
    this._sections = this._sectionsQuery.toArray();
  }
}
