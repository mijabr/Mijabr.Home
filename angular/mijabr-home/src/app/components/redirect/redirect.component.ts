import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  public authenticating = true;
  public message = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    console.log("RedirectComponent::ngOnInit")
    this.authenticationService.completeAuthentication().subscribe(authState => {
      this.authenticating = false;
      if (authState === 'forbidden') {
        console.log(`completeAuthentication->forbidden`);
        this.message = 'Forbidden';
      } else if (authState === 'unauthorized') {
        console.log(`completeAuthentication->unauthorized`);
        this.message = 'Unauthorized';
      } else if (authState === 'authorized') {
        console.log(`completeAuthentication->authorized`);
        this.router.navigate(['/']);
      }
    });
  }

}
