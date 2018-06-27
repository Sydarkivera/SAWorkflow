import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//imports
import { TooltipModule } from '../Tooltip/Tooltip.module';

//declarations
import { AdminHeaderComponent }    from './AdminHeader.component';
import { AdminModulesComponent }    from './AdminModules.component';
import { AdminGlobalComponent }    from './AdminGlobal.component';
import { AdminProcessesComponent } from './AdminProcesses.component';
// import { PackageDashboardComponent }    from './PackageDashboard.component';
// import { PackageStatusComponent }    from './PackageStatus.component';
// import { PackageHeaderComponent } from './PackageHeader.component';
// import { FileBrowserComponent } from '../FileBrowser/FileBrowser.component';
// import { FileComponent } from '../FileBrowser/File.component';

//providers
import { ModuleService } from './Module.service';
// import { ModuleService } from '../Admin/Module.service';
// import { TooltipModule } from '../Tooltip/Tooltip.module';
// import { HeroDetailComponent }  from './hero-detail.component';

// import { HeroService } from './hero.service';
import { NavbarModule } from '../Navbar/Navbar.module';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    FormsModule,
    RouterModule,
    TooltipModule,
    NavbarModule,
    // PackageRoutingModule
  ],
  declarations: [
    AdminHeaderComponent,
    AdminModulesComponent,
    AdminGlobalComponent,
    AdminProcessesComponent,
    // PackageDashboardComponent,
    // PackageHeaderComponent,
    // PackageStatusComponent,
    // FileBrowserComponent,
    // FileComponent
  ],
  // bootstrap: [PackageHeaderComponent] s
  providers: [ModuleService],
  // providers: [ HeroService ]
})
export class AdminModule {}
