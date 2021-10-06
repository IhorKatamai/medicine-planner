import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';
import { GuestGuard } from './shared/guards/guest.guard';
import { ProfileGuard } from './shared/guards/profile.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./schedules/schedules.module').then(m => m.SchedulesModule),
    canActivate: [AuthGuard, ProfileGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [GuestGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
