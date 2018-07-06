import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//imports
import { TooltipModule } from '../Tooltip/Tooltip.module';
import { NavbarModule } from '../Navbar/Navbar.module';
import { ModalModule } from '../Modal/Modal.module';

//declarations
import { AdminHeaderComponent }    from './AdminHeader.component';
import { AdminModulesComponent }    from './AdminModules.component';
import { AdminGlobalComponent }    from './AdminGlobal.component';
import { AdminProcessesComponent } from './AdminProcesses.component';
import { AdminTemplatesComponent } from './AdminTemplates.component';

//providers
import { ModuleService } from './Module.service';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    FormsModule,
    RouterModule,
    TooltipModule,
    NavbarModule,
    ModalModule
  ],
  declarations: [
    AdminHeaderComponent,
    AdminModulesComponent,
    AdminGlobalComponent,
    AdminProcessesComponent,
    AdminTemplatesComponent
  ],
  providers: [ModuleService],
})
export class AdminModule {}
