import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  user = {
    email: '',
    password: '',
  };
  response: Object = {};
  error: Object = {};

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {}

  login() {
    try {
      /*this.authenticationService
        .authenticate(this.user)
        .subscribe((response) => {
          if (response.status == 200) {
            this.response = { ...response.body };
            this.router.navigate(["/authenticated"]);
          } else {
            this.error = {...response.body}
          }
        });*/
    } catch (error) {
      Object(this.error)["message"] = 'Try again later.';
    }
  }
}
