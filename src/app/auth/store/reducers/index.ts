import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
  import * as fromRoot from '@seed-core/store/reducers';
  import * as fromAuth from './auth';
  import * as fromLoginPage from './login-page';
  import * as fromRegisterPage from './register-page';

  export interface AuthState {
    status: fromAuth.State;
    loginPage: fromLoginPage.State;
    registerPage: fromRegisterPage.State;
  }

  export interface State extends fromRoot.State {
    auth: AuthState;
  }

  export const reducers: ActionReducerMap<AuthState> = {
    status: fromAuth.reducer,
    loginPage: fromLoginPage.reducer,
    registerPage: fromRegisterPage.reducer
  };

  export const selectAuthState = createFeatureSelector<AuthState>('auth');

  export const selectAuthStatusState = createSelector(
    selectAuthState,
    (state: AuthState) => state.status
  );
  export const getLoggedIn = createSelector(
    selectAuthStatusState,
    fromAuth.getLoggedIn
  );
  export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);

  export const selectLoginPageState = createSelector(
    selectAuthState,
    (state: AuthState) => state.loginPage
  );
  export const selectRegisterPageState = createSelector(
    selectAuthState,
    (state: AuthState) => state.registerPage
  );

  export const getLoginPageError = createSelector(
    selectLoginPageState,
    fromLoginPage.getError
  );
  export const getLoginPagePending = createSelector(
    selectLoginPageState,
    fromLoginPage.getPending
  );
  export const getRegisterPageError = createSelector(
    selectRegisterPageState,
    fromRegisterPage.getError
  );
  export const getRegisterPagePending = createSelector(
    selectRegisterPageState,
    fromRegisterPage.getPending
  );
