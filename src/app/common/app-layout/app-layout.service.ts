import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { WorkspaceLayout1Configuration } from "./types";
// import { WaitingDescriptor } from "./types";

@Injectable()
export class WorkspaceLayout1Service {
  // private _configChangeSubject = new Subject<WorkspaceLayout1Configuration>();
  // public readonly configChange = this._configChangeSubject.asObservable();

  // private _pageActions: PageActions = [];
  // private _pageActionsSubject = new BehaviorSubject<PageActions>(this._pageActions);
  // readonly pageActionsChange = this._pageActionsSubject.asObservable();

  constructor() { }

  // setPageActions(pageActions: PageActions) {
  //   this._pageActions = pageActions;
  //   this._pageActionsSubject.next(this._pageActions);
  // }
  
  // showWaiting(): void
  // showWaiting(descriptor: WaitingDescriptor): void
  // showWaiting(show: boolean): void
  // showWaiting(show?: any) {
  //   let d: WaitingDescriptor;
  //   show = show == null ? true : show;
  //   d = typeof show === 'boolean' ? { show, text: 'در حال بارگزاری اطلاعات' } : show;
  //   this._waitingSubject.next(d);
  // }

  // setPageActions(pageActions: PageActions) {
  //   this._pageActions = pageActions;
  //   this._pageActionsSubject.next(this._pageActions);
  // }

  // addPageActions(pageActions: PageActions) {
  //   this._pageActions = this._pageActions.concat(pageActions);
  //   this._pageActionsSubject.next(this._pageActions);
  // }

  // clearPageActions() {
  //   this.setPageActions([]);
  // }

  // showToast(message: string) {
  //   this._snackBar.open(message, undefined, { verticalPosition: 'bottom', duration: 3000 });
  // }
}
