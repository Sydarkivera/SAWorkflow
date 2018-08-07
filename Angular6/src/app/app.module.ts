import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// JWT authentication
import { JwtModule } from '@auth0/angular-jwt';
export function tokenGetter() {
  // console.log('getting access token')
  return localStorage.getItem('access_token');
}

import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { LoginComponent } from './login/login.component';
import { ComboChartComponent } from './Dashboard/combo-chart.component';
import { NotFoundComponent } from './NotFound.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { PackagesModule } from './Packages/Packages.module';
import { AdminModule } from './Admin/Admin.module';
import { TooltipModule } from './Components/Tooltip/Tooltip.module';
import { NavbarModule } from './Components/Navbar/Navbar.module';
import { MessageModule } from './Components/Message/Message.module';

import { ErrorInterceptor, AuthenticationService } from './Services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComboChartComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
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
