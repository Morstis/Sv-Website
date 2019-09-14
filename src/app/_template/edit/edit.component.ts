import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WaypointDiv } from 'src/app/_interface/waypoint-div';
import imageCompression from 'browser-image-compression';
import { GetUiDataService } from 'src/app/_service/get-ui-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mors-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor(private getUiData: GetUiDataService, private router: Router) {}
  boxes: number;
  preQuestion = true;
  ungrade: boolean;
  divs: WaypointDiv[] = [] as WaypointDiv[];
  createPointFor = -1;
  project: string;
  message: string;
  uploadReady = false;
  @Output() closed = new EventEmitter();
  /* Hallo armer Programmierer, der sich das hier angucken muss. Entschuldigung,
  das der Code so hässlich geworden ist, möglicherweise sollte ich ihn überarbeiten.
  Aber da der Text hier noch steht, habe ich das anscheinend noch nicht gemacht.
  Das wichtigste ist, dass es funktioniert. Anzumerken ist ausßerdem, das die meiste Logik leider in html passiert. Ja ich weiß...
  Leider ist das UI nicht einmal Benutzerfreundlich.
  */

  ngOnInit() {}
  close(event) {
    if (event) {
      this.preQuestion = false;
      this.closed.emit();
    }
  }
  upload() {
    // no need to upload the image, becouse it is equal to the articel image.
    this.divs.map(i => (i.image = ''));
    this.getUiData.uploadWaypoint(this.divs).subscribe(res => {
      this.router.navigateByUrl(this.router.url);
    });
  }

  setProject(input, title): void {
    this.project = input;
    this.divs[this.createPointFor].shownTitle = title;
  }
  setBackground(img, isLast): string {
    if (this.calcWidth(isLast) < this.calcHeight(isLast)) {
      return `url(${img}) center center / auto 100% no-repeat`;
    }
    return `url(${img}) center center / 100% auto no-repeat`;
  }
  preview(files, i) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      console.log('Only images are supported.');
      return;
    }
    const options = {
      maxSizeMB: 1, // (default: Number.POSITIVE_INFINITY)
      // tslint:disable-next-line: max-line-length
      maxWidthOrHeight: 1920, // compressedFile will scale down by ratio to a point that width or height is smaller than maxWidthOrHeight (default: undefined)
      maxIteration: 30 // optional, max number of iteration to compress the image (default: 10)
    };
    this.divs[i].load = true;
    imageCompression(files[0], options)
      .then(compressedFile => {
        console.log(
          `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
        ); // smaller than maxSizeMB

        const reader = new FileReader();
        reader.readAsDataURL(compressedFile);
        reader.onload = () => {
          // String | ArrayBuffer != String fix
          const buffer: any = reader.result;
          this.divs[i].image = buffer;
          this.divs[i].load = false;
          this.createPointFor = i;
        };
        // return uploadToServer(compressedFile); // write your own logic
      })
      .catch(error => {
        console.log(error.message);
      });
  }
  continue(value): void {
    this.boxes = value;
    this.preQuestion = false;
    this.generateOverlay();
  }
  goOn(title) {
    if (title) {
      this.project = '';
      this.divs[this.createPointFor].linkTo = title;
      this.divs[this.createPointFor].place = this.createPointFor;
      this.divs[this.createPointFor].refereToURL = this.router.url;

      this.createPointFor = -1;
      for (let i = 0; i < this.boxes; i++) {
        if (this.divs[i].shownTitle === undefined) {
          return;
        }
      }
      this.uploadReady = true;
    }
  }
  generateOverlay(): void {
    for (let i = 0; i < this.boxes; i++) {
      const div: WaypointDiv = {} as WaypointDiv;
      this.divs.push(div);
    }
    if (this.divs.length % 2 !== 0) {
      // ungrade
      this.ungrade = true;
    }
  }

  calcWidth(last): number {
    if (this.ungrade) {
      if (last) {
        return 100;
      }
    }
    return 50;
  }
  calcHeight(last): number {
    if (this.ungrade) {
      if (last) {
        return (
          100 / Math.round(this.divs.length / 2) -
          100 / Math.round(this.divs.length / 2) / 1.6180339887
        );
      }
      // Don't ask it works...
      return (
        100 / Math.round(this.divs.length / 2) +
        100 /
          Math.round(this.divs.length / 2) /
          1.6180339887 /
          (Math.round(this.divs.length / 2) - 1)
      );
    }

    return 100 / (this.divs.length / 2);
  }
}
