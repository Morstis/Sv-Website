import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mors-nachhilfe-geben',
  templateUrl: './nachhilfe-geben.component.html',
  styleUrls: ['./nachhilfe-geben.component.scss']
})
export class NachhilfeGebenComponent implements OnInit {
  constructor() {}
  faecher: string[] = [
    'Biologie',
    'Chemie',
    'Englisch',
    'Erdkunde',
    'Französisch',
    'Informatik',
    'Latein',
    'Mathe',
    'Philosophie',
    'Politik',
    'Physik',
    'Spanisch'
  ];
  activeFaecher: string[] = [];

  ngOnInit() {}
  save(input) {
    console.log(input);
  }
  setFach(fach) {
    if (this.activeFaecher.includes(fach)) {
      this.activeFaecher = this.activeFaecher.filter(item => {
        return item !== fach;
      });
    } else {
      this.activeFaecher.push(fach);
    }
  }
}
