import { Component, input, Input, OnInit } from '@angular/core';
import { DocumentSectionComponent } from '../document-section/document-section.component';
import { DocumentComponent } from '../document/document.component';

@Component({
  selector: 'app-document-toc',
  templateUrl: './document-table-of-content.component.html',
  styleUrls: ['./document-table-of-content.component.css']
})
export class DocumentTableOfContentComponent implements OnInit {
  document = input<DocumentComponent>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
