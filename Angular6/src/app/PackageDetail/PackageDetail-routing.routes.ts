import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PackageComponent }    from './Package.component';
import { PackageHeaderComponent }    from './PackageHeader.component';
import { PackageDashboardComponent } from './PackageDashboard.component';
import { PackageStatusComponent }    from './PackageStatus.component';

export const packageRoutes: Routes = [
  { path: ':id', component: PackageHeaderComponent, children: [
    { path: '', component: PackageDashboardComponent},
    { path: 'dashboard', component: PackageDashboardComponent},
    { path: 'edit', component: PackageComponent},
    { path: 'status', component: PackageStatusComponent}
  ]}
];
