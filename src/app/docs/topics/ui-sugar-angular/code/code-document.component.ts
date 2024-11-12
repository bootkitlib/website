import { Component, ViewChildren, QueryList, OnInit, AfterViewInit } from '@angular/core';
import { CODE_1 } from './codes/1';

@Component({
  selector: 'app-docs-components-badge',
  templateUrl: './code-document.component.html',
  styleUrls: ['./code-document.component.css']
})
export class CodeDocumentComponent {
  code1 = CODE_1;
}
