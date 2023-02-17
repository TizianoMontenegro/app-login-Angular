// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// Services
import { RequestsService } from './requests.service';
import { UsersDataService } from './users-data.service';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';

// Guards
import { LoginGuard } from './login/login.guard';

const appRoutes : Routes = [
  {path: "", component: HomeComponent, canActivate: [LoginGuard]},
  {path: "login", component: LoginComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RequestsService, 
    UsersDataService,
    LoginService,
    CookieService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
