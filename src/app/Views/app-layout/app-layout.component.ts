import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-component',
  templateUrl: 'app-layout.component.html',
  styleUrls: ['app-layout.component.scss'],
})
export class AppLayoutComponent {
  constructor(private router: Router) {}
  navigate() {
    this.router.navigateByUrl('dashboard');
  }
}
