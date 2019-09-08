import { Injectable } from '@angular/core';
import { KeksService } from './keks.service';
import { ApiResponse } from '../_interface/api-response';
import { Observable } from 'rxjs';
import { User } from '../_interface/user';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap, map } from 'rxjs/operators';
import { UserStore, LOAD, EDIT } from '../_stores/userStore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private Keks: KeksService,
    private http: HttpClient,
    private auth: AuthService,
    private store: UserStore
  ) {
    this.users$ = this.store.items$;
  }

  // BASE_URL = 'https://api.sv-hag.de';
  BASE_URL = 'http://localhost:3000';
  private options = { headers: new HttpHeaders({ auth: this.auth.getJWT() }) };

  users$: Observable<User[]>;

  theme(): string {
    return this.Keks.getKeks('theme'); // "dark", "white", "Wert nicht im cookie gesetzt" oder "no Cookie set"
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL + '/user', this.options).pipe(
      tap(user => {
        this.store.dispach({ type: LOAD, data: user });
      })
    );
  }
  getOneUser(id): Observable<User> {
    return this.http.get<User>(this.BASE_URL + '/user/' + id, this.options);
  }
  editUser(id, user): Observable<ApiResponse> {
    return this.http
      .patch<ApiResponse>(
        this.BASE_URL + '/user/' + id,
        {
          email: user.email,
          role: user.role
        },
        this.options
      )
      .pipe(
        tap(userStream => {
          this.store.dispach({ type: EDIT, data: userStream.user });
        })
      );
  }
}
