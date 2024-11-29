import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { WaitingDescriptor, WorkspaceLayout1Configuration as AppLayoutConfiguration } from './types';
import { WorkspaceLayout1Service } from './app-layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  providers: [WorkspaceLayout1Service]
})
export class AppLayoutComponent {
  @Input() config?: AppLayoutConfiguration;
  @Output() humburgerClick = new EventEmitter<any>();
  @Input() compactView = true;
  protected collapsed = signal(false);
  // _userDisplayText$: Observable<string>;
  
  _smallDevice = false;
  // _waiting$: Observable<WaitingDescriptor>;
  private mediaSubscription: Subscription;

  constructor(breakpointObserver: BreakpointObserver, private layoutService: WorkspaceLayout1Service) {
    this.mediaSubscription = breakpointObserver.observe('(max-width: 992px)').subscribe(x => this._smallDevice = x.matches);
    // this._waiting$ = layoutService.waitingChange;
  }

  ngOnDestroy(): void {
    this.mediaSubscription.unsubscribe();
  }

  getLayoutService() {
    return this.layoutService;
  }
}
