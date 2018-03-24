import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, map, switchMap, exhaustMap, catchError } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {
  Login,
  LoginSuccess,
  LoginFailure,
  Logout,
  Register,
  RegisterFailure,
  RegisterSuccess,
  AuthActionTypes
} from '@seed-auth/store/actions/auth';
import { User, Authenticate } from '@seed-auth/models/user';

@Injectable()
export class AuthEffects {
  user: Observable<firebase.User>;

  constructor(
    private actions$: Actions,
    private router: Router,
    private firebaseAuth: AngularFireAuth
  ) {
    this.user = firebaseAuth.authState;
  }

  @Effect()
  login = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    map((action: Login) => action.payload),
    exhaustMap((auth: Authenticate) =>
      Observable.fromPromise(
        this.firebaseAuth.auth.signInWithEmailAndPassword(
          auth.email,
          auth.password
        )
      ).pipe(
        map(authState => new LoginSuccess({ email: 'User', password: 'User' })),
        catchError(error => of(new LoginFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  logout = this.actions$.pipe(
    ofType(AuthActionTypes.Logout),
    tap(() => {
      Observable.fromPromise(this.firebaseAuth.auth.signOut()).pipe(
        map(authState => this.router.navigate(['/']))
      );
    })
  );

  @Effect({ dispatch: false })
  loginSuccess = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => {
      this.router.navigate(['/']);
    })
  );

  @Effect({ dispatch: false })
  loginRedirect = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
    tap(authed => {
      this.router.navigate(['/login']);
    })
  );

  @Effect()
  register = this.actions$.pipe(
    ofType(AuthActionTypes.Register),
    map((action: Register) => action.payload),
    exhaustMap((auth: Authenticate) =>
      Observable.fromPromise(
        this.firebaseAuth.auth.createUserWithEmailAndPassword(
          auth.email,
          auth.password
        )
      ).pipe(
        switchMap(authState => {
          this.firebaseAuth.auth.onAuthStateChanged(a => {
            a.sendEmailVerification();
          });
          return of(new RegisterSuccess());
        }),
        catchError(error => of(new RegisterFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  registerSuccess = this.actions$.pipe(
    ofType(AuthActionTypes.RegisterSuccess),
    tap(() => this.router.navigate(['/login']))
  );
}
