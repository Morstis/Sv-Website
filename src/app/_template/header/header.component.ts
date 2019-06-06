import { Component, OnInit } from '@angular/core';
import { HeaderList } from 'src/app/_class/header-list';
import { UserService } from 'src/app/_service/user.service';
import { Theme } from 'src/app/_class/theme';

@Component({
  selector: 'mors-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService) {}

  theme: Theme = new Theme();

  // TODO: Auslagern
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

    // TODO: schöner machen
    if (this.userService.theme() === 'dark') {
      this.theme.bgColor = 'black';
    } else {
      this.theme.bgColor = 'rgb(25, 25, 25)';
    }
  }
}
