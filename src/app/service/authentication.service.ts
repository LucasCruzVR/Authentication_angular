import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserLogin } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8080/auth/login';
  private helper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  authenticate(user: any) {
    return this.http.post<UserLogin>(this.apiUrl, user, {
      observe: 'response',
    });
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    console.log(this.helper.isTokenExpired(token))
    return !this.helper.isTokenExpired(token);
  }
}
