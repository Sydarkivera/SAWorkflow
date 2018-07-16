import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AdminHeaderComponent } from './AdminHeader.component';
import { AdminModulesComponent } from './AdminModules.component';
import { AdminGlobalComponent } from './AdminGlobal.component';
import { AdminTemplatesComponent } from './AdminTemplates.component';
import { AdminImagesComponent } from './AdminImages.component';


export const adminRoutes: Routes = [
  { path: 'admin', component: AdminHeaderComponent, children: [
    { path: '', redirectTo: 'modules', pathMatch: 'full' },
    { path: 'modules', component: AdminModulesComponent},
    { path: 'global', component: AdminGlobalComponent},
    { path: 'templates', component: AdminTemplatesComponent},
    { path: 'images', component: AdminImagesComponent},
  ]}
];
