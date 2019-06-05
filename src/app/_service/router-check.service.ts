import { Injectable } from '@angular/core';
import { WaypointDiv } from '../_class/waypoint-div';

@Injectable({
  providedIn: 'root'
})
export class RouterCheckService {
  constructor() {}

  //TODO: Put this JSON to a server and make it editable
  data = {
    '/start': {
      Beratungslehrer: {
        linkTo: 'Beratungslehrer',
        shownTitel: 'Beratungslehrer',
        image: 'IMG_7852.JPG'
      },
      'Umwelt-AG': {
        linkTo: 'Umwelt-AG',
        shownTitel: 'Umwelt AG',
        image: 'IMG_7852.JPG'
      }
    },
    '/projekte': {
      'Pausen-ausleihe': {
        linkTo: 'Pausen-Ausleihe',
        shownTitel: 'Pausenausleihe',
        image: 'IMG_7852.JPG'
      },
      'Umwelt-AG': {
        linkTo: 'Umwelt-AG',
        shownTitel: 'Umwelt AG',
        image: 'IMG_7852.JPG'
      },
      'Umwelt-AG2': {
        linkTo: 'Umwelt-AG',
        shownTitel: 'Umwelt AG',
        image: 'IMG_7852.JPG'
      }
    }
  };

  checkWaypoint(router) {
    const divs: WaypointDiv[] = [];
    // let Waypoint_content = json_data;

    Object.keys(this.data[router]).forEach(key => {
      divs.push(
        new WaypointDiv(
          this.data[router][key].linkTo,
          this.data[router][key].shownTitel,
          this.data[router][key].image
        )
      );
    });

    return divs;
  }
}
