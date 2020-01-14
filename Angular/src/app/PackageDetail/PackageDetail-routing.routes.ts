import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PackageComponent }    from './Package.component';
import { PackageHeaderComponent }    from './PackageHeader.component';
import { PackageDashboardComponent } from './PackageDashboard.component';
import { PackageStatusComponent }    from './PackageStatus.component';
import { PackageTemplateComponent } from './PackageTemplate.component';
import { PackageFilesComponent } from './PackageFiles.component';

export const packageRoutes: Routes = [
  { path: ':id', component: PackageHeaderComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: PackageDashboardComponent},
    { path: 'files', component: PackageFilesComponent},
    { path: 'template', component: PackageTemplateComponent},
    { path: 'edit', component: PackageComponent},
    { path: 'status', component: PackageStatusComponent}
  ]}
];
