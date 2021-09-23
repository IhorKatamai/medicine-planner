import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SchedulesComponent} from "./schedules.component";

const routes: Routes = [
  {
    path: '',
    component: SchedulesComponent
  },
  {
    path: 'create',
    component: SchedulesComponent
  },
  {
    path: ':id/edit',
    component: SchedulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulesRoutingModule { }
