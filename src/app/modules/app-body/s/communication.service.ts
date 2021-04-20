import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  constructor() {}

  scroll = new BehaviorSubject<boolean>(true);
}
