import { Component, Input, Output, EventEmitter } from '@angular/core';

import { APIService } from '../../Services/api.service';

@Component({
  selector: 'FileBrowser',
  templateUrl: './FileBrowser.component.html',
  styleUrls: ['./FileBrowser.component.sass']
})
export class FileBrowserComponent {

  @Input() package_id: number;
  @Input() active: boolean = false;
  @Output() activeChange = new EventEmitter<boolean>();
  @Input() selectedFiles: any = undefined;

  files = []

  constructor(private apiService: APIService) {

  }

  closeModal() {
    this.active = false;
    this.activeChange.emit(this.active);
  }

  ngOnInit() {
    this.apiService.getFiles(this.package_id).subscribe((data) => {
      this.files = data as [any]
    });
  }
}
