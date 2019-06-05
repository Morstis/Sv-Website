import { Component, OnInit } from '@angular/core';
import { HeaderList } from 'src/app/_class/header-list';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'mors-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService) {}

  // TODO: create a theme class
  theme: any = { bg_color: '', color: '' };

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
    if (this.userService.theme() === 'dark') {
      this.theme.bg_color = 'black';
    } else {
      this.theme.bg_color = 'rgb(25, 25, 25)';
    }
  }
}
