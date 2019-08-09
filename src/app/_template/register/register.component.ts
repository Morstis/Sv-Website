import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_service/login.service';
import { User } from 'src/app/_class/user';

@Component({
  selector: 'mors-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  user: User;

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
    this.user.class = user.klasse.toUpperCase();
    this.user.email = user.email;
    this.user.password = user.pw1;
    this.user.uid = this.create_UUID();

    this.loginService.getUserServer(user.email).subscribe(users => {
      if (users.length === 0) {
        this.loginService.getUserServer('').subscribe(AllUsers => {
          this.user.id = AllUsers.length++;
          this.register();
        });
      } else {
        console.log('%cuser exists', 'color: red');
      }
    });
  }
  register() {
    this.loginService.register(this.user).subscribe(user => {
      // console.log(user);

      console.log('%cUser gespeichert!', 'color: green');
      this.loginService
        .mail(this.user.email, this.user.uid)
        .subscribe(request => {
          console.log(request);
        });
    });
  }
  create_UUID() {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      // tslint:disable-next-line: no-bitwise
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);

      // tslint:disable-next-line: no-bitwise
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }
}
