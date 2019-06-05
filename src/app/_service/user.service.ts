import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  theme(): string {
    // TODO: set a Cookie and at theme to settings
    return 'dark'; // or white
  }
}
