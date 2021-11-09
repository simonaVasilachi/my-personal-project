import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.store';

import { LoginDetails } from '../../Entities/login-details.interface';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})

export class LoginComponent {
  @Output() submit = new EventEmitter<LoginDetails>();
  hide = true;

  // constructor(
  //   private store: Store<AppState>
  // ) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [Validators.required]);

  formIsValid(): boolean {
    return this.emailFormControl.valid && this.passwordFormControl.valid;
  }

  formSubmit() {
    this.submit.emit({
      password: this.passwordFormControl.value,
      email: this.emailFormControl.value
    });
  }
}
