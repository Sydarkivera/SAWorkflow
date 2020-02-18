import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// imports
import { FileBrowserModule } from '../Components/FileBrowser/FileBrowser.module';
import { MessageModule } from '../Components/Message/Message.module';
import { ModalModule } from '../Components/Modal/Modal.module';
import { NavbarModule } from '../Components/Navbar/Navbar.module';
import { TooltipModule } from '../Components/Tooltip/Tooltip.module';

// declarations
import { AdminImagesComponent } from './DockerImages/docker-images.component';
import { AdminGlobalComponent } from './GlobalVariables/global-variables.component';
import { AdminHeaderComponent } from './Header/header.component';
import { AdminModulesComponent } from './Modules/modules.component';
import { AdminTemplatesComponent } from './Templates/templates.component';

// providers
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
  ]
})
export class AdminModule {}
