import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_class/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // TODO: provide CURRENT_USER as JWT
  CURRENT_USER = 'currentUser';
  BASE_URL = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) {}

  login(name: string): Observable<User[]> {
    const params = new HttpParams().append('name', name);
    return this.http.get<User[]>(this.BASE_URL, { params });
  }

  logout() {
    localStorage.removeItem(this.CURRENT_USER);
  }

  isLoggedIn() {
    return true;
    // TODO: add logic
  }

  getUser() {
    const userString = localStorage.getItem(this.CURRENT_USER);
    if (userString) {
      return JSON.parse(userString);
    }
  }
}
