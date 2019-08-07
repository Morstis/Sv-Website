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
  user: User;

  constructor(private http: HttpClient) {}

  getUserServer(email: string): Observable<User[]> {
    const params = new HttpParams().append('email', email);
    return this.http.get<User[]>(this.BASE_URL, { params });
  }

  setUserLocal(user) {
    localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(this.CURRENT_USER);
  }

  isLoggedIn(): boolean {
    // tslint:disable-next-line: no-conditional-assignment | ist da die effizienteste Variante
    if ((this.user = this.getUserLocal())) {
      return true;
    }
    return false;
  }

  getUserLocal() {
    const userString = localStorage.getItem(this.CURRENT_USER);
    if (userString) {
      return JSON.parse(userString);
    }
    return false;
  }

  register(user): Observable<User> {
    return this.http.post<User>(this.BASE_URL, user);
  }
  mail(email, uuid): Observable<any> {
    return this.http.post<any>('http://localhost/mail.php', {
      email,
      uuid
    });
  }
}
