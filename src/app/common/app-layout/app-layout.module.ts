import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutAppBarComponent } from './app-bar/app-bar.component';
// import { AppLayoutAsideMenuComponent } from './aside-menu/aside-menu.component';
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
    AppLayoutAppBarComponent,
  ],
  exports: [
    AppLayoutComponent
  ]
})
export class AppLayoutModule { }
