import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { NotFoundComponent } from './NotFound.component';
import { AdminComponent } from './Admin/Admin.component';

@NgModule({
  declarations: [
    // FileBrowserComponent,
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxChartsModule,
    // DndListModule,
    // NgxDnDModule,
    // DragulaModule,
    // DragDropDirectiveModule,
    PackagesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
