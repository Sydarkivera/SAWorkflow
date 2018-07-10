import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { ComboChartComponent } from './Dashboard/combo-chart.component';
import { NotFoundComponent } from './NotFound.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { PackagesModule } from './Packages/Packages.module';
import { AdminModule } from './Admin/Admin.module';
import { TooltipModule } from './Tooltip/Tooltip.module';
import { NavbarModule } from './Navbar/Navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComboChartComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    TooltipModule,
    NavbarModule,
    PackagesModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
