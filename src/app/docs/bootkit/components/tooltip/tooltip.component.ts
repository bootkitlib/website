import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TooltipDirective } from '@bootkit/angular/components/tooltip';

@Component({
    selector: 'app-tooltip-example',
    templateUrl: './tooltip.component.html',
    standalone: true,
    imports: [
        CommonModule,
        TooltipDirective
    ]
})
export class TooltipExampleComponent {
}
