import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule, OidcSecurityService, OidcConfigService } from 'angular-auth-oidc-client';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/component/toolbar/toolbar.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { IntroMenuComponent } from './intro-menu/intro-menu.component';
import { EnvironmentService } from './shared/service/environment.service';
import { ApiService } from './shared/service/api.service';
import { VersionService } from './shared/service/version.service';
import { LibraryModule } from './library/module/library.module';
import { LoginComponent } from './shared/component/login/login.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LoginService } from './shared/service/login.service';
import { UserService } from './shared/service/user.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationInterceptor } from './services/authentication.interceptor';
import { RedirectComponent } from './shared/component/redirect/redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    IntroMenuComponent,
    RedirectComponent,
    LoginComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AuthModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    LibraryModule
  ],
  providers: [
    EnvironmentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    OidcSecurityService,
    OidcConfigService,
    AuthenticationService,
    ApiService,
    VersionService,
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.initialise();
  }
}

