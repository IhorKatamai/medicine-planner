import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private authService: AuthService,
  ) {}

  signInWithGoogle(): Promise<boolean | void> {
    this.isLoading = true;

    return this.authService.signIn()
      .then(() => {
        this._snackBar.open('Successfully logged in', 'Ok');
        return this.router.navigate(['/']);
      })
      .catch((error) => {
        this._snackBar.open(error.error.message, 'Ok');
      })
      .finally(() => {
        this.isLoading = false
      });
  }
}
