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
import { AdminHeaderComponent }    from './Header/Header.component';
import { AdminModulesComponent }    from './Modules/Modules.component';
import { AdminGlobalComponent }    from './GlobalVariables/GlobalVariables.component';
import { AdminTemplatesComponent } from './Templates/Templates.component';
import { AdminImagesComponent } from './DockerImages/DockerImages.component';

//providers
// import { ModuleService } from './Module.service';
import { APIService } from '@services/api.service';

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
    AdminTemplatesComponent,
    AdminImagesComponent
  ],
  providers: [
    APIService
  ],
})
export class AdminModule {}
