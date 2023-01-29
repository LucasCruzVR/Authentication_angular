import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss']
})
export class AuthenticatedComponent {

  constructor(private authenticationService: AuthenticationService) {}

  authenticated() : boolean {
    return this.authenticationService.loggedIn();
  }
}
