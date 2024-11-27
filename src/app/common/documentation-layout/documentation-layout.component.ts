import { Component, AfterContentInit } from '@angular/core';
import { DocumentationLayoutSidebarComponent } from './documentation-sidebar.component';
import { AppCommonModule } from '../app-common.module';

@Component({
  selector: 'app-documentation-layout',
  templateUrl: './documentation-layout.component.html',
  styleUrls: ['./documentation-layout.component.css'],
  standalone: true,
  imports: [
    DocumentationLayoutSidebarComponent,
    AppCommonModule
  ]
})
export class DocumentationLayoutComponent implements AfterContentInit {
  constructor() {
  }

  ngAfterContentInit(): void {
  }
}
