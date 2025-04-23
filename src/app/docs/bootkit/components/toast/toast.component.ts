import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppCommonModule } from '@app/common';
// import { ToastComponent } from '@bootkit/angular/components/toast';

@Component({
    selector: 'app-docs-bootkit-components-popover',
    templateUrl: './toast.component.html',
    standalone: true,
    imports: [
        AppCommonModule,
        // ToastComponent
    ]
})
export class BootkitToastComponent {
}
