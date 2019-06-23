import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class KeksService {
  constructor(private keks: CookieService) {}

  getKeks(name: string): any {
    if (this.ckeckKekse) {
      if (this.keks.check(name)) {
        return this.keks.get(name);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  setKeks(index: string, value: string) {
    this.keks.set(index, value);

    if (this.getKeks(index) === value) {
    } else {
      throw new Error('Keks konnte nicht gesetzt werden!');
    }
  }

  deleteKeke() {
    try {
      this.keks.deleteAll();
    } catch (e) {
      console.error(e);
    }
  }

  ckeckKekse(): boolean {
    if (Object.keys(this.keks.getAll()).length === 0) {
      return false;
    }
    return true;
  }
}
