import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articel } from '../_interface/articel';
import { WaypointDiv } from '../_interface/waypoint-div';
import { ArticelStore, WaypointStore, ADD, LOAD } from '../_stores/Stores';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../_interface/api-response';
import { BASE_URL } from '../_config';
import { tap, map, filter } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GetUiDataService {
  constructor(
    private http: HttpClient,
    private articelStore: ArticelStore,
    private waypointStore: WaypointStore,
    private auth: AuthService
  ) {
    this.articel$ = this.articelStore.items$;
    this.waypoint$ = this.waypointStore.items$[0];
  }

  articel$: Observable<Articel[]>;
  waypoint$: Observable<WaypointDiv>;

  setArticel(articel: Articel) {
    return this.http
      .post<ApiResponse>(BASE_URL + '/articel', articel, this.auth.options)
      .pipe(
        tap(articelResponse =>
          this.articelStore.dispach({ type: ADD, data: articelResponse.return })
        )
      );
  }
  getArticelAll(): Observable<ApiResponse> {
    return this.http
      .get<ApiResponse>(BASE_URL + '/articel', this.auth.options)
      .pipe(
        tap(articel => {
          this.articelStore.dispach({ type: LOAD, data: articel.return });
        })
      );
  }

  getArticel(title): Observable<Articel> {
    return this.articel$.pipe(
      map(x => {
        if (x.length >= 1) {
          return x.filter(articel => articel.title === title)[0];
        }
        return;
      })
    );
  }
  uploadWaypoint(waypoint: WaypointDiv[]): Observable<ApiResponse> {
    const waypointObj = { ...waypoint };

    return this.http
      .post<ApiResponse>(
        BASE_URL + '/waypoints',
        { waypointObj },
        this.auth.options
      )
      .pipe(
        tap(response => {
          const waypoints: WaypointDiv[] = Object.values(response.return);
          // console.log(waypoints);
          this.waypointStore.dispach({ type: ADD, data: waypoints });
        })
      );
  }
  getWaypointByURL(url): Observable<WaypointDiv[]> {
    return this.http
      .get<WaypointDiv[]>(BASE_URL + '/waypoints' + url, this.auth.options)
      .pipe(
        tap(response => {
          const waypoint: WaypointDiv[] = response;
          this.waypointStore.dispach({ type: ADD, data: waypoint });
        })
      );
  }
}
