(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Admin/Admin-routing.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/Admin/Admin-routing.routes.ts ***!
  \***********************************************/
/*! exports provided: adminRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminRoutes", function() { return adminRoutes; });
/* harmony import */ var _AdminHeader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminHeader.component */ "./src/app/Admin/AdminHeader.component.ts");
/* harmony import */ var _AdminModules_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminModules.component */ "./src/app/Admin/AdminModules.component.ts");
/* harmony import */ var _AdminGlobal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminGlobal.component */ "./src/app/Admin/AdminGlobal.component.ts");
/* harmony import */ var _AdminTemplates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdminTemplates.component */ "./src/app/Admin/AdminTemplates.component.ts");




// import { PackageComponent }    from './Package.component';
// import { PackageHeaderComponent }    from './PackageHeader.component';
// import { PackageDashboardComponent } from './PackageDashboard.component';
// import { PackageStatusComponent }    from './PackageStatus.component';
var adminRoutes = [
    { path: 'admin', component: _AdminHeader_component__WEBPACK_IMPORTED_MODULE_0__["AdminHeaderComponent"], children: [
            { path: '', redirectTo: 'modules', pathMatch: 'full' },
            { path: 'modules', component: _AdminModules_component__WEBPACK_IMPORTED_MODULE_1__["AdminModulesComponent"] },
            { path: 'global', component: _AdminGlobal_component__WEBPACK_IMPORTED_MODULE_2__["AdminGlobalComponent"] },
            // { path: 'processes', component: AdminProcessesComponent},
            { path: 'templates', component: _AdminTemplates_component__WEBPACK_IMPORTED_MODULE_3__["AdminTemplatesComponent"] },
        ] }
];


/***/ }),

/***/ "./src/app/Admin/Admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/Admin/Admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Tooltip/Tooltip.module */ "./src/app/Tooltip/Tooltip.module.ts");
/* harmony import */ var _Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Navbar/Navbar.module */ "./src/app/Navbar/Navbar.module.ts");
/* harmony import */ var _Modal_Modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Modal/Modal.module */ "./src/app/Modal/Modal.module.ts");
/* harmony import */ var _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Message/Message.module */ "./src/app/Components/Message/Message.module.ts");
/* harmony import */ var _AdminHeader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AdminHeader.component */ "./src/app/Admin/AdminHeader.component.ts");
/* harmony import */ var _AdminModules_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AdminModules.component */ "./src/app/Admin/AdminModules.component.ts");
/* harmony import */ var _AdminGlobal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AdminGlobal.component */ "./src/app/Admin/AdminGlobal.component.ts");
/* harmony import */ var _AdminProcesses_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AdminProcesses.component */ "./src/app/Admin/AdminProcesses.component.ts");
/* harmony import */ var _AdminTemplates_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AdminTemplates.component */ "./src/app/Admin/AdminTemplates.component.ts");
/* harmony import */ var _Module_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Module.service */ "./src/app/Admin/Module.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//imports




//declarations





//providers

var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
                _Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_6__["NavbarModule"],
                _Modal_Modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_8__["MessageModule"]
            ],
            declarations: [
                _AdminHeader_component__WEBPACK_IMPORTED_MODULE_9__["AdminHeaderComponent"],
                _AdminModules_component__WEBPACK_IMPORTED_MODULE_10__["AdminModulesComponent"],
                _AdminGlobal_component__WEBPACK_IMPORTED_MODULE_11__["AdminGlobalComponent"],
                _AdminProcesses_component__WEBPACK_IMPORTED_MODULE_12__["AdminProcessesComponent"],
                _AdminTemplates_component__WEBPACK_IMPORTED_MODULE_13__["AdminTemplatesComponent"]
            ],
            providers: [_Module_service__WEBPACK_IMPORTED_MODULE_14__["ModuleService"]],
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/Admin/AdminGlobal.component.html":
/*!**************************************************!*\
  !*** ./src/app/Admin/AdminGlobal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    <h5 style=\"float:left\">Paths</h5>\n    <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">Save changes</button>\n  </div>\n  <div class=\"card-body\">\n\n    <!-- <div class=\"alert alert-success\" [@visibilityChanged]=\"visiblityState\" role=\"alert\">\n      All changes have been saved!\n    </div> -->\n    <message duration=\"3000\" [(active)]=\"messageVisible\">All changes have been saved!</message>\n\n    <div class=\"form-group\">\n      <label for=\"inputName\">Working directory</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"work_dir_path\" tooltip=\"A directory for temporary project files to be stored while they are in use in A.P.P\" tooltipPlacement=\"bottom\" placeholder=\"/code/workdir\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputName\">Packages directory</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"packages_path\" tooltip=\"The location of packages to be included in A.P.P. i.e. Workarea in EPP\" tooltipPlacement=\"bottom\" placeholder=\"/ESSArch/data/epp/workarea\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputName\">APP log file (premis)</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"premis_file_name\" tooltip=\"The name of the premis log file generated by A.P.P\" tooltipPlacement=\"bottom\" placeholder=\"app_log.xml\">\n    </div>\n    <button class=\"btn btn-success\" (click)=\"save()\">Save changes</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Admin/AdminGlobal.component.sass":
/*!**************************************************!*\
  !*** ./src/app/Admin/AdminGlobal.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-label {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/Admin/AdminGlobal.component.ts":
/*!************************************************!*\
  !*** ./src/app/Admin/AdminGlobal.component.ts ***!
  \************************************************/
/*! exports provided: AdminGlobalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGlobalComponent", function() { return AdminGlobalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Module.service */ "./src/app/Admin/Module.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGlobalComponent = /** @class */ (function () {
    function AdminGlobalComponent(moduleService) {
        this.moduleService = moduleService;
        this.work_dir_path = "";
        this.packages_path = "";
        this.premis_file_name = "";
        this.messageVisible = false;
    }
    AdminGlobalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moduleService.getVariables().subscribe(function (data) {
            // console.log(data)
            _this.work_dir_path = data['work_dir_path'];
            _this.packages_path = data['packages_path'];
            _this.premis_file_name = data['premis_file_name'];
        });
    };
    AdminGlobalComponent.prototype.save = function () {
        var _this = this;
        var data = {
            work_dir_path: this.work_dir_path,
            packages_path: this.packages_path,
            premis_file_name: this.premis_file_name
        };
        this.moduleService.setVariables(data).subscribe(function (response) {
            _this.messageVisible = true;
        });
    };
    AdminGlobalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./AdminGlobal.component.html */ "./src/app/Admin/AdminGlobal.component.html"),
            styles: [__webpack_require__(/*! ./AdminGlobal.component.sass */ "./src/app/Admin/AdminGlobal.component.sass")]
        }),
        __metadata("design:paramtypes", [_Module_service__WEBPACK_IMPORTED_MODULE_1__["ModuleService"]])
    ], AdminGlobalComponent);
    return AdminGlobalComponent;
}());



/***/ }),

/***/ "./src/app/Admin/AdminHeader.component.css":
/*!*************************************************!*\
  !*** ./src/app/Admin/AdminHeader.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Admin/AdminHeader.component.html":
/*!**************************************************!*\
  !*** ./src/app/Admin/AdminHeader.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar>\n  <!-- <li class=\"nav-link\"  routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['modules']\">Modules</a>\n  </li>\n  <li class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['global']\">Global Settings</a>\n  </li>\n  <li class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['processes']\">Default processes</a>\n  </li> -->\n</navbar>\n\n<!-- <ul class=\"nav nav-tabs\"> -->\n\n  <!-- <li class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['status']\">Status</a>\n  </li> -->\n<!-- </ul> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Admin/AdminHeader.component.ts":
/*!************************************************!*\
  !*** ./src/app/Admin/AdminHeader.component.ts ***!
  \************************************************/
/*! exports provided: AdminHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function() { return AdminHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { PackagesService } from './Packages.service'
// import { PackageDetailService } from './PackageDetail.service';
var AdminHeaderComponent = /** @class */ (function () {
    function AdminHeaderComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'new title';
        this.name = "";
        this.showDropDown = false;
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
        // console.log(this.router.url);
        // console.log(this.route);
        // this.sub = this.route.params.subscribe(params => {
        //    this.id = +params['id'];
        //
        //    this.packageService.getPackage(this.id).subscribe((data) => {
        //      // console.log(data);
        //      // this.package = data;
        //      this.name = data['name'];
        //    });
        // });
        // this.packageService.getAllPackages().subscribe((data) => {
        //   // console.log(data);
        //   this.packages = data as [any];
        //   // this.name = data['name'];
        // });
    };
    AdminHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adminHeader',
            template: __webpack_require__(/*! ./AdminHeader.component.html */ "./src/app/Admin/AdminHeader.component.html"),
            styles: [__webpack_require__(/*! ./AdminHeader.component.css */ "./src/app/Admin/AdminHeader.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());



/***/ }),

/***/ "./src/app/Admin/AdminModules.component.html":
/*!***************************************************!*\
  !*** ./src/app/Admin/AdminModules.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <!-- Existing tools, left side -->\n  <div class=\"col-lg-4\">\n    <h4>Existing Tools</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\">\n        Name\n      </div>\n      <div class=\"list-group list-group-flush\">\n        <div\n          *ngFor=\"let module of modules\"\n          class=\"list-group-item list-group-item-action\"\n          (click)=\"selectModule(module)\"\n          [class.active]=\"module.module_id == selected_module.module_id\"\n          >\n          <div class=\"d-flex w-100 justify-content-between\">\n            <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n            <i class=\"material-icons icon-button\" (click)=\"deleteModule(module)\">delete</i>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-success\" (click)=\"addNewModule()\">Add new tool</button>\n    <button class=\"btn\" (click)=\"importModule()\">Import tool</button>\n  </div>\n\n  <!-- Detail view of tool -->\n\n  <div class=\"col-lg-8\" *ngIf=\"selected_module.module_id != -1\">\n    <h4>{{title}}</h4>\n\n    <!-- display the form if there is one -->\n    <div class=\"card\" *ngIf=\"selected_module.form.length > 0\">\n      <div class=\"card-header\">\n        <h5>Form preview</h5>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\" *ngFor=\"let input of selected_module.form\">\n          <!-- <input class=\"form-check-input\" type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"input.default\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/> -->\n          <!-- <label class=\"form-check-label\" for=\"{{input.identifier}}\" class=\"input-label\"  [class.form-check-label]=\"input.type=='checkbox'\"> -->\n            <!-- {{input.label}} -->\n          <!-- </label> -->\n          <!-- <input class=\"form-control\" type=\"text\" *ngIf=\"input.type=='text'\" [id]=\"input.identifier\" [value]=\"input.default ? input.default : ''\" (keyup)=\"setProcessValue(input.identifier, $event.target.value)\" (change)=\"setProcessValue(input.identifier, $event.target.value)\"/> -->\n          <div class=\"form-check\" *ngIf=\"input.type=='checkbox'\">\n            <input class=\"form-check-input\" type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"input.default\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n            <label class=\"form-check-label\" for=\"{{input.identifier}}\">\n              {{input.label}}\n            </label>\n          </div>\n          <ng-template [ngIf]=\"input.type=='text'\">\n            <label for=\"{{input.identifier}}\">{{input.label}}</label>\n            <input type=\"text\" class=\"form-control\" [id]=\"input.identifier\" placeholder=\"{{input.identifier}}\" [value]=\"input.default ? input.default : ''\" (keyup)=\"setProcessValue(input.identifier, $event.target.value)\" (change)=\"setProcessValue(input.identifier, $event.target.value)\">\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <!-- Display the general settings -->\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 style=\"float:left\">Settings</h5>\n        <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">Save changes</button>\n      </div>\n      <div class=\"card-body\">\n        <message duration=\"3000\" [(active)]=\"messageVisible\">All changes have been saved!</message>\n        <div class=\"form-group\">\n          <label for=\"inputName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Virus scan ClamAV\" [(ngModel)]=\"selected_module.name\">\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"inputHidden\" [(ngModel)]=\"selected_module.hidden\">\n            <label class=\"form-check-label\" for=\"inputHidden\">Hidden</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputFileFilter\">File filter</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputFileFilter\" [(ngModel)]=\"selected_module.filter\" placeholder=\".*(\\.pdf)\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputForm\">Form json</label>\n          <textarea class=\"form-control\" id=\"inputForm\" rows=\"7\" [(ngModel)]=\"formJson\"></textarea>\n        </div>\n\n        <p class=\"Error-text\">{{formJsonError}}</p>\n        <p>Avaliable types: checkbox, text (Should I create a ui for configuring the form or should I write documentation?)</p>\n\n        <!-- Display logfile checks -->\n        <h5 class=\"input-label\">\n          What qualifies succes in the log files:\n        </h5>\n        <div *ngFor=\"let filter of selected_module.resultFilter\">\n          <div class=\"form-row\">\n            <select class=\"custom-select col-sm-3 my-1 my-auto\" [(ngModel)]=\"filter.type\">\n              <option value=\"Containing\">Containing</option>\n              <option value=\"Not containing\">Not containing</option>\n            </select>\n            <!-- <input type=\"text\" [(ngModel)]=\"filter.value\"/> -->\n            <div class=\"form-group my-auto\">\n              <!-- <label>Name</label> -->\n              <input type=\"text\" class=\"form-control\" placeholder=\"[\\w\\W]*pattern[\\w\\W]*\" [(ngModel)]=\"filter.value\">\n            </div>\n            <i class=\"material-icons icon-button my-auto\" (click)=\"removeResultFilter(filter)\">delete</i>\n          </div>\n        </div>\n        <hr>\n        <p>Add a new filter</p>\n        <div class=\"form-row\">\n          <select class=\"custom-select col-sm-3 my-1 my-auto\" [(ngModel)]=\"newResultFilter.type\">\n            <option value=\"Containing\">Containing</option>\n            <option value=\"Not containing\">Not containing</option>\n          </select>\n          <!-- <input type=\"text\" [(ngModel)]=\"filter.value\"/> -->\n          <div class=\"form-group my-auto\">\n            <!-- <label>Name</label> -->\n            <input type=\"text\" class=\"form-control\" placeholder=\"[\\w\\W]*pattern[\\w\\W]*\" [(ngModel)]=\"newResultFilter.value\">\n          </div>\n          <i class=\"material-icons icon-button my-auto\" (click)=\"addResultFilter(filter)\">add</i>\n        </div>\n      </div>\n    </div>\n\n    <!-- Display the actual command to be run -->\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 style=\"float:left\">Command</h5>\n        <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">Save changes</button>\n      </div>\n      <div class=\"card-body\">\n\n        <message duration=\"3000\" [(active)]=\"messageVisible\">All changes have been saved!</message>\n        <label class=\"input-label\">\n          Type:\n          <select class=\"custom-select col-sm-3 my-1 my-auto\" [(ngModel)]=\"selected_module.type\">\n            <option value=\"Command\">Command</option>\n            <option value=\"Python module\">Python module</option>\n          </select>\n        </label>\n        <div class=\"form-group\" *ngIf=\"selected_module.type == 'Command'\">\n          <label for=\"inputForm\">Command</label>\n          <textarea class=\"form-control\" id=\"inputForm\" rows=\"7\" [(ngModel)]=\"commandJson\" ></textarea>\n        </div>\n        <div class=\"form-group\" *ngIf=\"selected_module.type == 'Python module'\">\n          <label for=\"inputName\">Python Module</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Path to python file\" [(ngModel)]=\"selected_module.python_module\">\n        </div>\n        <p class=\"Error-text\">{{commandJsonError}}</p>\n        <div class=\"form-group\">\n          <div class=\"form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"inputMultipleFiles\" [(ngModel)]=\"selected_module.multifile\">\n            <label class=\"form-check-label\" for=\"inputMultipleFiles\">Run on multiple files</label>\n          </div>\n        </div>\n        <button class=\"btn btn-success\" (click)=\"save()\">Save changes</button>\n        <p>Export will export a tar file containing the json strucutre and the python file, if it exists</p>\n      </div>\n    </div>\n    <a class=\"btn btn-secondary\" href=\"/api/module/{{selected_module.module_id}}/export/\">Export tool</a>\n    <button class=\"btn btn-danger\" (click)=\"deleteModule(selected_module)\">Delete</button>\n    <div class=\"allow-scroll-beneath-page-end\"></div>\n  </div>\n</div>\n\n<modal [(active)]=\"modalactive\">\n  <div modal-body>\n    <form method=\"post\" enctype=\"multipart/form-data\">\n      <div class=\"custom-file\" id=\"customFile\" lang=\"en\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"exampleInputFile\" (change)=\"fileSelected($event)\" name=\"import.tar\">\n        <label class=\"custom-file-label\" for=\"exampleInputFile\">\n          {{fileName}}\n        </label>\n      </div>\n      <button type=\"submit\" (click)=\"uploadFile()\">Upload</button>\n    </form>\n  </div>\n</modal>\n\n<!-- TODO: export, import, delete -->\n"

/***/ }),

/***/ "./src/app/Admin/AdminModules.component.sass":
/*!***************************************************!*\
  !*** ./src/app/Admin/AdminModules.component.sass ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.input-label {\n  width: 100%; }\n\n.Error-text {\n  color: red; }\n\n.active {\n  background-color: #ddd;\n  border-color: #bc044e; }\n\n.active label, .active p, .active i, .active small {\n    color: #333; }\n\ntextarea {\n  width: 100%; }\n\n.allow-scroll-beneath-page-end {\n  height: 300px; }\n\n.card {\n  margin-bottom: 10px; }\n\n.form-row div, .form-row select {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/Admin/AdminModules.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Admin/AdminModules.component.ts ***!
  \*************************************************/
/*! exports provided: AdminModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModulesComponent", function() { return AdminModulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _PackageDetail_PackageDetail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PackageDetail/PackageDetail.service */ "./src/app/PackageDetail/PackageDetail.service.ts");
/* harmony import */ var _Module_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Module.service */ "./src/app/Admin/Module.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminModulesComponent = /** @class */ (function () {
    function AdminModulesComponent(packageService, moduleService) {
        this.packageService = packageService;
        this.moduleService = moduleService;
        this.selected_module = { module_id: -1 };
        this.title = "";
        this.formJson = "";
        this.commandJson = "";
        this.formJsonError = "";
        this.commandJsonError = "";
        this.resultFilters = [];
        this.newResultFilter = { type: 'Containing', value: '' };
        this.modalactive = false;
        this.fileName = "Select file...";
        this.messageVisible = false;
    }
    AdminModulesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.packageService.getModules().subscribe(function (data) {
            _this.modules = data;
            _this.setModule(_this.modules[_this.modules.length - 1]);
        });
    };
    AdminModulesComponent.prototype.setModule = function (mod) {
        console.log(mod);
        this.selected_module = JSON.parse(JSON.stringify(mod));
        this.title = this.selected_module.name;
        this.formJson = this.getJson(this.selected_module.form);
        this.commandJson = this.getJson(this.selected_module.command);
    };
    AdminModulesComponent.prototype.addNewModule = function () {
        this.selected_module = { module_id: -2, form: [], type: "Command" };
        this.title = "New module";
        this.formJson = "[]";
        this.commandJson = "[]";
    };
    AdminModulesComponent.prototype.deleteModule = function (dmodule) {
        var _this = this;
        if (confirm("Are you sure to delete " + dmodule.name)) {
            this.moduleService.deleteModule(dmodule.module_id).subscribe(function (data) {
                _this.modules = _this.modules.filter(function (item) {
                    if (item.module_id == dmodule.module_id) {
                        return false;
                    }
                    return true;
                });
                _this.selected_module = { module_id: -1 };
            });
        }
    };
    AdminModulesComponent.prototype.selectModule = function (mod) {
        if (!this.selected_module || this.selected_module.module_id != mod.module_id) {
            this.setModule(mod);
        }
        else {
            this.selected_module = { module_id: -1 };
        }
    };
    AdminModulesComponent.prototype.renderCommand = function () {
        var res = '';
        for (var _i = 0, _a = this.selected_module.command; _i < _a.length; _i++) {
            var cp = _a[_i];
            res += cp.value + ' ';
        }
        return res;
    };
    AdminModulesComponent.prototype.getJson = function (data) {
        return JSON.stringify(data, null, 4);
    };
    AdminModulesComponent.prototype.save = function () {
        //validate first!
        var _this = this;
        try {
            this.selected_module.form = JSON.parse(this.formJson);
            this.formJsonError = "";
        }
        catch (e) {
            console.log("Error", e.message);
            this.formJsonError = e.message;
            return false;
        }
        try {
            this.selected_module.command = JSON.parse(this.commandJson);
            this.commandJsonError = "";
        }
        catch (e) {
            console.log("Error", e.message);
            this.commandJsonError = e.message;
            return false;
        }
        var data = {};
        if (this.selected_module.name != undefined) {
            data["name"] = this.selected_module.name;
        }
        if (this.selected_module.hidden != undefined) {
            data["hidden"] = this.selected_module.hidden;
        }
        if (this.selected_module.form != undefined) {
            data["form"] = this.selected_module.form;
        }
        if (this.selected_module.type != undefined) {
            data["type"] = this.selected_module.type;
        }
        if (this.selected_module.command != undefined) {
            data["command"] = this.selected_module.command;
        }
        if (this.selected_module.python_module != undefined) {
            data["python_module"] = this.selected_module.python_module;
        }
        if (this.selected_module.multifile != undefined) {
            data["multifile"] = this.selected_module.multifile;
        }
        if (this.selected_module.filter != undefined) {
            data["filter"] = this.selected_module.filter;
        }
        if (this.selected_module.resultFilter != undefined) {
            data["resultFilter"] = this.selected_module.resultFilter;
        }
        console.log(this.selected_module.type);
        console.log(this.selected_module.command);
        console.log(this.selected_module.python_module);
        if (this.selected_module.type == 'Command') {
            if (!this.selected_module.command || this.selected_module.command.length <= 0) {
                this.commandJsonError = "to save a new tool, the command needs to be configured";
                return false;
            }
        }
        else if (this.selected_module.type == 'Python module') {
            if (!this.selected_module.python_module || this.selected_module.python_module == "") {
                this.commandJsonError = "to save a new tool, the python file needs to be specified";
                return false;
            }
        }
        if (this.selected_module.module_id != -2) {
            this.moduleService.saveData(this.selected_module.module_id, data).subscribe(function (data) {
                _this.messageVisible = true;
                for (var i in _this.modules) {
                    var m = _this.modules[i];
                    if (m.module_id == data["module_id"]) {
                        _this.modules[i] = data;
                        _this.setModule(data);
                    }
                }
            });
        }
        else {
            delete this.selected_module.module_id;
            this.moduleService.createModule(data).subscribe(function (data) {
                _this.messageVisible = true;
                _this.setModule(data);
                _this.modules.push(data);
                _this.modules = _this.modules.sort(function (a, b) {
                    if (a.name.toUpperCase() > b.name.toUpperCase()) {
                        return 1;
                    }
                    return -1;
                });
            });
        }
    };
    AdminModulesComponent.prototype.importModule = function () {
        this.modalactive = true;
    };
    AdminModulesComponent.prototype.fileSelected = function (e) {
        // console.log(e)
        if (e.target.files.length > 0) {
            //check fileFormat
            if (!e.target.files[0].name.endsWith('.tar')) {
                console.log('error, wrong fileType');
                this.fileName = "Select file...";
            }
            else {
                this.file = e.target.files[0];
                this.fileName = this.file.name;
            }
        }
    };
    AdminModulesComponent.prototype.uploadFile = function () {
        var _this = this;
        // console.log('upload');
        if (!this.file.name.endsWith('.tar')) {
            console.log('error, wrong fileType');
            return;
        }
        this.modalactive = false;
        this.fileName = "Select file...";
        var formData = new FormData();
        formData.append('file', this.file, 'import.tar');
        this.moduleService.importModule(formData).subscribe(function (data) {
            if (data.type == 4) {
                // console.log(data['body']);
                _this.modules = data['body'];
            }
            // this.setModule(this.modules[this.modules.length - 1]);
        });
    };
    AdminModulesComponent.prototype.setJSONForm = function (event) {
        // console.log(event)
        try {
            this.selected_module.form = JSON.parse(event);
        }
        catch (e) {
            console.log("Error", e.message);
            return false;
        }
    };
    AdminModulesComponent.prototype.addResultFilter = function () {
        this.selected_module.resultFilter.push(__assign({}, this.newResultFilter));
        this.newResultFilter = { type: 'Containing', value: '' };
    };
    AdminModulesComponent.prototype.removeResultFilter = function (filter) {
        var index = this.selected_module.resultFilter.indexOf(filter);
        if (index > -1) {
            this.selected_module.resultFilter.splice(index, 1);
        }
    };
    AdminModulesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./AdminModules.component.html */ "./src/app/Admin/AdminModules.component.html"),
            styles: [__webpack_require__(/*! ./AdminModules.component.sass */ "./src/app/Admin/AdminModules.component.sass")]
        }),
        __metadata("design:paramtypes", [_PackageDetail_PackageDetail_service__WEBPACK_IMPORTED_MODULE_1__["PackageDetailService"], _Module_service__WEBPACK_IMPORTED_MODULE_2__["ModuleService"]])
    ], AdminModulesComponent);
    return AdminModulesComponent;
}());



/***/ }),

/***/ "./src/app/Admin/AdminProcesses.component.css":
/*!****************************************************!*\
  !*** ./src/app/Admin/AdminProcesses.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.placeholder {\n  opacity: 0.4;\n}\n"

/***/ }),

/***/ "./src/app/Admin/AdminProcesses.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Admin/AdminProcesses.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n      <h4>Modules to be run before each package</h4>\n      <div class=\"card\">\n          <div class=\"card-header  company-table-head\"\n          (dragover)=\"allowDropTop($event, 0)\"\n          (drop)=\"onDrop($event, 0)\">\n              Module Name\n          </div>\n          <div class=\"list-group list-group-flush\">\n            <!-- <div *ngIf=\"placeholderLocation==0.5\" class=\"list-group-item list-group-item-action\">\n            </div> -->\n              <ng-template\n              ngFor\n              let-process\n              [ngForOf]=\"startTemplate.processes\"\n              >\n                <div\n                    draggable=\"true\"\n                    (dragstart)=\"dragStart($event, process.process_id, 'startTemplate', process.name)\"\n                    (drop)=\"onDrop($event, 0)\"\n                    (dragover)=\"allowDrop($event, process.order, 0)\"\n                    class=\"list-group-item list-group-item-action\"\n                    [class.active]=\"process.process_id==selected_process_id\"\n                    [class.placeholder]=\"process.type=='placeholder'\"\n                  >\n                  <div class=\"d-flex w-100 justify-content-between\">\n                      <p\n                      style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectProcess(process)\">\n                        {{process.name}}\n                      </p>\n                      <!-- <i class=\"material-icons\">arrow_back</i> -->\n                      <i *ngIf=\"process.order != 0\" class=\"material-icons icon-button\" (click)=\"moveUp(process, 0)\">keyboard_arrow_up</i>\n                      <i *ngIf=\"process.order < startTemplate.processes.length-1\" class=\"material-icons icon-button\" (click)=\"moveDown(process, 0)\">keyboard_arrow_down</i>\n                      <i class=\"material-icons icon-button\" (click)=\"deleteProcess(process, 0)\">delete</i>\n                      <i class=\"material-icons drag-handle\">drag_handle</i>\n                  </div>\n                  <ng-template [ngIf]=\"process.process_id==selected_process_id\">\n                      <form *ngIf=\"process.form.length>0\">\n                              <label *ngFor=\"let input of process.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n                                {{input.label}}\n                                <!-- <input type=\"text\" *ngIf=\"input.type=='text'\" [id]=\"input.identifier\" [value]=\"process.values[input.identifier]\" (keyup)=\"setProcessValue(input.identifier, $event.target.value)\" (change)=\"setProcessValue(input.identifier, $event.target.value)\"/> -->\n                                <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"process.value[input.identifier]\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n                                <!-- <button class=\"btn\" (click)=\"openFileBrowser()\">Files: All</button> -->\n                              </label>\n                      </form>\n                  </ng-template>\n                </div>\n              </ng-template>\n          </div>\n      </div>\n      <h4>Modules to be run after each package</h4>\n      <div class=\"card\">\n          <div class=\"card-header  company-table-head\"\n          (dragover)=\"allowDropTop($event, 1)\"\n          (drop)=\"onDrop($event, 1)\">\n              Module Name\n          </div>\n          <div class=\"list-group list-group-flush\">\n            <!-- <div *ngIf=\"placeholderLocation==0.5\" class=\"list-group-item list-group-item-action\">\n            </div> -->\n              <ng-template\n              ngFor\n              let-process\n              [ngForOf]=\"endTemplate.processes\"\n              >\n                <div\n                    draggable=\"true\"\n                    (dragstart)=\"dragStart($event, process.process_id, 'endTemplate', process.name)\"\n                    (drop)=\"onDrop($event, 1)\"\n                    (dragover)=\"allowDrop($event, process.order, 1)\"\n                    class=\"list-group-item list-group-item-action\"\n                    [class.active]=\"process.process_id==selected_process_id\"\n                    [class.placeholder]=\"process.type=='placeholder'\"\n                  >\n                  <div class=\"d-flex w-100 justify-content-between\">\n                      <p\n                      style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectProcess(process)\">\n                        {{process.name}}\n                      </p>\n                      <!-- <i class=\"material-icons\">arrow_back</i> -->\n                      <i *ngIf=\"process.order != 0\" class=\"material-icons icon-button\" (click)=\"moveUp(process, 1)\">keyboard_arrow_up</i>\n                      <i *ngIf=\"process.order < endTemplate.processes.length-1\" class=\"material-icons icon-button\" (click)=\"moveDown(process, 1)\">keyboard_arrow_down</i>\n                      <i class=\"material-icons icon-button\" (click)=\"deleteProcess(process, 1)\">delete</i>\n                      <i class=\"material-icons drag-handle\">drag_handle</i>\n                      <small>{{process.status}}</small>\n                  </div>\n                  <ng-template [ngIf]=\"process.process_id==selected_process_id\">\n                      <form *ngIf=\"process.form.length>0\">\n                              <label *ngFor=\"let input of process.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n                                {{input.label}}\n                                <!-- <input type=\"text\" *ngIf=\"input.type=='text'\" [id]=\"input.identifier\" [value]=\"process.values[input.identifier]\" (keyup)=\"setProcessValue(input.identifier, $event.target.value)\" (change)=\"setProcessValue(input.identifier, $event.target.value)\"/> -->\n                                <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"process.value[input.identifier]\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n                                <!-- <button class=\"btn\" (click)=\"openFileBrowser()\">Files: All</button> -->\n                              </label>\n                      </form>\n                  </ng-template>\n                </div>\n              </ng-template>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-lg-6\" data-query=\"view(Mooo)\">\n      <h4>Avaliable Tools</h4>\n      <div class=\"card\">\n           <div class=\"card-header company-table-head\">\n              Name\n           </div>\n           <ng-template\n           ngFor\n           let-module\n           [ngForOf]=\"modules\"\n           >\n           <div class=\"list-group list-group-flush\">\n               <div draggable=\"true\" (dragstart)=\"dragStart($event, module.module_id, 'module', module.name)\" (dragend)=\"onRelease($event)\" class=\"list-group-item list-group-item-action\">\n                 <div class=\"d-flex w-100 justify-content-between\">\n                  <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n                  <i class=\"material-icons drag-handle\">drag_handle</i>\n                 </div>\n              </div>\n           </div>\n         </ng-template>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Admin/AdminProcesses.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Admin/AdminProcesses.component.ts ***!
  \***************************************************/
/*! exports provided: AdminProcessesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProcessesComponent", function() { return AdminProcessesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Module.service */ "./src/app/Admin/Module.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { PackageDetailService } from '../PackageDetail/PackageDetail.service';

var AdminProcessesComponent = /** @class */ (function () {
    function AdminProcessesComponent(moduleService) {
        this.moduleService = moduleService;
        this.workDir = "";
        this.startTemplate = { processes: [] };
        this.endTemplate = { processes: [] };
        this.selected_process_id = -1;
        this.templates = [undefined, undefined];
    }
    AdminProcessesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moduleService.getTemplate(0).subscribe(function (data) {
            console.log(data);
            _this.startTemplate = data;
            _this.templates[0] = data;
        });
        this.moduleService.getTemplate(1).subscribe(function (data) {
            console.log(data);
            _this.endTemplate = data;
            _this.templates[1] = data;
        });
        this.moduleService.getModules().subscribe(function (data) {
            _this.modules = data;
            // this.setModule(this.modules[this.modules.length-1]);
        });
    };
    AdminProcessesComponent.prototype.selectProcess = function (process) {
        if (this.selected_process_id != process.process_id) {
            this.selected_process = process;
            this.selected_process_id = process.process_id;
        }
        else {
            this.selected_process = undefined;
            this.selected_process_id = -1;
        }
    };
    AdminProcessesComponent.prototype.setProcessValue = function (id, value) {
        var values = this.selected_process.value;
        values[id] = value;
        var data = { "value": values };
        this.moduleService.saveProcess(data, this.selected_process_id).subscribe(function (data) {
            console.log('data chagned');
            console.log(data);
        });
    };
    AdminProcessesComponent.prototype.deleteProcess = function (process, template_id) {
        this.moduleService.deleteProcess(process.process_id).subscribe(function (data) {
        });
        this.templates[template_id].processes = this.templates[template_id].processes.filter(function (item) {
            return item.process_id != process.process_id;
        });
        // move up all processes below
        var data = [];
        for (var index in this.templates[template_id].processes) {
            var item = this.templates[template_id].processes[index];
            if (item.type != 'placeholder' && item.order > process.order) {
                item.order -= 1;
                data.push({ "order": item.order, "process_id": item.process_id });
            }
        }
        this.moduleService.reorderProcesses(data, template_id).subscribe(function (data) {
            // console.log(data);
        });
        this.templates[template_id].processes = this.templates[template_id].processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    //dragging:
    AdminProcessesComponent.prototype.moveUp = function (process, template_id) {
        var data = [];
        data.push({ "order": (process.order - 1), "process_id": process.process_id });
        //find the one below
        // console.table(this.package.processes);
        var below;
        for (var i = 0; i < this.templates[template_id].processes.length; i++) {
            var p = this.templates[template_id].processes[i];
            if (p.order == process.order - 1) {
                data.push({ "order": (p.order + 1), "process_id": p.process_id });
                // console.log(i);/
                this.templates[template_id].processes[i].order += 1;
                this.templates[template_id].processes[i + 1].order -= 1;
                break;
            }
        }
        // console.table(data);
        // console.table(this.package.processes);
        // this.packageService.reorderProcesses(data, this.package.package_id).subscribe((data) => {
        //   // console.log(data);
        // });
        this.moduleService.reorderProcesses(data, template_id).subscribe(function (data) {
            console.log(data);
        });
        this.templates[template_id].processes = this.templates[template_id].processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    AdminProcessesComponent.prototype.moveDown = function (process, template_id) {
        var data = [];
        data.push({ "order": (process.order + 1), "process_id": process.process_id });
        //find the one below
        // console.table(this.package.processes);
        var below;
        for (var i = 0; i < this.templates[template_id].processes.length; i++) {
            var p = this.templates[template_id].processes[i];
            if (p.order == process.order + 1) {
                data.push({ "order": (p.order - 1), "process_id": p.process_id });
                // console.log(i);/
                this.templates[template_id].processes[i].order -= 1;
                this.templates[template_id].processes[i - 1].order += 1;
                break;
            }
        }
        // console.table(data);
        // console.table(this.package.processes);
        // this.packageService.reorderProcesses(data, this.package.package_id).subscribe((data) => {
        //   // console.log(data);
        // });
        this.moduleService.reorderProcesses(data, template_id).subscribe(function (data) {
            console.log(data);
        });
        this.templates[template_id].processes = this.templates[template_id].processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    AdminProcessesComponent.prototype.dragStart = function (e, id, type, name) {
        console.log('drag start: ' + e);
        // console.log(id);
        e.dataTransfer.setData('id', id);
        e.dataTransfer.setData('type', type);
        e.dataTransfer.setData('name', name);
    };
    AdminProcessesComponent.prototype.onDrop = function (e, template_id) {
        console.group('dropEvent');
        // console.log('drop: ' + e);
        // console.log(e.dataTransfer.getData('id'));
        // console.log(e.dataTransfer.getData('type'));
        // console.log(this.placeholderLocation);
        // if this.placeholderLocation == -0.5, insert first
        // if this.placeholderLocation == 0.5, insert afeter first
        var dropOrder = Math.ceil(this.placeholderLocation);
        if (dropOrder < 0) {
            dropOrder = 0;
        }
        // console.log(dropOrder);
        if (e.dataTransfer.getData('type') == 'module') {
            var data = [];
            // move down all items under existingIndex
            for (var index in this.templates[template_id].processes) {
                var item = this.templates[template_id].processes[index];
                // console.log(this.package.processes[index]);
                if (item.type != 'placeholder' && item.order >= dropOrder) {
                    item.order += 1;
                    data.push({ "order": item.order, "process_id": item.process_id }); // updates to push to backend
                }
            }
            // console.log(data);
            //submit reorder:
            this.moduleService.reorderProcesses(data, template_id).subscribe(function (data) {
                console.log(data);
            });
            //add process
            var newProcess = {
                "order": dropOrder,
                "process_id": 100,
                "module": e.dataTransfer.getData('id'),
                "name": e.dataTransfer.getData('name')
            };
            this.templates[template_id].processes.splice(dropOrder, 0, newProcess);
            this.moduleService.addProcess({ "order": dropOrder, "module": e.dataTransfer.getData('id'), "template": template_id }).subscribe(function (data) {
                console.log(data);
            });
            // console.log(this.package.processes);
        }
        else {
            var startOrder = -1;
            var movedProcessIndex;
            var data = [];
            for (var index in this.templates[template_id].processes) {
                var item = this.templates[template_id].processes[index];
                if (item.process_id == e.dataTransfer.getData('id')) {
                    startOrder = item.order;
                    movedProcessIndex = index;
                }
            }
            if (startOrder > dropOrder) {
                for (var index in this.templates[template_id].processes) {
                    var item = this.templates[template_id].processes[index];
                    if (item.type != 'placeholder' && item.order < startOrder && item.order >= dropOrder) {
                        item.order += 1;
                        data.push({ "order": item.order, "process_id": item.process_id });
                    }
                }
                this.templates[template_id].processes[movedProcessIndex].order = dropOrder;
                data.push({ "order": this.templates[template_id].processes[movedProcessIndex].order, "process_id": this.templates[template_id].processes[movedProcessIndex].process_id });
            }
            else {
                for (var index in this.templates[template_id].processes) {
                    var item = this.templates[template_id].processes[index];
                    if (item.type != 'placeholder' && item.order > startOrder && item.order < dropOrder) {
                        item.order -= 1;
                        data.push({ "order": item.order, "process_id": item.process_id });
                    }
                }
                this.templates[template_id].processes[movedProcessIndex].order = dropOrder - 1;
                data.push({ "order": this.templates[template_id].processes[movedProcessIndex].order, "process_id": this.templates[template_id].processes[movedProcessIndex].process_id });
            }
            // push changes to api
            this.moduleService.reorderProcesses(data, template_id).subscribe(function (data) {
                console.log(data);
            });
            this.onRelease(undefined);
            this.templates[template_id].processes = this.templates[template_id].processes.sort(function (a, b) {
                if (a.order > b.order) {
                    return 1;
                }
                return -1;
            });
        }
        console.groupEnd();
    };
    AdminProcessesComponent.prototype.onRelease = function (e) {
        //reset
        this.templates[0].processes = this.templates[0].processes.filter(function (item) {
            return item['type'] != 'placeholder';
        });
        this.templates[1].processes = this.templates[1].processes.filter(function (item) {
            return item['type'] != 'placeholder';
        });
    };
    //set ghost image to show where you will drop.
    AdminProcessesComponent.prototype.allowDrop = function (e, index, template_id) {
        e.preventDefault();
        // console.log(index);
        var element = e.target;
        // console.log(e.pageY);
        // console.log(e.pageY - element.getBoundingClientRect().top);
        if (Math.abs(index % 1) > 0.4 && Math.abs(index % 1) < 0.6) {
            return;
        }
        if (e.pageY - element.getBoundingClientRect().top > element.offsetHeight * 0.5) {
            // drop below elements
            // console.log('s');
            var ind = index + 0.5;
            if (ind != this.placeholderLocation) {
                // console.log(ind);
                // console.log(index);
                // console.log(this.placeholderLocation);
                this.placeholderLocation = ind;
                // this.package.processes = this.package.processes.filter((item) => {
                //   return item.type != 'placeholder'
                // });
                this.onRelease(undefined);
                var temp = { type: "placeholder", order: ind, name: e.dataTransfer.getData('name') };
                this.templates[template_id].processes.splice(index + 1, 0, temp);
            }
        }
        else {
            //drop above element.
            // this.placeholderLocation = index + 0.5;
            var ind = index - 0.5;
            if (ind != this.placeholderLocation) {
                // console.log(ind);
                // console.log(index);
                // console.log(this.placeholderLocation);
                this.placeholderLocation = ind;
                this.onRelease(undefined);
                var temp = { type: "placeholder", order: ind, name: e.dataTransfer.getData('name') };
                this.templates[template_id].processes.splice(index, 0, temp);
            }
        }
        this.placeholderTemplate = template_id;
        // console.log(element.offsetHeight);
        // e.preventDefault();
    };
    AdminProcessesComponent.prototype.allowDropTop = function (e, template_id) {
        e.preventDefault();
        //calculate order. Order will be 0.5 lower than first visible.
        var order = -0.5;
        this.placeholderLocation = order;
        this.placeholderTemplate = template_id;
        this.onRelease(undefined);
        // this.templates[template_id].processes = this.package.processes.filter((item) => {
        // return item.type != 'placeholder'
        // });
        var temp = { type: "placeholder", order: order, name: e.dataTransfer.getData('name') };
        this.templates[template_id].processes.push(temp);
        this.templates[template_id].processes = this.templates[template_id].processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    AdminProcessesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./AdminProcesses.component.html */ "./src/app/Admin/AdminProcesses.component.html"),
            styles: [__webpack_require__(/*! ./AdminProcesses.component.css */ "./src/app/Admin/AdminProcesses.component.css")]
        }),
        __metadata("design:paramtypes", [_Module_service__WEBPACK_IMPORTED_MODULE_1__["ModuleService"]])
    ], AdminProcessesComponent);
    return AdminProcessesComponent;
}());



/***/ }),

/***/ "./src/app/Admin/AdminTemplates.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Admin/AdminTemplates.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <message duration=\"10000\" [(active)]=\"errorVisible\" type=\"alert-danger\">\n    <i class=\"material-icons align-middle\">warning</i>\n    The template could not be removed since it is in use by one or more packages.\n  </message>\n  <h4 style=\"clear: both; width: 100%\">Templates</h4>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\" (drop)=\"onDrop($event)\" (dragover)=\"allowDropTop($event)\">\n        Name\n      </div>\n      <div class=\"list-group list-group-flush\">\n        <ng-template ngFor let-template [ngForOf]=\"templates\">\n          <div class=\"list-group-item list-group-item-action\" [class.active]=\"template.template_id==selected_template_id\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectTemplate(template)\">\n                {{template.name}}\n              </p>\n              <!-- <i class=\"material-icons\">arrow_back</i> -->\n              <i class=\"material-icons icon-button\" (click)=\"deleteTemplate(template)\" *ngIf=\"template.template_id > 1\">delete</i>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n    <button class=\"btn btn-success\" (click)=\"createTemplateModal()\">Create new template</button>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"card\" *ngIf=\"selected_template_id != -1\">\n      <div class=\"card-header\">\n        <h5 style=\"float:left\">Settings</h5>\n        <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">Save changes</button>\n      </div>\n      <div class=\"card-body\">\n        <message duration=\"3000\" [(active)]=\"messageVisible\">All changes have been saved!</message>\n        <div class=\"form-group\">\n          <label for=\"inputName\">Name</label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"selected_template.name\" placeholder=\"Virus scanning - ClamAV\">\n        </div>\n        <button class=\"btn btn-success float-right\" (click)=\"save()\">Save</button>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div class=\"row\" *ngIf=\"selected_template_id != -1\">\n  <div class=\"col-lg-6\" *ngIf=\"selected_template_id != -1\">\n    <h4>Tools in {{selected_template.name}}</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\"\n          (dragover)=\"allowDropTop($event)\"\n          (drop)=\"onDrop($event)\"\n        >\n        Name\n      </div>\n      <ng-template ngFor let-process [ngForOf]=\"selected_template.processes\">\n        <div class=\"list-group list-group-flush\">\n          <div\n              draggable=\"true\"\n              (dragstart)=\"dragStart($event, process.process_id, 'template', process.name)\"\n              (drop)=\"onDrop($event)\"\n              (dragover)=\"allowDrop($event, process.order)\"\n              class=\"list-group-item list-group-item-action\"\n              [class.active]=\"process.process_id==selected_process_id\"\n              [class.placeholder]=\"process.type=='placeholder'\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p\n              style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectProcess(process)\">\n                {{process.name}}\n              </p>\n              <!-- <i class=\"material-icons\">arrow_back</i> -->\n              <i *ngIf=\"process.order != 0\" class=\"material-icons icon-button\" (click)=\"moveUp(process)\">keyboard_arrow_up</i>\n              <i *ngIf=\"process.order < selected_template.processes.length-1\" class=\"material-icons icon-button\" (click)=\"moveDown(process)\">keyboard_arrow_down</i>\n              <i class=\"material-icons icon-button\" (click)=\"deleteProcess(process)\">delete</i>\n              <i class=\"material-icons drag-handle\">drag_handle</i>\n            </div>\n            <ng-template [ngIf]=\"process.process_id==selected_process_id\">\n                <form *ngIf=\"process.form.length>0\">\n                        <label *ngFor=\"let input of process.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n                          {{input.label}}\n                          <!-- <input type=\"text\" *ngIf=\"input.type=='text'\" [id]=\"input.identifier\" [value]=\"process.values[input.identifier]\" (keyup)=\"setProcessValue(input.identifier, $event.target.value)\" (change)=\"setProcessValue(input.identifier, $event.target.value)\"/> -->\n                          <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"process.value[input.identifier]\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n                          <!-- <button class=\"btn\" (click)=\"openFileBrowser()\">Files: All</button> -->\n                        </label>\n                </form>\n            </ng-template>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n\n  <div class=\"col-lg-6\">\n      <h4>Avaliable Tools</h4>\n      <div class=\"card\">\n           <div class=\"card-header company-table-head\">\n              Name\n           </div>\n           <ng-template\n           ngFor\n           let-module\n           [ngForOf]=\"modules\"\n           >\n           <div class=\"list-group list-group-flush\">\n               <div draggable=\"true\" (dragstart)=\"dragStart($event, module.module_id, 'module', module.name)\" (dragend)=\"onRelease($event)\" class=\"list-group-item list-group-item-action\">\n                 <div class=\"d-flex w-100 justify-content-between\">\n                  <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n                  <i class=\"material-icons icon-button\" (click)=\"addProcessLast(module.module_id)\">add</i>\n                  <i class=\"material-icons drag-handle\">drag_handle</i>\n                 </div>\n              </div>\n           </div>\n         </ng-template>\n      </div>\n  </div>\n</div>\n\n<modal *ngIf=\"selected_template_id != -1\" [(active)]=\"createModalActive\" title=\"Create a new template\">\n  <div modal-body>\n    <h5>Enter the name of the new template</h5>\n    <div class=\"form-group\">\n      <label for=\"inputName\">Name</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"newTemplateName\" placeholder=\"Virus scanning - ClamAV\">\n    </div>\n    <button class=\"btn btn-success float-right\" (click)=\"createNewTemplate()\">Create</button>\n  </div>\n</modal>\n"

/***/ }),

/***/ "./src/app/Admin/AdminTemplates.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/Admin/AdminTemplates.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.list-group-item.active {\n  background-color: #ddd;\n  border-color: #bc044e; }\n\n.list-group-item.active label, .list-group-item.active p, .list-group-item.active i, .list-group-item.active small {\n    color: #333; }\n\n.placeholder {\n  opacity: 0.4; }\n"

/***/ }),

/***/ "./src/app/Admin/AdminTemplates.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Admin/AdminTemplates.component.ts ***!
  \***************************************************/
/*! exports provided: AdminTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTemplatesComponent", function() { return AdminTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Module.service */ "./src/app/Admin/Module.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminTemplatesComponent = /** @class */ (function () {
    function AdminTemplatesComponent(moduleService) {
        this.moduleService = moduleService;
        this.selected_template_id = -1;
        this.selected_template = undefined;
        this.selected_process_id = -1;
        this.selected_process = undefined;
        this.createModalActive = false;
        this.newTemplateName = "";
        this.messageVisible = false;
        this.errorVisible = false;
    }
    AdminTemplatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moduleService.getTemplates().subscribe(function (data) {
            _this.templates = data;
            console.log(data);
            //TODO remove auto select template:
            _this.selectTemplate(data[1]);
        });
        this.moduleService.getModules().subscribe(function (data) {
            _this.modules = data;
        });
    };
    AdminTemplatesComponent.prototype.createTemplateModal = function () {
        //modal active
        this.createModalActive = true;
        this.newTemplateName = "";
    };
    AdminTemplatesComponent.prototype.createNewTemplate = function () {
        var _this = this;
        //actuall creation of new template
        var data = { 'templateName': this.newTemplateName };
        this.moduleService.createNewTemplate(data).subscribe(function (data) {
            console.log(data);
            _this.templates.push(data);
            _this.newTemplateName = "";
            _this.createModalActive = false;
        });
    };
    AdminTemplatesComponent.prototype.save = function () {
        var _this = this;
        var data = { 'templateName': this.selected_template.name, 'template_id': this.selected_template_id };
        this.moduleService.createNewTemplate(data).subscribe(function (data) {
            _this.messageVisible = true;
            for (var i in _this.templates) {
                var temp = _this.templates[i];
                if (temp.template_id == _this.selected_template_id) {
                    _this.templates[i].name = _this.selected_template.name;
                }
            }
        });
    };
    AdminTemplatesComponent.prototype.deleteTemplate = function (template) {
        var _this = this;
        this.moduleService.deleteTemplate(template.template_id).subscribe(function (data) {
            // console.log(data);
            _this.templates = _this.templates.filter(function (item) {
                if (item.template_id == template.template_id) {
                    return false;
                }
                return true;
            });
            _this.selected_process = undefined;
            _this.selected_process_id = -1;
        }, function (error) {
            console.log(error);
            if (error.status == 409) {
                console.log('409 error, display error message');
                _this.errorVisible = true;
            }
        });
    };
    AdminTemplatesComponent.prototype.selectTemplate = function (template) {
        var _this = this;
        if (this.selected_template_id != template.template_id) {
            this.selected_template_id = template.template_id;
            this.selected_template = template;
            //Download tempalte data
            this.moduleService.getTemplate(this.selected_template_id).subscribe(function (data) {
                console.log(data);
                _this.selected_template = data;
            });
        }
        else {
            this.selected_template_id = -1;
            this.selected_template = undefined;
        }
    };
    AdminTemplatesComponent.prototype.selectProcess = function (process) {
        if (this.selected_process_id != process.process_id) {
            this.selected_process = process;
            this.selected_process_id = process.process_id;
        }
        else {
            this.selected_process = undefined;
            this.selected_process_id = -1;
        }
    };
    AdminTemplatesComponent.prototype.setProcessValue = function (id, value) {
        var values = this.selected_process.value;
        values[id] = value;
        var data = { "value": values };
        this.moduleService.saveProcess(data, this.selected_process_id).subscribe(function (data) {
            console.log('data chagned');
            console.log(data);
        });
    };
    AdminTemplatesComponent.prototype.deleteProcess = function (process) {
        console.log(process);
        this.moduleService.deleteProcess(process.process_id).subscribe(function (data) {
        });
        this.selected_template.processes = this.selected_template.processes.filter(function (item) {
            return item.process_id != process.process_id;
        });
        // move up all processes below
        var data = [];
        for (var index in this.selected_template.processes) {
            var item = this.selected_template.processes[index];
            if (item.type != 'placeholder' && item.order > process.order) {
                item.order -= 1;
                data.push({ "order": item.order, "process_id": item.process_id });
            }
        }
        this.moduleService.reorderProcesses(data, this.selected_template_id).subscribe(function (data) {
            // console.log(data);
        });
        this.selected_template.processes = this.selected_template.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    AdminTemplatesComponent.prototype.addProcessLast = function (module_id) {
        var _this = this;
        var order = 0;
        if (this.selected_template.processes.length > 0) {
            order = this.selected_template.processes[this.selected_template.processes.length - 1].order + 1;
        }
        this.moduleService.addProcess({ "order": order, "module": module_id, "template": this.selected_template_id }).subscribe(function (data) {
            console.log(data);
            _this.selected_template.processes = data;
        });
    };
    //dragging:
    AdminTemplatesComponent.prototype.moveUp = function (process) {
        var data = [];
        data.push({ "order": (process.order - 1), "process_id": process.process_id });
        //find the one below
        // console.table(this.package.processes);
        var below;
        for (var i = 0; i < this.selected_template.processes.length; i++) {
            var p = this.selected_template.processes[i];
            if (p.order == process.order - 1) {
                data.push({ "order": (p.order + 1), "process_id": p.process_id });
                // console.log(i);/
                this.selected_template.processes[i].order += 1;
                this.selected_template.processes[i + 1].order -= 1;
                break;
            }
        }
        this.moduleService.reorderProcesses(data, this.selected_template_id).subscribe(function (data) {
            console.log(data);
        });
        this.selected_template.processes = this.selected_template.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    AdminTemplatesComponent.prototype.moveDown = function (process) {
        var data = [];
        data.push({ "order": (process.order + 1), "process_id": process.process_id });
        //find the one below
        // console.table(this.package.processes);
        var below;
        for (var i = 0; i < this.selected_template.processes.length; i++) {
            var p = this.selected_template.processes[i];
            if (p.order == process.order + 1) {
                data.push({ "order": (p.order - 1), "process_id": p.process_id });
                this.selected_template.processes[i].order -= 1;
                this.selected_template.processes[i - 1].order += 1;
                break;
            }
        }
        this.moduleService.reorderProcesses(data, this.selected_template_id).subscribe(function (data) {
            console.log(data);
        });
        this.selected_template.processes = this.selected_template.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    AdminTemplatesComponent.prototype.dragStart = function (e, id, type, name) {
        console.log('drag start: ' + e);
        // console.log(id);
        e.dataTransfer.setData('id', id);
        e.dataTransfer.setData('type', type);
        e.dataTransfer.setData('name', name);
    };
    AdminTemplatesComponent.prototype.onDrop = function (e) {
        var _this = this;
        console.group('dropEvent');
        // console.log('drop: ' + e);
        // console.log(e.dataTransfer.getData('id'));
        // console.log(e.dataTransfer.getData('type'));
        // console.log(this.placeholderLocation);
        // if this.placeholderLocation == -0.5, insert first
        // if this.placeholderLocation == 0.5, insert afeter first
        var dropOrder = Math.ceil(this.placeholderLocation);
        if (dropOrder < 0) {
            dropOrder = 0;
        }
        // console.log(dropOrder);
        if (e.dataTransfer.getData('type') == 'module') {
            var data = [];
            // move down all items under existingIndex
            for (var index in this.selected_template.processes) {
                var item = this.selected_template.processes[index];
                // console.log(this.package.processes[index]);
                if (item.type != 'placeholder' && item.order >= dropOrder) {
                    item.order += 1;
                    data.push({ "order": item.order, "process_id": item.process_id }); // updates to push to backend
                }
            }
            // console.log(data);
            //submit reorder:
            this.moduleService.reorderProcesses(data, this.selected_template_id).subscribe(function (data) {
                console.log(data);
            });
            //add process
            var newProcess = {
                "order": dropOrder,
                "process_id": 100,
                "module": e.dataTransfer.getData('id'),
                "name": e.dataTransfer.getData('name')
            };
            this.selected_template.processes.splice(dropOrder, 0, newProcess);
            this.moduleService.addProcess({ "order": dropOrder, "module": e.dataTransfer.getData('id'), "template": this.selected_template_id }).subscribe(function (data) {
                // console.log(data);
                _this.selected_template.processes = data;
                _this.selected_process = undefined;
                _this.selected_process_id = -1;
            });
            // console.log(this.package.processes);
        }
        else {
            var startOrder = -1;
            var movedProcessIndex;
            var data = [];
            for (var index in this.selected_template.processes) {
                var item = this.selected_template.processes[index];
                if (item.process_id == e.dataTransfer.getData('id')) {
                    startOrder = item.order;
                    movedProcessIndex = index;
                }
            }
            if (startOrder > dropOrder) {
                for (var index in this.selected_template.processes) {
                    var item = this.selected_template.processes[index];
                    if (item.type != 'placeholder' && item.order < startOrder && item.order >= dropOrder) {
                        item.order += 1;
                        data.push({ "order": item.order, "process_id": item.process_id });
                    }
                }
                this.selected_template.processes[movedProcessIndex].order = dropOrder;
                data.push({ "order": this.selected_template.processes[movedProcessIndex].order, "process_id": this.selected_template.processes[movedProcessIndex].process_id });
            }
            else {
                for (var index in this.selected_template.processes) {
                    var item = this.selected_template.processes[index];
                    if (item.type != 'placeholder' && item.order > startOrder && item.order < dropOrder) {
                        item.order -= 1;
                        data.push({ "order": item.order, "process_id": item.process_id });
                    }
                }
                this.selected_template.processes[movedProcessIndex].order = dropOrder - 1;
                data.push({ "order": this.selected_template.processes[movedProcessIndex].order, "process_id": this.selected_template.processes[movedProcessIndex].process_id });
            }
            // push changes to api
            this.moduleService.reorderProcesses(data, this.selected_template_id).subscribe(function (data) {
                console.log(data);
            });
            this.onRelease(undefined);
            this.selected_template.processes = this.selected_template.processes.sort(function (a, b) {
                if (a.order > b.order) {
                    return 1;
                }
                return -1;
            });
        }
        console.groupEnd();
    };
    AdminTemplatesComponent.prototype.onRelease = function (e) {
        //reset
        this.selected_template.processes = this.selected_template.processes.filter(function (item) {
            return item['type'] != 'placeholder';
        });
    };
    //set ghost image to show where you will drop.
    AdminTemplatesComponent.prototype.allowDrop = function (e, index) {
        e.preventDefault();
        // console.log(index);
        var element = e.target;
        // console.log(e.pageY);
        // console.log(e.pageY - element.getBoundingClientRect().top);
        if (Math.abs(index % 1) > 0.4 && Math.abs(index % 1) < 0.6) {
            return;
        }
        if (e.pageY - element.getBoundingClientRect().top > element.offsetHeight * 0.5) {
            // drop below elements
            // console.log('s');
            var ind = index + 0.5;
            if (ind != this.placeholderLocation) {
                // console.log(ind);
                // console.log(index);
                // console.log(this.placeholderLocation);
                this.placeholderLocation = ind;
                // this.package.processes = this.package.processes.filter((item) => {
                //   return item.type != 'placeholder'
                // });
                this.onRelease(undefined);
                var temp = { type: "placeholder", order: ind, name: e.dataTransfer.getData('name') };
                this.selected_template.processes.splice(index + 1, 0, temp);
            }
        }
        else {
            //drop above element.
            // this.placeholderLocation = index + 0.5;
            var ind = index - 0.5;
            if (ind != this.placeholderLocation) {
                // console.log(ind);
                // console.log(index);
                // console.log(this.placeholderLocation);
                this.placeholderLocation = ind;
                this.onRelease(undefined);
                var temp = { type: "placeholder", order: ind, name: e.dataTransfer.getData('name') };
                this.selected_template.processes.splice(index, 0, temp);
            }
        }
        this.placeholderTemplate = this.selected_template_id;
        // console.log(element.offsetHeight);
        // e.preventDefault();
    };
    AdminTemplatesComponent.prototype.allowDropTop = function (e) {
        e.preventDefault();
        //calculate order. Order will be 0.5 lower than first visible.
        var order = -0.5;
        this.placeholderLocation = order;
        this.placeholderTemplate = this.selected_template_id;
        this.onRelease(undefined);
        // this.templates[template_id].processes = this.package.processes.filter((item) => {
        // return item.type != 'placeholder'
        // });
        var temp = { type: "placeholder", order: order, name: e.dataTransfer.getData('name') };
        this.selected_template.processes.push(temp);
        this.selected_template.processes = this.selected_template.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    AdminTemplatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adminTemplates',
            template: __webpack_require__(/*! ./AdminTemplates.component.html */ "./src/app/Admin/AdminTemplates.component.html"),
            styles: [__webpack_require__(/*! ./AdminTemplates.component.sass */ "./src/app/Admin/AdminTemplates.component.sass")]
        }),
        __metadata("design:paramtypes", [_Module_service__WEBPACK_IMPORTED_MODULE_1__["ModuleService"]])
    ], AdminTemplatesComponent);
    return AdminTemplatesComponent;
}());



/***/ }),

/***/ "./src/app/Admin/Module.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Admin/Module.service.ts ***!
  \*****************************************/
/*! exports provided: ModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return ModuleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModuleService = /** @class */ (function () {
    function ModuleService(http) {
        this.http = http;
        this.packagesURL = '/api/module/';
    }
    ModuleService.prototype.saveData = function (id, data) {
        return this.http.post(this.packagesURL + id + '/', data);
    };
    ModuleService.prototype.getTemplates = function () {
        return this.http.get('/api/template/');
    };
    ModuleService.prototype.getTemplate = function (id) {
        return this.http.get('/api/template/' + id + '/');
    };
    ModuleService.prototype.createNewTemplate = function (data) {
        return this.http.post('/api/template/', data);
    };
    ModuleService.prototype.deleteTemplate = function (template_id) {
        return this.http.delete('/api/template/' + template_id + '/');
    };
    // getPackage(id: number) {
    //   return this.http.get(this.packagesURL + id + '/');
    // }
    //
    ModuleService.prototype.getModules = function () {
        return this.http.get('/api/module/');
    };
    ModuleService.prototype.createModule = function (data) {
        console.log(data);
        return this.http.put(this.packagesURL, data);
    };
    ModuleService.prototype.deleteModule = function (module_id) {
        return this.http.delete(this.packagesURL + module_id + '/');
    };
    ModuleService.prototype.addProcess = function (process) {
        return this.http.post('/api/process/', process);
    };
    ModuleService.prototype.reorderProcesses = function (data, template_id) {
        return this.http.put('/api/template/' + template_id + '/process/', data);
    };
    ModuleService.prototype.deleteProcess = function (id) {
        return this.http.delete('/api/process/' + id + '/');
    };
    ModuleService.prototype.importModule = function (formData) {
        // create a http-post request and pass the form
        // tell it to report the upload progress
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', '/api/module/import/', formData, {
            reportProgress: true
        });
        return this.http.request(req);
    };
    ModuleService.prototype.getVariables = function () {
        return this.http.get('/api/variables/global/');
    };
    ModuleService.prototype.setVariables = function (data) {
        return this.http.post('/api/variables/global/', data);
    };
    ModuleService.prototype.saveProcess = function (data, id) {
        return this.http.put('/api/process/' + id + '/', data);
    };
    ModuleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModuleService);
    return ModuleService;
}());



/***/ }),

/***/ "./src/app/Components/Message/Message.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Components/Message/Message.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert {{type}}\" [@visibilityChanged]=\"visiblityState\" role=\"alert\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/Message/Message.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/Components/Message/Message.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/Message/Message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/Message/Message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
        this.visiblityState = 'hidden';
        // @Input() title: string = 'Title';
        // @Input() active: boolean = false;
        // @Output() activeChange = new EventEmitter<boolean>();
        this.duration = 3000;
        this.type = 'alert-success';
        this._active = false;
        this.activeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // close() {
        // this.active = false;
        // this.activeChange.emit(this.active);
        // }
    }
    Object.defineProperty(MessageComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            this._active = active;
            if (active) {
                this.visiblityState = 'shown';
                setTimeout(function () {
                    _this.visiblityState = 'hidden';
                    _this._active = false;
                    _this.activeChange.emit(false);
                }, this.duration);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MessageComponent.prototype, "duration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MessageComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "activeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MessageComponent.prototype, "active", null);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'message',
            template: __webpack_require__(/*! ./Message.component.html */ "./src/app/Components/Message/Message.component.html"),
            styles: [__webpack_require__(/*! ./Message.component.sass */ "./src/app/Components/Message/Message.component.sass")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('visibilityChanged', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('shown => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms')),
                ])
            ]
        })
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/Components/Message/Message.module.ts":
/*!******************************************************!*\
  !*** ./src/app/Components/Message/Message.module.ts ***!
  \******************************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Message.component */ "./src/app/Components/Message/Message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//imports
//declarations

//providers
var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _Message_component__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"]
            ],
            providers: [],
            exports: [_Message_component__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"]]
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ }),

/***/ "./src/app/Dashboard/Dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Dashboard/Dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _PackageDetail_PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PackageDetail/PackageDetail.service */ "./src/app/PackageDetail/PackageDetail.service.ts");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utilities */ "./src/app/Utilities.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(packageService, route, router) {
        // Object.assign(this, {single, multi})
        this.packageService = packageService;
        this.route = route;
        this.router = router;
        this.stats = undefined;
        // options
        this.showLegend = true;
        this.colorScheme = {
            domain: _Utilities__WEBPACK_IMPORTED_MODULE_3__["GraphColors"]
        };
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        // showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.autoScale = true;
        this.dataLoaded = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.packageService.getStatsDashboard().subscribe(function (data) {
            console.log(data);
            _this.stats = data;
            _this.total_size = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["formatBytes"])(data['total_size']);
            _this.total_number_of_files = data['total_number_of_files'];
            _this.total_number_of_errors = data['total_number_of_errors'];
            _this.total_number_of_packages = data['total_number_of_packages'];
            _this.fileTypes = [];
            _this.fileTypesErrors = [];
            for (var key in _this.stats.fileTypes) {
                var value = _this.stats.fileTypes[key];
                _this.fileTypes.push({ "name": value['name'].toUpperCase(), "value": value['total'] });
                _this.fileTypesErrors.push({ "name": value['name'].toUpperCase(), "value": value['errors'] });
            }
            _this.fileTypesErrors = _this.fileTypesErrors.sort(function (a, b) {
                if (a['value'] > b['value']) {
                    return -1;
                }
                return 1;
            });
            var counts = [];
            var sizes = [];
            for (var key in _this.stats.graphData) {
                var value = _this.stats.graphData[key];
                counts.push({ "name": value['date'], "value": value['count'] });
                sizes.push({ "name": value['date'], "value": value['size'] });
                // this.fileTypes.push({"name":value['name'].toUpperCase(), "value":value['total']});
            }
            _this.graphDataSize = [
                {
                    "name": "size",
                    "series": sizes
                }
            ];
            _this.graphDataCount = [
                {
                    "name": "count",
                    "series": counts
                }
            ];
            // this.graphDataSize = [
            //   {
            //     "name": "size",
            //     "series": sizes
            //   }
            // ];
            _this.dataLoaded = true;
        });
    };
    DashboardComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/Dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.sass */ "./src/app/Dashboard/dashboard.component.sass")]
        }),
        __metadata("design:paramtypes", [_PackageDetail_PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__["PackageDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Dashboard/combo-chart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Dashboard/combo-chart.component.ts ***!
  \****************************************************/
/*! exports provided: ComboChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboChartComponent", function() { return ComboChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { getUniqueXDomainValues } from '@swimlane/ngx-charts';
var ComboChartComponent = /** @class */ (function (_super) {
    __extends(ComboChartComponent, _super);
    function ComboChartComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.legendTitle = 'Legend';
        _this.showGridLines = true;
        _this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveLinear"];
        _this.activeEntries = [];
        _this.roundDomains = false;
        _this.tooltipDisabled = false;
        _this.showRefLines = false;
        _this.showRefLabels = true;
        _this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.deactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.margin = [10, 20, 10, 20];
        _this.xAxisHeight = 0;
        _this.yAxisWidth = 0;
        _this.timelineHeight = 50;
        _this.timelinePadding = 10;
        return _this;
    }
    ComboChartComponent.prototype.update = function () {
        _super.prototype.update.call(this);
        this.dims = Object(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["calculateViewDimensions"])({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
        });
        // if (this.timeline) {
        //   this.dims.height -= (this.timelineHeight + this.margin[2] + this.timelinePadding);
        // }
        this.xDomain = this.getXDomain();
        if (this.filteredDomain) {
            this.xDomain = this.filteredDomain;
        }
        this.yDomain = this.getYDomain();
        this.seriesDomain = this.getSeriesDomain();
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
        this.yScale = this.getYScale(this.yDomain, this.dims.height);
        this.updateTimeline();
        this.setColors();
        // console.log(this.colors);
        this.legendOptions = this.getLegendOptions();
        this.transform = "translate(" + this.dims.xOffset + " , " + this.margin[0] + ")";
        this.clipPathId = 'clipabc';
        this.clipPath = "url(#" + this.clipPathId + ")";
    };
    ComboChartComponent.prototype.updateTimeline = function () {
        if (this.timeline) {
            this.timelineWidth = this.dims.width;
            this.timelineXDomain = this.getXDomain();
            this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
            this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
            this.timelineTransform = "translate(" + this.dims.xOffset + ", " + -this.margin[2] + ")";
        }
    };
    ComboChartComponent.prototype.getXDomain = function () {
        // let values = getUniqueXDomainValues(this.results);
        var valueSet = new Set();
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var result = _a[_i];
            for (var _b = 0, _c = result.series; _b < _c.length; _b++) {
                var d = _c[_b];
                valueSet.add(d.name);
            }
        }
        var values = Array.from(valueSet);
        this.scaleType = this.getScaleType(values);
        var domain = [];
        if (this.scaleType === 'linear') {
            values = values.map(function (v) { return Number(v); });
        }
        var min;
        var max;
        if (this.scaleType === 'time' || this.scaleType === 'linear') {
            min = this.xScaleMin
                ? this.xScaleMin
                : Math.min.apply(Math, values);
            max = this.xScaleMax
                ? this.xScaleMax
                : Math.max.apply(Math, values);
        }
        if (this.scaleType === 'time') {
            domain = [new Date(min), new Date(max)];
            this.xSet = values.slice().sort(function (a, b) {
                var aDate = a.getTime();
                var bDate = b.getTime();
                if (aDate > bDate)
                    return 1;
                if (bDate > aDate)
                    return -1;
                return 0;
            });
        }
        else if (this.scaleType === 'linear') {
            domain = [min, max];
            // Use compare function to sort numbers numerically
            this.xSet = values.slice().sort(function (a, b) { return (a - b); });
        }
        else {
            domain = values;
            this.xSet = values;
        }
        return domain;
    };
    ComboChartComponent.prototype.getYDomain = function () {
        var domain = [];
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var results = _a[_i];
            for (var _b = 0, _c = results.series; _b < _c.length; _b++) {
                var d = _c[_b];
                if (domain.indexOf(d.value) < 0) {
                    domain.push(d.value);
                }
                if (d.min !== undefined) {
                    this.hasRange = true;
                    if (domain.indexOf(d.min) < 0) {
                        domain.push(d.min);
                    }
                }
                if (d.max !== undefined) {
                    this.hasRange = true;
                    if (domain.indexOf(d.max) < 0) {
                        domain.push(d.max);
                    }
                }
            }
        }
        var values = domain.slice();
        if (!this.autoScale) {
            values.push(0);
        }
        var min = this.yScaleMin
            ? this.yScaleMin
            : Math.min.apply(Math, values);
        var max = this.yScaleMax
            ? this.yScaleMax
            : Math.max.apply(Math, values);
        return [min, max];
    };
    ComboChartComponent.prototype.getSeriesDomain = function () {
        return this.results.map(function (d) { return d.name; });
    };
    ComboChartComponent.prototype.getXScale = function (domain, width) {
        var scale;
        if (this.scaleType === 'time') {
            scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleTime"])()
                .range([0, width])
                .domain(domain);
        }
        else if (this.scaleType === 'linear') {
            scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"])()
                .range([0, width])
                .domain(domain);
            if (this.roundDomains) {
                scale = scale.nice();
            }
        }
        else if (this.scaleType === 'ordinal') {
            scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_4__["scalePoint"])()
                .range([0, width])
                .padding(0.1)
                .domain(domain);
        }
        return scale;
    };
    ComboChartComponent.prototype.getYScale = function (domain, height) {
        var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"])()
            .range([height, 0])
            .domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    };
    ComboChartComponent.prototype.getScaleType = function (values) {
        var date = true;
        var num = true;
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            if (!this.isDate(value)) {
                date = false;
            }
            if (typeof value !== 'number') {
                num = false;
            }
        }
        if (date)
            return 'time';
        if (num)
            return 'linear';
        return 'ordinal';
    };
    ComboChartComponent.prototype.isDate = function (value) {
        if (value instanceof Date) {
            return true;
        }
        return false;
    };
    ComboChartComponent.prototype.updateDomain = function (domain) {
        this.filteredDomain = domain;
        this.xDomain = this.filteredDomain;
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
    };
    ComboChartComponent.prototype.updateHoveredVertical = function (item) {
        this.hoveredVertical = item.value;
        this.deactivateAll();
    };
    ComboChartComponent.prototype.hideCircles = function () {
        this.hoveredVertical = null;
        this.deactivateAll();
    };
    ComboChartComponent.prototype.onClick = function (data, series) {
        if (series) {
            data.series = series.name;
        }
        this.select.emit(data);
    };
    ComboChartComponent.prototype.trackBy = function (index, item) {
        return item.name;
    };
    ComboChartComponent.prototype.setColors = function () {
        var domain;
        if (this.schemeType === 'ordinal') {
            domain = this.seriesDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["ColorHelper"](this.scheme, this.schemeType, domain, this.customColors);
    };
    ComboChartComponent.prototype.getLegendOptions = function () {
        var opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.yDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    };
    ComboChartComponent.prototype.updateYAxisWidth = function (_a) {
        var width = _a.width;
        this.yAxisWidth = width;
        this.update();
    };
    ComboChartComponent.prototype.updateXAxisHeight = function (_a) {
        var height = _a.height;
        this.xAxisHeight = height;
        this.update();
    };
    ComboChartComponent.prototype.onActivate = function (item) {
        this.deactivateAll();
        var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item];
        this.activate.emit({ value: item, entries: this.activeEntries });
    };
    ComboChartComponent.prototype.onDeactivate = function (item) {
        var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = this.activeEntries.slice();
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    };
    ComboChartComponent.prototype.deactivateAll = function () {
        this.activeEntries = this.activeEntries.slice();
        for (var _i = 0, _a = this.activeEntries; _i < _a.length; _i++) {
            var entry = _a[_i];
            this.deactivate.emit({ value: entry, entries: [] });
        }
        this.activeEntries = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "legend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComboChartComponent.prototype, "legendTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "xAxis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "yAxis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "showXAxisLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "showYAxisLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "xAxisLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "yAxisLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "autoScale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "timeline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboChartComponent.prototype, "gradient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboChartComponent.prototype, "showGridLines", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "curve", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ComboChartComponent.prototype, "activeEntries", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComboChartComponent.prototype, "schemeType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ComboChartComponent.prototype, "rangeFillOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "xAxisTickFormatting", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "yAxisTickFormatting", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ComboChartComponent.prototype, "xAxisTicks", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ComboChartComponent.prototype, "yAxisTicks", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboChartComponent.prototype, "roundDomains", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboChartComponent.prototype, "tooltipDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboChartComponent.prototype, "showRefLines", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "referenceLines", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboChartComponent.prototype, "showRefLabels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "xScaleMin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "xScaleMax", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ComboChartComponent.prototype, "yScaleMin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ComboChartComponent.prototype, "yScaleMax", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ComboChartComponent.prototype, "activate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ComboChartComponent.prototype, "deactivate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('tooltipTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ComboChartComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('seriesTooltipTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ComboChartComponent.prototype, "seriesTooltipTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ComboChartComponent.prototype, "hideCircles", null);
    ComboChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'combo-chart-component',
            template: "\n  <ngx-charts-chart\n      [view]=\"[width, height]\"\n      [showLegend]=\"legend\"\n      [legendOptions]=\"legendOptions\"\n      [activeEntries]=\"activeEntries\"\n      [animations]=\"animations\"\n      (legendLabelClick)=\"onClick($event)\"\n      (legendLabelActivate)=\"onActivate($event)\"\n      (legendLabelDeactivate)=\"onDeactivate($event)\">\n      <svg:defs>\n        <svg:clipPath [attr.id]=\"clipPathId\">\n          <svg:rect\n            [attr.width]=\"dims.width + 10\"\n            [attr.height]=\"dims.height + 10\"\n            [attr.transform]=\"'translate(-5, -5)'\"/>\n        </svg:clipPath>\n      </svg:defs>\n      <svg:g [attr.transform]=\"transform\" class=\"line-chart chart\">\n        <svg:g ngx-charts-x-axis\n          *ngIf=\"xAxis\"\n          [xScale]=\"xScale\"\n          [dims]=\"dims\"\n          [showGridLines]=\"showGridLines\"\n          [showLabel]=\"showXAxisLabel\"\n          [labelText]=\"xAxisLabel\"\n          [tickFormatting]=\"xAxisTickFormatting\"\n          [ticks]=\"xAxisTicks\"\n          (dimensionsChanged)=\"updateXAxisHeight($event)\">\n        </svg:g>\n        <svg:g ngx-charts-y-axis\n          *ngIf=\"yAxis\"\n          [yScale]=\"yScale\"\n          [dims]=\"dims\"\n          [showGridLines]=\"showGridLines\"\n          [showLabel]=\"showYAxisLabel\"\n          [labelText]=\"yAxisLabel\"\n          [tickFormatting]=\"yAxisTickFormatting\"\n          [ticks]=\"yAxisTicks\"\n          [referenceLines]=\"referenceLines\"\n          [showRefLines]=\"showRefLines\"\n          [showRefLabels]=\"showRefLabels\"\n          (dimensionsChanged)=\"updateYAxisWidth($event)\">\n        </svg:g>\n        <svg:g [attr.clip-path]=\"clipPath\">\n          <svg:g *ngFor=\"let series of results; trackBy:trackBy\" [@animationState]=\"'active'\">\n            <svg:g ngx-charts-line-series\n              [xScale]=\"xScale\"\n              [yScale]=\"yScale\"\n              [colors]=\"colors\"\n              [data]=\"series\"\n              [activeEntries]=\"activeEntries\"\n              [scaleType]=\"scaleType\"\n              [curve]=\"curve\"\n              [rangeFillOpacity]=\"rangeFillOpacity\"\n              [hasRange]=\"hasRange\"\n              [animations]=\"animations\"\n            />\n          </svg:g>\n          <svg:g *ngIf=\"!tooltipDisabled\" (mouseleave)=\"hideCircles()\">\n            <svg:g ngx-charts-tooltip-area\n              [dims]=\"dims\"\n              [xSet]=\"xSet\"\n              [xScale]=\"xScale\"\n              [yScale]=\"yScale\"\n              [results]=\"results\"\n              [colors]=\"colors\"\n              [tooltipDisabled]=\"tooltipDisabled\"\n              [tooltipTemplate]=\"seriesTooltipTemplate\"\n              (hover)=\"updateHoveredVertical($event)\"\n            />\n            <svg:g *ngFor=\"let series of results\">\n              <svg:g ngx-charts-circle-series\n                [xScale]=\"xScale\"\n                [yScale]=\"yScale\"\n                [colors]=\"colors\"\n                [data]=\"series\"\n                [scaleType]=\"scaleType\"\n                [visibleValue]=\"hoveredVertical\"\n                [activeEntries]=\"activeEntries\"\n                [tooltipDisabled]=\"tooltipDisabled\"\n                [tooltipTemplate]=\"tooltipTemplate\"\n                (select)=\"onClick($event, series)\"\n                (activate)=\"onActivate($event)\"\n                (deactivate)=\"onDeactivate($event)\"\n              />\n            </svg:g>\n          </svg:g>\n        </svg:g>\n      </svg:g>\n    </ngx-charts-chart>\n  ",
            styleUrls: [],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animationState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0
                        }))
                    ])
                ])
            ]
        })
    ], ComboChartComponent);
    return ComboChartComponent;
}(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartComponent"]));



/***/ }),

/***/ "./src/app/Dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/Dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n\n<div class=\"row numberRow\">\n  <div class=\"col-md-3 col-sm-4 col-xs-6\">\n    <p class=\"numberTitle\">\n      Total Packages:\n    </p>\n    <p class=\"number\">\n      {{total_number_of_packages}}\n    </p>\n  </div>\n  <div class=\"col-md-3 col-sm-4 col-xs-6 divider\">\n    <p class=\"numberTitle\">\n      Total Files:\n    </p>\n    <p class=\"number\">\n      {{total_number_of_files}}\n    </p>\n  </div>\n  <div class=\"col-md-3 col-sm-4 col-xs-6 divider\">\n    <p class=\"numberTitle\">\n      Total Errors:\n    </p>\n    <p class=\"number errors\">\n      {{total_number_of_errors}}\n    </p>\n  </div>\n  <div class=\"col-md-3 col-sm-4 col-xs-6 divider\">\n    <p class=\"numberTitle\">\n      Total Filesize:\n    </p>\n    <p class=\"number\">\n      {{total_size}}\n    </p>\n  </div>\n</div>\n\n<div class=\"row  half-graph\">\n<!-- <div class=\"card\">\n  <combo-chart-component\n    *ngIf=\"dataLoaded\"\n    [view]=\"view\"\n    [scheme]=\"colorScheme\"\n    [results]=\"graphData\"\n    xAxis=\"true\"\n    yAxis=\"true\"\n    [gradient]=\"gradient\"\n    schemeType=\"ordinal\">\n  </combo-chart-component>\n</div> -->\n  <div class=\"card col-md-6\">\n    <div class=\"card-title\">\n      Number of files\n    </div>\n    <div class=\"card-body\">\n      <combo-chart-component\n        [results]=\"graphDataCount\"\n        xAxis=\"true\"\n        yAxis=\"true\"\n        >\n      </combo-chart-component>\n    </div>\n  </div>\n  <div class=\"card col-md-6\">\n    <div class=\"card-title\">\n      Total size of all files\n    </div>\n    <div class=\"card-body\">\n      <combo-chart-component\n        [results]=\"graphDataSize\"\n        xAxis=\"true\"\n        yAxis=\"true\"\n        [yAxisTickFormatting]=\"formatBytes\">\n      </combo-chart-component>\n    </div>\n  </div>\n</div>\n\n<div class=\"card filetypes\">\n  <ngx-charts-advanced-pie-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"fileTypes\"\n    [gradient]=\"gradient\"\n    (select)=\"onSelect($event)\"\n    label=\"Filetypes\">\n  </ngx-charts-advanced-pie-chart>\n</div>\n\n<div class=\"card filetypes\">\n  <ngx-charts-advanced-pie-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"fileTypesErrors\"\n    [gradient]=\"gradient\"\n    (select)=\"onSelect($event)\"\n    label=\"Errors per Filetype\">\n  </ngx-charts-advanced-pie-chart>\n</div>\n"

/***/ }),

/***/ "./src/app/Dashboard/dashboard.component.sass":
/*!****************************************************!*\
  !*** ./src/app/Dashboard/dashboard.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.numberRow {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 10px; }\n\n.numberTitle {\n  margin: 0; }\n\n.divider::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  height: 52px;\n  border-left: 2px solid rgba(188, 4, 78, 0.5);\n  margin-top: 10px; }\n\n.number {\n  font-size: 2em;\n  font-weight: bold;\n  margin: 0;\n  opacity: 0.5; }\n\n.number.errors {\n    color: red; }\n\n.half-graph {\n  margin: 0;\n  margin-bottom: 10px; }\n\n.half-graph .card {\n    padding-right: 40px; }\n\n.half-graph .card .card-body {\n      height: 200px;\n      padding: 0; }\n\n.filetypes {\n  height: 300px;\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/FileBrowser/File.component.ts":
/*!***********************************************!*\
  !*** ./src/app/FileBrowser/File.component.ts ***!
  \***********************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileComponent = /** @class */ (function () {
    function FileComponent() {
        this.fileName = 'demoFile';
        this.expanded = false;
    }
    FileComponent.prototype.ngOnInit = function () {
        // this.http.get('/api/package/'+this.package_id+'/files/').subscribe((data) => {
        //   console.log(data);
        // });
    };
    FileComponent.prototype.select = function () {
        console.log(this.file.selected);
        if (this.file.selected) {
            this.file.selected = false;
        }
        else {
            this.file.selected = true;
        }
        // for (f of file.children) {
        //
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileComponent.prototype, "file", void 0);
    FileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'file',
            template: __webpack_require__(/*! ./file.component.html */ "./src/app/FileBrowser/file.component.html"),
            styles: [__webpack_require__(/*! ./file.component.css */ "./src/app/FileBrowser/file.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./src/app/FileBrowser/FileBrowser.component.css":
/*!*******************************************************!*\
  !*** ./src/app/FileBrowser/FileBrowser.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Amodal {\n  /* position: fixed; */\n  /* top: 50%; */\n  /* left: 50%; */\n  /* transform: translate(-50%, -50%); */\n  /* width: 80%; */\n  /* max-width: 100%; */\n  /* height: 98%; */\n  /* max-height: 100%; */\n  /* overflow-y: scroll; */\n  /* background-color: white; */\n}\n\n.Amodal.active {\n  display: block !important;\n}\n\n.modal-dialog,\n.modal-content {\n    /* 80% of window height */\n    height: 95%;\n}\n\n.modal-body {\n    /* 100% = dialog height, 120px = header + footer */\n    /* max-height: calc(100% + 120px); */\n    overflow-y: scroll;\n}\n\n.modal-background {\n        /* modal background fixed across whole screen */\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        /* semi-transparent black  */\n        background-color: #000;\n        opacity: 0.75;\n\n        /* z-index must be below .modal and above everything else  */\n        z-index: -1;\n    }\n"

/***/ }),

/***/ "./src/app/FileBrowser/FileBrowser.component.html":
/*!********************************************************!*\
  !*** ./src/app/FileBrowser/FileBrowser.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal Amodal\" [class.active]=\"active\" id=\"modal\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">FileBrowser</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngFor=\"let file of files\">\n          <file [file]=\"file\"></file>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Close</button>\n        <!-- <button type=\"button\" class=\"btn btn-primary\">Save changes</button> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-background\" (click)=\"closeModal()\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/FileBrowser/FileBrowser.component.ts":
/*!******************************************************!*\
  !*** ./src/app/FileBrowser/FileBrowser.component.ts ***!
  \******************************************************/
/*! exports provided: FileBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserComponent", function() { return FileBrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileBrowserComponent = /** @class */ (function () {
    function FileBrowserComponent(http) {
        this.http = http;
        this.active = false;
        this.activeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedFiles = undefined;
        this.files = [];
    }
    FileBrowserComponent.prototype.getSelectedFilesForChild = function (child) {
        // if (!this.selectedFiles) {
        //   return undefined;
        // }
        // if (this.selectedFiles.type == "all") {
        //   return {"type": "all"}
        // } else if (this.selectedFiles.type == "selected") {
        //   // var exists = false;
        //   // for (let c of this.selectedFiles.children) {
        //   //   if (c.name == child) {
        //   //
        //   //   }
        //   // }
        //   // if (this.selectedFiles.children) {
        //   //
        //   // }
        // }
    };
    FileBrowserComponent.prototype.closeModal = function () {
        this.active = false;
        this.activeChange.emit(this.active);
    };
    FileBrowserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/package/' + this.package_id + '/files/').subscribe(function (data) {
            console.log(data);
            _this.files = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FileBrowserComponent.prototype, "package_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FileBrowserComponent.prototype, "active", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileBrowserComponent.prototype, "activeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileBrowserComponent.prototype, "selectedFiles", void 0);
    FileBrowserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'FileBrowser',
            template: __webpack_require__(/*! ./FileBrowser.component.html */ "./src/app/FileBrowser/FileBrowser.component.html"),
            styles: [__webpack_require__(/*! ./FileBrowser.component.css */ "./src/app/FileBrowser/FileBrowser.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileBrowserComponent);
    return FileBrowserComponent;
}());



/***/ }),

/***/ "./src/app/FileBrowser/file.component.css":
/*!************************************************!*\
  !*** ./src/app/FileBrowser/file.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".file-header {\n  -webkit-user-select: none;\n\t-moz-user-select: none;\n\t-o-user-select: none;\n  -ms-user-select: none;\n\t    user-select: none;\n  cursor: pointer;\n}\n\n.file-children {\n  margin-left: 15px;\n  clear: both;\n}\n\n.file-float {\n  float:left;\n}\n\n:host {\n  clear: both;\n  display: block;\n}\n"

/***/ }),

/***/ "./src/app/FileBrowser/file.component.html":
/*!*************************************************!*\
  !*** ./src/app/FileBrowser/file.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"file-header\" (click)=\"expanded = !expanded\">\n  <ng-template [ngIf]=\"file.type == 'folder'\">\n    <i *ngIf=\"!expanded\" class=\"material-icons file-float\">arrow_right</i>\n    <i *ngIf=\"expanded\" class=\"material-icons file-float\">arrow_drop_down</i>\n  </ng-template>\n  <p class=\"file-float\">{{file.name}}</p>\n  <!-- <i class=\"material-icons file-float\">indeterminate_check_box</i> -->\n</div>\n<i *ngIf=\"file.selected == true && file.type == 'file'\" class=\"material-icons file-float\" (click)=\"select()\" tooltip=\"Deselect this file\" tooltipPlacement=\"right\">check_box</i>\n<i *ngIf=\"file.selected != true && file.type == 'file'\" class=\"material-icons file-float\" (click)=\"select()\" tooltip=\"Select this file\" tooltipPlacement=\"right\">check_box_outline_blank</i>\n<i *ngIf=\"file.type == 'folder'\" class=\"material-icons file-float\" tooltip=\"Set a filter for items in folder\" tooltipPlacement=\"right\">filter_list</i>\n<div *ngIf=\"expanded\" class=\"file-children\">\n  <!-- <div *ngFor=\"let file of file.children\"> -->\n    <file *ngFor=\"let f of file.children\" [file]=\"f\"></file>\n  <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/Modal/Modal.component.css":
/*!*******************************************!*\
  !*** ./src/app/Modal/Modal.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  max-height: 95%;\n  display: block !important;\n}\n\n.modal-dialog {\n  height: 100%;\n  max-width: 90%;\n}\n\n.modal-content {\n  max-height: 95%;\n}\n\n.modal-body {\n  margin-top: 5px;\n    overflow-y: scroll;\n}\n\n.modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n\n  /* z-index must be below .modal and above everything else  */\n  z-index: -1;\n}\n"

/***/ }),

/***/ "./src/app/Modal/Modal.component.html":
/*!********************************************!*\
  !*** ./src/app/Modal/Modal.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal active\" *ngIf=\"active\" id=\"modal\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{title}}</h5>\n        <button type=\"button\" class=\"close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <ng-content select=\"[modal-body]\"></ng-content>\n      </div>\n      <div class=\"modal-footer\">\n        <ng-content select=\"[modal-footer]\"></ng-content>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Close</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-background\" (click)=\"close()\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/Modal/Modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/Modal/Modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.title = 'Title';
        this.active = false;
        this.activeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // @Output() active = new EventEmitter<boolean>();
    // @Input() footer: string = 'this is footer';
    ModalComponent.prototype.close = function () {
        this.active = false;
        this.activeChange.emit(this.active);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "active", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "activeChange", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal',
            template: __webpack_require__(/*! ./Modal.component.html */ "./src/app/Modal/Modal.component.html"),
            styles: [__webpack_require__(/*! ./Modal.component.css */ "./src/app/Modal/Modal.component.css")]
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/Modal/Modal.module.ts":
/*!***************************************!*\
  !*** ./src/app/Modal/Modal.module.ts ***!
  \***************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Modal_Modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modal/Modal.component */ "./src/app/Modal/Modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//imports
//declarations

//providers
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _Modal_Modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]
            ],
            providers: [],
            exports: [
                _Modal_Modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]
            ]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "./src/app/Navbar/Navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/Navbar/Navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-expand-lg fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" [routerLink]=\"['/']\">Sydarkivera</a>\n  <ul class=\"navbar-nav mr-auto\">\n    <ng-content></ng-content>\n    <!-- <li class=\"nav-item active\">\n      <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Features</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Pricingg</a>\n    </li> -->\n  </ul>\n  <ul class=\"navbar-nav mr-2\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Login</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Register</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/Navbar/Navbar.component.sass":
/*!**********************************************!*\
  !*** ./src/app/Navbar/Navbar.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\n  background-color: #5c5c5c;\n  width: 220px;\n  min-width: 220px;\n  max-width: 220px; }\n\n.nav-user {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/Navbar/Navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/Navbar/Navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./Navbar.component.html */ "./src/app/Navbar/Navbar.component.html"),
            styles: [__webpack_require__(/*! ./Navbar.component.sass */ "./src/app/Navbar/Navbar.component.sass")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/Navbar/Navbar.module.ts":
/*!*****************************************!*\
  !*** ./src/app/Navbar/Navbar.module.ts ***!
  \*****************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.component */ "./src/app/Navbar/Navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {Tooltip} from "./Tooltip.directive";
// import {TooltipComponent} from "./Tooltip.component";
// export * from "./Tooltip.directive";
// export * from "./Tooltip.component";

var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _Navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]
            ],
            exports: [
                _Navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]
            ],
            entryComponents: [
                _Navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]
            ]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/NotFound.component.ts":
/*!***************************************!*\
  !*** ./src/app/NotFound.component.ts ***!
  \***************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notFound',
            // templateUrl: './dashboard.component.html',
            template: "<h1>Path not found </h1>"
            // styleUrls: ['./packages.component.css']
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/PackageDetail/Package.component.html":
/*!******************************************************!*\
  !*** ./src/app/PackageDetail/Package.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <h4>Current workflow: {{package.template_name}}</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\" (drop)=\"onDrop($event)\" (dragover)=\"allowDropTop($event)\">\n        Name\n      </div>\n      <div class=\"list-group list-group-flush\">\n        <!-- <div *ngIf=\"placeholderLocation==0.5\" class=\"list-group-item list-group-item-action\">\n              </div> -->\n        <ng-template ngFor let-process [ngForOf]=\"package.processes\">\n          <div *ngIf=\"!process.hidden\" draggable=\"true\" (dragstart)=\"dragStart($event, process.process_id, 'process', process.name)\" (drop)=\"onDrop($event)\" (dragover)=\"allowDrop($event, process.order)\" class=\"list-group-item list-group-item-action\" [class.active]=\"process.process_id==selected_process_id\"\n              [class.template]=\"process.type=='placeholder'\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectProcess(process)\">\n                {{process.name}}\n              </p>\n              <!-- <i class=\"material-icons\">arrow_back</i> -->\n              <i *ngIf=\"process.order != 0\" class=\"material-icons icon-button\" (click)=\"moveUp(process)\">keyboard_arrow_up</i>\n              <i *ngIf=\"process.order < package.processes.length-1\" class=\"material-icons icon-button\" (click)=\"moveDown(process)\">keyboard_arrow_down</i>\n              <i class=\"material-icons icon-button\" (click)=\"deleteProcess(process)\">delete</i>\n              <i class=\"material-icons drag-handle\">drag_handle</i>\n              <!-- <small>{{process.status}}</small> -->\n            </div>\n            <ng-template [ngIf]=\"process.process_id==selected_process_id\">\n              <form *ngIf=\"process.form.length>0\">\n                <label *ngFor=\"let input of process.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n                                  {{input.label}}\n                                  <!-- <input type=\"text\" *ngIf=\"input.type=='text'\" [id]=\"input.identifier\" [value]=\"process.values[input.identifier]\" (keyup)=\"setProcessValue(input.identifier, $event.target.value)\" (change)=\"setProcessValue(input.identifier, $event.target.value)\"/> -->\n                                  <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"process.value[input.identifier]\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n                                  <!-- <button class=\"btn\" (click)=\"openFileBrowser()\">Files: All</button> -->\n                                </label>\n              </form>\n            </ng-template>\n          </div>\n        </ng-template>\n\n        <div class=\"emptyList\" *ngIf=\"isListEmpty()\">\n          <p>\n            You have not selected any tools.\n            <br> Select on by either dragging it from the right or pressing the plus (\n            <i class=\"material-icons\">add</i> ) sign\n          </p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\" data-query=\"view(Mooo)\">\n    <h4>Avaliable Tools</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\">\n        Name\n      </div>\n      <ng-template ngFor let-module [ngForOf]=\"modules\">\n        <div *ngIf=\"!module.hidden\" class=\"list-group list-group-flush\">\n          <div draggable=\"true\" (dragstart)=\"dragStart($event, module.module_id, 'module', module.name)\" (dragend)=\"onRelease($event)\" class=\"list-group-item list-group-item-action\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n              <i class=\"material-icons icon-button\" (click)=\"addProcessLast(module.module_id)\">add</i>\n              <i class=\"material-icons drag-handle\">drag_handle</i>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n    <button class=\"btn btn-secondary float-right\" (click)=\"saveAsTemplate()\">Save as template</button>\n    <button class=\"btn btn-secondary float-right\" (click)=\"saveAsSameTemplate()\">Modify template</button>\n    <button class=\"btn btn-success float-right\" (click)=\"startWorkflow()\">Start</button>\n  </div>\n</div>\n\n<modal [(active)]=\"modalActive\" title=\"Save as template\">\n  <div modal-body>\n    <label class=\"input-label\">\n      Name of new template:\n      <input type=\"text\" [(ngModel)]=\"templateName\"/>\n    </label>\n  </div>\n  <div modal-footer>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"saveNewTemplate()\">Save</button>\n  </div>\n</modal>\n"

/***/ }),

/***/ "./src/app/PackageDetail/Package.component.sass":
/*!******************************************************!*\
  !*** ./src/app/PackageDetail/Package.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.input-label {\n  width: 100%; }\n\n.template {\n  opacity: 0.4; }\n\n.emptyList {\n  height: 400px;\n  width: 100%;\n  background-color: #eee;\n  display: table;\n  padding: 0px 40px; }\n\n.emptyList p {\n    display: table-cell;\n    vertical-align: middle;\n    color: #444; }\n\n.emptyList i {\n    vertical-align: middle;\n    color: #444; }\n\n.list-group-item.active {\n  background-color: #ddd;\n  border-color: #bc044e; }\n\n.list-group-item.active label, .list-group-item.active p, .list-group-item.active i, .list-group-item.active small {\n    color: #333; }\n"

/***/ }),

/***/ "./src/app/PackageDetail/Package.component.ts":
/*!****************************************************!*\
  !*** ./src/app/PackageDetail/Package.component.ts ***!
  \****************************************************/
/*! exports provided: PackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageComponent", function() { return PackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PackageDetail.service */ "./src/app/PackageDetail/PackageDetail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { PackagesService } from './Packages.service'

var PackageComponent = /** @class */ (function () {
    function PackageComponent(packageService, route, router) {
        this.packageService = packageService;
        this.route = route;
        this.router = router;
        this.placeholderLocation = -1;
        this.selected_process_id = -1;
        this.selected_process = undefined;
        this.FileBrowserOpen = false;
        this.modalActive = false;
        this.templateName = "";
        this.package = {
            name: "Name"
        };
    }
    PackageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.packageService.getPackage(_this.id).subscribe(function (data) {
                console.log(data);
                console.log(data['processes']);
                _this.package = data;
            });
        });
        this.packageService.getModules().subscribe(function (data) {
            console.log(data);
            // this.package = data;
            _this.modules = data;
        });
        // this.client.fetch('/api/module/')
        //     .then(response => response.json())
        //     .then(data => {
        //         this.modules = data;
        //
        //     });
    };
    PackageComponent.prototype.saveAsTemplate = function () {
        this.modalActive = true;
    };
    PackageComponent.prototype.saveNewTemplate = function () {
        //backendcall with package_id and templateName.
        var data = { "package_id": this.package.package_id, "templateName": this.templateName };
        this.packageService.postTemplate(data).subscribe(function (data) {
            console.log(data);
            // this.package = data;
            // this.modules = data as [any];
        });
        this.package.template_name = this.templateName;
        this.modalActive = false;
    };
    PackageComponent.prototype.startWorkflow = function () {
        this.packageService.startWorkflow(this.package.package_id);
        this.router.navigate(['packages', this.package.package_id, 'status']);
    };
    PackageComponent.prototype.selectProcess = function (process) {
        if (this.selected_process_id != process.process_id) {
            this.selected_process_id = process.process_id;
            this.selected_process = process;
            // this.active_process_values = process.value;
            console.log(process.value);
        }
        else {
            this.selected_process_id = -1;
            this.selected_process = undefined;
        }
        // console.log(this.selected_process_id);
    };
    PackageComponent.prototype.deleteProcess = function (process) {
        this.packageService.deleteProcess(process.process_id).subscribe(function (data) {
        });
        this.package.processes = this.package.processes.filter(function (item) {
            return item.process_id != process.process_id;
        });
        // move up all processes below
        var data = [];
        for (var index in this.package.processes) {
            var item = this.package.processes[index];
            if (item.type != 'placeholder' && item.order > process.order) {
                item.order -= 1;
                data.push({ "order": item.order, "process_id": item.process_id });
            }
        }
        this.packageService.reorderProcesses(data, this.package.package_id).subscribe(function (data) {
            // console.log(data);
        });
        this.package.processes = this.package.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    PackageComponent.prototype.addProcessLast = function (module_id) {
        var _this = this;
        var order = 0;
        if (this.package.processes.length > 0) {
            order = this.package.processes[this.package.processes.length - 1].order + 1;
        }
        this.packageService.addProcess({ "order": order, "module": module_id, "package": this.package.package_id }).subscribe(function (data) {
            console.log(data);
            _this.package.processes = data;
        });
    };
    PackageComponent.prototype.setProcessValue = function (id, value) {
        var values = this.selected_process.value;
        values[id] = value;
        var data = { "value": values };
        this.packageService.saveProcess(data, this.selected_process_id).subscribe(function (data) {
            console.log('data chagned');
            console.log(data);
        });
        // this.client.fetch('/api/process/'+this.selected_process+'/', {
        //     method: "PUT",
        //     body: json(val),
        // }).then(response => response.json())
        // .then(data => {
        //     this.package.processes.splice(process_index, 1, data);
        // });
        // this.selected_process = -1;
    };
    PackageComponent.prototype.isListEmpty = function () {
        if (this.package == undefined || this.package.processes == undefined) {
            return true;
        }
        for (var _i = 0, _a = this.package.processes; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.hidden) {
                return false;
            }
        }
        return true;
    };
    PackageComponent.prototype.moveUp = function (process) {
        var data = [];
        data.push({ "order": (process.order - 1), "process_id": process.process_id });
        //find the one below
        // console.table(this.package.processes);
        var below;
        for (var i = 0; i < this.package.processes.length; i++) {
            var p = this.package.processes[i];
            if (p.order == process.order - 1) {
                data.push({ "order": (p.order + 1), "process_id": p.process_id });
                // console.log(i);/
                this.package.processes[i].order += 1;
                this.package.processes[i + 1].order -= 1;
                break;
            }
        }
        // console.table(data);
        // console.table(this.package.processes);
        this.packageService.reorderProcesses(data, this.package.package_id).subscribe(function (data) {
            // console.log(data);
        });
        this.package.processes = this.package.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    PackageComponent.prototype.moveDown = function (process) {
        var data = [];
        data.push({ "order": (process.order + 1), "process_id": process.process_id });
        //find the one below
        // console.table(this.package.processes);
        var below;
        for (var i = 0; i < this.package.processes.length; i++) {
            var p = this.package.processes[i];
            if (p.order == process.order + 1) {
                data.push({ "order": (p.order - 1), "process_id": p.process_id });
                // console.log(i);/
                this.package.processes[i].order -= 1;
                this.package.processes[i - 1].order += 1;
                break;
            }
        }
        // console.table(data);
        // console.table(this.package.processes);
        this.packageService.reorderProcesses(data, this.package.package_id).subscribe(function (data) {
            // console.log(data);
        });
        this.package.processes = this.package.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    PackageComponent.prototype.dragStart = function (e, id, type, name) {
        console.log('drag start: ' + e);
        // console.log(id);
        e.dataTransfer.setData('id', id);
        e.dataTransfer.setData('type', type);
        e.dataTransfer.setData('name', name);
    };
    PackageComponent.prototype.onDrop = function (e) {
        var _this = this;
        console.group('dropEvent');
        // console.log('drop: ' + e);
        // console.log(e.dataTransfer.getData('id'));
        // console.log(e.dataTransfer.getData('type'));
        // console.log(this.placeholderLocation);
        // if this.placeholderLocation == -0.5, insert first
        // if this.placeholderLocation == 0.5, insert afeter first
        var dropOrder = Math.ceil(this.placeholderLocation);
        if (dropOrder < 0) {
            dropOrder = 0;
        }
        // console.log(dropOrder);
        if (e.dataTransfer.getData('type') == 'module') {
            var data = [];
            // move down all items under existingIndex
            for (var index in this.package.processes) {
                var item = this.package.processes[index];
                // console.log(this.package.processes[index]);
                if (item.type != 'placeholder' && item.order >= dropOrder) {
                    item.order += 1;
                    data.push({ "order": item.order, "process_id": item.process_id }); // updates to push to backend
                }
            }
            // console.log(data);
            //submit reorder:
            this.packageService.reorderProcesses(data, this.package.package_id).subscribe(function (data) {
                console.log(data);
            });
            //add process
            var newProcess = {
                "order": dropOrder,
                "process_id": 100,
                "module": e.dataTransfer.getData('id'),
                "name": e.dataTransfer.getData('name')
            };
            this.package.processes.splice(dropOrder, 0, newProcess);
            this.packageService.addProcess({ "order": dropOrder, "module": e.dataTransfer.getData('id'), "package": this.package.package_id }).subscribe(function (data) {
                // console.log(data);
                _this.package.processes = data;
            });
            // console.log(this.package.processes);
        }
        else {
            var startOrder = -1;
            var movedProcessIndex;
            var data = [];
            for (var index in this.package.processes) {
                var item = this.package.processes[index];
                if (item.process_id == e.dataTransfer.getData('id')) {
                    startOrder = item.order;
                    movedProcessIndex = index;
                }
            }
            if (startOrder > dropOrder) {
                for (var index in this.package.processes) {
                    var item = this.package.processes[index];
                    if (item.type != 'placeholder' && item.order < startOrder && item.order >= dropOrder) {
                        item.order += 1;
                        data.push({ "order": item.order, "process_id": item.process_id });
                    }
                }
                this.package.processes[movedProcessIndex].order = dropOrder;
                data.push({ "order": this.package.processes[movedProcessIndex].order, "process_id": this.package.processes[movedProcessIndex].process_id });
            }
            else {
                for (var index in this.package.processes) {
                    var item = this.package.processes[index];
                    if (item.type != 'placeholder' && item.order > startOrder && item.order < dropOrder) {
                        item.order -= 1;
                        data.push({ "order": item.order, "process_id": item.process_id });
                    }
                }
                this.package.processes[movedProcessIndex].order = dropOrder - 1;
                data.push({ "order": this.package.processes[movedProcessIndex].order, "process_id": this.package.processes[movedProcessIndex].process_id });
            }
            // push changes to api
            this.packageService.reorderProcesses(data, this.package.package_id).subscribe(function (data) {
                console.log(data);
            });
            this.package.processes = this.package.processes.filter(function (item) {
                return item['type'] != 'placeholder';
            }).sort(function (a, b) {
                if (a.order > b.order) {
                    return 1;
                }
                return -1;
            });
        }
        //changing order:
        // let p1 = this.processes[processindex-1];
        // let p2 = this.processes[processindex];
        // let temp = p1.order;
        // p1.order = p2.order;
        // p2.order = temp;
        // this.processes.sort(function(a, b) {
        //     return a.order - b.order;
        // });
        // //upload change to server.
        // let data = [{"order":p2.order, "process_id":p2.process_id}, {"order":p1.order, "process_id":p1.process_id}];
        // this.client.fetch('/api/package/'+package_id+'/process/', {
        //     method: "PUT",
        //     body: json(data)
        // })
        console.groupEnd();
    };
    PackageComponent.prototype.onRelease = function (e) {
        //reset
        this.package.processes = this.package.processes.filter(function (item) {
            return item['type'] != 'placeholder';
        });
    };
    //set ghost image to show where you will drop.
    PackageComponent.prototype.allowDrop = function (e, index) {
        console.log(index);
        e.preventDefault();
        // console.log(index);
        var element = e.target;
        // console.log(e.pageY);
        // console.log(e.pageY - element.getBoundingClientRect().top);
        if (Math.abs(index % 1) > 0.4 && Math.abs(index % 1) < 0.6) {
            return;
        }
        if (e.pageY - element.getBoundingClientRect().top > element.offsetHeight * 0.5) {
            // drop below elements
            // console.log('s');
            var ind = index + 0.5;
            if (ind != this.placeholderLocation) {
                // console.log(ind);
                // console.log(index);
                // console.log(this.placeholderLocation);
                this.placeholderLocation = ind;
                this.package.processes = this.package.processes.filter(function (item) {
                    return item.type != 'placeholder';
                });
                var temp = { type: "placeholder", order: ind, name: e.dataTransfer.getData('name') };
                this.package.processes.splice(index + 1, 0, temp);
            }
        }
        else {
            //drop above element.
            // this.placeholderLocation = index + 0.5;
            var ind = index - 0.5;
            if (ind != this.placeholderLocation) {
                // console.log(ind);
                // console.log(index);
                // console.log(this.placeholderLocation);
                this.placeholderLocation = ind;
                this.package.processes = this.package.processes.filter(function (item) {
                    return item.type != 'placeholder';
                });
                var temp = { type: "placeholder", order: ind, name: e.dataTransfer.getData('name') };
                this.package.processes.splice(index, 0, temp);
            }
        }
        // console.log(element.offsetHeight);
        // e.preventDefault();
    };
    PackageComponent.prototype.allowDropTop = function (e) {
        e.preventDefault();
        //calculate order. Order will be 0.5 lower than first visible.
        var order = -0.5;
        for (var index in this.package.processes) {
            var item = this.package.processes[index];
            if (item.hidden) {
                order += 1;
            }
            else {
                break;
            }
        }
        this.placeholderLocation = order;
        this.package.processes = this.package.processes.filter(function (item) {
            return item.type != 'placeholder';
        });
        var temp = { type: "placeholder", order: order, name: e.dataTransfer.getData('name') };
        this.package.processes.push(temp);
        this.package.processes = this.package.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    PackageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'package',
            template: __webpack_require__(/*! ./Package.component.html */ "./src/app/PackageDetail/Package.component.html"),
            styles: [__webpack_require__(/*! ./Package.component.sass */ "./src/app/PackageDetail/Package.component.sass")]
        }),
        __metadata("design:paramtypes", [_PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__["PackageDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PackageComponent);
    return PackageComponent;
}());



/***/ }),

/***/ "./src/app/PackageDetail/Package.module.ts":
/*!*************************************************!*\
  !*** ./src/app/PackageDetail/Package.module.ts ***!
  \*************************************************/
/*! exports provided: PackageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageModule", function() { return PackageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Package_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Package.component */ "./src/app/PackageDetail/Package.component.ts");
/* harmony import */ var _PackageDashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PackageDashboard.component */ "./src/app/PackageDetail/PackageDashboard.component.ts");
/* harmony import */ var _PackageStatus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PackageStatus.component */ "./src/app/PackageDetail/PackageStatus.component.ts");
/* harmony import */ var _PackageTemplate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PackageTemplate.component */ "./src/app/PackageDetail/PackageTemplate.component.ts");
/* harmony import */ var _PackageHeader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PackageHeader.component */ "./src/app/PackageDetail/PackageHeader.component.ts");
/* harmony import */ var _FileBrowser_FileBrowser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FileBrowser/FileBrowser.component */ "./src/app/FileBrowser/FileBrowser.component.ts");
/* harmony import */ var _FileBrowser_File_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FileBrowser/File.component */ "./src/app/FileBrowser/File.component.ts");
/* harmony import */ var _PackageDetail_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PackageDetail.service */ "./src/app/PackageDetail/PackageDetail.service.ts");
/* harmony import */ var _Admin_Module_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Admin/Module.service */ "./src/app/Admin/Module.service.ts");
/* harmony import */ var _Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Tooltip/Tooltip.module */ "./src/app/Tooltip/Tooltip.module.ts");
/* harmony import */ var _Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Navbar/Navbar.module */ "./src/app/Navbar/Navbar.module.ts");
/* harmony import */ var _Modal_Modal_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Modal/Modal.module */ "./src/app/Modal/Modal.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// import { HeroDetailComponent }  from './hero-detail.component';
// import { HeroService } from './hero.service';
var PackageModule = /** @class */ (function () {
    function PackageModule() {
    }
    PackageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"],
                _Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_15__["NavbarModule"],
                _Modal_Modal_module__WEBPACK_IMPORTED_MODULE_16__["ModalModule"],
            ],
            declarations: [
                _Package_component__WEBPACK_IMPORTED_MODULE_5__["PackageComponent"],
                _PackageDashboard_component__WEBPACK_IMPORTED_MODULE_6__["PackageDashboardComponent"],
                _PackageHeader_component__WEBPACK_IMPORTED_MODULE_9__["PackageHeaderComponent"],
                _PackageStatus_component__WEBPACK_IMPORTED_MODULE_7__["PackageStatusComponent"],
                _PackageTemplate_component__WEBPACK_IMPORTED_MODULE_8__["PackageTemplateComponent"],
                _FileBrowser_FileBrowser_component__WEBPACK_IMPORTED_MODULE_10__["FileBrowserComponent"],
                _FileBrowser_File_component__WEBPACK_IMPORTED_MODULE_11__["FileComponent"]
            ],
            // bootstrap: [PackageHeaderComponent] s
            providers: [_PackageDetail_service__WEBPACK_IMPORTED_MODULE_12__["PackageDetailService"], _Admin_Module_service__WEBPACK_IMPORTED_MODULE_13__["ModuleService"]],
        })
    ], PackageModule);
    return PackageModule;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageDashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/PackageDetail/PackageDashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row numberRow\">\n  <div class=\"col-md-4 col-sm-4 col-xs-6\">\n    <p class=\"numberTitle\">\n      Total Files:\n    </p>\n    <p class=\"number\">\n      {{total_number_of_files}}\n    </p>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-xs-6 divider\">\n    <p class=\"numberTitle\">\n      Total Filesize:\n    </p>\n    <p class=\"number\">\n      {{total_size}}\n    </p>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-xs-6 divider\">\n    <!-- <p class=\"numberTitle\">\n      Browse:\n    </p> -->\n    <button class=\"btn btn-success browse\" (click)=\"startWorkflow()\">Browse package</button>\n  </div>\n</div>\n\n<div class=\"progress border border-primary\">\n  <div\n    *ngFor=\"let process of package.processes\"\n    class=\"progress-bar text-dark text-center\"\n    [style.width]=\"process.progress/package.processes.length + '%'\"\n    [class.bg-success]=\"process.status == 'Done'\"\n    [class.bg-danger]=\"process.status == 'Error'\"\n    [class.progress-bar-animated]=\"process.status == 'Running'\"\n    [class.progress-bar-striped]=\"process.status == 'Running'\"\n    >\n  </div>\n</div>\n\n<div class=\"card filetypes\">\n  <ngx-charts-advanced-pie-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"fileTypes\"\n    [gradient]=\"gradient\"\n    (select)=\"onSelect($event)\"\n    label=\"Files\">\n  </ngx-charts-advanced-pie-chart>\n</div>\n\n<!-- <div class=\"card filetypes\">\n  <ngx-charts-advanced-pie-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"fileTypesErrors\"\n    [gradient]=\"gradient\"\n    (select)=\"onSelect($event)\"\n    label=\"Errors per Filetype\">\n  </ngx-charts-advanced-pie-chart>\n</div> -->\n\n\n\n<!-- <ngx-charts-advanced-pie-chart\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"fileTypes\"\n  [gradient]=\"gradient\"\n  (select)=\"onSelect($event)\"\n  label=\"Filetypes\">\n</ngx-charts-advanced-pie-chart> -->\n\n<!-- <ngx-charts-gauge\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"single\"\n  [min]=\"0\"\n  [max]=\"100\"\n  [angleSpan]=\"240\"\n  [startAngle]=\"-120\"\n  [units]=\"'alerts'\"\n  [bigSegments]=\"10\"\n  [smallSegments]=\"5\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-gauge> -->\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageDashboard.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/PackageDetail/PackageDashboard.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.numberRow {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 10px; }\n\n.numberTitle {\n  margin: 0; }\n\n.divider::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  height: 52px;\n  border-left: 2px solid rgba(188, 4, 78, 0.5);\n  margin-top: 10px; }\n\n.number {\n  font-size: 2em;\n  font-weight: bold;\n  margin: 0;\n  opacity: 0.5; }\n\n.number.errors {\n    color: red; }\n\n.half-graph {\n  margin: 0;\n  margin-bottom: 10px; }\n\n.half-graph .card {\n    padding-right: 40px; }\n\n.half-graph .card .card-body {\n      height: 200px;\n      padding: 0; }\n\n.filetypes {\n  height: 300px;\n  margin-bottom: 10px; }\n\n.btn.browse {\n  margin-top: 15px; }\n\n.progress {\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageDashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/PackageDetail/PackageDashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: PackageDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDashboardComponent", function() { return PackageDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PackageDetail.service */ "./src/app/PackageDetail/PackageDetail.service.ts");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utilities */ "./src/app/Utilities.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { PackagesService } from './Packages.service'

// import { FileBrowserComponent } from '../FileBrowser/FileBrowser.component';
// import { PackagesService } from './Packages.service'

var PackageDashboardComponent = /** @class */ (function () {
    function PackageDashboardComponent(packageService, route, router) {
        // Object.assign(this, {single, multi})
        this.packageService = packageService;
        this.route = route;
        this.router = router;
        this.id = -1;
        this.package = { processes: [] };
        this.fileTypes = [];
        //   {
        //     "name":'pdf',
        //     "value":10
        //   },
        //   {
        //     "name":"xml",
        //     "value":3
        //   }
        // ];
        this.title = 'new title';
        this.single = [
            {
                "name": "Germany",
                "value": 8940000
            },
            {
                "name": "USA",
                "value": 5000000
            },
            {
                "name": "France",
                "value": 7200000
            }
        ];
        // multi: any[];
        this.view = [700, 400];
        // options
        this.showLegend = false;
        this.colorScheme = {
            domain: _Utilities__WEBPACK_IMPORTED_MODULE_3__["GraphColors"]
        };
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.gradient = false;
        // change to 0 later
        this.total_number_of_files = 12;
        this.total_size = '3.45 GB';
        this.progress = 0;
    }
    PackageDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.packageService.getPackage(_this.id).subscribe(function (data) {
                console.log(data);
                _this.package = data;
                var res = [];
                for (var key in _this.package.statistics.fileTypes) {
                    var value = _this.package.statistics.fileTypes[key];
                    // Use `key` and `value`
                    var temp = {};
                    temp['name'] = key;
                    temp['value'] = value;
                    res.push({ "name": key.toUpperCase(), "value": value });
                }
                _this.total_size = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["formatBytes"])(_this.package.statistics.total_size);
                _this.total_number_of_files = _this.package.statistics.total_number_of_files;
                _this.fileTypes = res.slice();
                //calculate total progress
                _this.progress = 0;
                for (var _i = 0, _a = _this.package.processes; _i < _a.length; _i++) {
                    var process = _a[_i];
                    _this.progress += Number(process.progress);
                }
                _this.progress = _this.progress / _this.package.processes.length;
            });
        });
    };
    PackageDashboardComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    PackageDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packageDashboard',
            template: __webpack_require__(/*! ./PackageDashboard.component.html */ "./src/app/PackageDetail/PackageDashboard.component.html"),
            styles: [__webpack_require__(/*! ./PackageDashboard.component.sass */ "./src/app/PackageDetail/PackageDashboard.component.sass")]
        }),
        __metadata("design:paramtypes", [_PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__["PackageDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PackageDashboardComponent);
    return PackageDashboardComponent;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageDetail-routing.routes.ts":
/*!***************************************************************!*\
  !*** ./src/app/PackageDetail/PackageDetail-routing.routes.ts ***!
  \***************************************************************/
/*! exports provided: packageRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageRoutes", function() { return packageRoutes; });
/* harmony import */ var _Package_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Package.component */ "./src/app/PackageDetail/Package.component.ts");
/* harmony import */ var _PackageHeader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PackageHeader.component */ "./src/app/PackageDetail/PackageHeader.component.ts");
/* harmony import */ var _PackageDashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PackageDashboard.component */ "./src/app/PackageDetail/PackageDashboard.component.ts");
/* harmony import */ var _PackageStatus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PackageStatus.component */ "./src/app/PackageDetail/PackageStatus.component.ts");
/* harmony import */ var _PackageTemplate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PackageTemplate.component */ "./src/app/PackageDetail/PackageTemplate.component.ts");





var packageRoutes = [
    { path: ':id', component: _PackageHeader_component__WEBPACK_IMPORTED_MODULE_1__["PackageHeaderComponent"], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: _PackageDashboard_component__WEBPACK_IMPORTED_MODULE_2__["PackageDashboardComponent"] },
            { path: 'template', component: _PackageTemplate_component__WEBPACK_IMPORTED_MODULE_4__["PackageTemplateComponent"] },
            { path: 'edit', component: _Package_component__WEBPACK_IMPORTED_MODULE_0__["PackageComponent"] },
            { path: 'status', component: _PackageStatus_component__WEBPACK_IMPORTED_MODULE_3__["PackageStatusComponent"] }
        ] }
];


/***/ }),

/***/ "./src/app/PackageDetail/PackageDetail.service.ts":
/*!********************************************************!*\
  !*** ./src/app/PackageDetail/PackageDetail.service.ts ***!
  \********************************************************/
/*! exports provided: PackageDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDetailService", function() { return PackageDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackageDetailService = /** @class */ (function () {
    function PackageDetailService(http) {
        this.http = http;
        this.packagesURL = '/api/package/';
    }
    PackageDetailService.prototype.getAllPackages = function () {
        return this.http.get(this.packagesURL);
    };
    PackageDetailService.prototype.getPackage = function (id) {
        return this.http.get(this.packagesURL + id + '/');
    };
    PackageDetailService.prototype.setActiveTemplate = function (template_id, package_id, data) {
        return this.http.put('/api/template/' + template_id + '/package/' + package_id + '/', data);
    };
    PackageDetailService.prototype.getModules = function () {
        return this.http.get('/api/module/');
    };
    PackageDetailService.prototype.addProcess = function (process) {
        return this.http.post('/api/process/', process);
    };
    PackageDetailService.prototype.reorderProcesses = function (data, package_id) {
        return this.http.put('/api/package/' + package_id + '/process/', data);
    };
    PackageDetailService.prototype.deleteProcess = function (id) {
        return this.http.delete('/api/process/' + id + '/');
    };
    PackageDetailService.prototype.saveProcess = function (data, id) {
        return this.http.put('/api/process/' + id + '/', data);
    };
    PackageDetailService.prototype.getLogFile = function (path, process_id) {
        return this.http.get('/process/' + process_id + '/' + path, { responseType: 'text' });
    };
    PackageDetailService.prototype.startWorkflow = function (package_id) {
        this.http.post('/api/package/' + package_id + '/execute/', {}).subscribe(function () {
        });
    };
    PackageDetailService.prototype.finishPackage = function (package_id) {
        this.http.post('/api/package/' + package_id + '/finish/', {}).subscribe(function () {
        });
    };
    PackageDetailService.prototype.removePackage = function (id) {
        return this.http.delete('/api/package/' + id + '/');
    };
    PackageDetailService.prototype.getTemplates = function () {
        return this.http.get('/api/template/');
    };
    PackageDetailService.prototype.postTemplate = function (data) {
        return this.http.post('/api/template/', data);
    };
    PackageDetailService.prototype.getStatsDashboard = function () {
        return this.http.get('/api/stats/dashboard/');
    };
    PackageDetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PackageDetailService);
    return PackageDetailService;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageHeader.component.html":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageHeader.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar>\n  <li class=\"nav-item nav-link dropdown\" [class.show]=\"showDropDown\">\n    <p class=\"navbar-link dropdown-toggle package_title\" (click)=\"showDropDown = !showDropDown\">\n      {{name}}\n    </p>\n    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" [class.show]=\"showDropDown\">\n      <a *ngFor=\"let package of packages\" class=\"dropdown-item\" (click)=\"navigateTo(package.package_id)\">{{package.name}}</a>\n    </div>\n  </li>\n  <li class=\"nav-item\"  routerLinkActive=\"active\">\n    <a class=\"nav-link\" [routerLink]=\"['dashboard']\">Dashboard</a>\n  </li>\n  <li class=\"nav-item\" routerLinkActive=\"active\" [class.disabled]=\"status==6\">\n    <a class=\"nav-link\" [routerLink]=\"['template']\" [class.disabled]=\"status==6\">Templates</a>\n  </li>\n  <li *ngIf=\"!active_template\" class=\"nav-item disabled\" tooltip=\"Select any template before you can modify it\" tooltipPlacement=\"bottom\" tooltipOpacity=\"0.8\">\n    <a class=\"nav-link disabled noselect\">Workflow</a>\n  </li>\n  <li *ngIf=\"active_template\" class=\"nav-item\" routerLinkActive=\"active\" [class.disabled]=\"status==6\">\n    <a class=\"nav-link\" [routerLink]=\"['edit']\" [class.disabled]=\"status==6\">Workflow</a>\n  </li>\n  <li class=\"nav-item\" routerLinkActive=\"active\">\n    <a class=\"nav-link\" [routerLink]=\"['status']\">Status</a>\n  </li>\n</navbar>\n\n\n<!-- <ul class=\"nav nav-tabs\">\n  <li class=\"nav-item dropdown\" [class.show]=\"showDropDown\">\n    <a class=\"nav-link dropdown-toggle package_title\" (click)=\"showDropDown = !showDropDown\">\n      {{name}}\n    </a>\n    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" [class.show]=\"showDropDown\">\n      <a *ngFor=\"let package of packages\" class=\"dropdown-item\" (click)=\"navigateTo(package.package_id)\">{{package.name}}</a>\n    </div>\n  </li>\n  <li class=\"nav-link\"  routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['dashboard']\">Dashboard</a>\n  </li>\n  <li class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['template']\">Templates</a>\n  </li>\n  <li *ngIf=\"!active_template\" class=\"nav-link\" routerLinkActive=\"active\" tooltip=\"Select any template before you can modify it\" tooltipPlacement=\"top\">\n    <a class=\"navbar-link disabled\" [routerLink]=\"['edit']\">Workflow</a>\n  </li>\n  <li *ngIf=\"active_template\" class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['edit']\">Workflow</a>\n  </li>\n  <li class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['status']\">Status</a>\n  </li>\n</ul> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageHeader.component.sass":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageHeader.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.package_title {\n  font-weight: bold;\n  color: white;\n  margin: 0;\n  padding: 0;\n  cursor: pointer; }\n\n.nav-item.disabled {\n  cursor: not-allowed; }\n\n.nav-item.active {\n  background-color: #bc044e; }\n\n.nav-item .nav-link {\n  color: white; }\n\n.nav-item .nav-link.disabled {\n    color: gray;\n    pointer-events: none;\n    cursor: not-allowed; }\n\n.dropdown-item:active {\n  background-color: #bc044e;\n  color: white !important; }\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageHeader.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/PackageDetail/PackageHeader.component.ts ***!
  \**********************************************************/
/*! exports provided: PackageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageHeaderComponent", function() { return PackageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PackageDetail.service */ "./src/app/PackageDetail/PackageDetail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { PackagesService } from './Packages.service'

var PackageHeaderComponent = /** @class */ (function () {
    function PackageHeaderComponent(packageService, route, router) {
        this.packageService = packageService;
        this.route = route;
        this.router = router;
        this.title = 'new title';
        this.name = "";
        this.showDropDown = false;
        this.status = -1;
    }
    PackageHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.router.url);
        // console.log(this.route);
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.packageService.getPackage(_this.id).subscribe(function (data) {
                // console.log(data);
                _this.active_template = data['active_template'];
                _this.name = data['name'];
                _this.status = data['status'];
            });
        });
        this.packageService.getAllPackages().subscribe(function (data) {
            // console.log(data);
            _this.packages = data;
            // this.name = data['name'];
        });
    };
    PackageHeaderComponent.prototype.navigateTo = function (package_id) {
        // console.log(this.router.url);
        // console.log(this.route);
        var topPath = this.router.url.split("/").pop();
        this.router.navigate(['../', package_id, topPath], { relativeTo: this.route });
        this.showDropDown = false;
    };
    PackageHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'package',
            template: __webpack_require__(/*! ./PackageHeader.component.html */ "./src/app/PackageDetail/PackageHeader.component.html"),
            styles: [__webpack_require__(/*! ./PackageHeader.component.sass */ "./src/app/PackageDetail/PackageHeader.component.sass")]
        }),
        __metadata("design:paramtypes", [_PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__["PackageDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PackageHeaderComponent);
    return PackageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageStatus.component.html":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageStatus.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-hover\" style=\"background-color: white;\">\n  <thead class=\"company-table-head\">\n    <tr>\n      <th>Name</th>\n      <th>Statusbar</th>\n      <th>Status</th>\n      <th>Log</th>\n      <th>\n        Error\n        <button class=\"refresh\" (click)=\"updateData()\"><i class=\"material-icons\">refresh</i></button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let process of package.processes\">\n      <td class=\"align-middle\">\n        {{process.name}} {{process.hidden ? '(Hidden)' : ''}}\n      </td>\n      <td class=\"align-middle\">\n        <div class=\"progress border border-primary\">\n          <div class=\"progress-bar text-dark text-center\"\n          [class.bg-success]=\"process.status == 'Done'\"\n          [class.bg-danger]=\"process.status == 'Error'\"\n          [class.progress-bar-animated]=\"process.status == 'Running'\"\n          [class.progress-bar-striped]=\"process.status == 'Running'\"\n          [style.width]=\"process.progress + '%'\">{{process.progress}}%</div>\n        </div>\n      </td>\n      <td class=\"align-middle\">{{process.status}}</td>\n      <td class=\"align-middle\"><button class=\"btn btn-outline-primary\" (click)=\"showModal(process, 'info_log')\" [disabled]=\"process.log_path == ''\">Open log</button></td>\n      <td class=\"align-middle\">\n        <button class=\"btn btn-danger\"\n                (click)=\"showModal(process, 'error_log')\"\n                [disabled]=\"process.err_path == '' || process.status != 'Error'\"\n                [class.btn-outline-danger]=\"process.errors.length <= 0\">\n                Errors: {{process.errors.length}}\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<button class=\"btn btn-success float-right\" (click)=\"startWorkflow()\" *ngIf=\"package.status != 6\">Start</button>\n<button class=\"btn btn-warning float-right\" (click)=\"finishPackage()\" *ngIf=\"package.status != 6\">Done</button>\n<button class=\"btn btn-danger float-right\" (click)=\"removePackage()\">Delete</button>\n\n\n<modal [(active)]=\"modalactive\" title=\"Complete log\">\n  <div modal-body style=\"margin-bottom: 10px\">\n    <div class=\"loading mx-auto\" *ngIf=\"modalLoading\"></div>\n    <div *ngIf=\"modalType == 'info'\" [innerHTML]=\"modalData\" style=\"white-space: pre-wrap;\"></div>\n    <div *ngIf=\"modalType == 'error'\" class=\"list-group\">\n      <div *ngFor=\"let error of modalProcess.errors\" class=\"list-group-item list-group-item-action\" (click)=\"error.expanded = !error.expanded\">\n        <div class=\" d-flex justify-content-between\">\n          <p class=\"\">{{error.file}}</p>\n          <i *ngIf=\"!error.expanded\" class=\"material-icons my-auto\">keyboard_arrow_right</i>\n          <i *ngIf=\"error.expanded\" class=\"material-icons my-auto\">keyboard_arrow_down</i>\n        </div>\n        <div *ngIf=\"error.expanded\">\n          <p [innerHTML]=\"sanitizeLog(error.Error)\" style=\"white-space: pre-wrap;\">\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</modal>\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageStatus.component.sass":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageStatus.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Amodal.active {\n  display: block !important; }\n\n.modal-dialog,\n.modal-content {\n  /* 80% of window height */\n  height: 95%; }\n\n.modal-body {\n  /* 100% = dialog height, 120px = header + footer */\n  /* max-height: calc(100% + 120px) */\n  overflow-y: scroll; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit; }\n\n.modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .modal and above everything else */\n  z-index: -1; }\n\n.loading {\n  border: 6px solid #f3f3f3;\n  border-top: 6px solid #3498db;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageStatus.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/PackageDetail/PackageStatus.component.ts ***!
  \**********************************************************/
/*! exports provided: PackageStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageStatusComponent", function() { return PackageStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PackageDetail.service */ "./src/app/PackageDetail/PackageDetail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { PackagesService } from './Packages.service'

var PackageStatusComponent = /** @class */ (function () {
    function PackageStatusComponent(packageService, route, router) {
        var _this = this;
        this.packageService = packageService;
        this.route = route;
        this.router = router;
        this.logActive = true;
        this.modalActive = false;
        this.modalData = '';
        this.modalactive = false;
        this.modalLoading = true;
        this.modalType = 'info';
        this.modalProcess = undefined;
        this.package = {
            name: "Name"
        };
        router.events.subscribe(function (val) {
            clearInterval(_this.interval);
        });
    }
    PackageStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.updateData();
        });
        clearInterval(this.interval);
        this.interval = setInterval(function () {
            _this.updateData();
        }, 3000);
    };
    PackageStatusComponent.prototype.showModal = function (process, type) {
        var _this = this;
        // this.modalActive = true;
        //load data fromserver...
        this.modalactive = true;
        this.modalLoading = true;
        this.modalData = "";
        if (type == 'info_log') {
            this.modalType = 'info';
            this.packageService.getLogFile(type, process.process_id).subscribe(function (data) {
                _this.modalLoading = false;
                _this.modalData = _this.sanitizeLog(data);
            });
        }
        else {
            this.modalLoading = false;
            this.modalType = 'error';
            this.modalProcess = process;
        }
    };
    PackageStatusComponent.prototype.startWorkflow = function () {
        this.packageService.startWorkflow(this.package.package_id);
        this.updateData();
    };
    PackageStatusComponent.prototype.finishPackage = function () {
        this.packageService.finishPackage(this.package.package_id);
        this.updateData();
    };
    PackageStatusComponent.prototype.updateData = function () {
        var _this = this;
        this.packageService.getPackage(this.id).subscribe(function (data) {
            // console.log(data);
            _this.package = data;
        });
    };
    PackageStatusComponent.prototype.removePackage = function () {
        this.packageService.removePackage(this.id).subscribe(function (data) {
            // console.log(data);
        });
        this.router.navigate(['packages']);
    };
    PackageStatusComponent.prototype.sanitizeLog = function (data) {
        return data.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split("\n").join("<br>");
    };
    PackageStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packageStatus',
            template: __webpack_require__(/*! ./PackageStatus.component.html */ "./src/app/PackageDetail/PackageStatus.component.html"),
            styles: [__webpack_require__(/*! ./PackageStatus.component.sass */ "./src/app/PackageDetail/PackageStatus.component.sass")]
        }),
        __metadata("design:paramtypes", [_PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__["PackageDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PackageStatusComponent);
    return PackageStatusComponent;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageTemplate.component.html":
/*!**************************************************************!*\
  !*** ./src/app/PackageDetail/PackageTemplate.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Select a template to set as a startingpoint for this package</h4>\n\n<table class=\"table table-striped table-hover\" style=\"background-color: white;\">\n  <thead class=\"company-table-head\">\n    <tr>\n      <th>Name</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let template of templates\" [class.selected]=\"active_template==template.template_id\">\n      <td [class.selected]=\"active_template==template.template_id\">\n        {{template.name}}\n      </td>\n      <td class=\"small-column\" [class.selected]=\"active_template==template.template_id\">\n        <!-- <a [routerLink]=\"[package.package_id, 'status']\">{{package.status}}</a> -->\n        <button class=\"btn btn-success\" *ngIf=\"active_template != template.template_id\" [class.btn-warning]=\"active_template != undefined\" (click)=\"selectTemplate(template)\">Select</button>\n        <button class=\"btn btn-success\">Start</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageTemplate.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/PackageDetail/PackageTemplate.component.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".small-column {\n  width: 200px; }\n\nbutton {\n  margin-left: 10px; }\n\n.selected {\n  background-color: #aaa;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageTemplate.component.ts":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageTemplate.component.ts ***!
  \************************************************************/
/*! exports provided: PackageTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageTemplateComponent", function() { return PackageTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PackageDetail.service */ "./src/app/PackageDetail/PackageDetail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { PackagesService } from './Packages.service'

var PackageTemplateComponent = /** @class */ (function () {
    function PackageTemplateComponent(packageService, route, router) {
        this.packageService = packageService;
        this.route = route;
        this.router = router;
        this.active_template = -1;
    }
    PackageTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.package_id = +params['id'];
            // get package
            _this.packageService.getPackage(_this.package_id).subscribe(function (data) {
                _this.package = data;
                _this.active_template = data['active_template'];
                console.log(data);
            });
        });
        this.packageService.getTemplates().subscribe(function (data) {
            console.log(data);
            // this.package = data;
            var res = data;
            _this.templates = res.filter(function (item) {
                if (item.template_id > 1) {
                    return true;
                }
                return false;
            });
        });
    };
    PackageTemplateComponent.prototype.selectTemplate = function (template) {
        var _this = this;
        // api call to set the template for package.
        var data = { "active_template": template.template_id };
        this.packageService.setActiveTemplate(template.template_id, this.package_id, data).subscribe(function (res) {
            console.log(res);
            // this.router.navigate(['packages', this.package_id, 'edit']);
            window.location.href = '/packages/' + _this.package_id + '/edit';
        });
    };
    PackageTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packageTemplate',
            template: __webpack_require__(/*! ./PackageTemplate.component.html */ "./src/app/PackageDetail/PackageTemplate.component.html"),
            styles: [__webpack_require__(/*! ./PackageTemplate.component.sass */ "./src/app/PackageDetail/PackageTemplate.component.sass")]
        }),
        __metadata("design:paramtypes", [_PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__["PackageDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PackageTemplateComponent);
    return PackageTemplateComponent;
}());



/***/ }),

/***/ "./src/app/Packages/PackageList.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Packages/PackageList.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n\n<!-- <div class=\"row\"> -->\n<table class=\"table table-striped table-hover\" style=\"background-color: white;\">\n  <thead class=\"company-table-head\">\n    <tr>\n      <th>Name</th>\n      <th>Filename</th>\n      <th>\n        Status\n        <button class=\"refresh\" (click)=\"updateData()\"><i class=\"material-icons\">refresh</i></button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let package of packages\">\n      <td><a [routerLink]=\"[package.package_id]\">{{package.name}}</a></td>\n      <td>{{package.file_name}}</td>\n      <td><a [routerLink]=\"[package.package_id, 'status']\">{{package.status}}</a></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/Packages/PackageList.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/Packages/PackageList.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Packages/PackageList.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Packages/PackageList.component.ts ***!
  \***************************************************/
/*! exports provided: PackageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageListComponent", function() { return PackageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Packages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Packages.service */ "./src/app/Packages/Packages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackageListComponent = /** @class */ (function () {
    function PackageListComponent(packagesService) {
        this.packagesService = packagesService;
        this.title = 'new title';
        this.packages = [];
    }
    PackageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.packagesService.getPackages().subscribe(function (data) {
            console.log(data);
            _this.packages = data;
        });
    };
    PackageListComponent.prototype.updateData = function () {
        var _this = this;
        this.packagesService.getPackages().subscribe(function (data) {
            console.log(data);
            _this.packages = data;
        });
    };
    PackageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packages',
            template: __webpack_require__(/*! ./PackageList.component.html */ "./src/app/Packages/PackageList.component.html"),
            styles: [__webpack_require__(/*! ./PackageList.component.sass */ "./src/app/Packages/PackageList.component.sass")]
        }),
        __metadata("design:paramtypes", [_Packages_service__WEBPACK_IMPORTED_MODULE_1__["PackagesService"]])
    ], PackageListComponent);
    return PackageListComponent;
}());



/***/ }),

/***/ "./src/app/Packages/Packages-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Packages/Packages-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PackagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesRoutingModule", function() { return PackagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Packages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Packages.component */ "./src/app/Packages/Packages.component.ts");
/* harmony import */ var _PackageList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PackageList.component */ "./src/app/Packages/PackageList.component.ts");
/* harmony import */ var _PackageDetail_PackageDetail_routing_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PackageDetail/PackageDetail-routing.routes */ "./src/app/PackageDetail/PackageDetail-routing.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { PackageComponent }    from './Package.component';
// import { PackageHeaderComponent }    from './PackageHeader.component';

// import { PackageDashboardComponent } from './PackageDashboard.component';
// import { HeroDetailComponent }  from './hero-detail.component';

var packagesRoutes = [
    { path: 'packages', component: _Packages_component__WEBPACK_IMPORTED_MODULE_2__["PackagesComponent"], children: [
            { path: '', component: _PackageList_component__WEBPACK_IMPORTED_MODULE_3__["PackageListComponent"] }
        ].concat(_PackageDetail_PackageDetail_routing_routes__WEBPACK_IMPORTED_MODULE_4__["packageRoutes"]) },
];
var PackagesRoutingModule = /** @class */ (function () {
    function PackagesRoutingModule() {
    }
    PackagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(packagesRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], PackagesRoutingModule);
    return PackagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/Packages/Packages.component.html":
/*!**************************************************!*\
  !*** ./src/app/Packages/Packages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Packages/Packages.component.ts":
/*!************************************************!*\
  !*** ./src/app/Packages/Packages.component.ts ***!
  \************************************************/
/*! exports provided: PackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesComponent", function() { return PackagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { PackagesService } from './Packages.service'
var PackagesComponent = /** @class */ (function () {
    function PackagesComponent() {
        this.title = 'new title';
        this.packages = [];
    }
    PackagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packages',
            template: __webpack_require__(/*! ./Packages.component.html */ "./src/app/Packages/Packages.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PackagesComponent);
    return PackagesComponent;
}());



/***/ }),

/***/ "./src/app/Packages/Packages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Packages/Packages.module.ts ***!
  \*********************************************/
/*! exports provided: PackagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesModule", function() { return PackagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Packages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Packages-routing.module */ "./src/app/Packages/Packages-routing.module.ts");
/* harmony import */ var _Packages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Packages.component */ "./src/app/Packages/Packages.component.ts");
/* harmony import */ var _Packages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Packages.service */ "./src/app/Packages/Packages.service.ts");
/* harmony import */ var _PackageList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PackageList.component */ "./src/app/Packages/PackageList.component.ts");
/* harmony import */ var _PackageDetail_Package_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PackageDetail/Package.module */ "./src/app/PackageDetail/Package.module.ts");
/* harmony import */ var _Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Navbar/Navbar.module */ "./src/app/Navbar/Navbar.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { PackageComponent }    from './Package.component';

// import { PackageHeaderComponent }    from './PackageHeader.component';
// import { PackageDashboardComponent } from './PackageDashboard.component';

// import { HeroDetailComponent }  from './hero-detail.component';
// import { HeroService } from './hero.service';

var PackagesModule = /** @class */ (function () {
    function PackagesModule() {
    }
    PackagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _PackageDetail_Package_module__WEBPACK_IMPORTED_MODULE_7__["PackageModule"],
                _Packages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PackagesRoutingModule"],
                _Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
            ],
            declarations: [
                _Packages_component__WEBPACK_IMPORTED_MODULE_4__["PackagesComponent"],
                // PackageComponent,
                // PackageHeaderComponent,
                _PackageList_component__WEBPACK_IMPORTED_MODULE_6__["PackageListComponent"],
            ],
            providers: [_Packages_service__WEBPACK_IMPORTED_MODULE_5__["PackagesService"]],
        })
    ], PackagesModule);
    return PackagesModule;
}());



/***/ }),

/***/ "./src/app/Packages/Packages.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Packages/Packages.service.ts ***!
  \**********************************************/
/*! exports provided: PackagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesService", function() { return PackagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackagesService = /** @class */ (function () {
    function PackagesService(http) {
        this.http = http;
        this.packagesURL = '/api/package/';
    }
    PackagesService.prototype.getPackages = function () {
        return this.http.get(this.packagesURL);
    };
    PackagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PackagesService);
    return PackagesService;
}());



/***/ }),

/***/ "./src/app/Tooltip/Tooltip.component.css":
/*!***********************************************!*\
  !*** ./src/app/Tooltip/Tooltip.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\n\n  /* @extend .tooltip; */\n  /* z-index: 1000 !important; */\n    /* position: fixed; */\n    /* display: block; */\n    /* display: block; */\n    opacity: 0.5;\n}\n"

/***/ }),

/***/ "./src/app/Tooltip/Tooltip.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Tooltip/Tooltip.component.ts ***!
  \**********************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TooltipComponent = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function TooltipComponent(element, cdr) {
        this.element = element;
        this.cdr = cdr;
        this.placement = "bottom";
        this.animation = true;
        this.opacity = 0.5;
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this.top = -100000;
        this.left = -100000;
        this.isIn = false;
        this.isFade = false;
    }
    // -------------------------------------------------------------------------
    // Lifecycle callbacks
    // -------------------------------------------------------------------------
    TooltipComponent.prototype.ngAfterViewInit = function () {
        this.show();
        this.cdr.detectChanges();
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    TooltipComponent.prototype.show = function () {
        if (!this.hostElement)
            return;
        var p = this.positionElements(this.hostElement, this.element.nativeElement.children[0], this.placement);
        this.top = p.top;
        this.left = p.left;
        this.isIn = true;
        if (this.animation)
            this.isFade = true;
    };
    TooltipComponent.prototype.hide = function () {
        this.top = -100000;
        this.left = -100000;
        this.isIn = true;
        if (this.animation)
            this.isFade = false;
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    TooltipComponent.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        var positionStrParts = positionStr.split("-");
        var pos0 = positionStrParts[0];
        var pos1 = positionStrParts[1] || "center";
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
        var shiftWidth = {
            center: function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
                return hostElPos.left;
            },
            right: function () {
                return hostElPos.left + hostElPos.width;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
                return hostElPos.top;
            },
            bottom: function () {
                return hostElPos.top + hostElPos.height;
            }
        };
        var targetElPos;
        switch (pos0) {
            case "right":
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: shiftWidth[pos0]()
                };
                break;
            case "left":
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: hostElPos.left - targetElWidth
                };
                break;
            case "bottom":
                targetElPos = {
                    top: shiftHeight[pos0](),
                    left: shiftWidth[pos1]()
                };
                break;
            default:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth[pos1]()
                };
                break;
        }
        return targetElPos;
    };
    TooltipComponent.prototype.position = function (nativeEl) {
        var offsetParentBCR = { top: 0, left: 0 };
        var elBCR = this.offset(nativeEl);
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    TooltipComponent.prototype.offset = function (nativeEl) {
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    };
    TooltipComponent.prototype.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle)
            return nativeEl.currentStyle[cssProp];
        if (window.getComputedStyle)
            return window.getComputedStyle(nativeEl)[cssProp];
        // finally try and get inline style
        return nativeEl.style[cssProp];
    };
    TooltipComponent.prototype.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, "position") || "static") === "static";
    };
    TooltipComponent.prototype.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", HTMLElement)
    ], TooltipComponent.prototype, "hostElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipComponent.prototype, "placement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TooltipComponent.prototype, "animation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TooltipComponent.prototype, "opacity", void 0);
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tooltip-content",
            styles: [__webpack_require__(/*! ./Tooltip.component.css */ "./src/app/Tooltip/Tooltip.component.css")],
            template: "\n<div class=\"tooltip {{ placement }}\"\n     [style.top]=\"top + 'px'\"\n     [style.left]=\"left + 'px'\"\n     [style.opacity]=\"opacity\"\n     [class.in]=\"isIn\"\n     [class.fade]=\"isFade\"\n     role=\"Atooltip\">\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\">\n        <ng-content></ng-content>\n        {{ content }}\n    </div>\n</div>\n"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/Tooltip/Tooltip.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/Tooltip/Tooltip.directive.ts ***!
  \**********************************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Tooltip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip.component */ "./src/app/Tooltip/Tooltip.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Tooltip = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function Tooltip(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.tooltipAnimation = true;
        this.tooltipPlacement = "bottom";
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    Tooltip.prototype.show = function () {
        if (this.tooltipDisabled || this.visible)
            return;
        this.visible = true;
        if (typeof this.content === "string") {
            var factory = this.resolver.resolveComponentFactory(_Tooltip_component__WEBPACK_IMPORTED_MODULE_1__["TooltipComponent"]);
            if (!this.visible)
                return;
            this.tooltip = this.viewContainerRef.createComponent(factory);
            this.tooltip.instance.hostElement = this.viewContainerRef.element.nativeElement;
            this.tooltip.instance.content = this.content;
            this.tooltip.instance.placement = this.tooltipPlacement;
            this.tooltip.instance.animation = this.tooltipAnimation;
            this.tooltip.instance.opacity = this.tooltipOpacity;
        }
        else {
            var tooltip = this.content;
            tooltip.hostElement = this.viewContainerRef.element.nativeElement;
            tooltip.placement = this.tooltipPlacement;
            tooltip.animation = this.tooltipAnimation;
            tooltip.opacity = this.tooltipOpacity;
            tooltip.show();
        }
    };
    Tooltip.prototype.hide = function () {
        if (!this.visible)
            return;
        this.visible = false;
        if (this.tooltip)
            this.tooltip.destroy();
        if (this.content instanceof _Tooltip_component__WEBPACK_IMPORTED_MODULE_1__["TooltipComponent"])
            this.content.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("tooltip"),
        __metadata("design:type", Object)
    ], Tooltip.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Tooltip.prototype, "tooltipDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Tooltip.prototype, "tooltipAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Tooltip.prototype, "tooltipPlacement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Tooltip.prototype, "tooltipOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("focusin"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mouseenter"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Tooltip.prototype, "show", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("focusout"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mouseleave"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Tooltip.prototype, "hide", null);
    Tooltip = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[tooltip]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], Tooltip);
    return Tooltip;
}());



/***/ }),

/***/ "./src/app/Tooltip/Tooltip.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Tooltip/Tooltip.module.ts ***!
  \*******************************************/
/*! exports provided: TooltipModule, Tooltip, TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tooltip.directive */ "./src/app/Tooltip/Tooltip.directive.ts");
/* harmony import */ var _Tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tooltip.component */ "./src/app/Tooltip/Tooltip.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _Tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["Tooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return _Tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _Tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["Tooltip"],
                _Tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"],
            ],
            exports: [
                _Tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["Tooltip"],
                _Tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"],
            ],
            entryComponents: [
                _Tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"]
            ]
        })
    ], TooltipModule);
    return TooltipModule;
}());



/***/ }),

/***/ "./src/app/Utilities.ts":
/*!******************************!*\
  !*** ./src/app/Utilities.ts ***!
  \******************************/
/*! exports provided: formatBytes, GraphColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatBytes", function() { return formatBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphColors", function() { return GraphColors; });
function formatBytes(o) {
    var sizes = [
        'Bytes',
        'KB',
        'MB',
        'GB',
        'TB',
        'PB'
    ];
    var size = o;
    var index = 0;
    while (size / 1000 > 0.1) {
        size = size / 1000;
        index += 1;
    }
    size = Math.floor(size * 1000) / 1000;
    return size + ' ' + sizes[index];
}
var GraphColors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6',
    '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#95a5a6', '#16a085', '#27ae60',
    '#2980b9', '#8e44ad', '#2c3e50', '#f39c12', '#d35400', '#c0392b', '#7f8c8d'];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard/Dashboard.component */ "./src/app/Dashboard/Dashboard.component.ts");
/* harmony import */ var _NotFound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotFound.component */ "./src/app/NotFound.component.ts");
/* harmony import */ var _Admin_Admin_routing_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Admin/Admin-routing.routes */ "./src/app/Admin/Admin-routing.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { PackagesComponent } from './Packages/packages.component';

// import { AdminComponent } from './Admin/Admin.component';


var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // { path: 'Packages', component: PackagesComponent },
    { path: 'dashboard', component: _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] }
].concat(_Admin_Admin_routing_routes__WEBPACK_IMPORTED_MODULE_4__["adminRoutes"], [
    { path: '**', component: _NotFound_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] },
]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-md-2 d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"nav flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"dashboard\">\n                  <i class=\"material-icons\">dashboard</i>\n                  Dashboard\n                </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"packages\">\n                  <i class=\"material-icons\">pages</i>\n                  Packages\n                </a>\n          </li>\n        </ul>\n\n        <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n              <span>Admin</span>\n              <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n                <span data-feather=\"plus-circle\"></span>\n              </a>\n            </h6>\n        <ul class=\"nav flex-column mb-2\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"admin/modules\">\n                  <i class=\"material-icons\">category</i>\n                  Tools\n                </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"admin/global\">\n                  <i class=\"material-icons\">tune</i>\n                  Global Settings\n                </a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"admin/processes\">\n                  <i class=\"material-icons\">layers</i>\n                  Default processes\n                </a>\n          </li> -->\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"admin/templates\">\n                  <i class=\"material-icons\">format_list_numbered</i>\n                  Templates\n                </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n    <router-outlet></router-outlet>\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4 main-view\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\nbody {\n  font-size: .875rem; }\n\n/*\n * Sidebar\n */\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  padding: 48px 0 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n  width: 220px;\n  max-width: 220px; }\n\n.sidebar-sticky {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky; } }\n\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333; }\n\n.sidebar .nav-link.active {\n    color: #bc044e;\n    background-color: #cbcbcb; }\n\n.sidebar .nav-link:hover {\n    background-color: #dddddd; }\n\n.sidebar .nav-link:hover .active,\n.sidebar .nav-link.active .active {\n  color: inherit; }\n\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase; }\n\n/*\n * Content\n */\n\n[role=\"main\"] {\n  padding-top: 48px; }\n\n/*\n * Navbar\n */\n\n/* .navbar-brand\n  padding-top: .75rem\n  padding-bottom: .75rem\n  font-size: 1rem\n  margin: 0\n  margin-top: -10px\n  background-color: rgba(0, 0, 0, .75)\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25) */\n\n.navbar-brand a {\n  color: white; }\n\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0; }\n\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25); }\n\n/*\n * Utilities\n */\n\n.material-icons {\n  float: left;\n  margin-right: 20px; }\n\n.main-view {\n  /* margin-left: 220px */\n  width: calc(100% - 220px);\n  min-width: calc(100% - 220px);\n  max-width: calc(100% - 220px);\n  float: left; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app2';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Packages_Packages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Packages/Packages.module */ "./src/app/Packages/Packages.module.ts");
/* harmony import */ var _Admin_Admin_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Admin/Admin.module */ "./src/app/Admin/Admin.module.ts");
/* harmony import */ var _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Dashboard/Dashboard.component */ "./src/app/Dashboard/Dashboard.component.ts");
/* harmony import */ var _Dashboard_combo_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Dashboard/combo-chart.component */ "./src/app/Dashboard/combo-chart.component.ts");
/* harmony import */ var _NotFound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NotFound.component */ "./src/app/NotFound.component.ts");
/* harmony import */ var _Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Tooltip/Tooltip.module */ "./src/app/Tooltip/Tooltip.module.ts");
/* harmony import */ var _Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Navbar/Navbar.module */ "./src/app/Navbar/Navbar.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import {NgxDnDModule} from '@swimlane/ngx-dnd';
// import { DragulaModule } from 'ng2-dragula';
// import { DragDropDirectiveModule} from "angular4-drag-drop";
// import { DndListModule } from 'ngx-drag-and-drop-lists';


// import { PackagesComponent } from './Packages/packages.component';





// import { AdminComponent } from './Admin/Admin.component';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // FileBrowserComponent,
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _Dashboard_combo_chart_component__WEBPACK_IMPORTED_MODULE_11__["ComboChartComponent"],
                _NotFound_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                _Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"],
                _Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_14__["NavbarModule"],
                // DndListModule,
                // NgxDnDModule,
                // DragulaModule,
                // DragDropDirectiveModule,
                _Packages_Packages_module__WEBPACK_IMPORTED_MODULE_8__["PackagesModule"],
                _Admin_Admin_module__WEBPACK_IMPORTED_MODULE_9__["AdminModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Axenu/Sydarkviera/SAWorkflow/Angular6/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map