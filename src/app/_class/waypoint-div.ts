export class WaypointDiv {
  linkTo: string;
  shownTitel: string;
  image: string;
  ungrade: boolean;
  load = false;

  constructor(linkTo, shownTitel, image) {
    this.linkTo = linkTo;
    this.shownTitel = shownTitel;
    this.image = 'url("../../../../assets/img/' + image + '")';
  }
}
