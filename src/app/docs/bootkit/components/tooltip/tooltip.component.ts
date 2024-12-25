import { Component } from '@angular/core';
import { AppCommonModule } from '@app/common';
import { TooltipDirective } from '@bootkit/angular/components/tooltip';
import { examples } from './codes';

@Component({
    selector: 'app-tooltip-example',
    templateUrl: './tooltip.component.html',
    standalone: true,
    imports: [
        AppCommonModule,
        TooltipDirective
    ]
})
export class TooltipExampleComponent {
    examples = examples;
}
