import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';
import { SchedulesService } from './schedules.service';
import { FoodSchedulesComponent } from './food-schedules/food-schedules.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SchedulesComponent,
    FoodSchedulesComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatTooltipModule,
    SharedModule
  ],
  providers: [SchedulesService],
})
export class SchedulesModule { }
