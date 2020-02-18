import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  authClass = 'none';

  constructor(private readonly authService: AuthenticationService, private readonly router: Router) {
    this.authClass = 'none';
  }

  ngOnInit(): void {
    this.router.events
      .subscribe(event => {
        this.authService.getRequestPermissions()
        .subscribe(res => {
          this.authClass = this.authService.permissionClass;
        });
      });
  }

}
