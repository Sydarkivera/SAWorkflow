import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: 'Modal.component.html',
  styleUrls: ['Modal.component.css']
})
export class ModalComponent {
    @Input() title: string = 'Title';
    @Input() active: boolean = false;
    @Output() activeChange = new EventEmitter<boolean>();
    // @Output() active = new EventEmitter<boolean>();
    // @Input() footer: string = 'this is footer';

    close() {
      this.active = false;
      this.activeChange.emit(this.active);
    }
}
