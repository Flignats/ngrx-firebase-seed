import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '@seed-core/store/reducers';
import * as fromAuth from '@seed-auth/store/reducers';
import * as Auth from '@seed-auth/store/actions/auth';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  loggedIn$: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }

  onClose() {
    this.closeSidenav.emit();
  }

  logout() {
    this.onClose();
    this.store.dispatch(new Auth.Logout());
  }
}
