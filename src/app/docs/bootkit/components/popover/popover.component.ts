import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppCommonModule } from '@app/common';
import { PopoverDirective } from '@bootkit/angular/components/popover';

@Component({
    selector: 'app-popover-example',
    templateUrl: './popover.component.html',
    styleUrls: ['./popover.component.css'],
    standalone: true,
    imports: [
        AppCommonModule,
        PopoverDirective
    ]
})
export class PopoverExampleComponent {
}
