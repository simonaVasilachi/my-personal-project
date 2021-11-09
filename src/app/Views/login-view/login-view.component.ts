import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginDetails } from 'src/app/Entities/login-details.interface';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'login-view',
  templateUrl: 'login-view.component.html',
  styleUrls: ['login-view.component.scss'],
})
export class LoginViewComponent {
  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(event: LoginDetails) {
    this.authService.login(event.email, event.password).subscribe((result) => {
      if (this.authService.isUserAuth()) {
        this.router.navigateByUrl('/dashboard');
      } else {
        throw new Error('User not found');
      }
    });
  }
}
