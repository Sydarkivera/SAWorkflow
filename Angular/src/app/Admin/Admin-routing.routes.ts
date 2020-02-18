import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from '../guards/admin.guard';
import { AuthGuard } from '../guards/auth.guard';

// Components
import { AdminImagesComponent } from './DockerImages/docker-images.component';
import { AdminGlobalComponent } from './GlobalVariables/global-variables.component';
import { AdminHeaderComponent } from './Header/header.component';
import { AdminModulesComponent } from './Modules/modules.component';
import { AdminTemplatesComponent } from './Templates/templates.component';

export const adminRoutes: Routes = [
  { path: 'admin', component: AdminHeaderComponent, canActivate: [AuthGuard, AdminGuard], children: [
    { path: '', redirectTo: 'modules', pathMatch: 'full' },
    { path: 'modules', component: AdminModulesComponent},
    { path: 'global', component: AdminGlobalComponent},
    { path: 'templates', component: AdminTemplatesComponent},
    { path: 'images', component: AdminImagesComponent}
  ]}
];
