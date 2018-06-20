import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {

  @Input() file: any;
  fileName = 'demoFile';
  expanded = false;

  constructor() {

  }

  ngOnInit() {
    // this.http.get('/api/package/'+this.package_id+'/files/').subscribe((data) => {
    //   console.log(data);
    // });
  }

  select() {
    console.log(this.file.selected)
    if (this.file.selected) {
      this.file.selected = false;
    } else {
      this.file.selected = true;
    }
    // for (f of file.children) {
    //
    // }
  }
}
