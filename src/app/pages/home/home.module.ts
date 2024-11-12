import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArchitectureDiagramComponent } from './architecture-diagram/architecture-diagram.component';
import { BoxComponent } from './architecture-diagram/box/box.component';

@NgModule({
  declarations: [
    HomeComponent,
    ArchitectureDiagramComponent,
    BoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent,
      data: {
        title: 'A Component Library and Infrasturecture for Angular'
      }
    }])
  ],
  providers: [],
})
export class HomeModule { }
