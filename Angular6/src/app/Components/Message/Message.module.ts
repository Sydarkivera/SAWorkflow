//angular modules
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//declarations
import { MessageComponent } from './Message.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    MessageComponent
  ],
  providers: [],
  exports: [ MessageComponent ]
})
export class MessageModule {}
