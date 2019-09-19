import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';
import { User } from 'src/app/_interface/user';
import { ApiResponse } from 'src/app/_interface/api-response';

@Component({
  selector: 'mors-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService) {}

  // equals user: User = new User(); if User would be a class
  user: User = {} as User;
  error: string;

  ngOnInit() {}

  saveTask(user) {
    this.user.firstName = user.vorname;
    this.user.name = user.nachname;
    this.user.klasse = user.klasse.toUpperCase();
    this.user.email = user.email;
    this.user.password = user.passwort;

    this.auth.register(this.user).subscribe(response => {
      const res: ApiResponse = response;

      if (res.res === true) {
        console.log('%cUser gespeichert!', 'color: green');
        window.location.href = 'https://hag-iserv.de/iserv/mail';
      }
      if (res.res === false) {
        console.log('%c' + res.error, 'color: red');

        if (res.error === 'email already in use') {
          this.error = 'Deine E-mail Adresse wird bereits verwendet!';
        } else {
          this.error = 'Die angegebene E-mail Adresse existiert nicht!';
        }
      }
    });
  }
}
