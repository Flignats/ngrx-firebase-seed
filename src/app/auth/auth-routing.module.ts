import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '@seed-auth/containers/login-page/login-page.component';
import { RegisterPageComponent } from '@seed-auth/containers/register-page/register-page.component';

const routes: Routes = [
  { path: 'signup', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
