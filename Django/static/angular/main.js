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
/* harmony import */ var _AdminProcesses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdminProcesses.component */ "./src/app/Admin/AdminProcesses.component.ts");




// import { PackageComponent }    from './Package.component';
// import { PackageHeaderComponent }    from './PackageHeader.component';
// import { PackageDashboardComponent } from './PackageDashboard.component';
// import { PackageStatusComponent }    from './PackageStatus.component';
var adminRoutes = [
    { path: 'admin', component: _AdminHeader_component__WEBPACK_IMPORTED_MODULE_0__["AdminHeaderComponent"], children: [
            { path: '', redirectTo: 'modules', pathMatch: 'full' },
            { path: 'modules', component: _AdminModules_component__WEBPACK_IMPORTED_MODULE_1__["AdminModulesComponent"] },
            { path: 'global', component: _AdminGlobal_component__WEBPACK_IMPORTED_MODULE_2__["AdminGlobalComponent"] },
            { path: 'processes', component: _AdminProcesses_component__WEBPACK_IMPORTED_MODULE_3__["AdminProcessesComponent"] },
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
/* harmony import */ var _AdminHeader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AdminHeader.component */ "./src/app/Admin/AdminHeader.component.ts");
/* harmony import */ var _AdminModules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AdminModules.component */ "./src/app/Admin/AdminModules.component.ts");
/* harmony import */ var _AdminGlobal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AdminGlobal.component */ "./src/app/Admin/AdminGlobal.component.ts");
/* harmony import */ var _AdminProcesses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AdminProcesses.component */ "./src/app/Admin/AdminProcesses.component.ts");
/* harmony import */ var _Module_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Module.service */ "./src/app/Admin/Module.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//imports

//declarations




// import { PackageDashboardComponent }    from './PackageDashboard.component';
// import { PackageStatusComponent }    from './PackageStatus.component';
// import { PackageHeaderComponent } from './PackageHeader.component';
// import { FileBrowserComponent } from '../FileBrowser/FileBrowser.component';
// import { FileComponent } from '../FileBrowser/File.component';
//providers

// import { ModuleService } from '../Admin/Module.service';
// import { TooltipModule } from '../Tooltip/Tooltip.module';
// import { HeroDetailComponent }  from './hero-detail.component';
// import { HeroService } from './hero.service';
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
            ],
            declarations: [
                _AdminHeader_component__WEBPACK_IMPORTED_MODULE_6__["AdminHeaderComponent"],
                _AdminModules_component__WEBPACK_IMPORTED_MODULE_7__["AdminModulesComponent"],
                _AdminGlobal_component__WEBPACK_IMPORTED_MODULE_8__["AdminGlobalComponent"],
                _AdminProcesses_component__WEBPACK_IMPORTED_MODULE_9__["AdminProcessesComponent"],
            ],
            // bootstrap: [PackageHeaderComponent] s
            providers: [_Module_service__WEBPACK_IMPORTED_MODULE_10__["ModuleService"]],
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/Admin/AdminGlobal.component.css":
/*!*************************************************!*\
  !*** ./src/app/Admin/AdminGlobal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-label {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/Admin/AdminGlobal.component.html":
/*!**************************************************!*\
  !*** ./src/app/Admin/AdminGlobal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <label class=\"input-label\">\n    Working directory:\n    <input type=\"text\" [(ngModel)]=\"workDir\" tooltip=\"A directory where temporary project files to be stored while they are in use in A.P.P\" tooltipPlacement=\"right\"/>\n  </label>\n  <label class=\"input-label\">\n    Packages directory:\n    <input type=\"text\" tooltip=\"The location of packages to be included in A.P.P. i.e. Workarea in EPP\" tooltipPlacement=\"right\"/>\n  </label>\n  <label class=\"input-label\">\n    Premis XML file:\n    <input type=\"text\"/>\n  </label>\n  <label class=\"input-label\">\n    Mets XML file:\n    <input type=\"text\"/>\n  </label>\n  <label class=\"input-label\">\n    Name:\n    <input type=\"text\"/>\n  </label>\n</div>\n"

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

// import { PackageDetailService } from '../PackageDetail/PackageDetail.service';

var AdminGlobalComponent = /** @class */ (function () {
    function AdminGlobalComponent(moduleService) {
        this.moduleService = moduleService;
        this.workDir = "";
    }
    AdminGlobalComponent.prototype.ngOnInit = function () {
        // this.packageService.getModules().subscribe((data) => {
        //   this.modules = data as [any];
        //   this.setModule(this.modules[this.modules.length-1]);
        // });
    };
    AdminGlobalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./AdminGlobal.component.html */ "./src/app/Admin/AdminGlobal.component.html"),
            styles: [__webpack_require__(/*! ./AdminGlobal.component.css */ "./src/app/Admin/AdminGlobal.component.css")]
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

module.exports = "<ul class=\"nav nav-tabs\">\n  <li class=\"nav-link\"  routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['modules']\">Modules</a>\n  </li>\n  <li class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['global']\">Global Settings</a>\n  </li>\n  <li class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['processes']\">Default processes</a>\n  </li>\n  <!-- <li class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['status']\">Status</a>\n  </li> -->\n</ul>\n<router-outlet></router-outlet>\n"

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

/***/ "./src/app/Admin/AdminModules.component.css":
/*!**************************************************!*\
  !*** ./src/app/Admin/AdminModules.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-label {\n  width: 100%;\n}\n\n.Error-text {\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/Admin/AdminModules.component.html":
/*!***************************************************!*\
  !*** ./src/app/Admin/AdminModules.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <h4>Existing processes</h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Name\n      </div>\n      <div class=\"list-group list-group-flush\">\n        <div *ngFor=\"let module of modules\" class=\"list-group-item list-group-item-action\" (click)=\"selectModule(module)\">\n          <div class=\"d-flex w-100 justify-content-between\">\n            <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\" *ngIf=\"selected_module\">\n    <h4>{{title}} preview</h4>\n    <label *ngFor=\"let input of selected_module.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n      {{input.label}}\n      <!-- <input type=\"text\" *ngIf=\"input.type=='text'\" [id]=\"input.identifier\" [value]=\"process.values[input.identifier]\" (keyup)=\"setProcessValue(input.identifier, $event.target.value)\" (change)=\"setProcessValue(input.identifier, $event.target.value)\"/> -->\n      <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"input.default\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n    </label>\n    <button class=\"btn btn-success\">Save as default values</button>\n\n    <h5>Command Settings:</h5>\n    <label class=\"input-label\">\n      Name:\n      <input type=\"text\" [(ngModel)]=\"selected_module.name\"/>\n    </label>\n    <label class=\"input-label\">\n      Hidden:\n      <input type=\"checkbox\" [(ngModel)]=\"selected_module.hidden\"/>\n    </label>\n    <label class=\"input-label\">\n      File filter:\n      <input type=\"text\" [(ngModel)]=\"selected_module.filter\"/>\n    </label>\n    <label class=\"input-label\">\n      Form:\n    </label>\n    <textarea rows=\"10\" cols=\"70\" [(ngModel)]=\"formJson\">\n    </textarea>\n    <p class=\"Error-text\">{{formJsonError}}</p>\n    <hr>\n    <label class=\"input-label\">\n      What qualifies succes in the log files:\n    </label>\n    <div *ngFor=\"let filter of selected_module.resultFilter\">\n      <div class=\"resultFilterItem\">\n        <select [(ngModel)]=\"filter.type\">\n          <option value=\"Containing\">Containing</option>\n          <option value=\"Not containing\">Not containing</option>\n        </select>\n        <input type=\"text\" [(ngModel)]=\"filter.value\"/>\n        <i class=\"material-icons icon-button\" (click)=\"removeResultFilter(filter)\">delete</i>\n      </div>\n    </div>\n    <hr>\n    <p>Add a new filter</p>\n    <div class=\"resultFilterItem\">\n      <select [(ngModel)]=\"newResultFilter.type\">\n        <option value=\"Containing\">Containing</option>\n        <option value=\"Not containing\">Not containing</option>\n      </select>\n        <input type=\"text\" [(ngModel)]=\"newResultFilter.value\"/>\n        <i class=\"material-icons icon-button\" (click)=\"addResultFilter()\">add</i>\n      <!-- <button class=\"btn btn-success\" (click)=\"addResultFilter()\">Add Row</button> -->\n    </div>\n    <!-- <hr> -->\n    <p>Avaliable types: checkbox, text (Should I create a ui for configuring the form or should I write documentation?)</p>\n    <h6>Command:</h6>\n    <label class=\"input-label\">\n      type:\n      <select [(ngModel)]=\"selected_module.type\">\n        <option value=\"Command\">Command</option>\n        <option value=\"Python module\">Python module</option>\n      </select>\n      <i class=\"material-icons icon-button\">warning</i>\n    </label>\n    <label class=\"input-label\" *ngIf=\"selected_module.type == 'Command'\">\n      Command:\n      <!-- <input type=\"text\" [value]=\"getJson(selected_module.command)\"/> -->\n    </label>\n    <textarea rows=\"10\" cols=\"70\" [(ngModel)]=\"commandJson\" *ngIf=\"selected_module.type == 'Command'\">\n    </textarea>\n    <label class=\"input-label\" *ngIf=\"selected_module.type == 'Python module'\">\n      Python Module:\n      <input type=\"text\" [(ngModel)]=\"selected_module.python_module\"/>\n    </label>\n    <label class=\"input-label\">\n      Run on multiple files:\n      <input type=\"checkbox\" [(ngModel)]=\"selected_module.multifile\"/>\n    </label>\n    <button class=\"btn btn-success\" (click)=\"save()\">Save changes</button>\n    <button class=\"btn\" (click)=\"exportModule()\">Export</button> <p>Export will export a tar file containing the json strucutre and the python file, if it exists</p>\n  </div>\n</div>\n"

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
        this.selected_module = undefined;
        this.formJson = "";
        this.commandJson = "";
        this.formJsonError = "";
        this.commandJsonError = "";
        this.resultFilters = undefined;
        this.newResultFilter = { type: 'Containing', value: '' };
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
    AdminModulesComponent.prototype.selectModule = function (mod) {
        if (!this.selected_module || this.selected_module.module_id != mod.module_id) {
            this.setModule(mod);
        }
        else {
            this.selected_module = undefined;
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
    AdminModulesComponent.prototype.exportModule = function () {
    };
    AdminModulesComponent.prototype.save = function () {
        var _this = this;
        //validate first!
        console.log(this.selected_module.type);
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
        data["name"] = this.selected_module.name;
        data["hidden"] = this.selected_module.hidden;
        data["form"] = this.selected_module.form;
        data["type"] = this.selected_module.type;
        data["command"] = this.selected_module.command;
        data["python_module"] = this.selected_module.python_module;
        data["multifile"] = this.selected_module.multifile;
        data["filter"] = this.selected_module.filter;
        data["resultFilter"] = this.selected_module.resultFilter;
        this.moduleService.saveData(this.selected_module.module_id, data).subscribe(function (data) {
            // console.log(data);
            for (var i in _this.modules) {
                var m = _this.modules[i];
                if (m.module_id == data["module_id"]) {
                    // m = data;
                    _this.modules[i] = data;
                    _this.setModule(data);
                }
            }
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
            styles: [__webpack_require__(/*! ./AdminModules.component.css */ "./src/app/Admin/AdminModules.component.css")]
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

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n      <h4>Modules to be run before each package</h4>\n      <div class=\"card\">\n          <div class=\"card-header\"\n          (dragover)=\"allowDropTop($event, 0)\"\n          (drop)=\"onDrop($event, 0)\">\n              Module Name\n          </div>\n          <div class=\"list-group list-group-flush\">\n            <!-- <div *ngIf=\"placeholderLocation==0.5\" class=\"list-group-item list-group-item-action\">\n            </div> -->\n              <ng-template\n              ngFor\n              let-process\n              [ngForOf]=\"startTemplate.processes\"\n              >\n                <div\n                    draggable=\"true\"\n                    (dragstart)=\"dragStart($event, process.process_id, 'startTemplate', process.name)\"\n                    (drop)=\"onDrop($event, 0)\"\n                    (dragover)=\"allowDrop($event, process.order, 0)\"\n                    class=\"list-group-item list-group-item-action\"\n                    [class.active]=\"process.process_id==selected_process_id\"\n                    [class.placeholder]=\"process.type=='placeholder'\"\n                  >\n                  <div class=\"d-flex w-100 justify-content-between\">\n                      <p\n                      style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectProcess(process)\">\n                        {{process.name}}\n                      </p>\n                      <!-- <i class=\"material-icons\">arrow_back</i> -->\n                      <i *ngIf=\"process.order != 0\" class=\"material-icons icon-button\" (click)=\"moveUp(process, 0)\">keyboard_arrow_up</i>\n                      <i *ngIf=\"process.order < startTemplate.processes.length-1\" class=\"material-icons icon-button\" (click)=\"moveDown(process, 0)\">keyboard_arrow_down</i>\n                      <i class=\"material-icons icon-button\" (click)=\"deleteProcess(process, 0)\">delete</i>\n                      <small>{{process.status}}</small>\n                  </div>\n                  <ng-template [ngIf]=\"process.process_id==selected_process_id\">\n                      <form *ngIf=\"process.form.length>0\">\n                              <label *ngFor=\"let input of process.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n                                {{input.label}}\n                                <!-- <input type=\"text\" *ngIf=\"input.type=='text'\" [id]=\"input.identifier\" [value]=\"process.values[input.identifier]\" (keyup)=\"setProcessValue(input.identifier, $event.target.value)\" (change)=\"setProcessValue(input.identifier, $event.target.value)\"/> -->\n                                <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"process.value[input.identifier]\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n                                <!-- <button class=\"btn\" (click)=\"openFileBrowser()\">Files: All</button> -->\n                              </label>\n                      </form>\n                  </ng-template>\n                </div>\n              </ng-template>\n          </div>\n      </div>\n      <h4>Modules to be run after each package</h4>\n      <div class=\"card\">\n          <div class=\"card-header\"\n          (dragover)=\"allowDropTop($event, 1)\"\n          (drop)=\"onDrop($event, 1)\">\n              Module Name\n          </div>\n          <div class=\"list-group list-group-flush\">\n            <!-- <div *ngIf=\"placeholderLocation==0.5\" class=\"list-group-item list-group-item-action\">\n            </div> -->\n              <ng-template\n              ngFor\n              let-process\n              [ngForOf]=\"endTemplate.processes\"\n              >\n                <div\n                    draggable=\"true\"\n                    (dragstart)=\"dragStart($event, process.process_id, 'endTemplate', process.name)\"\n                    (drop)=\"onDrop($event, 1)\"\n                    (dragover)=\"allowDrop($event, process.order, 1)\"\n                    class=\"list-group-item list-group-item-action\"\n                    [class.active]=\"process.process_id==selected_process_id\"\n                    [class.placeholder]=\"process.type=='placeholder'\"\n                  >\n                  <div class=\"d-flex w-100 justify-content-between\">\n                      <p\n                      style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectProcess(process)\">\n                        {{process.name}}\n                      </p>\n                      <!-- <i class=\"material-icons\">arrow_back</i> -->\n                      <i *ngIf=\"process.order != 0\" class=\"material-icons icon-button\" (click)=\"moveUp(process, 1)\">keyboard_arrow_up</i>\n                      <i *ngIf=\"process.order < endTemplate.processes.length-1\" class=\"material-icons icon-button\" (click)=\"moveDown(process, 1)\">keyboard_arrow_down</i>\n                      <i class=\"material-icons icon-button\" (click)=\"deleteProcess(process, 1)\">delete</i>\n                      <small>{{process.status}}</small>\n                  </div>\n                  <ng-template [ngIf]=\"process.process_id==selected_process_id\">\n                      <form *ngIf=\"process.form.length>0\">\n                              <label *ngFor=\"let input of process.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n                                {{input.label}}\n                                <!-- <input type=\"text\" *ngIf=\"input.type=='text'\" [id]=\"input.identifier\" [value]=\"process.values[input.identifier]\" (keyup)=\"setProcessValue(input.identifier, $event.target.value)\" (change)=\"setProcessValue(input.identifier, $event.target.value)\"/> -->\n                                <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"process.value[input.identifier]\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n                                <!-- <button class=\"btn\" (click)=\"openFileBrowser()\">Files: All</button> -->\n                              </label>\n                      </form>\n                  </ng-template>\n                </div>\n              </ng-template>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-lg-6\" data-query=\"view(Mooo)\">\n      <h4>Avaliable Tools</h4>\n      <div class=\"card\">\n           <div class=\"card-header\">\n              Name\n           </div>\n           <ng-template\n           ngFor\n           let-module\n           [ngForOf]=\"modules\"\n           >\n           <div class=\"list-group list-group-flush\">\n               <div draggable=\"true\" (dragstart)=\"dragStart($event, module.module_id, 'module', module.name)\" (dragend)=\"onRelease($event)\" class=\"list-group-item list-group-item-action\">\n                 <div class=\"d-flex w-100 justify-content-between\">\n                  <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n                 </div>\n              </div>\n           </div>\n         </ng-template>\n      </div>\n  </div>\n</div>\n"

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
    ModuleService.prototype.getTemplate = function (id) {
        return this.http.get('/api/template/' + id + '/');
    };
    // getPackage(id: number) {
    //   return this.http.get(this.packagesURL + id + '/');
    // }
    //
    ModuleService.prototype.getModules = function () {
        return this.http.get('/api/module/');
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
    ModuleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModuleService);
    return ModuleService;
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
    function DashboardComponent() {
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
        this.showLegend = true;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        // Object.assign(this, {single, multi})
    }
    DashboardComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/Dashboard/dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/Dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Dashbaord 2</p>\n<i class=\"material-icons\">account_circle</i>\n<ngx-charts-pie-chart\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"single\"\n  [legend]=\"showLegend\"\n  [explodeSlices]=\"explodeSlices\"\n  [labels]=\"showLabels\"\n  [doughnut]=\"doughnut\"\n  [gradient]=\"gradient\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-pie-chart>\n<ngx-charts-gauge\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"single\"\n  [min]=\"0\"\n  [max]=\"100\"\n  [angleSpan]=\"240\"\n  [startAngle]=\"-120\"\n  [units]=\"'alerts'\"\n  [bigSegments]=\"10\"\n  [smallSegments]=\"5\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-gauge>\n"

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

module.exports = ".Amodal {\n  max-height: 95%;\n  display: block !important;\n}\n\n.modal-dialog {\n  height: 100%;\n}\n\n.modal-content {\n  max-height: 95%;\n}\n\n.modal-body {\n  margin-top: 5px;\n    overflow-y: scroll;\n}\n\n.modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n\n  /* z-index must be below .modal and above everything else  */\n  z-index: -1;\n}\n"

/***/ }),

/***/ "./src/app/Modal/Modal.component.html":
/*!********************************************!*\
  !*** ./src/app/Modal/Modal.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal Amodal active\" *ngIf=\"active\" id=\"modal\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{title}}</h5>\n        <button type=\"button\" class=\"close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <ng-content select=\"[modal-body]\"></ng-content>\n      </div>\n      <div class=\"modal-footer\">\n        <ng-content select=\"[modal-footer]\"></ng-content>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Close</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-background\" (click)=\"close()\"></div>\n</div>\n"

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

/***/ "./src/app/PackageDetail/Package.component.css":
/*!*****************************************************!*\
  !*** ./src/app/PackageDetail/Package.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-button:hover {\n  background-color: #b5b5b5;\n    border-radius: 2px;\n    color: white;\n}\n\n.input-label {\n  width: 100%;\n}\n\n.template {\n  opacity: 0.4;\n}\n\n.emptyList {\n  height: 400px;\n  width: 100%;\n  background-color: #ddd;\n  display: table;\n  padding: 0px 40px;\n}\n\n.emptyList p {\n  display: table-cell;\n  vertical-align: middle;\n  color: #444;\n}\n\n.emptyList i {\n  /* display: table-cell;\n  vertical-align: middle;\n  color: #444; */\n}\n"

/***/ }),

/***/ "./src/app/PackageDetail/Package.component.html":
/*!******************************************************!*\
  !*** ./src/app/PackageDetail/Package.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h4>Current workflow: {{package.template_name}}</h4>\n        <div class=\"card\">\n            <div class=\"card-header\"\n            (drop)=\"onDrop($event)\"\n            (dragover)=\"allowDropTop($event)\">\n                Name\n            </div>\n            <div class=\"list-group list-group-flush\">\n              <!-- <div *ngIf=\"placeholderLocation==0.5\" class=\"list-group-item list-group-item-action\">\n              </div> -->\n                <ng-template\n                ngFor\n                let-process\n                [ngForOf]=\"package.processes\"\n                >\n                  <div\n                      *ngIf=\"!process.hidden\"\n                      draggable=\"true\"\n                      (dragstart)=\"dragStart($event, process.process_id, 'process', process.name)\"\n                      (drop)=\"onDrop($event)\"\n                      (dragover)=\"allowDrop($event, process.order)\"\n                      class=\"list-group-item list-group-item-action\"\n                      [class.active]=\"process.process_id==selected_process_id\"\n                      [class.template]=\"process.type=='placeholder'\"\n                    >\n                    <div class=\"d-flex w-100 justify-content-between\">\n                        <p\n                        style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectProcess(process)\">\n                          {{process.name}}\n                        </p>\n                        <!-- <i class=\"material-icons\">arrow_back</i> -->\n                        <i *ngIf=\"process.order != 0\" class=\"material-icons icon-button\" (click)=\"moveUp(process)\">keyboard_arrow_up</i>\n                        <i *ngIf=\"process.order < package.processes.length-1\" class=\"material-icons icon-button\" (click)=\"moveDown(process)\">keyboard_arrow_down</i>\n                        <i class=\"material-icons icon-button\" (click)=\"deleteProcess(process)\">delete</i>\n                        <small>{{process.status}}</small>\n                    </div>\n                    <ng-template [ngIf]=\"process.process_id==selected_process_id\">\n                        <form *ngIf=\"process.form.length>0\">\n                                <label *ngFor=\"let input of process.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n                                  {{input.label}}\n                                  <!-- <input type=\"text\" *ngIf=\"input.type=='text'\" [id]=\"input.identifier\" [value]=\"process.values[input.identifier]\" (keyup)=\"setProcessValue(input.identifier, $event.target.value)\" (change)=\"setProcessValue(input.identifier, $event.target.value)\"/> -->\n                                  <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"process.value[input.identifier]\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n                                  <!-- <button class=\"btn\" (click)=\"openFileBrowser()\">Files: All</button> -->\n                                </label>\n                        </form>\n                    </ng-template>\n                  </div>\n                </ng-template>\n\n                <div class=\"emptyList\" *ngIf=\"isListEmpty()\">\n                  <p>\n                    You have not selected any tools.\n                    <br>\n                    Select on by either dragging it from the right or pressing the plus (\n                    <i class=\"material-icons\">add</i>\n                    ) sign\n                  </p>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\" data-query=\"view(Mooo)\">\n        <h4>Avaliable Tools</h4>\n        <div class=\"card\">\n             <div class=\"card-header\">\n                Name\n             </div>\n             <ng-template\n             ngFor\n             let-module\n             [ngForOf]=\"modules\"\n             >\n             <div *ngIf=\"!module.hidden\" class=\"list-group list-group-flush\">\n                 <div draggable=\"true\" (dragstart)=\"dragStart($event, module.module_id, 'module', module.name)\" (dragend)=\"onRelease($event)\" class=\"list-group-item list-group-item-action\">\n                   <div class=\"d-flex w-100 justify-content-between\">\n                    <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n                    <i class=\"material-icons icon-button\" (click)=\"addProcessLast(module.module_id)\">add</i>\n                   </div>\n                </div>\n             </div>\n           </ng-template>\n        </div>\n        <button class=\"btn btn-success float-right\" (click)=\"startWorkflow()\">Start</button>\n        <button class=\"btn btn-success float-right\" (click)=\"saveAsTemplate()\">Save as template</button>\n        <button class=\"btn btn-success float-right\" (click)=\"saveAsSameTemplate()\">Modify template</button>\n    </div>\n</div>\n\n<modal [(active)]=\"modalActive\" title=\"Save as template\">\n  <div modal-body>\n    <label class=\"input-label\">\n      Name of new template:\n      <input type=\"text\" [(ngModel)]=\"templateName\"/>\n    </label>\n  </div>\n  <div modal-footer>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"saveNewTemplate()\">Save</button>\n  </div>\n</modal>\n"

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
            styles: [__webpack_require__(/*! ./Package.component.css */ "./src/app/PackageDetail/Package.component.css")]
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
/* harmony import */ var _Modal_Modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Modal/Modal.component */ "./src/app/Modal/Modal.component.ts");
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
            ],
            declarations: [
                _Package_component__WEBPACK_IMPORTED_MODULE_5__["PackageComponent"],
                _PackageDashboard_component__WEBPACK_IMPORTED_MODULE_6__["PackageDashboardComponent"],
                _PackageHeader_component__WEBPACK_IMPORTED_MODULE_9__["PackageHeaderComponent"],
                _PackageStatus_component__WEBPACK_IMPORTED_MODULE_7__["PackageStatusComponent"],
                _PackageTemplate_component__WEBPACK_IMPORTED_MODULE_8__["PackageTemplateComponent"],
                _FileBrowser_FileBrowser_component__WEBPACK_IMPORTED_MODULE_10__["FileBrowserComponent"],
                _FileBrowser_File_component__WEBPACK_IMPORTED_MODULE_11__["FileComponent"],
                _Modal_Modal_component__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"]
            ],
            // bootstrap: [PackageHeaderComponent] s
            providers: [_PackageDetail_service__WEBPACK_IMPORTED_MODULE_12__["PackageDetailService"], _Admin_Module_service__WEBPACK_IMPORTED_MODULE_13__["ModuleService"]],
        })
    ], PackageModule);
    return PackageModule;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageDashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/PackageDetail/PackageDashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/PackageDetail/PackageDashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/PackageDetail/PackageDashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Package Dashboard</p>\n\n<p>filetypes in package, size of package, number of files, </p>\n\n\n\n<!-- <ngx-charts-pie-chart\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"fileTypes\"\n  [legend]=\"showLegend\"\n  [explodeSlices]=\"explodeSlices\"\n  [labels]=\"showLabels\"\n  [doughnut]=\"doughnut\"\n  [gradient]=\"gradient\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-pie-chart> -->\n\n<ngx-charts-advanced-pie-chart\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"fileTypes\"\n  [gradient]=\"gradient\"\n  (select)=\"onSelect($event)\"\n  label=\"Filetypes\">\n</ngx-charts-advanced-pie-chart>\n\n<ngx-charts-gauge\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"single\"\n  [min]=\"0\"\n  [max]=\"100\"\n  [angleSpan]=\"240\"\n  [startAngle]=\"-120\"\n  [units]=\"'alerts'\"\n  [bigSegments]=\"10\"\n  [smallSegments]=\"5\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-gauge>\n"

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
            domain: ['#eac435', '#345995', '#e40066', '#03cea4', '#fb4d3d']
        };
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.gradient = false;
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
                _this.fileTypes = res.slice();
                // console.log(this.fileTypes)
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
            styles: [__webpack_require__(/*! ./PackageDashboard.component.css */ "./src/app/PackageDetail/PackageDashboard.component.css")]
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
    PackageDetailService.prototype.setActiveTemplate = function (id, data) {
        return this.http.put(this.packagesURL + id + '/', data);
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
        // this.client.fetch('/package/'+package_id+'/execute/', {
        //     method: "POST",
        // })
        this.http.post('/package/' + package_id + '/execute/', {}).subscribe(function () {
        });
    };
    PackageDetailService.prototype.removePackage = function (id) {
        return this.http.delete('/api/package/' + id + '/');
        //   let body = {"removeWorkdir": this.removeWorkdir};
        //   this.client.fetch('/api/package/'+package_id+'/', {
        //       method: "DELETE",
        //       body: json(body),
        //   })
        //       .then(response => {
        //           console.log(response.json());
        //           window.location.href = "/";
        //       });
        // }
    };
    PackageDetailService.prototype.getTemplates = function () {
        return this.http.get('/api/template/');
    };
    PackageDetailService.prototype.postTemplate = function (data) {
        return this.http.post('/api/template/', data);
    };
    PackageDetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PackageDetailService);
    return PackageDetailService;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageHeader.component.css":
/*!***********************************************************!*\
  !*** ./src/app/PackageDetail/PackageHeader.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".package_title {\n  font-size: 1.1em;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageHeader.component.html":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageHeader.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>PackageHeader</p> -->\n<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item dropdown\" [class.show]=\"showDropDown\">\n    <a class=\"nav-link dropdown-toggle package_title\" (click)=\"showDropDown = !showDropDown\">\n      {{name}}\n    </a>\n    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" [class.show]=\"showDropDown\">\n      <a *ngFor=\"let package of packages\" class=\"dropdown-item\" (click)=\"navigateTo(package.package_id)\">{{package.name}}</a>\n    </div>\n  </li>\n  <li class=\"nav-link\"  routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['dashboard']\">Dashboard</a>\n  </li>\n  <li class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['template']\">Templates</a>\n  </li>\n  <li *ngIf=\"!active_template\" class=\"nav-link\" routerLinkActive=\"active\" tooltip=\"Select any template before you can modify it\" tooltipPlacement=\"top\">\n    <a class=\"navbar-link disabled\" [routerLink]=\"['edit']\">Workflow</a>\n  </li>\n  <li *ngIf=\"active_template\" class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['edit']\">Workflow</a>\n  </li>\n  <li class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['status']\">Status</a>\n  </li>\n</ul>\n<router-outlet></router-outlet>\n"

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
            styles: [__webpack_require__(/*! ./PackageHeader.component.css */ "./src/app/PackageDetail/PackageHeader.component.css")]
        }),
        __metadata("design:paramtypes", [_PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__["PackageDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PackageHeaderComponent);
    return PackageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageStatus.component.css":
/*!***********************************************************!*\
  !*** ./src/app/PackageDetail/PackageStatus.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Amodal {\n  /* position: fixed; */\n  /* top: 50%; */\n  /* left: 50%; */\n  /* transform: translate(-50%, -50%); */\n  /* width: 80%; */\n  /* max-width: 100%;\n  height: 98%;\n  max-height: 100%; */\n  /* overflow-y: scroll; */\n  /* background-color: white; */\n}\n\n.Amodal.active {\n  display: block !important;\n}\n\n.modal-dialog,\n.modal-content {\n    /* 80% of window height */\n    height: 95%;\n}\n\n.modal-body {\n    /* 100% = dialog height, 120px = header + footer */\n    /* max-height: calc(100% + 120px); */\n    overflow-y: scroll;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px; */\n  float:right;\n  color: inherit;\n}\n\n.modal-background {\n        /* modal background fixed across whole screen */\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        /* semi-transparent black  */\n        background-color: #000;\n        opacity: 0.75;\n\n        /* z-index must be below .modal and above everything else  */\n        z-index: -1;\n    }\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageStatus.component.html":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageStatus.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n     <div class=\"card-header\">\n         <div class=\"row justify-content-end\">\n             <div class=\"col\">\n                Name\n             </div>\n             <div class=\"col\">\n                Statusbar\n             </div>\n             <div class=\"col-sm-2\">\n                Status\n             </div>\n             <div class=\"col-sm-2\">\n                Log\n             </div>\n             <div class=\"col-sm-2\">\n                Error\n                <!-- <a href=\"#\" click=\"updateData()\" class=\"tab\"><i class=\"material-icons\">refresh</i></a> -->\n                <button class=\"refresh\" (click)=\"updateData()\"><i class=\"material-icons\">refresh</i></button>\n             </div>\n         </div>\n     </div>\n     <div class=\"list-group list-group-flush\">\n         <div style=\"padding-left:0;padding-right:0;\" *ngFor=\"let process of package.processes\" repeat.for=\"process of processes\" class=\"list-group-item list-group-item-action\">\n             <div class=\"col\">\n                {{process.name}} {{process.hidden ? '(Hidden)' : ''}}\n            </div>\n            <div class=\"col\">\n              <div class=\"progress\">\n                <div class=\"progress-bar\"\n                [class.bg-success]=\"process.status == 'Done'\"\n                [class.bg-danger]=\"process.status == 'Error'\"\n                [class.progress-bar-animated]=\"process.status == 'Running'\"\n                [class.progress-bar-striped]=\"process.status == 'Running'\"\n                [style.width]=\"process.progress + '%'\"></div>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n               {{process.status}}\n            </div>\n            <div class=\"col-sm-2\">\n               <!-- <a (click)=\"showModal(process)\" [class.disabled]=\"process.log_path == ''\">view log</a> -->\n               <button class=\"btn btn-outline-primary\" (click)=\"showModal(process, 'info_log')\" [disabled]=\"process.log_path == ''\">Info</button>\n            </div>\n            <div class=\"col-sm-2\">\n                <!-- <a href=\"/process/${process.process_id}/error_log\" [class.disabled]=\"process.log_path == ''\">view error log</a> -->\n                <button class=\"btn btn-outline-danger\" (click)=\"showModal(process, 'error_log')\" [disabled]=\"process.err_path == '' || process.status != 'Error'\">Error</button>\n            </div>\n        </div>\n     </div>\n</div>\n<button class=\"btn btn-success float-right\" (click)=\"startWorkflow()\">Starta</button>\n<button class=\"btn btn-danger float-right\" (click)=\"removePackage()\">Done (Remove package from workdir)</button>\n\n\n\n<div class=\"modal Amodal\" [class.active]=\"modalActive\" id=\"modal\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n        <button type=\"button\" class=\"close\" (click)=\"modalActive=false\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        {{modalData}}\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalActive=false\">Close</button>\n        <!-- <button type=\"button\" class=\"btn btn-primary\">Save changes</button> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-background\" (click)=\"modalActive=false\"></div>\n</div>\n"

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
        // this.interval = setInterval(() => {
        //   this.updateData();
        // }, 3000);
    };
    PackageStatusComponent.prototype.showModal = function (process, type) {
        var _this = this;
        this.modalActive = true;
        //load data fromserver...
        this.packageService.getLogFile(type, process.process_id).subscribe(function (data) {
            // console.log(data);
            _this.modalData = data.replace("\n", "<br>");
        });
        // '/process/${process.process_id}/error_log'
    };
    PackageStatusComponent.prototype.startWorkflow = function () {
        this.packageService.startWorkflow(this.package.package_id);
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
    PackageStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packageStatus',
            template: __webpack_require__(/*! ./PackageStatus.component.html */ "./src/app/PackageDetail/PackageStatus.component.html"),
            styles: [__webpack_require__(/*! ./PackageStatus.component.css */ "./src/app/PackageDetail/PackageStatus.component.css")]
        }),
        __metadata("design:paramtypes", [_PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__["PackageDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PackageStatusComponent);
    return PackageStatusComponent;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageTemplate.component.css":
/*!*************************************************************!*\
  !*** ./src/app/PackageDetail/PackageTemplate.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/PackageDetail/PackageTemplate.component.html":
/*!**************************************************************!*\
  !*** ./src/app/PackageDetail/PackageTemplate.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Select a template to set as a startingpoint for this package</h4>\n<div class=\"card\">\n     <div class=\"card-header\">\n         <div class=\"row justify-content-end\">\n             <div class=\"col\">\n                Name\n             </div>\n             <div class=\"col-sm-4\">\n               Actions\n             </div>\n         </div>\n     </div>\n     <div class=\"list-group list-group-flush\">\n         <div style=\"padding-left:0;padding-right:0;\" *ngFor=\"let template of templates\" class=\"list-group-item list-group-item-action\">\n             <div class=\"col\">\n               {{template.name}}\n            </div>\n            <div class=\"col-sm-4\">\n               <button class=\"btn btn-success\" (click)=\"selectTemplate(template)\">Select</button>\n               <button class=\"btn\" *ngIf=\"template.id!=2\">Start</button>\n            </div>\n        </div>\n     </div>\n</div>\n"

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
    }
    PackageTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.package_id = +params['id'];
        });
        this.packageService.getTemplates().subscribe(function (data) {
            console.log(data);
            // this.package = data;
            var res = data;
            _this.templates = res.filter(function (item) {
                if (item.id > 1) {
                    return true;
                }
                return false;
            });
        });
        // this.client.fetch('/api/module/')
        //     .then(response => response.json())
        //     .then(data => {
        //         this.modules = data;
        //
        //     });
    };
    PackageTemplateComponent.prototype.selectTemplate = function (template) {
        var _this = this;
        // api call to set the template for package.
        var data = { "active_template": template.id };
        this.packageService.setActiveTemplate(this.package_id, data).subscribe(function (res) {
            console.log(res);
            // this.router.navigate(['packages', this.package_id, 'edit']);
            window.location.href = '/packages/' + _this.package_id + '/edit';
        });
    };
    PackageTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packageTemplate',
            template: __webpack_require__(/*! ./PackageTemplate.component.html */ "./src/app/PackageDetail/PackageTemplate.component.html"),
            styles: [__webpack_require__(/*! ./PackageTemplate.component.css */ "./src/app/PackageDetail/PackageTemplate.component.css")]
        }),
        __metadata("design:paramtypes", [_PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__["PackageDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PackageTemplateComponent);
    return PackageTemplateComponent;
}());



/***/ }),

/***/ "./src/app/Packages/PackageList.component.css":
/*!****************************************************!*\
  !*** ./src/app/Packages/PackageList.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px; */\n  float:right;\n  color: inherit;\n}\n"

/***/ }),

/***/ "./src/app/Packages/PackageList.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Packages/PackageList.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n     <div class=\"card-header\">\n         <div class=\"row justify-content-end\">\n             <div class=\"col\">\n                Namn\n             </div>\n             <div class=\"col\">\n                Filnamn\n             </div>\n             <div class=\"col-sm-2\">\n                Status\n                <button class=\"refresh\" (click)=\"updateData()\"><i class=\"material-icons\">refresh</i></button>\n             </div>\n         </div>\n     </div>\n     <div class=\"list-group list-group-flush\">\n         <div style=\"padding-left:0;padding-right:0;\" *ngFor=\"let package of packages\" class=\"list-group-item list-group-item-action\">\n             <div class=\"col\">\n                <a [routerLink]=\"[package.package_id]\">{{package.name}}</a>\n            </div>\n            <div class=\"col\">\n                {{package.file_name}}\n            </div>\n            <div class=\"col-sm-2\">\n                <a [routerLink]=\"[package.package_id, 'status']\">{{package.status}}</a>\n            </div>\n        </div>\n     </div>\n</div>\n"

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
            styles: [__webpack_require__(/*! ./PackageList.component.css */ "./src/app/Packages/PackageList.component.css")]
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
                _Packages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PackagesRoutingModule"]
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
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tooltip-content",
            styles: [__webpack_require__(/*! ./Tooltip.component.css */ "./src/app/Tooltip/Tooltip.component.css")],
            template: "\n<div class=\"tooltip {{ placement }}\"\n     [style.top]=\"top + 'px'\"\n     [style.left]=\"left + 'px'\"\n     [class.in]=\"isIn\"\n     [class.fade]=\"isFade\"\n     role=\"Atooltip\">\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\">\n        <ng-content></ng-content>\n        {{ content }}\n    </div>\n</div>\n"
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
        }
        else {
            var tooltip = this.content;
            tooltip.hostElement = this.viewContainerRef.element.nativeElement;
            tooltip.placement = this.tooltipPlacement;
            tooltip.animation = this.tooltipAnimation;
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <h1><a href=\"/\">Home</a></h1>\n  <img class=\"logga\" src=\"static/img/logga.jpg\"/>\n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-link\"  routerLinkActive=\"active\">\n      <a class=\"navbar-link\" routerLink=\"dashboard\">Dashboard</a>\n    </li>\n    <li class=\"nav-link\" routerLinkActive=\"active\">\n      <a class=\"navbar-link\" routerLink=\"packages\">Packages</a>\n    </li>\n    <li class=\"nav-link\" routerLinkActive=\"active\">\n      <a class=\"navbar-link\" routerLink=\"admin\">Admin</a>\n    </li>\n  </ul>\n  <router-outlet></router-outlet>\n</div>\n"

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
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _NotFound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NotFound.component */ "./src/app/NotFound.component.ts");
/* harmony import */ var _Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Tooltip/Tooltip.module */ "./src/app/Tooltip/Tooltip.module.ts");
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
                _NotFound_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                _Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"],
                // DndListModule,
                // NgxDnDModule,
                // DragulaModule,
                // DragDropDirectiveModule,
                _Packages_Packages_module__WEBPACK_IMPORTED_MODULE_8__["PackagesModule"],
                _Admin_Admin_module__WEBPACK_IMPORTED_MODULE_9__["AdminModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
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