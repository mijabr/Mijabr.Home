import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/component/toolbar/toolbar.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { IntroMenuComponent } from './intro-menu/intro-menu.component';
import { EnvironmentService } from './shared/service/environment.service';
import { ApiService } from './shared/service/api.service';
import { VersionService } from './shared/service/version.service';
import { LibraryModule } from './library/module/library.module';
import { LoginComponent } from './shared/component/login/login.component';
import { LoginService } from './shared/service/login.service';
import { UserService } from './shared/service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    IntroMenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    LibraryModule
  ],
  providers: [
    EnvironmentService,
    ApiService,
    VersionService,
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
