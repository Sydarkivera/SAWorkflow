import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'message',
  templateUrl: 'Message.component.html',
  styleUrls: ['Message.component.sass'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0, display: 'none' })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', [style({ 'display': 'block' }), animate('300ms')]),
    ])
  ]
})
export class MessageComponent {
  visiblityState = 'hidden'
    // @Input() title: string = 'Title';
    // @Input() active: boolean = false;
    // @Output() activeChange = new EventEmitter<boolean>();
    @Input() duration: number = 3000;
    @Input() type: string = 'alert-success'

    private _active: boolean = false;
    @Output() activeChange = new EventEmitter<boolean>();
    @Input() set active(active: boolean) {
      
      this._active = active;
      if (active) {
        this.visiblityState = 'shown';
        setTimeout(() => {
          this.visiblityState = 'hidden'
          this._active = false
          this.activeChange.emit(false)
        }, this.duration)
      }
    }

    get active(): boolean {
        return this._active;
    }

    // close() {
      // this.active = false;
      // this.activeChange.emit(this.active);
    // }
}
