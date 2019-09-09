import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'mors-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  show = true;
  constructor(private cookie: CookieService) {
    if (this.cookie.get('footer') === 'false') {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  ngOnInit() {}

  hide() {
    this.show = false;
    try {
      this.cookie.set('footer', 'false');
    } catch (e) {
      console.error(e);
    }
  }
  unhide() {
    this.show = true;
    try {
      this.cookie.set('footer', 'true');
    } catch (e) {
      console.error(e);
    }
  }
}
