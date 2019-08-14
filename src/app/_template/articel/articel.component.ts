import { Component, OnInit } from '@angular/core';
import { Articel } from 'src/app/_class/articel';
import { RouterCheckService } from 'src/app/_service/router-check.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_service/user.service';
import { Theme } from 'src/app/_class/theme';
import { KeksService } from 'src/app/_service/keks.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'mors-articel',
  templateUrl: './articel.component.html',
  styleUrls: ['./articel.component.scss']
})
export class ArticelComponent implements OnInit {
  constructor(
    private routerCheck: RouterCheckService,
    private route: ActivatedRoute,
    private userService: UserService,
    private keks: KeksService
  ) {}

  theme: Theme = new Theme();
  articel: Articel;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projekt = params.projekt;
      this.articel = this.routerCheck.checkArticel(projekt);
    });

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
