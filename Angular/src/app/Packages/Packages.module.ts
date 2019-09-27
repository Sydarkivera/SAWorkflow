import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

// components
import { PackagesComponent }    from './Packages.component';
import { PackageListComponent }    from './PackageList.component';

// modules
import { PackageModule } from '../PackageDetail/Package.module';
import { NavbarModule } from '../Components/Navbar/Navbar.module';
import { PackagesRoutingModule } from './Packages-routing.module';

//services
import { APIService } from '../Services/api.service';

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
    PackageListComponent,
  ],
  providers: [APIService],
})
export class PackagesModule {}
