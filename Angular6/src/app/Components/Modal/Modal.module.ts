import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';

//imports
import { MessageModule } from '../Message/Message.module';

//declarations
import { ModalComponent } from '../Modal/Modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MessageModule,
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
