import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Schedule } from '../../core/models/schedule.model';

@Injectable()
export class SchedulesService {

  constructor(private http: HttpClient) {}

  getAll(name: string = ''): Promise<Schedule[]> {
    return this.http.get<Schedule[]>(`${environment.apiUrl}/MedicineSchedules`, { params: { name } })
      .toPromise();
  }
}
