import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';
import { User } from 'src/app/_interface/user';

@Component({
  selector: 'mors-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private userService: UserService) {}

  users: User[];

  ngOnInit() {
    this.userService.getAllUsers().subscribe(user => {
      this.users = user;
    });
  }
}
