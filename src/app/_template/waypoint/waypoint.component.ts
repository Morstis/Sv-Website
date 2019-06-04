import { Component, OnInit } from '@angular/core';
import { WaypointDiv } from 'src/app/_class/waypoint-div';

@Component({
  selector: 'mors-waypoint',
  templateUrl: './waypoint.component.html',
  styleUrls: ['./waypoint.component.scss']
})
export class WaypointComponent implements OnInit {
  constructor() {}

  divs: WaypointDiv[] = [
    new WaypointDiv('Beratungslehrer', 'Beratungslehrer', 'IMG_7852.JPG'),
    new WaypointDiv('Umwelt-AG', 'Umwelt AG', 'IMG_7852.JPG')
  ];

  padding = '';

  ngOnInit() {
    if (this.divs.length % 2 !== 0) {
      //ungrade
      this.divs[this.divs.length - 1].grid = '1/3';
    }
  }
}
