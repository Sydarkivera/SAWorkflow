import { Component } from "@angular/core";

import { APIService } from "../Services/api.service";

import { AuthenticationService } from "../Services/authentication.service";

import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent {
  username = "";
  password = "";
  usernameError = "";
  passwordError = "";

  modalActive = false;
  modalMessage = "";
  modalType = "alert-success";

  constructor(
    private apiService: APIService,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if ("message" in params) {
        this.modalMessage = params["message"];
        this.modalActive = true;
        if ("type" in params) {
          this.modalType = params["type"];
        }
      }
    });
  }

  login() {
    var validated = true;
    //verify username and password
    if (this.username == "") {
      this.usernameError = "Username can't be empty";
      validated = false;
    }
    if (this.password == "") {
      this.passwordError = "Password can't be empty";
      validated = false;
    }

    if (!validated) {
      return;
    }

    this.authService.login(this.username, this.password).subscribe(
      data => {
        //redirect to returnUrl
        this.route.queryParams.subscribe(params => {
          if (!("returnUrl" in params)) {
            this.router.navigate(["/"]);
          }
          if (params["returnUrl"].length > 100) {
            this.router.navigate(["/"]);
          }
          this.router.navigate([params["returnUrl"]]);
        });
      },
      error => {
        //display error
        this.modalMessage = "Wrong username or password";
        this.modalActive = true;
        this.modalType = "alert-danger";
      }
    );
  }
}
