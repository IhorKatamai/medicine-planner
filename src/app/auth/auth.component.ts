import { Component, OnDestroy, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private router: Router,
  ) { }

  subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.socialAuthService.authState.subscribe((user) => {
      this.authService.getToken({idToken: user.idToken})
        .then(() => {
          this.router.navigate(['/']);
        });
    });
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
