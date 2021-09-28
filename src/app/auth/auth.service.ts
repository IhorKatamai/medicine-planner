import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { AccessTokenResponse } from '../../core/models/access-token-response.model';
import { UserResponse } from '../../core/models/user-response.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken({idToken, googleToken}: any): Promise<void> {
    return this.http.post<AccessTokenResponse>(`${environment.apiUrl}/Auth/Google`, {idToken})
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
}
