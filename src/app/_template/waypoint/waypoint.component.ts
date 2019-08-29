import { Component, OnInit, Inject } from '@angular/core';
import { WaypointDiv } from 'src/app/_class/waypoint-div';
import { RouterCheckService } from 'src/app/_service/router-check.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mors-waypoint',
  templateUrl: './waypoint.component.html',
  styleUrls: ['./waypoint.component.scss']
})
export class WaypointComponent implements OnInit {
  constructor(
    private routerCheck: RouterCheckService,
    private router: Router
  ) {}

  divs: WaypointDiv[] = [];
  ungrade = false;

  ngOnInit() {
    this.divs = this.routerCheck.checkWaypoint(this.router.url);
    if (this.divs.length % 2 !== 0) {
      // ungrade
      this.ungrade = true;
    }
  }
  calcWidth(last) {
    if (this.ungrade) {
      if (last) {
        return '100%';
      }
    }
    return '50%';
  }
  calcHeight(last) {
    if (this.ungrade) {
      if (last) {
        return (
          100 / Math.round(this.divs.length / 2) -
          100 / Math.round(this.divs.length / 2) / 1.6180339887 +
          '%'
        );
      }
      // Don't ask it works...
      return (
        100 / Math.round(this.divs.length / 2) +
        100 /
          Math.round(this.divs.length / 2) /
          1.6180339887 /
          (Math.round(this.divs.length / 2) - 1) +
        '%'
      );
    }

    return 100 / (this.divs.length / 2) + '%';
  }
}
