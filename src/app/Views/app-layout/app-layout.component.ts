import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-component',
  templateUrl: 'app-layout.component.html',
  styleUrls: ['app-layout.component.scss'],
})
export class AppLayoutComponent {
  public items = [
    { route: 'dashboard', icon: 'dashboard', title: 'DASHBOARD' },
  ];

  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }
}
