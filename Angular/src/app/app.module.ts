import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// JWT authentication
import { JwtModule } from '@auth0/angular-jwt';
export const tokenGetter = () => (
  localStorage.getItem('access_token')
);

import { AppComponent } from './app.component';
import { ComboChartComponent } from './Dashboard/combo-chart.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './NotFound.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AdminModule } from './Admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { MessageModule } from './Components/Message/Message.module';
import { NavbarModule } from './Components/Navbar/Navbar.module';
import { TooltipModule } from './Components/Tooltip/Tooltip.module';
import { PackagesModule } from './Packages/Packages.module';

import { AuthenticationService, ErrorInterceptor } from './Services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComboChartComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost'],
        blacklistedRoutes: ['localhost/auth/'],
        authScheme: 'JWT '
      }
    }),
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    TooltipModule,
    NavbarModule,
    PackagesModule,
    AdminModule,
    MessageModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
