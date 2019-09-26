import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../Services/authentication.service';

import { Observable, of } from 'rxjs';
// import { map } from 'rxjs/operators';
import { map, filter, scan, catchError } from 'rxjs/operators';
// import { of } from 'rxjs/operators';
// import { of } from 'rxjs/observable/of';
// import { of } from 'rxjs/observable/of'


@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      return this.authService.getRequestPermissions().pipe(
        map( (data) => {
          console.log(data);
          if (data['admin']) {
            return true;
          }
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url, message: "You need to have admin permissions to access this" }});
          return false;
        }),
        catchError( (error) => {
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url, message: "You need to have admin permissions to access this" }});
          return of(false);
        })
      )

      // .subscribe(e => {
      //   if (e) {
      //     return of(true);
      //   }
      // }, () => {
      //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url, message: "You need to have admin permissions to access this" }});
      //   return of(false);
      // })

      // .subscribe(data => {
        // if (this.authService.permissionClass == "admin") {
        //   return true;
        // }
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url, message: "You need to have admin permissions to access this" }});
        // return false;
      // })

    }
}
