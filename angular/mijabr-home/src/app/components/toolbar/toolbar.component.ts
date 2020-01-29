import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {

  @Input() title: string;

  username = '';
  isLoggedin = false;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.getUserData().subscribe(userData => {
      this.username = userData.name;
    });

    this.authenticationService.loggedIn.subscribe(isLoggedin => {
      this.isLoggedin = isLoggedin
    });
  }

  onClickAccount() {
    this.authenticationService.logIn();
  }
}
