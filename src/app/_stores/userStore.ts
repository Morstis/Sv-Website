import { Store } from './generic-store.service';
import { User } from '../_interface/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStore extends Store<User> {}

export * from './generic-store.service';
