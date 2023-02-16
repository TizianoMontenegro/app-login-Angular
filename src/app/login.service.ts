import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
// import "firebase/compat/auth";

@Injectable()

export class LoginService {
  token!: string;

  constructor(private router: Router) { }

  logIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
      firebase.auth().currentUser?.getIdToken().then(token => {
        this.token = token;
        this.router.navigate(["/"])
      });
    });
  };

  getIdToken() {
    return this.token;
  };

  isUserLoged() {
    return this.token;
  }

  logOut() {
    firebase.auth().signOut().then(()=>{
      this.token = "";
      this.router.navigate(["/"]);
    });
  };
}
