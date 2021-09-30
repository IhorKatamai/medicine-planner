import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
