import { CommonModule } from '@angular/common';
import { Component, ElementRef, input, model, Renderer2 } from '@angular/core';
import { TooltipDirective } from '@bootkit/angular/components/tooltip';
import { CodeComponent } from '@bootkit/angular-pro/components/code';


@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  standalone: true,
  imports: [
    CommonModule,
    TooltipDirective,
    CodeComponent
  ]
})
export class CodeViewerComponent {
  code = input<string>();
  formatter = input<string>();
  
  constructor(private element: ElementRef, private renderer: Renderer2) {
    ['d-block', 'alert', 'alert-light', 'my-3'].forEach(x => renderer.addClass(element.nativeElement, x));
  }
}
