import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
