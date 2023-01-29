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
  error: String = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    console.log(localStorage.getItem('token'))
    if(this.authenticationService.loggedIn()) {
      this.router.navigate(['authenticated']);
    }
  }

  ngOnInit() {
  }

  login() {
    try {
      localStorage.removeItem('token');
      this.authenticationService.authenticate(this.user).subscribe(
        (response) => {
          if (response.status == 200) {
            this.response = { ...response.body };
            localStorage.setItem(
              'token',
              Object(this.response)['token']
            );
            this.router.navigate(['authenticated']);
          } else {
            this.error = 'Email or Password are incorrect!';
          }
        },
        () => {
          this.error = 'Email or Password are incorrect!';
        }
      );
    } catch (error) {
      this.error = 'Try again later.';
    }
  }
}
