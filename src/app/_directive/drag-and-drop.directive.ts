import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[morsDragDrop]'
})

// Credits: https://medium.com/@mariemchabeni/angular-7-drag-and-drop-simple-file-uploadin-in-less-than-5-minutes-d57eb010c0dc
export class DragAndDropDirective {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onFileDropped = new EventEmitter<any>();
  @Input('morsDragDrop') options: any;

  @HostBinding('style.background-color') private background = '#f5fcff';
  @HostBinding('style.opacity') private opacity = '0.3';

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    if (!this.options) {
      return;
    }
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.opacity = '1';
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    if (!this.options) {
      return;
    }
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.opacity = '0.3';
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    if (!this.options) {
      return;
    }
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.opacity = '1';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }
}
