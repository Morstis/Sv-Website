import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mors-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor() {}

  forms: object[] = [
    { name: 'vorname' },
    { name: 'nachname', hr: true },
    { name: 'klasse', check: 'klasse' },
    { name: 'email', check: 'email' },
    { name: 'pw1', title: 'Passwort (nicht Iserv)' },
    { name: 'pw2', title: 'Passwort wiederholen', hr: true }
  ];
  ngOnInit() {}

  saveTask(value) {
    console.log(value);
  }
}
