import { Injectable } from '@angular/core';
import { KeksService } from './keks.service';
import { ApiResponse } from '../_interface/api-response';
import { Observable } from 'rxjs';
import { User } from '../_interface/user';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private Keks: KeksService,
    private http: HttpClient,
    private auth: AuthService
  ) {}

  // BASE_URL = 'https://api.sv-hag.de';
  BASE_URL = 'http://localhost:3000';
  options = { headers: new HttpHeaders({ auth: this.auth.getJWT() }) };
  theme(): string {
    return this.Keks.getKeks('theme'); // "dark", "white", "Wert nicht im cookie gesetzt" oder "no Cookie set"
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL + '/user', this.options);
  }
  getOneUser(id): Observable<User> {
    return this.http.get<User>(this.BASE_URL + '/user/' + id, this.options);
  }
  editUser(id, user): Observable<ApiResponse> {
    return this.http.patch<ApiResponse>(this.BASE_URL + '/user/' + id, {
      user
    });
  }
}
