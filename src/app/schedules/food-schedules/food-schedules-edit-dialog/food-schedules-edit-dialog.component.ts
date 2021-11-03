import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FoodSchedule } from '../../../../core/models/food-schedule.model';
import {formatTime} from "../../../shared/utils/date";

@Component({
  selector: 'app-food-schedules-edit-dialog',
  templateUrl: './food-schedules-edit-dialog.component.html',
  styleUrls: ['./food-schedules-edit-dialog.component.scss']
})
export class FoodSchedulesEditDialogComponent {

  timeOfFirstMeal: string = formatTime(this.data.timeOfFirstMeal);
  numberOfMeals: number = this.data.numberOfMeals;

  constructor(@Inject(MAT_DIALOG_DATA) public data: FoodSchedule) {}

}
