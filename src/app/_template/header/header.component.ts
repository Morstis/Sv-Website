import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mors-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  list: headerList[] = [
    new headerList('Aktuelles', 'aktuelles_waypoint'),
    new headerList('Projekte', 'projekte_waypoint'),
    new headerList('Nachhilfe', 'nachhilfe_waypoint'),
    new headerList('Über uns', '')
  ];

  ngOnInit() {
    if (/Edge/.test(navigator.userAgent)) {
      alert('Do not use Edge!');
    }
    console.log(this.list);
  }
}

class headerList {
  val: string;
  linkTo: string;

  constructor(val: string, link: string) {
    this.val = val;
    this.linkTo = link;
  }
}
