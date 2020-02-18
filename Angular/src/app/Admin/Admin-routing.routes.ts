import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';
import { AdminGuard } from '../guards/admin.guard';

// Components
import { AdminHeaderComponent } from './Header/Header.component';
import { AdminModulesComponent } from './Modules/Modules.component';
import { AdminGlobalComponent } from './GlobalVariables/GlobalVariables.component';
import { AdminTemplatesComponent } from './Templates/Templates.component';
import { AdminImagesComponent } from './DockerImages/DockerImages.component';


export const adminRoutes: Routes = [
  { path: 'admin', component: AdminHeaderComponent, canActivate: [AuthGuard, AdminGuard], children: [
    { path: '', redirectTo: 'modules', pathMatch: 'full' },
    { path: 'modules', component: AdminModulesComponent},
    { path: 'global', component: AdminGlobalComponent},
    { path: 'templates', component: AdminTemplatesComponent},
    { path: 'images', component: AdminImagesComponent},
  ]}
];
