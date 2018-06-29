import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHeaderComponent } from './AdminHeader.component';

import { AdminModulesComponent } from './AdminModules.component';
import { AdminGlobalComponent } from './AdminGlobal.component';

import { AdminProcessesComponent } from './AdminProcesses.component';
import { AdminTemplatesComponent } from './AdminTemplates.component';

// import { PackageComponent }    from './Package.component';
// import { PackageHeaderComponent }    from './PackageHeader.component';
// import { PackageDashboardComponent } from './PackageDashboard.component';
// import { PackageStatusComponent }    from './PackageStatus.component';

export const adminRoutes: Routes = [
  { path: 'admin', component: AdminHeaderComponent, children: [
    { path: '', redirectTo: 'modules', pathMatch: 'full' },
    { path: 'modules', component: AdminModulesComponent},
    { path: 'global', component: AdminGlobalComponent},
    { path: 'processes', component: AdminProcessesComponent},
    { path: 'templates', component: AdminTemplatesComponent},
    // { path: 'status', component: PackageStatusComponent}
  ]}
];
