import { Component } from '@angular/core';
import { CodeFormatterService } from '@bootkit/angular-pro/components/code';
import { AppLayoutModule } from './common/app-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



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
  constructor(cc: CodeFormatterService) {
  }
}
