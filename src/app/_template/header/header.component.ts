import { Component, OnInit } from '@angular/core';
import { HeaderList } from 'src/app/_class/header-list';
import { UserService } from 'src/app/_service/user.service';
import { Theme } from 'src/app/_class/theme';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'mors-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService, private auth: AuthService) {}

  theme: Theme = new Theme();

  // TODO: Auslagern
  list: HeaderList[] = [
    new HeaderList('Aktuelles', 'start'),
    new HeaderList('Projekte', 'projekte'),
    new HeaderList('Nachhilfe', 'nachhilfe'),
    new HeaderList('Über uns', '')
  ];

  ngOnInit() {
    if (this.auth.getUser().role === 'ADMIN') {
      this.list.push(new HeaderList('Admin', '/admin'));
    }

    // TODO: schöner machen
    if (this.userService.theme() === 'dark') {
      this.theme.bgColor = 'black';
    } else {
      this.theme.bgColor = '#191919';
    }
  }
}
