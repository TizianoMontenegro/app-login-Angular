import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAoaEWR2W7OfXtEgXwv1Y2MNcg51sUuBPk",
      authDomain: "app-logeate.firebaseapp.com"
    });
  }

  isUserLoged() {
    return this.loginService.isUserLoged();
  };

  logOut() {
    this.loginService.logOut();
  };
}
