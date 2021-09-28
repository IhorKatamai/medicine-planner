import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchedulesComponent } from './schedules.component';
import { FoodSchedulesComponent } from './food-schedules/food-schedules.component';

const routes: Routes = [
  {
    path: '',
    component: SchedulesComponent
  },
  {
    path: 'food-schedules/:id',
    component: FoodSchedulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulesRoutingModule { }
