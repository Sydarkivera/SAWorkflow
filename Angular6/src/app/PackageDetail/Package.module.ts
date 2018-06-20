import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PackageComponent }    from './Package.component';
import { PackageDashboardComponent }    from './PackageDashboard.component';
import { PackageStatusComponent }    from './PackageStatus.component';
import { PackageHeaderComponent } from './PackageHeader.component';
import { FileBrowserComponent } from '../FileBrowser/FileBrowser.component';
import { FileComponent } from '../FileBrowser/File.component';

import { PackageDetailService } from './PackageDetail.service';
import { ModuleService } from '../Admin/Module.service';
import { TooltipModule } from '../Tooltip/Tooltip.module';
// import { HeroDetailComponent }  from './hero-detail.component';

// import { HeroService } from './hero.service';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    FormsModule,
    RouterModule,
    TooltipModule,
    // PackageRoutingModule
  ],
  declarations: [
    PackageComponent,
    PackageDashboardComponent,
    PackageHeaderComponent,
    PackageStatusComponent,
    FileBrowserComponent,
    FileComponent
  ],
  // bootstrap: [PackageHeaderComponent] s
  providers: [PackageDetailService, ModuleService],
  // providers: [ HeroService ]
})
export class PackageModule {}
