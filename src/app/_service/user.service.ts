import { Injectable } from '@angular/core';
import { KeksService } from './keks.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private Keks: KeksService) {}

  theme(): string {
    return this.Keks.getKeks('theme'); // "dark", "white", "Wert nicht im cookie gesetzt" oder "no Cookie set"
  }
}
