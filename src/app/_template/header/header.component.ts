import { Component, OnInit } from '@angular/core';
import { HeaderList } from 'src/app/_class/header-list';

@Component({
  selector: 'mors-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  list: HeaderList[] = [
    new HeaderList('Aktuelles', 'aktuelles_waypoint'),
    new HeaderList('Projekte', 'projekte_waypoint'),
    new HeaderList('Nachhilfe', 'nachhilfe_waypoint'),
    new HeaderList('Über uns', '')
  ];

  ngOnInit() {
    if (/Edge/.test(navigator.userAgent)) {
      alert('Do not use Edge!');
    }
    console.log(this.list);
  }
}
