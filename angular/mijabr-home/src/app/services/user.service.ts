import { Injectable, EventEmitter } from '@angular/core';
import { LoginResponse } from '../model/login-response';
import { User } from '../model/user';

@Injectable()
export class UserService {

  private _loginEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  loginEvent() {
    return this._loginEvent;
  }

  emitLoginEvent(response: LoginResponse) {
    this.saveUser(response);
    this._loginEvent.emit(response.username);
  }

  getUser(): User {
    return this.loadUser();
  }

  private saveUser(response: LoginResponse) {
    const user = new User();
    user.username = response.username;
    user.token = response.token;
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  private loadUser(): User {
    const userJson = sessionStorage.getItem('user');
    if (userJson === undefined || userJson === null) {
      return this.guestUser();
    } else {
      return JSON.parse(userJson);
    }
  }

  private guestUser(): User {
    const user = new User();
    user.username = 'Guest';
    return user;
  }
}
