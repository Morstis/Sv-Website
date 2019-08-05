import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'mors-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hideHeader = false;

  constructor(private router: Router) {
    // on route change to '/login', set the variable hideHeader to true
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        if (event.url === '/login' || event.url === '/register') {
          this.hideHeader = true;
        } else {
          this.hideHeader = false;
        }
      }
    });
  }
}
