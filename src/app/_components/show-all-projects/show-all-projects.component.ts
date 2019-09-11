import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Articel } from 'src/app/_interface/articel';
import { Observable } from 'rxjs';
import { ArticelStore } from 'src/app/_stores/Stores';
import { GetUiDataService } from 'src/app/_service/get-ui-data.service';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'mors-show-all-projects',
  templateUrl: './show-all-projects.component.html',
  styleUrls: ['./show-all-projects.component.scss']
})
export class ShowAllProjectsComponent implements OnInit {
  constructor(private getUiData: GetUiDataService) {}
  articel$: Observable<Articel[]>;
  filteredArticel$: Observable<Articel[]>;
  @Output() selected = new EventEmitter();

  ngOnInit() {
    this.getUiData.getArticelAll().subscribe();
    this.articel$ = this.getUiData.articel$;
  }
  onKeyUp(value) {
    this.filteredArticel$ = this.articel$.pipe(
      debounceTime(400),
      map(x => {
        return x.filter(
          user => user.title.toLowerCase().indexOf(value.toLowerCase()) > -1
        );
      })
    );
  }
  getArticel() {
    if (this.filteredArticel$ !== undefined) {
      return this.filteredArticel$;
    }
    return this.articel$;
  }
  select(title) {
    this.selected.emit(title);
  }
}
