import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgxChartsModule} from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PackagesComponent } from './Packages/packages.component';
import { PackagesModule } from './Packages/Packages.module';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { NotFoundComponent } from './NotFound.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxChartsModule,
    PackagesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
