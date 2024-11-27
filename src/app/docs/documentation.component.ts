import { Component, AfterContentInit } from '@angular/core';
import { DocumentationLayoutComponent } from '../common/documentation-layout/documentation-layout.component';
import { AppCommonModule } from '@app/common';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  standalone: true,
  imports: [
    AppCommonModule,
    DocumentationLayoutComponent
  ]
})
export class DocumentationComponent implements AfterContentInit {
  constructor() {
  }

  ngAfterContentInit(): void {
  }
}
