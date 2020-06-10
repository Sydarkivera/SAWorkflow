// angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// declarations
// import { FileComponent } from './file.component';
import { FileBrowserComponent } from './FileBrowser.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FileBrowserComponent,
    // FileComponent
  ],
  providers: [],
  exports: [ FileBrowserComponent ]
})
export class FileBrowserModule {}
