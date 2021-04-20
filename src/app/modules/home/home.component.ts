import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { CommunicationService } from '../app-body/s/communication.service';

@Component({
  selector: 'lw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  scroll = true;
  constructor(private comm: CommunicationService) {}
  ngOnInit(): void {
    this.comm.scroll.subscribe((res) => {
      this.scroll = res;
    });
  }
}
