import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';
import { User } from 'src/app/_interface/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mors-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {
    this.activeRoute.params.subscribe(params => {
      this.userId = params.id;
      if (params.id !== undefined) {
        this.popup = true;
      }
    });
  }

  users$: any;
  users: User[];
  filteredUsers: User[];
  userId: number;
  popup = false;

  ngOnInit() {
    this.users$ = this.userService.getAllUsers();
    this.users$.subscribe(users => {
      this.users = users;
    });
  }

  navigate(id) {
    this.location.go('admin/' + id);
    this.userId = id;
    this.popup = true;
  }

  closePopup() {
    this.popup = false;
    this.users$.subscribe(users => {
      this.users = users;
    });
  }
  onKeyUp(value) {
    this.filteredUsers = this.users.filter(
      user => user.email.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }
  getUsers() {
    if (this.filteredUsers !== undefined) {
      return this.filteredUsers;
    }
    return this.users;
  }
}
