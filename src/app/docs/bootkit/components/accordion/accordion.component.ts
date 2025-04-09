import { Component } from '@angular/core';
import { AppCommonModule } from '@app/common';
import { AccordionModule } from '@bootkit/angular/components/accordion';
import { codes } from './codes';

@Component({
  selector: 'app-bootkit-components-accordion',
  templateUrl: './accordion.component.html',
  standalone: true,
  imports: [
    AppCommonModule,
    AccordionModule
  ]
})
export class BootkitAccordionComponent {
      codes = codes;
  
}
