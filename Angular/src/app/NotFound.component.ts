import { Component } from '@angular/core';

// S simple component to let the user know that the path they tried to navigate to does not exist.
@Component({
  selector: 'notFound',
  template: "<h1>Path not found </h1>"
})
export class NotFoundComponent {

}
