import { Component, Input } from '@angular/core';

import { APIService } from '../../Services/api.service';

@Component({
  selector: 'app-filebrowser-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.sass']
})
export class FileComponent {

  @Input() file: any;
  @Input() path: string;
  @Input() specificPath: string;
  expanded = false;
  children: Array<any>;

  constructor(private readonly apiService: APIService) {

  }

  expand(): void {
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = true;
      if (this.file.type === 'folder') {
        this.fetchFiles();
      }
    }
  }

  fetchFiles(): void {
    // console.log(this.specific_path);
    this.apiService.getFiles(this.path, this.specificPath)
    .subscribe(data => {
      // console.log(data);
      this.children = data as [any];
    });
  }

  // select() {
  //   if (this.file.selected) {
  //     this.file.selected = false;
  //   } else {
  //     this.file.selected = true;
  //   }
  // }
}
