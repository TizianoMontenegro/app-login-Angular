import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class RequestsService {

  constructor(private httpClient: HttpClient) { }
  get() {
    return this.httpClient.get("https://app-logeate-default-rtdb.firebaseio.com/users.json")
  }
}
