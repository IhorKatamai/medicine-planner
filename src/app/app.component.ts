import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProfileService } from './auth/profile.service';
import { LayoutService } from './shared/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>;
  isOpened$: Observable<boolean>;

  constructor(private profileService: ProfileService, private layoutService: LayoutService) {
    this.isLoggedIn$ = this.profileService.profile$.pipe(map(Boolean));
    this.isOpened$ = this.layoutService.isOpened$;
  }

  toggleSidenav() {
    this.layoutService.toggleSidenav();
  }
}
