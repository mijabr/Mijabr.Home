import { Injectable } from '@angular/core';

import {
  OidcSecurityService,
  OpenIdConfiguration,
  AuthWellKnownEndpoints,
  OidcSecurityStorage,
  AuthorizationState
} from 'angular-auth-oidc-client';

import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter, take, switchMap, tap, flatMap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticated: Observable<boolean>;
  public authState: AuthorizationState;

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private route: ActivatedRoute
  ) { }

  private thisBaseUrl(): string {
    return location.protocol + '//' + location.host;
  }

  // private idBaseUrl(): string {
  //   return location.protocol + '//' + location.host.replace('home', 'id');
  // }

  public get loggedIn(): Observable<boolean> {
    return this.oidcSecurityService.getIsAuthorized();
  }

  public get authorizationInProgress(): Observable<boolean> {
    return this.route.queryParamMap.pipe(
      map(p => p.has('code'))
    );
  }

  public logOut() {
    this.oidcSecurityService.logoff();
  }

  public initialise() {

    const config = this.getOpenIdConfiguration();
    const authWellKnownEndpoints = this.getAuthWellKnownEndpoints();

    this.oidcSecurityService.setupModule(config, authWellKnownEndpoints);

    this.oidcSecurityService.onCheckSessionChanged.subscribe(c => this.logOut());
  }

  public completeAuthentication(): Observable<AuthorizationState> {
    return this.whenModuleIsSetup().pipe(
      tap(() => this.oidcSecurityService.authorizedCallbackWithCode(window.location.toString())),
      switchMap(() => this.oidcSecurityService.onAuthorizationResult),
      take(1),
      map(r => r.authorizationState)
    );
  }

  private whenModuleIsSetup(): Observable<void> {
    return new Observable(observer => {
      if (this.oidcSecurityService.moduleSetup) {
        observer.next(void 0);
      } else {
        this.oidcSecurityService.onModuleSetup.subscribe(() => {
          observer.next(void 0);
        });
      }
    });
  }

  private getOpenIdConfiguration(): OpenIdConfiguration {
    return {
      stsServer: this.thisBaseUrl(),
      redirect_url: this.thisBaseUrl() + '/redirect',
      client_id: 'home-client',
      response_type: 'code',
      scope: 'openid profile home', //
      // post_logout_redirect_uri: this.thisBaseUrl() + "/home",
      post_login_route: '/logout',
      log_console_warning_active: true,
      //  log_console_debug_active: true,
      max_id_token_iat_offset_allowed_in_seconds: 30,
      start_checksession: true
    };
  }

  private getAuthWellKnownEndpoints(): AuthWellKnownEndpoints {
    return {
      jwks_uri: this.thisBaseUrl() + '/.well-known/openid-configuration/jwks',
      issuer: this.thisBaseUrl(),
      authorization_endpoint: this.thisBaseUrl() + '/connect/authorize',
      token_endpoint: this.thisBaseUrl() + '/connect/token',
      userinfo_endpoint: this.thisBaseUrl() + '/connect/userinfo',
      end_session_endpoint: this.thisBaseUrl() + '/connect/endsession',
      check_session_iframe: this.thisBaseUrl() + '/connect/checksession',
      revocation_endpoint: this.thisBaseUrl() + '/connect/revocation',
      introspection_endpoint: this.thisBaseUrl() + '/connect/introspect',
    };
  }

  // private getAuthWellKnownEndpoints(): AuthWellKnownEndpoints {
  //   return {
  //     jwks_uri: this.idBaseUrl() + '/.well-known/openid-configuration/jwks',
  //     issuer: this.idBaseUrl(),
  //     authorization_endpoint: this.idBaseUrl() + '/connect/authorize',
  //     token_endpoint: this.idBaseUrl() + '/connect/token',
  //     userinfo_endpoint: this.idBaseUrl() + '/connect/userinfo',
  //     end_session_endpoint: this.idBaseUrl() + '/connect/endsession',
  //     check_session_iframe: this.idBaseUrl() + '/connect/checksession',
  //     revocation_endpoint: this.idBaseUrl() + '/connect/revocation',
  //     introspection_endpoint: this.idBaseUrl() + '/connect/introspect',
  //   };
  // }
}
