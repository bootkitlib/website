import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocumentModule } from './components/document';
import { CodeComponent } from '@bootkit/angular-pro/components/code';
import { ExampleViewerModule } from './components/example-viewer';
import { CodeViewerComponent } from './components/code-viewer';

@NgModule({
  declarations: [
  ],
  imports: [
    CodeComponent,
    CodeViewerComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    DocumentModule,
    CodeComponent,
    CodeViewerComponent,
    ExampleViewerModule
  ],
  providers: [],
})
export class AppCommonModule { }