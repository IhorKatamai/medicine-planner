import { Component, OnInit } from '@angular/core';

import { SchedulesService } from './schedules.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
})
export class SchedulesComponent implements OnInit {

  searchString: string = '';

  constructor(private schedulesService: SchedulesService) { }

  ngOnInit(): void {
    this.schedulesService.getAll().then(response => {
      console.log(response);
    });
  }

}
