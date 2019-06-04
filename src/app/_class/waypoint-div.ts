export class WaypointDiv {
  linkTo: string;
  show: string;
  image: string;
  grid: string;

  constructor(linkTo, show, image) {
    this.linkTo = linkTo;
    this.show = show;
    this.image = 'url("../../../../assets/img/' + image + '")';
  }
}
