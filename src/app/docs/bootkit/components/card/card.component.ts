import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppCommonModule } from '@app/common';
import { CardComponent, CardModule } from '@bootkit/angular/components/card';

@Component({
  selector: 'app-bootkit-components-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [
      AppCommonModule,
      CardModule
  ]
})
export class CardExampleComponent {
}
