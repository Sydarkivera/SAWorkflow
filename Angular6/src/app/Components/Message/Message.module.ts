//angular modules
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

//declarations
import { MessageComponent } from './Message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageComponent
  ],
  providers: [],
  exports: [ MessageComponent ]
})
export class MessageModule {}
