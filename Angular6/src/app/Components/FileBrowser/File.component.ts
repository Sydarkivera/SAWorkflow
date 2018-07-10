import { Component, Input } from '@angular/core';

@Component({
  selector: 'file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.sass']
})
export class FileComponent {

  @Input() file: any;
  expanded = false;

  constructor() {

  }

  ngOnInit() {
  }

  select() {
    if (this.file.selected) {
      this.file.selected = false;
    } else {
      this.file.selected = true;
    }
  }
}
