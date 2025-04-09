import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InstallationComponent } from './installation.component';
import { AppCommonModule } from 'src/app/common/common.module';
import { DocumentModule } from '../../../common/components/document/document.module';

@NgModule({
  declarations: [
    InstallationComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    DocumentModule,
    RouterModule.forChild([{
      path: '',
      component: InstallationComponent,
      data: {
        title: 'Installation'
      }
    }])
  ],
  providers: [],
})
export class InstallationModule { }
