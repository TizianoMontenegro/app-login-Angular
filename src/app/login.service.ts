import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { CookieService } from 'ngx-cookie-service';

@Injectable()

export class LoginService {
  token!: string;

  constructor(
    private router: Router,
    private cookieService: CookieService) { }

  logIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
      firebase.auth().currentUser?.getIdToken().then(token => {
        this.token = token;
        this.cookieService.set("token",this.token);
        this.router.navigate(["/"]);
      });
    });
  };

  getIdToken() {
    // return this.token;
    return this.cookieService.get("token");
  };

  isUserLoged() {
    // return this.token;
    return this.cookieService.get("token");
  }

  logOut() {
    firebase.auth().signOut().then(()=>{
      this.token = "";
      this.cookieService.set("token",this.token);
      this.router.navigate(["/"]);
      window.location.reload();
    });
  };
}
