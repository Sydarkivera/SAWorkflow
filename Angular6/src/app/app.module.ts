import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgxChartsModule} from '@swimlane/ngx-charts';
// import {NgxDnDModule} from '@swimlane/ngx-dnd';
// import { DragulaModule } from 'ng2-dragula';
// import { DragDropDirectiveModule} from "angular4-drag-drop";
// import { DndListModule } from 'ngx-drag-and-drop-lists';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PackagesComponent } from './Packages/packages.component';
import { PackagesModule } from './Packages/Packages.module';
import { AdminModule } from './Admin/Admin.module';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { ComboChartComponent } from './Dashboard/combo-chart.component';
import { NotFoundComponent } from './NotFound.component';
// import { AdminComponent } from './Admin/Admin.component';

import { TooltipModule } from './Tooltip/Tooltip.module';
import { NavbarModule } from './Navbar/Navbar.module';

@NgModule({
  declarations: [
    // FileBrowserComponent,
    AppComponent,
    DashboardComponent,
    ComboChartComponent,
    NotFoundComponent,

    // AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    TooltipModule,
    NavbarModule,
    // DndListModule,
    // NgxDnDModule,
    // DragulaModule,
    // DragDropDirectiveModule,
    PackagesModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
