import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';
import { AdminGuard } from '../guards/admin.guard';

// Components
import { AdminHeaderComponent } from './AdminHeader.component';
import { AdminModulesComponent } from './AdminModules.component';
import { AdminGlobalComponent } from './AdminGlobal.component';
import { AdminTemplatesComponent } from './AdminTemplates.component';
import { AdminImagesComponent } from './AdminImages.component';


export const adminRoutes: Routes = [
  { path: 'admin', component: AdminHeaderComponent, canActivate: [AuthGuard, AdminGuard], children: [
    { path: '', redirectTo: 'modules', pathMatch: 'full' },
    { path: 'modules', component: AdminModulesComponent},
    { path: 'global', component: AdminGlobalComponent},
    { path: 'templates', component: AdminTemplatesComponent},
    { path: 'images', component: AdminImagesComponent},
  ]}
];
