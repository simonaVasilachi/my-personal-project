import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../../Store/Actions/auth.actions';

@Component({
  selector: 'dashboard-view',
  templateUrl: 'dashboard-view.component.html',
})

export class DashboardViewComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(logout({url: '/'}))
  }
}
