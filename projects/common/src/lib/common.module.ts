import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from './layout';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppLayoutModule,
    RouterModule
  ],
  providers: [],
})
export class AppCommonModule { }
