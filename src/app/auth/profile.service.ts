import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { Profile } from '../../core/models/profile.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile$ = new BehaviorSubject<Profile | null>(null);

  constructor(private http: HttpClient) {}

  getMe() {
    return this.http.get<Profile>(`${environment.apiUrl}/Auth/Me`)
      .toPromise().then(response => this.profile$.next(response));
  }

  removeProfile() {
    this.profile$.next(null);
  }
}
