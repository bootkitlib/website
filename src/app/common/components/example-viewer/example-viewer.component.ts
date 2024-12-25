import { CommonModule } from '@angular/common';
import { Component, input, model } from '@angular/core';
import { TooltipDirective } from '@bootkit/angular/components/tooltip';
import { CodeComponent } from '@bootkit/angular-pro/components/code';

export interface ExampleViewerCode {
  code: string;
  formatter: string;
  title: string;
}

@Component({
  selector: 'app-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TooltipDirective,
    CodeComponent
  ]
})
export class ExampleViewerComponent {
  header = input<string>();
  codes = input<ExampleViewerCode[]>();
  showCode = model<boolean>(true);

  constructor() {
  }

}
