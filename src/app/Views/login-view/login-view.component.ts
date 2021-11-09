<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { LoginDetails } from 'src/app/Entities/login-details.interface';
import { AuthService } from 'src/app/Services/auth.service';
import { authentication } from 'src/app/Store/Actions/auth.actions';
import { isAuth } from 'src/app/Store/Selectors/auth.selector';
=======
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginDetails } from 'src/app/Entities/login-details.interface';
import { AuthService } from 'src/app/Services/auth.service';
>>>>>>> 63f15c8 (login works if password and email match with the ones from db.json)

@Component({
  selector: 'login-view',
  templateUrl: 'login-view.component.html',
  styleUrls: ['login-view.component.scss'],
})
export class LoginViewComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.pipe(select(isAuth)).subscribe((isAuth: boolean) => {
      if (isAuth) {
        this.router.navigateByUrl('/dashboard');
      } else {
        throw new Error('User not found');
      }
    });
  }

  onSubmit(event: LoginDetails) {
    this.store.dispatch(
      authentication({
        email: event.email,
        password: event.password,
      })
    );
  }
}
