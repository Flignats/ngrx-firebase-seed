import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '@seed-core/store/reducers';
import * as fromAuth from '@seed-auth/store/reducers';
import * as Auth from '@seed-auth/store/actions/auth';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
}
