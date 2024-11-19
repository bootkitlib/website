import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { AppCommonModule } from '@libs/common';
import { CodeFormatterService } from '@bootkit/angular-pro/components/code';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    AppCommonModule,
  ]
})
export class AppComponent {
  constructor(cc: CodeFormatterService) {
  }
}
