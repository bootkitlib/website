import { Component } from '@angular/core';
import { SIDEBAR_ITEMS } from './items';

@Component({
  selector: 'app-documentation-sidebar',
  templateUrl: './documentation-sidebar.component.html',
  styleUrls: ['./documentation-sidebar.component.css']
})
export class DocumentationSidebarComponent {
  items = SIDEBAR_ITEMS;
}
