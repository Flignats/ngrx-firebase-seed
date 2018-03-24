import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Authenticate } from '@seed-auth/models/user';
import * as fromAuth from '@seed-auth/store/reducers';
import * as Auth from '@seed-auth/store/actions/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  pending = this.store.pipe(select(fromAuth.getLoginPagePending));
  error = this.store.pipe(select(fromAuth.getLoginPageError));

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  onSubmit(event: Authenticate) {
    this.store.dispatch(new Auth.Login(event));
  }
}
