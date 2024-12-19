import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent, CardModule } from '@bootkit/angular/components/card';

@Component({
  selector: 'app-bootkit-components-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [
      CommonModule,
      CardModule
  ]
})
export class CardExampleComponent {
}
