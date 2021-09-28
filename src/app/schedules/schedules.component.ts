import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { SchedulesService } from './schedules.service';
import { Schedule } from '../../core/models/schedule.model';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
})
export class SchedulesComponent implements OnInit, AfterViewInit {

  searchString: string = '';

  columnsToDisplay: string[] = ['number', 'medicine-name', 'start-date', 'end-date', 'operations'];
  dataSource = new MatTableDataSource<Schedule>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private schedulesService: SchedulesService, private router: Router) { }

  ngOnInit(): void {
    this.schedulesService.getAll().then(response => {
      this.dataSource.data = response;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  searchSchedule() {
    this.schedulesService.getAll(this.searchString).then(response => {
      this.dataSource.data = response;
    });
  }

  onView(id: string) {
    return this.router.navigate([`/food-schedules/${id}`]);
  }

}
