import { Component, OnInit } from '@angular/core';
import { User } from '../user.module';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  users!: User[];

  constructor(private usersDataService: UsersDataService) {}

  ngOnInit() {
    // this.users = this.usersDataService.users;
    this.usersDataService.getUsers().subscribe(users => {
      this.users = Object.values(users);
      this.usersDataService.setUsers(this.users);
    })
  }
}
