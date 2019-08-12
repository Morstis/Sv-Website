import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_interface/user';
import { ApiResponse } from '../_interface/api-response';
import * as jwt from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // BASE_URL = 'https://api.sv-hag.de/';
  BASE_URL = 'http://localhost:3000';
  user: User;

  constructor(private http: HttpClient) {}

  login(email: string, password?: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.BASE_URL + '/auth/login', {
      email,
      password
    });
  }

  getUserServer(email: string): Observable<User[]> {
    const params = new HttpParams().append('email', email);
    return this.http.get<User[]>(this.BASE_URL, { params });
  }

  setJWT(token): void {
    localStorage.setItem('token', token);
  }
  getJWT(): string {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    try {
      // Möglicherweise ist dieses System nicht sicher
      this.user = jwt.verify(this.getJWT(), 'ItsseRd§Wd8?bYliBz$') as User;
      return true;
    } catch (error) {
      console.log('%cjwt not verified!', 'color: red');
    }
    return false;
  }

  register(user): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.BASE_URL + '/user', user);
  }
  mail(email, uuid): Observable<any> {
    return this.http.post<any>('http://localhost/mail.php', {
      email,
      uuid
    });
  }
}
