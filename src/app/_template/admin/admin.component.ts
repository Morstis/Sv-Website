import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';
import { User } from 'src/app/_interface/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

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
      if (params.id !== undefined) {
        this.userId = params.id;
        this.popup = true;
      }
    });
  }

  users$: Observable<User[]>;
  filteredUsers$: Observable<User[]>;
  userId: number;
  popup = false;

  ngOnInit() {
    this.userService.getAllUsers().subscribe();

    this.users$ = this.userService.users$;
  }

  navigate(id) {
    this.location.go('admin/' + id);
    this.userId = id;
    this.popup = true;
  }

  closePopup() {
    this.popup = false;
    this.location.go('admin/');
  }
  onKeyUp(value) {
    this.filteredUsers$ = this.users$.pipe(
      debounceTime(400),
      map(x => {
        return x.filter(
          user => user.email.toLowerCase().indexOf(value.toLowerCase()) > -1
        );
      })
    );
  }
  getUsers() {
    if (this.filteredUsers$ !== undefined) {
      return this.filteredUsers$;
    }
    return this.users$;
  }
}
