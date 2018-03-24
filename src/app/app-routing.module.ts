import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@seed-auth/services/auth-guard.service';

import { AppComponent } from '@seed-core/containers/app/app.component';
import { HomeComponent } from '@seed-core/containers/home/home.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    // loadChildren: './home/home.module#HomeModule',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  // { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true }), ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
