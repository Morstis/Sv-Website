import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_interface/user';
import { ApiResponse } from '../_interface/api-response';
import * as jwt from 'jsonwebtoken';
import { BASE_URL } from '../_config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  options = { headers: new HttpHeaders({ auth: this.getJWT() }) };

  login(email: string, password?: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(BASE_URL + '/auth/login', {
      email,
      password
    });
  }
  verify(id: number, uid: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(BASE_URL + '/auth/verify', {
      id,
      uid
    });
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
  getUser(): User {
    return jwt.verify(this.getJWT(), 'ItsseRd§Wd8?bYliBz$') as User;
  }

  isLoggedIn(): boolean {
    try {
      // Möglicherweise ist dieses System nicht sicher
      this.getUser();
    } catch (error) {
      console.log('%cjwt not verified! Relink to login', 'color: red');
      return false;
    }
    return true;
  }

  register(user): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(BASE_URL + '/user', user);
  }
}
