// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// Services
import { RequestsService } from './requests.service';
import { UsersDataService } from './users-data.service';

const appRoutes : Routes = [
  {path: "", component: HomeComponent},
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
    HttpClientModule
  ],
  providers: [RequestsService, UsersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
