import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppLayoutComponent,
    // AppLayoutAsideMenuComponent,
  ],
  exports: [
    AppLayoutComponent
  ]
})
export class AppLayoutModule { }
