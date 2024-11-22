import { Component, EventEmitter, Input, Output, signal, ViewEncapsulation } from '@angular/core';
// import { WorkspaceLayout1Configuration } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { DividerMenuItem, MenuItem, TextMenuItem } from '@js-sugar/angular';
import { WorkspaceLayout1Configuration } from '../types';

@Component({
  selector: 'app-layout-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppLayoutAppBarComponent {
  @Input() config?: WorkspaceLayout1Configuration;
  @Input() compactView = true;
  @Output() humburgerClick = new EventEmitter();
  protected collapsed = signal(false);
  // _userDisplayText$: Observable<string>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  isTextMenuItem(item: MenuItem<any>) {
    return item instanceof TextMenuItem;
  }

  isDividerMenuItem(item: MenuItem<any>) {
    return item instanceof DividerMenuItem;
  }

  onMenuItemClick(item: TextMenuItem, e: MouseEvent) {
    if (item.click) {
      item.click(e);
    } else if (item.routerLink) {
      this.router.navigate(item.routerLink);
    }
  }

  userHasPermission(item: MenuItem<any>) {
    return true;
  }

  getTextMenuItemIconClass(item: TextMenuItem) {
    const cls: any = { bi: true };
    cls['bi-' + item.icon] = true;
    return cls;
  }
}
