//angular modules
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

//declarations
import { FileBrowserComponent } from './FileBrowser.component';
import { FileComponent } from './File.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FileBrowserComponent,
    FileComponent
  ],
  providers: [],
  exports: [ FileBrowserComponent ]
})
export class FileBrowserModule {}
