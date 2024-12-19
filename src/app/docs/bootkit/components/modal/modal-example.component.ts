import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalModule } from '@bootkit/angular/components/modal';
 
@Component({
  selector: 'app-example-bootkit-modal',
  templateUrl: './modal-example.component.html',
  standalone: true,
  imports: [
      CommonModule,
      ModalModule
  ]
})
export class ModalExampleComponent {
  show = true;
}
