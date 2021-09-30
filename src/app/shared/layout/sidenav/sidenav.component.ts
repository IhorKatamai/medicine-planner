import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  providers: [AuthService]
})
export class SidenavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    // this.authService.logout().then(() => this.router.navigate(['/auth']));
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
