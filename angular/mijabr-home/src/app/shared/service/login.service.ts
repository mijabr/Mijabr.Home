import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { LoginResponse } from '../model/login-response';
import { UserCredentials } from '../model/user-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private apiService: ApiService
  ) { }

  login(username: string, password: string): Observable<LoginResponse> {
    const userCredentials = new UserCredentials();
    userCredentials.username = username;
    userCredentials.password = password;
    return this.apiService.post('api/login/login', userCredentials);
  }

  join(username: string, password: string): Observable<LoginResponse> {
    const userCredentials = new UserCredentials();
    userCredentials.username = username;
    userCredentials.password = password;
    return this.apiService.post('api/login/join', userCredentials);
  }
}
