import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mors-generic-popup',
  templateUrl: './generic-popup.component.html',
  styleUrls: ['./generic-popup.component.scss']
})
export class GenericPopupComponent implements OnInit {
  constructor() {}

  @Output() closed = new EventEmitter<boolean>();

  close(): void {
    this.closed.emit(true);
  }
  ngOnInit() {}
}
