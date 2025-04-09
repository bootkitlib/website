import { Component } from '@angular/core';
import { AppCommonModule } from '@app/common';
import { codes } from './codes';

@Component({
  selector: 'app-doc-getting-started-install',
  templateUrl: './install.component.html',
  standalone: true,
  imports: [AppCommonModule]
})
export class InstallComponent {
  codes = codes;
}
