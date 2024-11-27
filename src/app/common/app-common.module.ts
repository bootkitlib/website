import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocumentModule } from './components/document';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    DocumentModule
  ],
  providers: [],
})
export class AppCommonModule { }