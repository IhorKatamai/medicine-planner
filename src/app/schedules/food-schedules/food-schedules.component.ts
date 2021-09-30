import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

import { FoodSchedule } from '../../../core/models/food-schedule.model';
import { SchedulesService } from '../schedules.service';
import { formatDate } from '../../shared/utils/date';

@Component({
  selector: 'app-food-schedules',
  templateUrl: './food-schedules.component.html',
  styleUrls: ['./food-schedules.component.scss']
})
export class FoodSchedulesComponent implements OnInit, AfterViewInit {

  isLoading: boolean = false;
  pickedDate?: Date | undefined;

  columnsToDisplay: string[] = ['number', 'date', 'time-of-first-meal', 'number-of-meals', 'operations'];
  dataSource = new MatTableDataSource<FoodSchedule>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private schedulesService: SchedulesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.schedulesService.getFoodSchedulesForMedicineSchedule(this.route.snapshot.params.id)
      .then(response => this.onData(response));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onData(response: any[]) {
    this.dataSource.data = response;
  }

  searchFoodSchedules(date: Date | undefined) {
    if (date) {
      this.schedulesService.searchFoodSchedulesForMedicineSchedule(this.route.snapshot.params.id, formatDate(date))
        .then(response => this.onData(response));
    } else {
      this.schedulesService.getFoodSchedulesForMedicineSchedule(this.route.snapshot.params.id)
        .then(response => this.onData(response));
    }
  }

  onSetDefault(foodScheduleId: string) {
    this.schedulesService.setAsDefaultFoodSchedule(foodScheduleId)
      .then(() => console.log('Ready'));
  }

}
