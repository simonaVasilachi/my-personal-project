import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserInterface } from '../Entities/user.interface';

@Injectable({
  providedIn: 'root',
})

export class UsersAPI {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${this.baseUrl}users`);
  }

  getUser(email: string): Observable<UserInterface> {
    return this.http
      .get<UserInterface[]>(`${this.baseUrl}users?email=${email}`)
      .pipe(map((found: UserInterface[]) => found[0]));
  }
}
