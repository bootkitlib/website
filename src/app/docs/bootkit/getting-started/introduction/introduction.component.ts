import { Component } from '@angular/core';
import { AppCommonModule } from '@app/common';

@Component({
  selector: 'app-getting-started-introduction',
  templateUrl: './introduction.component.html',
  standalone: true,
  imports: [AppCommonModule]
})
export class IntroductionComponent {
}
