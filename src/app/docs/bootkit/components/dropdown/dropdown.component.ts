import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppCommonModule } from '@app/common';
import { DropdownModule } from '@bootkit/angular/components/dropdown';

@Component({
    selector: 'app-bootkit-components-dropdown',
    templateUrl: './dropdown.component.html',
    standalone: true,
    imports: [
        AppCommonModule,
        DropdownModule
    ]
})
export class DropdownExampleComponent {

}
