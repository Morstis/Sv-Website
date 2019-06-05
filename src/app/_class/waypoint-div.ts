export class WaypointDiv {
  linkTo: string;
  shownTitel: string;
  image: string;
  grid: string;

  constructor(linkTo, shownTitel, image) {
    this.linkTo = '/' + linkTo;
    this.shownTitel = shownTitel;
    this.image = 'url("../../../../assets/img/' + image + '")';
  }
}
