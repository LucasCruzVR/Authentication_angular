import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss'],
})
export class AuthenticatedComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    if (!this.authenticationService.loggedIn()) {
      localStorage.removeItem('token');
      this.router.navigate(['sign-in']);
    }
  }

  ngOnInit() {}

  authenticated(): boolean {
    return this.authenticationService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in']);
  }
}
