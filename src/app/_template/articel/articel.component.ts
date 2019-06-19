import { Component, OnInit } from '@angular/core';
import { Articel } from 'src/app/_class/articel';
import { RouterCheckService } from 'src/app/_service/router-check.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_service/user.service';
import { Theme } from 'src/app/_class/theme';
import { KeksService } from 'src/app/_service/keks.service';

@Component({
  selector: 'mors-articel',
  templateUrl: './articel.component.html',
  styleUrls: ['./articel.component.scss']
})
export class ArticelComponent implements OnInit {
  constructor(
    private routerCheck: RouterCheckService,
    private router: Router,
    private userService: UserService,
    private keks: KeksService
  ) {}

  theme: Theme = new Theme();
  articel: Articel;

  ngOnInit() {
    this.articel = this.routerCheck.checkArticel(this.router.url);

    // TODO: remove
    try {
      this.keks.setKeks('theme', 'white');
    } catch (e) {
      console.error(e);
    }

    // TODO: make it fancier e.g. config in ein Json auslagern or using material design
    if (this.userService.theme() === 'dark') {
      this.theme.bgColor = '#16161d';
      this.theme.color = 'white';
    } else {
      this.theme.bgColor = 'white';
      this.theme.color = 'black';
    }
  }
}
