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

  forms: object[] = [
    { name: 'vorname' },
    { name: 'nachname', hr: true },
    { name: 'klasse' },
    { name: 'email' },
    { name: 'pw1', title: 'Passwort (nicht Iserv)' },
    { name: 'pw2', title: 'Passwort wiederholen', hr: true }
  ];
  ngOnInit() {}

  saveTask(user) {
    this.user.firstName = user.vorname;
    this.user.name = user.nachname;
    this.user.klasse = user.klasse.toUpperCase();
    this.user.email = user.email;
    this.user.password = user.pw1;

    this.auth.register(this.user).subscribe(response => {
      const res: ApiResponse = response;

      if (res.res === true) {
        console.log('%cUser gespeichert!', 'color: green');
      }
      if (res.res === false) {
        // TODO visible error
        console.log('%c' + res.error, 'color: red');
      }
    });
  }
}
