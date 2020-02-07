import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule, OidcSecurityService, OidcConfigService } from 'angular-auth-oidc-client';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroMenuComponent } from './components/intro-menu/intro-menu.component';
import { EnvironmentService } from './services/environment.service';
import { ApiService } from './services/api.service';
import { VersionService } from './services/version.service';
import { LibraryModule } from './library/module/library.module';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationInterceptor } from './services/authentication.interceptor';
import { RedirectComponent } from './components/redirect/redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    IntroMenuComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule.forRoot(),
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
    VersionService
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
