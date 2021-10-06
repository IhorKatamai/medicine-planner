import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() opened!: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService) { }

  logout() {
    return this.authService.logout()
      .then(() => this.router.navigate(['/auth']));
  }
}
