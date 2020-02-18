import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { adminRoutes } from './Admin/admin-routing.routes';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './NotFound.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  ...adminRoutes,
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- Enable for navigation debugging
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
