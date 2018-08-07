import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from "@angular/router";

// import { AuthenticationService } from '../_services';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  username = "";
  token = "";
  payload: any;
  permissions = [];
  permissionsLoaded = false;
  public permissionClass = "";


    constructor(private http: HttpClient, private router: Router) {
      this.token = localStorage.getItem('access_token');
      this.username = localStorage.getItem('username');
      this.loadPermissions();
    }

    login(username: string, password: string) {
      return this.http.post<any>('/auth/api-token-auth/', { username: username, password: password })
        .pipe(map((res:any) => {
          // login successful if there's a jwt token in the response
          if (res && res.token) {
            this.token = res.token;
            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('access_token', res.token );
            localStorage.setItem('username', username );
            this.username = username;
            this.loadToken();

            //get permission information.
            this.loadPermissions();
          }
      }));
    }

    loadToken() {
      var base64Url = this.token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      this.payload = JSON.parse(window.atob(base64));
    }

    logout(navigate = true) {
      // console.log('sign out');
        // remove user from local storage to log user out
        localStorage.removeItem('access_token');
        localStorage.removeItem('username');
        //navigate to dashboard
        if (navigate) {
          this.router.navigate(['/login'], {queryParams: {message: "Sign out successful", type: "alert-success"}});
        }
    }

    getUsername() {
      return this.username;
    }

    isAuthenticated() {
      if (localStorage.getItem('access_token')) {
        return true
      }
      return false
    }

    loadPermissions() {
      // console.log('get Permission')
      if (!this.permissionsLoaded) {
        // console.log('get request')
        // console.log(this.permissionsLoaded);
        this.permissionsLoaded = true;
        if (this.token != "") {
          // console.log(this.token)
          setTimeout(() => {
            let headers = new HttpHeaders();
            headers.append('Authorization', 'JWT ' + this.token);
            this.http.get('/api/permissions/', {headers: headers}).subscribe(data => {
              // console.log(data);
              if (data['admin']) {
                this.permissionClass = "admin";
              }
            });
          }, 100)
        }
      }
    }

    getRequestPermissions() {
      let headers = new HttpHeaders();
      headers.append('Authorization', 'JWT ' + this.token);
      return this.http.get('/api/permissions/', {headers: headers})
    }
}

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // console.log('intercept 401')
                // auto logout if 401 response returned from api
                this.authenticationService.logout(false);
                this.router.navigate(['/login'], {queryParams: {message: "Session has expired, please sign in again", type: "alert-danger", returnUrl: this.router.url}});
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
