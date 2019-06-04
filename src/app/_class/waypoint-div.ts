export class WaypointDiv {
  linkTo: string;
  shownTitel: string;
  image: string;
  grid: string;

  constructor(linkTo, show, image) {
    this.linkTo = linkTo;
    this.shownTitel = show;
    this.image = 'url("../../../../assets/img/' + image + '")';
  }
}
