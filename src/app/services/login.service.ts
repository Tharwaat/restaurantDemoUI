import { Injectable } from '@angular/core';
import { postLogin, postRegister } from './requests/authRequests';
import { Observable } from 'rxjs';
import { JwtLoginResponse } from '../models/JwtLoginResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login( loginRequest ): Observable<JwtLoginResponse>{
    return this.http.post<JwtLoginResponse>(postLogin, loginRequest);
  }

  register( registerRequest ){
    this.http.post(postRegister, registerRequest);
  }
}
