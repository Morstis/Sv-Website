import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';
import { User } from 'src/app/_interface/user';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/_interface/api-response';

@Component({
  selector: 'mors-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  check = 1;
  users: User[];
  error = false;
  errorMessage: string;
  email: string;
  @ViewChild('input', { static: false }) input: ElementRef;

  ngOnInit() {}
  forward(input) {
    // Email input
    if (this.check === 1) {
      this.auth.login(input).subscribe(response => {
        const res: ApiResponse = response;
        if (res.res === true) {
          this.email = input;
          this.input.nativeElement.value = '';
          this.error = false;
          this.check = 2;
        } else {
          this.error = true;
          if (res.error === 'user not found') {
            this.errorMessage = 'Deine Email Addresse ist nicht vorhanden!';
          } else {
            this.errorMessage = 'Bitte verifiziere dich zuerst!';
          }
        }
      });
    }

    // Passwort input
    if (this.check === 2) {
      this.auth.login(this.email, input).subscribe(response => {
        const res: ApiResponse = response;

        if (res.res === true) {
          this.auth.setJWT(res.token);
          window.location.href = '/start'; // Realod to get JWT's ready
        }

        if (res.res === false) {
          console.log('%c' + res.error, 'color: red');
          this.error = true;
          this.errorMessage = 'Dein passwort ist falsch!';
          // Die unmögliche Möglichkeit. Die Email ist beim zweiten Request falsch.
          if (res.error !== 'wrong password') {
            console.log(res.description);
          }
        }
      });
    }
  }
  backward() {
    this.input.nativeElement.value = '';
    this.error = false;
    this.check = 1;
  }
}