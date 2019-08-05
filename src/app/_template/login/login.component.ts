import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/_service/login.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/_class/user';
import { Router } from '@angular/router';

@Component({
  selector: 'mors-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private login: LoginService) {}

  check = 1;
  users: User[];
  error = false;
  @ViewChild('input', { static: false }) input: ElementRef;

  forward(input) {
    // Email input
    if (this.check === 1) {
      this.login.getUserServer(input).subscribe(users => {
        if (users.length < 1) {
          this.error = true;
        } else {
          this.users = users;
          this.input.nativeElement.value = '';
          this.error = false;
          this.check = 2;
        }
      });
    }

    // Passwort input
    if (this.check === 2) {
      this.users.forEach(user => {
        if (user.password === input) {
          this.login.setUserLocal(user);
          this.router.navigateByUrl('/start');
        }
      });
      this.error = true;
    }
  }
  backward() {
    this.input.nativeElement.value = '';
    this.error = false;
    this.check = 1;
  }
  ngOnInit() {}
}
