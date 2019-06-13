import { Injectable } from '@angular/core';
import { WaypointDiv } from '../_class/waypoint-div';
import { Articel } from '../_class/articel';

@Injectable({
  providedIn: 'root'
})
export class RouterCheckService {
  constructor() {}

  checkArticel(router) {
    // TODO: Put this JSON to a server and make it editable
    const data = {
      '/Umwelt-AG': {
        titel: 'Umwelt AG',
        text: `Das Thema Umwelt an unserer Schule beschäftigt uns schon seit längerer Zeit.
          Gerade bei einer so großen Institution wie einer Schule kann man schließlich viel
          für die Umwelt tun. Daher gab es die Idee, eine Umwelt-AG zu gründen. Diese könnte
          zum Beispiel mit der Schulgarten-AG zusammenarbeiten, aber selbstverständlich auch
          eigene Projekte hervorbringen. Daher sind wir gerade mit den Lehrern und einigen
          Fachruppen im Gespräch.
          Seid auf Neuigkeiten gespannt!`,
        autor: 'Rieke Duhm, Hannahlyse/SV',
        image: 'IMG_7852.JPG'
      },
      '/Pausen-Ausleihe': {
        titel: 'Pausen Ausleihe',
        text: `Das Thema Umwelt an unserer Schule beschäftigt uns schon seit längerer Zeit.
          Gerade bei einer so großen Institution wie einer Schule kann man schließlich viel
          für die Umwelt tun. Daher gab es die Idee, eine Umwelt-AG zu gründen. Diese könnte
          zum Beispiel mit der Schulgarten-AG zusammenarbeiten, aber selbstverständlich auch
          eigene Projekte hervorbringen. Daher sind wir gerade mit den Lehrern und einigen
          Fachruppen im Gespräch.
          Seid auf Neuigkeiten gespannt!`,
        autor: 'Rieke Duhm, Hannahlyse/SV',
        image: 'IMG_7852.JPG'
      }
    };

    const articel = new Articel(
      data[router].titel,
      data[router].text,
      data[router].autor,
      data[router].image
    );

    return articel;
  }

  // ------------------Waypoint data---------------------
  checkWaypoint(router) {
    // TODO: Put this JSON to a server and make it editable
    const data = {
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

    const divs: WaypointDiv[] = [];
    // let Waypoint_content = json_data;

    Object.keys(data[router]).forEach(key => {
      divs.push(
        new WaypointDiv(
          data[router][key].linkTo,
          data[router][key].shownTitel,
          data[router][key].image
        )
      );
    });

    return divs;
  }
}
