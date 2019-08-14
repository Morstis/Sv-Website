import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_service/user.service';
import { User } from 'src/app/_interface/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'mors-admin-show-user',
  templateUrl: './admin-show-user.component.html',
  styleUrls: ['./admin-show-user.component.scss']
})
export class AdminShowUserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  user: User;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.getOneUser(params.id).subscribe(user => {
        this.user = user;
      });
    });
  }
}
