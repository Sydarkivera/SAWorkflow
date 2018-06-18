import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { PackageComponent }    from './Package.component';
import { PackageDashboardComponent }    from './PackageDashboard.component';
import { PackageStatusComponent }    from './PackageStatus.component';
import { PackageHeaderComponent } from './PackageHeader.component';
import { PackageDetailService } from './PackageDetail.service';
// import { HeroDetailComponent }  from './hero-detail.component';

// import { HeroService } from './hero.service';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    FormsModule,
    RouterModule,
    // PackageRoutingModule
  ],
  declarations: [
    PackageComponent,
    PackageDashboardComponent,
    PackageHeaderComponent,
    PackageStatusComponent
  ],
  // bootstrap: [PackageHeaderComponent] s
  providers: [PackageDetailService],
  // providers: [ HeroService ]
})
export class PackageModule {}
