import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { UserInterface } from "../Entities/user.interface";

@Injectable ({
    providedIn: 'root'
})

export class UsersAPI {
   private users: UserInterface[] = [];
   private usersUrl = 'http://localhost:3000/users';

   constructor(private http: HttpClient) { }

   getUsers(): Observable<UserInterface[]> {
       return this.http.get<UserInterface[]>(this.usersUrl);
   }
}