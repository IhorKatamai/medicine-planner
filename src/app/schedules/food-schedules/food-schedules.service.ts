import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { FoodSchedule } from '../../../core/models/food-schedule.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class FoodSchedulesService {

  constructor(private http: HttpClient) {}

  getAll(medicineScheduleId: string): Promise<FoodSchedule[]> {
    return this.http.get<FoodSchedule[]>(`${environment.apiUrl}/MedicineSchedules/GetFoodSchedules/${medicineScheduleId}`)
      .toPromise();
  }

  search(medicineScheduleId: string, date: string): Promise<FoodSchedule[]> {
    return this.http.get<FoodSchedule>(`${environment.apiUrl}/MedicineSchedules/${medicineScheduleId}/SearchFoodSchedule`, {
      params: { date }
    }).pipe(map(response  => [response].filter(Boolean)))
      .toPromise();
  }

  edit(foodScheduleId: string, payload: Partial<FoodSchedule>): Promise<void> {
    return this.http.put<void>(`${environment.apiUrl}/MedicineSchedules/FoodSchedules/${foodScheduleId}`, payload)
      .toPromise();
  }

  setAsDefault(foodScheduleId: string): Promise<void> {
    return this.http.post<void>(`${environment.apiUrl}/MedicineSchedules/FoodSchedules/MakeDefault/${foodScheduleId}`, {})
      .toPromise();
  }

  delete(foodScheduleId: string): Promise<void> {
    return this.http.delete<void>(`${environment.apiUrl}/MedicineSchedules/FoodSchedules/${foodScheduleId}`)
      .toPromise();
  }
}
