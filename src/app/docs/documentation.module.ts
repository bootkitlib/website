import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { DocumentationSidebarComponent } from './documentation-sidebar.component';
import { TabsModule } from '@js-sugar/angular-bootstrap';
import { DocumentModule } from './common';

@NgModule({
  declarations: [
    DocumentationComponent,
    DocumentationSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DocumentationRoutingModule,
    DocumentModule,

  ],
  exports: [
  ],
  providers: [
  ],
})
export class DocumentationModule { }
