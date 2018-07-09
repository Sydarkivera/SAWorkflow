import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';

//imports

//declarations
import { MessageComponent } from './Message.component';

//providers

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    MessageComponent
  ],
  providers: [],
  exports: [ MessageComponent ]
})
export class MessageModule {}
