import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';
import { User } from 'src/app/_interface/user';
import { ApiResponse } from 'src/app/_interface/api-response';

@Component({
  selector: 'mors-admin-show-user',
  templateUrl: './admin-show-user.component.html',
  styleUrls: ['./admin-show-user.component.scss']
})
export class AdminShowUserComponent implements OnInit {
  constructor(private userService: UserService) {}

  @Input() id: number;
  @Output() closed = new EventEmitter();
  user: User = {} as User;
  ok: boolean;

  ngOnInit() {
    this.userService.getOneUser(this.id).subscribe(user => {
      this.user = user;
    });
  }
  emitCloseToParent(): void {
    this.closed.emit(true);
  }

  updateUser(): void {
    this.userService.editUser(this.id, this.user).subscribe(response => {
      const res: ApiResponse = response;
      if (res) {
        this.ok = true;
      }
    });
  }
}
