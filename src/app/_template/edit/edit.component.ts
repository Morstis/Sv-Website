import { Component, OnInit } from '@angular/core';
import { WaypointDiv } from 'src/app/_class/waypoint-div';

@Component({
  selector: 'mors-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor() {}
  boxes: number;
  prequestion = true;
  ungrade: boolean;
  divs: WaypointDiv[] = [] as WaypointDiv[];

  imagePath;
  message: string;

  setFile(event) {
    console.log(event);
  }
  setBackground(img, isLast) {
    if (parseInt(this.calcWidth(isLast), 10) <= 50) {
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

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = e => {
      // String | ArrayBuffer != String fix
      const buffer: any = reader.result;
      this.divs[i].image = buffer;
    };
  }

  ngOnInit() {}
  continue(value) {
    this.boxes = value;
    this.prequestion = false;
    this.generateOverlay();
  }
  generateOverlay() {
    for (let i = 0; i < this.boxes; i++) {
      const div: WaypointDiv = {} as WaypointDiv;
      this.divs.push(div);
    }
    if (this.divs.length % 2 !== 0) {
      // ungrade
      this.ungrade = true;
    }
  }

  calcWidth(last): string {
    if (this.ungrade) {
      if (last) {
        return '100%';
      }
    }
    return '50%';
  }
  calcHeight(last): string {
    if (this.ungrade) {
      if (last) {
        return (
          100 / Math.round(this.divs.length / 2) -
          100 / Math.round(this.divs.length / 2) / 1.6180339887 +
          '%'
        );
      }
      // Don't ask it works...
      return (
        100 / Math.round(this.divs.length / 2) +
        100 /
          Math.round(this.divs.length / 2) /
          1.6180339887 /
          (Math.round(this.divs.length / 2) - 1) +
        '%'
      );
    }

    return 100 / (this.divs.length / 2) + '%';
  }
}
