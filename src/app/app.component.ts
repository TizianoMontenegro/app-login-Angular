import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAoaEWR2W7OfXtEgXwv1Y2MNcg51sUuBPk",
      authDomain: "app-logeate.firebaseapp.com"
    });
  }
}
