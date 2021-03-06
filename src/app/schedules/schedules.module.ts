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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';
import { SchedulesService } from './schedules.service';
import { FoodSchedulesComponent } from './food-schedules/food-schedules.component';
import { FoodSchedulesService } from './food-schedules/food-schedules.service';
import { SharedModule } from '../shared/shared.module';
import { FoodSchedulesEditDialogComponent } from './food-schedules/food-schedules-edit-dialog/food-schedules-edit-dialog.component';


@NgModule({
  declarations: [
    SchedulesComponent,
    FoodSchedulesComponent,
    FoodSchedulesEditDialogComponent
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
    MatSnackBarModule,
    SharedModule,
    MatDialogModule
  ],
  providers: [SchedulesService, FoodSchedulesService],
})
export class SchedulesModule { }
