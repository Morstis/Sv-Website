import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articel } from '../_interface/articel';
import { WaypointDiv } from '../_interface/waypoint-div';
import { ArticelStore, WaypointStore, ADD } from '../_stores/Stores';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../_interface/api-response';
import { BASE_URL } from '../_config';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetUiDataService {
  constructor(
    private http: HttpClient,
    private articelStore: ArticelStore,
    private waypointStore: WaypointStore
  ) {
    this.articel = this.articelStore.items$[0];
    this.waypoint = this.waypointStore.items$[0];
  }

  articel: Observable<Articel>;
  waypoint: Observable<WaypointDiv>;

  setArticel(articel: Articel) {
    return this.http
      .post<ApiResponse>(BASE_URL + '/articel', articel)
      .pipe(
        tap(articelResponse =>
          this.articelStore.dispach({ type: ADD, data: articelResponse.return })
        )
      );
  }
}
