import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserInterface } from '../Entities/user.interface';
import { UsersAPI } from '../Repositories/users-api.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private usersAPI: UsersAPI) {}

  getUsers(): Observable<UserInterface[]> {
    return this.usersAPI.getUsers();
  }

  getUser(email: string): Observable<UserInterface> {
    return this.usersAPI.getUser(email);
  }
}
