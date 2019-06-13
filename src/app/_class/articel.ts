export class Articel {
  titel: string;
  text: string;
  autor: string;
  image: string;

  constructor(titel, text, autor, image) {
    this.titel = titel;
    this.text = text;
    this.autor = autor;
    this.image = 'url("../../../../assets/img/' + image + '")';
  }
}
