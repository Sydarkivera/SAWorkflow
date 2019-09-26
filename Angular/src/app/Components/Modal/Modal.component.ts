import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: 'Modal.component.html',
  styleUrls: ['Modal.component.sass']
})
export class ModalComponent {
    @Input() title: string = 'Title';
    @Input() active: boolean = false;
    @Output() activeChange = new EventEmitter<boolean>();

    close() {
      this.active = false;
      this.activeChange.emit(this.active);
    }
}
