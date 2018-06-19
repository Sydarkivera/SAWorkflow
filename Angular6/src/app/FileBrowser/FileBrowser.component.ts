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

  files = []

  constructor(private http: HttpClient) {

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
