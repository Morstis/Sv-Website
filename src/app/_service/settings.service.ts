import { Injectable } from '@angular/core';
import { KeksService } from './keks.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private Keks: KeksService) {}

  saveSettings() {
    try {
      this.Keks.setKeks('theme', 'dark');
    } catch (e) {
      console.error(e);
    }
  }
  resetSettings() {
    this.Keks.deleteKeke();
  }
}
