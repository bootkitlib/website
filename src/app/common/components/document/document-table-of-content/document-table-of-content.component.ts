import { Component, Input, OnInit } from '@angular/core';
import { DocumentSectionComponent } from '../document-section/document-section.component';
import { DocumentComponent } from '../document/document.component';

@Component({
  selector: 'app-document-toc',
  templateUrl: './document-table-of-content.component.html',
  styleUrls: ['./document-table-of-content.component.css']
})
export class DocumentTableOfContentComponent implements OnInit {
  @Input() document?: DocumentComponent;
  _sections: DocumentSectionComponent[] = [];

  constructor() {
  }

  ngOnInit(): void {
    if(this.document) {
      this._sections = this.document.getSections();
    }
  }
}
