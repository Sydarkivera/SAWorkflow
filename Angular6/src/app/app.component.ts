import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  authClass = 'none'

  constructor(private authService: AuthenticationService, private router: Router) {
    this.authClass = 'none';
  }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        this.authService.getRequestPermissions().subscribe((res) => {
          this.authClass = this.authService.permissionClass;
        })
      });
  }

}
