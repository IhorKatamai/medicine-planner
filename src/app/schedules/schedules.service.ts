import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Schedule } from '../../core/models/schedule.model';
import { FoodSchedule } from '../../core/models/food-schedule.model';

@Injectable()
export class SchedulesService {

  constructor(private http: HttpClient) { }

  getAll(name: string = ''): Promise<Schedule[]> {
    return this.http.get<Schedule[]>(`${environment.apiUrl}/MedicineSchedules`, { params: { name } })
      .toPromise();
  }

  getFoodSchedulesForMedicineSchedule(medicineScheduleId: string): Promise<FoodSchedule[]> {
    return this.http.get<FoodSchedule[]>(`${environment.apiUrl}/MedicineSchedules/GetFoodSchedules/${medicineScheduleId}`)
      .toPromise();
  }

  searchFoodSchedulesForMedicineSchedule(medicineScheduleId: string, date: string): Promise<FoodSchedule[]> {
    return this.http.get<FoodSchedule>(`${environment.apiUrl}/MedicineSchedules/${medicineScheduleId}/SearchFoodSchedule`, {
      params: { date }
    }).pipe(map(response  => [response].filter(Boolean)))
      .toPromise();
  }

  editFoodSchedule(foodScheduleId: string, payload: Partial<FoodSchedule>): Promise<void> {
    return this.http.put<void>(`${environment.apiUrl}/MedicineSchedules/FoodSchedules/${foodScheduleId}`, payload)
      .toPromise();
  }

  setAsDefaultFoodSchedule(foodScheduleId: string): Promise<void> {
    return this.http.post<void>(`${environment.apiUrl}/MedicineSchedules/FoodSchedules/MakeDefault/${foodScheduleId}`, {})
      .toPromise();
  }

  deleteFoodSchedule(foodScheduleId: string): Promise<void> {
    return this.http.delete<void>(`${environment.apiUrl}/MedicineSchedules/FoodSchedules/${foodScheduleId}`)
      .toPromise();
  }
}
