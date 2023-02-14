import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';
import { User } from './user.module';

@Injectable()

export class UsersDataService {
  users!: User[];

  constructor(private requestsService: RequestsService) {}

  getUsers() {
    return this.requestsService.get()
  }
  setUsers(users: User[]) {
    this.users = users
  }
}
