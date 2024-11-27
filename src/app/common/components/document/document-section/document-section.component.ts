import { Component, Input, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-doc-section',
  templateUrl: `document-section.component.html`,
  styleUrls: ['./document-section.component.css']
})
export class DocumentSectionComponent {
  @Input() id!: string;
  @Input() header!: string;
  @ContentChildren(DocumentSectionComponent) private _sections!: QueryList<DocumentSectionComponent>;

  get sections() {
    return this._sections;
  }
}
