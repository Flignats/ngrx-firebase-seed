import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '@seed-environments/environment';
import { SharedModule } from '@seed-shared/shared.module';
import { AuthRoutingModule } from '@seed-auth/auth-routing.module';

import { LoginFormComponent } from '@seed-auth/components/login-form/login-form.component';
import { RegisterFormComponent } from '@seed-auth/components/register-form/register-form.component';

import { LoginPageComponent } from '@seed-auth/containers/login-page/login-page.component';
import { RegisterPageComponent } from '@seed-auth/containers/register-page/register-page.component';

import { AuthGuard } from '@seed-auth/services/auth-guard.service';
import { AuthEffects } from '@seed-auth/store/effects/auth.effects';
import { reducers } from '@seed-auth/store/reducers';

import { AngularFireAuthModule } from 'angularfire2/auth';

export const COMPONENTS = [LoginFormComponent, LoginPageComponent, RegisterFormComponent, RegisterPageComponent];

@NgModule({
  imports: [SharedModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthGuard],
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class RootAuthModule {}
