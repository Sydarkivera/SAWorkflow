import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PackagesComponent }    from './Packages.component';
// import { PackageComponent }    from './Package.component';
// import { PackageHeaderComponent }    from './PackageHeader.component';
import { PackageListComponent } from './PackageList.component';
// import { PackageDashboardComponent } from './PackageDashboard.component';
// import { HeroDetailComponent }  from './hero-detail.component';
import { packageRoutes } from '../PackageDetail/PackageDetail-routing.routes';

const packagesRoutes: Routes = [
  { path: 'packages', component: PackagesComponent, children: [
    { path: '', component: PackageListComponent},
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