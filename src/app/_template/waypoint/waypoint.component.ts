import { Component, OnInit, Inject } from '@angular/core';
import { WaypointDiv } from 'src/app/_class/waypoint-div';
import { RouterCheckService } from 'src/app/_service/router-check.service';
import { Router } from '@angular/router';

@Component({
	selector: 'mors-waypoint',
	templateUrl: './waypoint.component.html',
	styleUrls: [ './waypoint.component.scss' ]
})
export class WaypointComponent implements OnInit {
	constructor(private routerCheck: RouterCheckService, private router: Router) {}

	divs: WaypointDiv[] = [];

	ngOnInit() {
		this.divs = this.routerCheck.checkWaypoint(this.router.url);
		if (this.divs.length % 2 !== 0) {
			// ungrade
			this.divs[this.divs.length - 1].grid = '1/3';
		}
	}
}
