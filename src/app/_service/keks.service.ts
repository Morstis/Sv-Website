import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class KeksService {
  constructor(private keks: CookieService) {}

  getKeks(name: string): string {
    if (this.ckeckKekse) {
      if (this.keks.check(name)) {
        return this.keks.get(name);
      } else {
        return 'Wert nicht im cookie gesetzt';
      }
    } else {
      return 'no Cookie set';
    }
  }

  setKeks(index: string, value: string): boolean {
    this.keks.set(index, value);

    if (this.getKeks(index) === value) {
      return true;
    } else {
      return false;
    }
  }

  private ckeckKekse(): boolean {
    if (Object.keys(this.keks.getAll()).length === 0) {
      return false;
    }
    return true;
  }
}