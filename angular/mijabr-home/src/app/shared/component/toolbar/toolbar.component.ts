import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {

  @Input() title;
  @ViewChild('login', null) login: LoginComponent;

  username = '';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.username = this.userService.getUser().username;
    this.userService.loginEvent().subscribe((response: string) => {
      this.username = response;
    });
  }

  onClickAccount() {
    this.login.open();
  }
}
