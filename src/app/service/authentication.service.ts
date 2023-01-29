import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, mapTo, Observable } from 'rxjs';
import { UserLogin } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080/auth/login';

  constructor(private http : HttpClient) { }
  
  authenticate(user : any) {
    console.log("erro")
    return this.http.post<UserLogin>(this.apiUrl, user, {observe: 'response'});
  }
}
