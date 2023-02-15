import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable()

export class RequestsService {

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService) { }

  get() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get("https://app-logeate-default-rtdb.firebaseio.com/users.json?auth=" + token);
  };
}
