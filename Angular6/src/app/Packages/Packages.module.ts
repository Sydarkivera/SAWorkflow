import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PackagesRoutingModule } from './Packages-routing.module';

import { PackagesComponent }    from './Packages.component';
import { PackagesService } from './Packages.service';
// import { PackageComponent }    from './Package.component';
import { PackageListComponent }    from './PackageList.component';
// import { PackageHeaderComponent }    from './PackageHeader.component';
// import { PackageDashboardComponent } from './PackageDashboard.component';
import { PackageModule } from '../PackageDetail/Package.module';
// import { HeroDetailComponent }  from './hero-detail.component';

// import { HeroService } from './hero.service';
import { NavbarModule } from '../Navbar/Navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PackageModule,
    PackagesRoutingModule,
    NavbarModule,
  ],
  declarations: [
    PackagesComponent,
    // PackageComponent,
    // PackageHeaderComponent,
    PackageListComponent,
    // PackageDashboardComponent
  ],
  providers: [PackagesService],
  // providers: [ HeroService ]
})
export class PackagesModule {}
