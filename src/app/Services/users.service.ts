import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserInterface } from '../Entities/user.interface';
import { UsersAPI } from '../Repositories/users-api.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: UserInterface[] = [];
  private usersUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private usersAPI: UsersAPI) {}

  getUsers(): Observable<UserInterface[]> {
    return this.usersAPI.getUsers();
  }
}
