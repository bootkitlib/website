import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WorkspaceLayout1Configuration } from '../types';

@Component({
  selector: 'app-layout-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AppLayoutAsideMenuComponent {
  @Input() config?: WorkspaceLayout1Configuration;
  @Input() expanded = true;
  @Input() theme: any;
  @Input() collapsedWidth = '';
  @Input() expandedWidth = '';
  @Output() expanderClick = new EventEmitter();

  constructor(private router: Router) {
  }

  // isTextMenuItem(item: MenuItem<any>) {
  //   return item instanceof TextMenuItem;
  // }

  // isDividerMenuItem(item: MenuItem<any>) {
  //   return item instanceof DividerMenuItem;
  // }

  // onMenuItemClick(item: TextMenuItem, e: MouseEvent) {
  //   if (item.click) {
  //     item.click(e);
  //   } else if (item.routerLink) {
  //     this.router.navigate(item.routerLink);
  //   }
  // }

  // userHasPermission(item: MenuItem<any>) {
  //   return true;
  // }

  // getTextMenuItemIconClass(item: TextMenuItem) {
  //   const cls: any = { bi: true };
  //   cls['bi-' + item.icon] = true;
  //   return cls;
  // }
  
  onMenuExpanderClick() {
    
  }
}
