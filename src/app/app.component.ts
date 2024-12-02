import { Component } from '@angular/core';
import { AppLayoutModule } from './common/app-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import hljs from 'highlight.js/lib/core';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import { addCodeFormatter } from '@bootkit/angular-pro/components/code';
hljs.registerLanguage('xml', xmlLanguage);
addCodeFormatter('html', code => hljs.highlight(code, { language: 'xml' }).value);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AppLayoutModule,
  ]
})
export class AppComponent {
  constructor() {
  }
}
