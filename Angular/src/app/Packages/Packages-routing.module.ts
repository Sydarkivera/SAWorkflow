import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PackagesComponent }    from './Packages.component';
import { PackageListComponent } from './PackageList.component';
import { packageRoutes } from '../PackageDetail/PackageDetail-routing.routes';
import { AuthGuard } from '../guards/auth.guard';

const packagesRoutes: Routes = [
  { path: 'packages', component: PackagesComponent, canActivate: [AuthGuard], children: [
    { path: '', component: PackageListComponent, canActivate: [AuthGuard]},
    ...packageRoutes
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(packagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PackagesRoutingModule { }
