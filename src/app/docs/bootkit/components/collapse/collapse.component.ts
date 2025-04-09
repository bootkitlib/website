import { Component } from '@angular/core';
import { AppCommonModule } from '@app/common';
import { CollapseModule } from '@bootkit/angular/components/collapse';

@Component({
    selector: 'app-bootkit-components-collapse',
    templateUrl: './collapse.component.html',
    standalone: true,
    imports: [
        AppCommonModule,
        CollapseModule
    ]
})
export class CollapseExampleComponent {
    c1 = false;
    c2 = true;
}
