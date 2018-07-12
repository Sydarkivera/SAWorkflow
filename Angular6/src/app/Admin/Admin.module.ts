import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

//imports
import { TooltipModule } from '../Components/Tooltip/Tooltip.module';
import { NavbarModule } from '../Components/Navbar/Navbar.module';
import { ModalModule } from '../Components/Modal/Modal.module';
import { MessageModule } from '../Components/Message/Message.module';
import { FileBrowserModule } from '../Components/FileBrowser/FileBrowser.module';

//declarations
import { AdminHeaderComponent }    from './AdminHeader.component';
import { AdminModulesComponent }    from './AdminModules.component';
import { AdminGlobalComponent }    from './AdminGlobal.component';
import { AdminTemplatesComponent } from './AdminTemplates.component';

//providers
// import { ModuleService } from './Module.service';
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
    MessageModule,
    FileBrowserModule
  ],
  declarations: [
    AdminHeaderComponent,
    AdminModulesComponent,
    AdminGlobalComponent,
    AdminTemplatesComponent
  ],
  providers: [
    APIService
  ],
})
export class AdminModule {}
