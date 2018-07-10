//angular modules
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

//declarations
import { FileBrowserComponent } from './FileBrowser.component';
import { FileComponent } from './File.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FileBrowserComponent,
    FileComponent
  ],
  providers: [],
  exports: [ FileBrowserComponent ]
})
export class FileBrowserModule {}
