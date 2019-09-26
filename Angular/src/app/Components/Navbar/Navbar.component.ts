import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'navbar',
  templateUrl: 'Navbar.component.html',
  styleUrls: ['Navbar.component.sass']
})
export class NavbarComponent {

  username = "";
  IsAuthenticated = false;

  constructor(private authService: AuthenticationService) {
    //get username
    if (authService.isAuthenticated()) {
      this.IsAuthenticated = true;
      this.username = authService.getUsername();
    }
  }

  signout() {
    this.authService.logout();
  }
}
