import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {

  @Input() title;
  @ViewChild('login', null) login: LoginComponent;

  username = '';
  loggedIn = false;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.username = this.userService.getUser().username;
    this.userService.loginEvent().subscribe((response: string) => {
      this.username = response;
    });
    this.authenticationService.loggedIn.subscribe(r =>
        this.loggedIn = r
      );
  }

  onClickAccount() {
    this.login.open();
  }
}
