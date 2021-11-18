import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { LoginDetails } from 'src/app/Entities/login-details.interface';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { authentication } from 'src/app/Store/Actions/auth.actions';
import { SNACKBARSTATUS } from 'src/app/Store/Actions/snack-bar.actions';
import { isAuth } from 'src/app/Store/Selectors/auth.selector';

@Component({
  selector: 'login-view',
  templateUrl: 'login-view.component.html',
  styleUrls: ['login-view.component.scss'],
})
export class LoginViewComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store,
    private notifierService: SnackbarService
  ) {}

  ngOnInit() {
    this.store.pipe(select(isAuth)).subscribe((isAuth: boolean) => {
      if (isAuth) {
        this.router.navigateByUrl('/dashboard');

        this.notifierService.showNotification('Success', SNACKBARSTATUS.SUCCESS);
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
