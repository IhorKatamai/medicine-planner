import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth/auth.service';
import { LayoutService } from './shared/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>;
  isOpened$: Observable<boolean>;

  constructor(private authService: AuthService, private layoutService: LayoutService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.isOpened$ = this.layoutService.isOpened$;
  }

  toggleSidenav() {
    this.layoutService.toggleSidenav();
  }
}
