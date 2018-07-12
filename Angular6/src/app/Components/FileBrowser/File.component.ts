import { Component, Input } from '@angular/core';

import { APIService } from '../../Services/api.service';

@Component({
  selector: 'file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.sass']
})
export class FileComponent {

  @Input() file: any;
  @Input() path: string;
  @Input() specific_path: string;
  expanded = false;
  children: any[]

  constructor(private apiService: APIService) {

  }

  ngOnInit() {
  }

  expand() {
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = true;
      if (this.file.type == "folder") {
        this.fetchFiles();
      }
    }
  }

  fetchFiles() {
    console.log(this.specific_path)
    this.apiService.getFiles(this.path, this.specific_path).subscribe((data) => {
      console.log(data)
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
