import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Authenticate } from '@seed-auth/models/user';
import * as fromAuth from '@seed-auth/store/reducers';
import * as Auth from '@seed-auth/store/actions/auth';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  pending = this.store.pipe(select(fromAuth.getRegisterPagePending));
  error = this.store.pipe(select(fromAuth.getRegisterPageError));

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  onSubmit(event: Authenticate) {
    this.store.dispatch(new Auth.Register(event));
  }
}
