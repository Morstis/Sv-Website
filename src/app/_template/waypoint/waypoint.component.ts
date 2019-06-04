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
    new WaypointDiv('box1', 'Beratungslehrer', 'Beratungslehrer'),
    new WaypointDiv('box2', 'Umwelt-AG', 'Umwelt AG'),
    new WaypointDiv('box1', 'Beratungslehrer', 'Beratungslehrer'),
    new WaypointDiv('box2', 'Umwelt-AG', 'Umwelt AG'),
    new WaypointDiv('box1', 'Beratungslehrer', 'Beratungslehrer'),
    new WaypointDiv('box2', 'Umwelt-AG', 'Umwelt AG')
  ];

  padding = '';

  ngOnInit() {
    if (this.divs.length % 2 === 0) {
      //grade
      this.padding = `calc(100% / ${this.divs.length}) 0 calc(100% / ${
        this.divs.length
      }) 0`;
    } else {
      //ungrade
    }
  }
}
