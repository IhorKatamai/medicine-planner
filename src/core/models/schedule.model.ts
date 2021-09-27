import { Medicine } from './medicine.model';

export interface Schedule {
  id: string,
  startDate: string,
  endDate: string,
  medicine: Medicine
}
