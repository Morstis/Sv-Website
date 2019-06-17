import { Component, OnInit } from '@angular/core';
import { KeksService } from 'src/app/_service/keks.service';

@Component({
  selector: 'mors-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  show = true;
  constructor(private keks: KeksService) {
    if (this.keks.getKeks('footer') === 'false') {
      this.show = false;
    } else {
      this.show = true;
    }
  }


  ngOnInit() {}

  hide() {
    this.show = false;
    try {
      this.keks.setKeks('footer', 'false');
    } catch (e) {
      console.error(e);
    }
  }
  unhide() {
    this.show = true;
    try {
      this.keks.setKeks('footer', 'true');
    } catch (e) {
      console.error(e);
    }
  }
}
