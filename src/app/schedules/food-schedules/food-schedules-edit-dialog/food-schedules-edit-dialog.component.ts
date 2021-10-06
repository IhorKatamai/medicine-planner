import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  timeOfFirstMeal: string;
  numberOfMeals: number;
}

@Component({
  selector: 'app-food-schedules-edit-dialog',
  templateUrl: './food-schedules-edit-dialog.component.html',
  styleUrls: ['./food-schedules-edit-dialog.component.scss']
})
export class FoodSchedulesEditDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
