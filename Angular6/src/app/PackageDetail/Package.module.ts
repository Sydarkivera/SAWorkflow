// Angular component
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// components
import { PackageComponent }    from './Package.component';
import { PackageDashboardComponent }    from './PackageDashboard.component';
import { PackageStatusComponent }    from './PackageStatus.component';
import { PackageTemplateComponent }    from './PackageTemplate.component';
import { PackageHeaderComponent } from './PackageHeader.component';

//modules
import { TooltipModule } from '../Components/Tooltip/Tooltip.module';
import { NavbarModule } from '../Components/Navbar/Navbar.module';
import { ModalModule } from '../Components/Modal/Modal.module';
import { FileBrowserModule } from '../Components/FileBrowser/FileBrowser.module';
import { MessageModule } from '../Components/Message/Message.module';

//services
import { APIService } from '../Services/api.service';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    FormsModule,
    RouterModule,
    TooltipModule,
    NavbarModule,
    ModalModule,
    FileBrowserModule,
    MessageModule
  ],
  declarations: [
    PackageComponent,
    PackageDashboardComponent,
    PackageHeaderComponent,
    PackageStatusComponent,
    PackageTemplateComponent
  ],
  providers: [APIService]
})
export class PackageModule {}
