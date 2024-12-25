import { CommonModule } from '@angular/common';
import { Component, input, model } from '@angular/core';
import { TooltipDirective } from '@bootkit/angular/components/tooltip';
import { CodeComponent } from '@bootkit/angular-pro/components/code';
import { Code } from '../code-viewer';


@Component({
  selector: 'app-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TooltipDirective,
    CodeComponent
  ]
})
export class ExampleViewerComponent {
  header = input<string>();
  codes = input<Code[]>();
  showCode = model<boolean>(false);

  constructor() {
  }

}
