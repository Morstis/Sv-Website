import { Injectable } from '@angular/core';
import { ApiResponse } from '../_interface/api-response';
import { Observable } from 'rxjs';
import { User } from '../_interface/user';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap, map } from 'rxjs/operators';
import { UserStore, LOAD, EDIT } from '../_stores/Stores';
import { BASE_URL } from '../_config/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private store: UserStore
  ) {
    this.users$ = this.store.items$;
  }

  users$: Observable<User[]>;

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(BASE_URL + '/user', this.auth.options).pipe(
      tap(user => {
        this.store.dispach({ type: LOAD, data: user });
      })
    );
  }
  getOneUser(id): Observable<User> {
    return this.http.get<User>(BASE_URL + '/user/' + id, this.auth.options);
  }
  editUser(id, user): Observable<ApiResponse> {
    return this.http
      .patch<ApiResponse>(
        BASE_URL + '/user/' + id,
        {
          email: user.email,
          role: user.role
        },
        this.auth.options
      )
      .pipe(
        tap(userStream => {
          this.store.dispach({ type: EDIT, data: userStream.return });
        })
      );
  }
}
