import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../../auth/auth.service';
import { ProfileService } from '../../../auth/profile.service';
import { Profile } from '../../../../core/models/profile.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  profile$: Observable<Profile | null> = this.profileService.profile$;

  @Input() opened!: Observable<boolean>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  logout() {
    return this.authService.logout()
      .then(() => this.router.navigate(['/auth']))
      .then(() => this.profileService.removeProfile());
  }
}
