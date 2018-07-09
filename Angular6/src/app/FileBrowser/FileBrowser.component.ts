import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'FileBrowser',
  templateUrl: './FileBrowser.component.html',
  styleUrls: ['./FileBrowser.component.css']
})
export class FileBrowserComponent {

  @Input() package_id: number;
  @Input() active: boolean = false;
  @Output() activeChange = new EventEmitter<boolean>();
  @Input() selectedFiles: any = undefined;

  files = []

  constructor(private http: HttpClient) {

  }

  getSelectedFilesForChild(child) {

    // if (!this.selectedFiles) {
    //   return undefined;
    // }

    // if (this.selectedFiles.type == "all") {
    //   return {"type": "all"}
    // } else if (this.selectedFiles.type == "selected") {
    //   // var exists = false;
    //   // for (let c of this.selectedFiles.children) {
    //   //   if (c.name == child) {
    //   //
    //   //   }
    //   // }
    //   // if (this.selectedFiles.children) {
    //   //
    //   // }
    // }
  }

  closeModal() {
    this.active = false;
    this.activeChange.emit(this.active);
  }

  ngOnInit() {
    this.http.get('/api/package/'+this.package_id+'/files/').subscribe((data) => {
      console.log(data);
      this.files = data as [any]

    });
  }
}
