import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';

//imports

//declarations
import { ModalComponent } from '../Modal/Modal.component';

//providers

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    ModalComponent
  ],
  providers: [],
  exports: [
    ModalComponent
  ]
})
export class ModalModule {}
