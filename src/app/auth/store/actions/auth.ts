import { Action } from '@ngrx/store';
import { User, Authenticate } from '../../models/user';

export enum AuthActionTypes {
    Login = '[Auth] Login',
    Logout = '[Auth] Logout',
    LoginSuccess = '[Auth] Login Success',
    LoginFailure = '[Auth] Login Failure',
    LoginRedirect = '[Auth] Login Redirect',
    Register = '[Auth] Register',
    RegisterSuccess = '[Auth] Register Success',
    RegisterFailure = '[Auth] Register Failure',
}

export class Login implements Action {
    readonly type = AuthActionTypes.Login;

    constructor(public payload: Authenticate) {}
}

export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LoginSuccess;

    constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
    readonly type = AuthActionTypes.LoginRedirect;
  }

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class Register implements Action {
    readonly type = AuthActionTypes.Register;
    constructor(public payload: Authenticate) {}
}

export class RegisterSuccess implements Action {
    readonly type = AuthActionTypes.RegisterSuccess;
}

export class RegisterFailure implements Action {
    readonly type = AuthActionTypes.RegisterFailure;
    constructor(public payload: any) {}
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | Register
  | RegisterSuccess
  | RegisterFailure;
