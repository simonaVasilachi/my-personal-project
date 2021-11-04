import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component(
    {
      selector: 'login-view',
      templateUrl: 'login-view.component.html',
      styleUrls: ['login-view.component.scss'],
    }
  )

  export class LoginViewComponent {
    constructor(private router: Router) { }
      onSubmit() {
        this.router.navigateByUrl('/admin');
      }
  }