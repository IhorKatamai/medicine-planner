import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FoodSchedule } from '../../../core/models/food-schedule.model';
import { FoodSchedulesService } from './food-schedules.service';
import { formatDate } from '../../shared/utils/date';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { FoodSchedulesEditDialogComponent } from './food-schedules-edit-dialog/food-schedules-edit-dialog.component';

@Component({
  selector: 'app-food-schedules',
  templateUrl: './food-schedules.component.html',
  styleUrls: ['./food-schedules.component.scss']
})
export class FoodSchedulesComponent implements OnInit, AfterViewInit {

  medicineScheduleId: string = this.route.snapshot.params.id;
  isLoading: boolean = false;
  pickedDate?: Date | undefined;

  columnsToDisplay: string[] = ['number', 'date', 'time-of-first-meal', 'number-of-meals', 'operations'];
  dataSource = new MatTableDataSource<FoodSchedule>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private foodSchedulesService: FoodSchedulesService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.foodSchedulesService.getAll(this.medicineScheduleId)
      .then(response => this.onData(response))
      .finally(() => this.isLoading = false);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onData(response: any[]) {
    this.dataSource.data = response;
  }

  searchFoodSchedules(date: Date | undefined) {
    if (date) {
      this.foodSchedulesService.search(this.medicineScheduleId, formatDate(date))
        .then(response => this.onData(response));
    } else {
      this.foodSchedulesService.getAll(this.medicineScheduleId)
        .then(response => this.onData(response));
    }
  }

  onEdit(foodScheduleId: string, timeOfFirstMeal: string, numberOfMeals: string) {
    const dialogRef = this.dialog.open(FoodSchedulesEditDialogComponent, {
      data: { timeOfFirstMeal, numberOfMeals }
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  onSetDefault(foodScheduleId: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: 'Are you sure you want to make default?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isLoading = true;
        this.foodSchedulesService.setAsDefault(foodScheduleId)
          .then(() => this._snackBar.open('Successfully made default value', 'Ok'))
          .catch((error) => this._snackBar.open(error.error.message, 'Ok'))
          .finally(() => this.isLoading = false);
      }
    });
  }

  onDelete(foodScheduleId: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: 'Are you sure you want to delete?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isLoading = true;
        this.foodSchedulesService.delete(foodScheduleId)
          .then(() => this.foodSchedulesService.getAll(this.medicineScheduleId))
          .then(response => this.onData(response))
          .then(() => this._snackBar.open('Successfully deleted', 'Ok'))
          .catch((error) => this._snackBar.open(error.error.message, 'Ok'))
          .finally(() => this.isLoading = false);
      }
    });
  }
}
