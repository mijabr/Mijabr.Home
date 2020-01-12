import { Component, OnInit, Input, EventEmitter, Output, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { UserService } from '../../service/user.service';
import { LoginResponse } from '../../model/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  @Output() dismiss: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('username', null) username: any;
  @ViewChild('usernameJoin', null) usernameJoin: any;

  public loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  public joinForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required]
  });

  public show = false;
  public joinMode = false;
  public loginFormSubmitted = false;
  public joinFormSubmitted = false;
  public failReason: string;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private userService: UserService
) { }

  ngOnInit() { }

  open() {
    this.onSwitchToLoginMode();
    this.show = true;
  }

  reset() {
    this.failReason = '';
    this.loginForm.reset();
    this.joinForm.reset();
    this.loginFormSubmitted = false;
    this.joinFormSubmitted = false;
  }

  @HostListener('document:keyup', ['$event'])
  closeOnEscape(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onDismiss();
    }
  }

  onDismiss() {
    this.show = false;
  }

  onLogin() {
    this.failReason = '';
    this.loginFormSubmitted = true;
    if (this.loginForm.status === 'VALID') {
      this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((response: LoginResponse) => {
        this.doLogin(response);
      });
    }
  }

  onJoin() {
    this.failReason = '';
    this.joinFormSubmitted = true;
    if (this.joinForm.value.password !== this.joinForm.value.passwordConfirm) {
      this.failReason = 'confirm password does not match';
    } else if (this.joinForm.status === 'VALID') {
      this.loginService.join(this.joinForm.value.username, this.joinForm.value.password).subscribe((response: LoginResponse) => {
        this.doLogin(response);
      });
    }
  }

  onSwitchToJoinMode() {
    this.reset();
    this.joinMode = true;
    setTimeout(() => {
      this.usernameJoin.nativeElement.focus();
    }, 100);
  }

  onSwitchToLoginMode() {
    this.reset();
    this.joinMode = false;
    setTimeout(() => {
      this.username.nativeElement.focus();
    }, 100);
  }

  private doLogin(response: LoginResponse) {
    if (response.result) {
      this.userService.emitLoginEvent(response);
      this.onDismiss();
    } else {
      this.failReason = response.reason;
    }
  }
}
