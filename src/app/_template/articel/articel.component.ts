import { Component, OnInit } from '@angular/core';
import { Articel } from 'src/app/_class/articel';
import { RouterCheckService } from 'src/app/_service/router-check.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'mors-articel',
  templateUrl: './articel.component.html',
  styleUrls: ['./articel.component.scss']
})
export class ArticelComponent implements OnInit {
  constructor(
    private routerCheck: RouterCheckService,
    private router: Router,
    private userService: UserService
  ) {}

  // TODO: create a theme class
  theme: any = { bg_color: '', color: '' };
  articel: Articel;

  ngOnInit() {
    this.articel = this.routerCheck.checkArticel(this.router.url);

    // TODO: make it fancier
    if (this.userService.theme() === 'dark') {
      this.theme.bg_color = '#16161d';
      this.theme.color = 'white';
    } else {
      this.theme.bg_color = 'white';
      this.theme.color = 'black';
    }
  }
}
