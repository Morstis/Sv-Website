import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/s/auth.service';
import { LoaderService } from 'src/app/modules/shared/s/loader.service';
import { CommunicationService } from '../../s/communication.service';

@Component({
  selector: 'lw-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent implements OnInit {
  isLoading$ = this.loaderService.state();
  user$ = this.auth.user$;

  constructor(
    private auth: AuthService,
    private loaderService: LoaderService,
    private comm: CommunicationService
  ) {}

  @ViewChild('main') el: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.el.nativeElement, 'scroll').subscribe((e: any) => {
      this.comm.scroll.next(e.target.scrollTop > 0 ? false : true);
    });
  }
  ngOnInit(): void {}
  logout() {
    this.auth.logout().then(() => {
      console.log('%clogout', 'color: orange');
    });
  }
}
