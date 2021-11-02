import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";


@Component(
    {
        selector: 'login-view',
        templateUrl: 'login.view.html',
        styleUrls: ['login.view.css']
    }
)

export class LoginView {
     hide = true;

     emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);
    
      passwordFormControl = new FormControl('',  [Validators.required]);

      formIsValid(): boolean {
        return this.emailFormControl.valid && this.passwordFormControl.valid;
      }
}




