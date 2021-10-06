import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../environments/environment';
import { AccessTokenResponse } from '../../core/models/access-token-response.model';
import { UserResponse } from '../../core/models/user-response.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(Boolean(localStorage.accessToken && localStorage.googleToken));

  constructor(private http: HttpClient, private socialAuthService: SocialAuthService) {}

  getToken({ idToken, googleToken }: { idToken: string, googleToken: string }): Promise<void> {
    return this.http.post<AccessTokenResponse>(`${environment.apiUrl}/Auth/Google`, { idToken })
      .toPromise().then(response => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('googleToken', googleToken);
      })
      .then(() => this.getProfile());
  }

  getProfile() {
    return this.http.get<UserResponse>(`${environment.apiUrl}/Auth/Me`)
      .toPromise().then(response => {
        localStorage.setItem('email', response.email);
        localStorage.setItem('name', response.name);
        localStorage.setItem('surname', response.surname);
        localStorage.setItem('photo', response.photo);
      });
  }

  signIn() {
    return this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => this.getToken({ idToken: user.idToken, googleToken: user.authToken }))
      .then(() => this.isLoggedIn$.next(true));
  }

  logout(): Promise<void> {
    return this.socialAuthService.signOut()
      .then(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('googleToken');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        localStorage.removeItem('surname');
        localStorage.removeItem('photo');
        this.isLoggedIn$.next(false);
      });
  }
}
