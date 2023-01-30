import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  user = {
    email: '',
    password: '',
  };
  response: Object = {};
  errors = { email: '', password: '' };
  serverError: String = '';
  foundError: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  signIn() {
    this.router.navigate(['sign-in']);
  }

  save() {
    try {
      this.authenticationService.signUp(this.user).subscribe(
        (response) => {
          if (response.status == 201) {
            this.router.navigate(['sign-in']);
          }
        },
        (e) => {
          this.errors = e.error;
          console.log(this.errors);
          this.foundError = true;
        }
      );
    } catch (error) {
      this.serverError =  'Try again later.' ;
      this.foundError = true;
    }
  }
}
