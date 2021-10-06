import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

import { environment } from '../../environments/environment';
import { AccessTokenResponse } from '../../core/models/access-token-response.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient, private socialAuthService: SocialAuthService) {}

  getToken({ idToken, googleToken }: { idToken: string, googleToken: string }): Promise<void> {
    return this.http.post<AccessTokenResponse>(`${environment.apiUrl}/Auth/Google`, { idToken })
      .toPromise().then(response => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('googleToken', googleToken);
      });
  }

  signIn() {
    return this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => this.getToken({ idToken: user.idToken, googleToken: user.authToken }));
  }

  logout(): Promise<void> {
    return this.socialAuthService.signOut()
      .then(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('googleToken');
      });
  }
}
