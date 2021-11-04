import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {  //verifica email si parola
  login(): boolean {
    return true;
  }

  constructor() { }
}
