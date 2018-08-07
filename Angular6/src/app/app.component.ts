import { Component } from '@angular/core';

import { AuthenticationService } from './Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {



  constructor(private authService: AuthenticationService) {
  }

}
