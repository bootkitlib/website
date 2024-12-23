import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocumentModule } from './components/document';
import { CodeComponent } from '@bootkit/angular-pro/components/code';
import { ExampleViewerModule } from './components/code-box';

@NgModule({
  declarations: [
  ],
  imports: [
    CodeComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    DocumentModule,
    CodeComponent,
    ExampleViewerModule
  ],
  providers: [],
})
export class AppCommonModule { }