import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// import { PackagesComponent } from './Packages/packages.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
// import { AdminComponent } from './Admin/Admin.component';
import { NotFoundComponent } from './NotFound.component';
import { adminRoutes } from './Admin/Admin-routing.routes';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: 'Packages', component: PackagesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'admin', component: AdminComponent },
  ...adminRoutes,
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
