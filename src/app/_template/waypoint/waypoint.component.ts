import { Component, OnInit, Inject } from '@angular/core';
import { WaypointDiv } from 'src/app/_interface/waypoint-div';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';
import { GetUiDataService } from 'src/app/_service/get-ui-data.service';

@Component({
  selector: 'mors-waypoint',
  templateUrl: './waypoint.component.html',
  styleUrls: ['./waypoint.component.scss']
})
export class WaypointComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private getUiData: GetUiDataService
  ) {}

  divs: WaypointDiv[] = [];
  ungrade = false;
  editable: any = false;

  ngOnInit() {
    this.getUiData.getWaypointByURL(this.router.url).subscribe(res => {
      this.divs = res.sort((a, b) => a.place - b.place);
    });
    // this.divs = this.routerCheck.checkWaypoint(this.router.url);
    if (this.divs.length % 2 !== 0) {
      // ungrade
      this.ungrade = true;
    }
    if (
      this.auth.getUser().role === 'SV' ||
      this.auth.getUser().role === 'ADMIN'
    ) {
      this.editable = true;
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
