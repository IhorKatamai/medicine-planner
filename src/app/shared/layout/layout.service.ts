import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  isOpened$ = new BehaviorSubject<boolean>(localStorage.isSidenavOpened === 'true');

  constructor() {}

  toggleSidenav() {
    this.isOpened$.next(!this.isOpened$.value);
    localStorage.setItem('isSidenavOpened', this.isOpened$.value.toString());
  }
}
