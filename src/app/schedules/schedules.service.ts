import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class SchedulesService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<any> {
    return this.http.get<any>(`${environment.apiUrl}/MedicineSchedules`)
      .toPromise();
  }
}
