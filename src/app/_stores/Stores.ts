import { Store } from './generic-store.service';
import { User } from '../_interface/user';
import { Articel } from '../_interface/articel';
import { Injectable } from '@angular/core';
import { WaypointDiv } from '../_interface/waypoint-div';

@Injectable({
  providedIn: 'root'
})
export class UserStore extends Store<User> {}
@Injectable({
  providedIn: 'root'
})
export class ArticelStore extends Store<Articel> {}
@Injectable({
  providedIn: 'root'
})
export class WaypointStore extends Store<WaypointDiv> {}
export * from './generic-store.service';
