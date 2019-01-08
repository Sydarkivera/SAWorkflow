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
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _AdminHeader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminHeader.component */ "./src/app/Admin/AdminHeader.component.ts");
/* harmony import */ var _AdminModules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdminModules.component */ "./src/app/Admin/AdminModules.component.ts");
/* harmony import */ var _AdminGlobal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AdminGlobal.component */ "./src/app/Admin/AdminGlobal.component.ts");
/* harmony import */ var _AdminTemplates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdminTemplates.component */ "./src/app/Admin/AdminTemplates.component.ts");
/* harmony import */ var _AdminImages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AdminImages.component */ "./src/app/Admin/AdminImages.component.ts");


// Components





var adminRoutes = [
    { path: 'admin', component: _AdminHeader_component__WEBPACK_IMPORTED_MODULE_2__["AdminHeaderComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__["AdminGuard"]], children: [
            { path: '', redirectTo: 'modules', pathMatch: 'full' },
            { path: 'modules', component: _AdminModules_component__WEBPACK_IMPORTED_MODULE_3__["AdminModulesComponent"] },
            { path: 'global', component: _AdminGlobal_component__WEBPACK_IMPORTED_MODULE_4__["AdminGlobalComponent"] },
            { path: 'templates', component: _AdminTemplates_component__WEBPACK_IMPORTED_MODULE_5__["AdminTemplatesComponent"] },
            { path: 'images', component: _AdminImages_component__WEBPACK_IMPORTED_MODULE_6__["AdminImagesComponent"] },
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
/* harmony import */ var _Components_Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Tooltip/Tooltip.module */ "./src/app/Components/Tooltip/Tooltip.module.ts");
/* harmony import */ var _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Navbar/Navbar.module */ "./src/app/Components/Navbar/Navbar.module.ts");
/* harmony import */ var _Components_Modal_Modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Modal/Modal.module */ "./src/app/Components/Modal/Modal.module.ts");
/* harmony import */ var _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Message/Message.module */ "./src/app/Components/Message/Message.module.ts");
/* harmony import */ var _Components_FileBrowser_FileBrowser_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/FileBrowser/FileBrowser.module */ "./src/app/Components/FileBrowser/FileBrowser.module.ts");
/* harmony import */ var _AdminHeader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AdminHeader.component */ "./src/app/Admin/AdminHeader.component.ts");
/* harmony import */ var _AdminModules_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AdminModules.component */ "./src/app/Admin/AdminModules.component.ts");
/* harmony import */ var _AdminGlobal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AdminGlobal.component */ "./src/app/Admin/AdminGlobal.component.ts");
/* harmony import */ var _AdminTemplates_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AdminTemplates.component */ "./src/app/Admin/AdminTemplates.component.ts");
/* harmony import */ var _AdminImages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AdminImages.component */ "./src/app/Admin/AdminImages.component.ts");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//imports





//declarations





//providers
// import { ModuleService } from './Module.service';

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
                _Components_Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
                _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_6__["NavbarModule"],
                _Components_Modal_Modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_8__["MessageModule"],
                _Components_FileBrowser_FileBrowser_module__WEBPACK_IMPORTED_MODULE_9__["FileBrowserModule"]
            ],
            declarations: [
                _AdminHeader_component__WEBPACK_IMPORTED_MODULE_10__["AdminHeaderComponent"],
                _AdminModules_component__WEBPACK_IMPORTED_MODULE_11__["AdminModulesComponent"],
                _AdminGlobal_component__WEBPACK_IMPORTED_MODULE_12__["AdminGlobalComponent"],
                _AdminTemplates_component__WEBPACK_IMPORTED_MODULE_13__["AdminTemplatesComponent"],
                _AdminImages_component__WEBPACK_IMPORTED_MODULE_14__["AdminImagesComponent"]
            ],
            providers: [
                _Services_api_service__WEBPACK_IMPORTED_MODULE_15__["APIService"]
            ],
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

module.exports = "\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    <h5 style=\"float:left\">Paths</h5>\n    <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">\n      Save changes\n      <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n    </button>\n  </div>\n  <div class=\"card-body\">\n    <message duration=\"3000\" [(active)]=\"messageVisible\">All changes have been saved!</message>\n    <div class=\"form-group\">\n      <label for=\"inputName\">Working directory</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"work_dir_path\" tooltip=\"A directory for temporary project files to be stored while they are in use in A.P.P\" tooltipPlacement=\"bottom\" placeholder=\"/code/workdir\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputName\">Packages directory</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"packages_path\" tooltip=\"The location of packages to be included in A.P.P. i.e. Workarea in EPP\" tooltipPlacement=\"bottom\" placeholder=\"/ESSArch/data/epp/workarea\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputName\">APP log file (premis)</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"premis_file_name\" tooltip=\"The name of the premis log file generated by A.P.P\" tooltipPlacement=\"bottom\" placeholder=\"app_log.xml\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"inputName\">Directory for all tool files</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"tools_path\" tooltip=\"The absolute path of the directory where the tools are saved in A.P.P\" tooltipPlacement=\"bottom\" placeholder=\"/code/tools\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputName\">The absolute path of the workdir on docker host</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"work_dir_path_host\" tooltip=\"This is necessary since it is this folder that will be mounted into containers created by A.P.P\" tooltipPlacement=\"bottom\" placeholder=\"/Docker/APP/Django/workdir\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"inputName\">Json template for app log file</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"premis_template_path\" tooltip=\"The json document used as a template for app log.\" tooltipPlacement=\"bottom\" placeholder=\"/code/templates/premis.json\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputName\">Json template for log additions</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"premis_event_template_path\" tooltip=\"This should be a template for the part of the logfile that is repeated for every event\" tooltipPlacement=\"bottom\" placeholder=\"/code/templates/premisEvent.json\">\n    </div>\n\n    <button class=\"btn btn-success\" (click)=\"save()\">\n      Save changes\n      <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n    </button>\n  </div>\n</div>\n"

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
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
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
    function AdminGlobalComponent(apiService) {
        this.apiService = apiService;
        this.work_dir_path = "";
        this.packages_path = "";
        this.premis_file_name = "";
        this.tools_path = "";
        this.work_dir_path_host = "";
        this.premis_template_path = "";
        this.premis_event_template_path = "";
        this.messageVisible = false;
    }
    AdminGlobalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getVariables().subscribe(function (data) {
            // console.log(data)
            //load and set the variables loaded from the backend
            _this.work_dir_path = data['work_dir_path'];
            _this.packages_path = data['packages_path'];
            _this.premis_file_name = data['premis_file_name'];
            _this.tools_path = data['tools_path'];
            _this.work_dir_path_host = data['work_dir_path_host'];
            _this.premis_template_path = data['premis_template_path'];
            _this.premis_event_template_path = data['premis_event_template_path'];
        });
    };
    AdminGlobalComponent.prototype.save = function () {
        var _this = this;
        // save the values loaded from the backend with their updates
        var data = {
            work_dir_path: this.work_dir_path,
            packages_path: this.packages_path,
            premis_file_name: this.premis_file_name,
            tools_path: this.tools_path,
            work_dir_path_host: this.work_dir_path_host,
            premis_template_path: this.premis_template_path,
            premis_event_template_path: this.premis_event_template_path
        };
        this.apiService.setVariables(data).subscribe(function (response) {
            // display success message
            _this.messageVisible = true;
        });
    };
    AdminGlobalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./AdminGlobal.component.html */ "./src/app/Admin/AdminGlobal.component.html"),
            styles: [__webpack_require__(/*! ./AdminGlobal.component.sass */ "./src/app/Admin/AdminGlobal.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]])
    ], AdminGlobalComponent);
    return AdminGlobalComponent;
}());



/***/ }),

/***/ "./src/app/Admin/AdminHeader.component.html":
/*!**************************************************!*\
  !*** ./src/app/Admin/AdminHeader.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar>\n</navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Admin/AdminHeader.component.sass":
/*!**************************************************!*\
  !*** ./src/app/Admin/AdminHeader.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHeaderComponent = /** @class */ (function () {
    function AdminHeaderComponent() {
    }
    AdminHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adminHeader',
            template: __webpack_require__(/*! ./AdminHeader.component.html */ "./src/app/Admin/AdminHeader.component.html"),
            styles: [__webpack_require__(/*! ./AdminHeader.component.sass */ "./src/app/Admin/AdminHeader.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());



/***/ }),

/***/ "./src/app/Admin/AdminImages.component.html":
/*!**************************************************!*\
  !*** ./src/app/Admin/AdminImages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<message duration=\"10000\" [(active)]=\"errorVisible\" type=\"alert-danger\">\n  <i class=\"material-icons align-middle\">warning</i> The tool could not be removed since it is in use by one or more packages or templates.\n</message>\n\n<div class=\"row\">\n\n  <!-- Existing tools, left side -->\n  <div class=\"col-lg-6\">\n    <h4>Existing Tools</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\">\n        Name\n      </div>\n      <div class=\"list-group list-group-flush\">\n        <div *ngFor=\"let image of images\" class=\"list-group-item list-group-item-action\" (click)=\"selectImage(image)\" [class.active]=\"image.id == selected_image.id\">\n          <div class=\"d-flex w-100 justify-content-between\">\n            <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{image.label}}</p>\n            <i class=\"material-icons icon-button\" (click)=\"deleteImage(image)\">delete</i>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-success\" (click)=\"openNewImageModal()\">Add new docker image</button>\n    <a *ngIf=\"selected_image.id != -1\" class=\"btn btn-secondary\" href=\"/api/image/{{selected_image.id}}/export/\">Export image</a>\n  </div>\n\n  <!-- Detail view of tool -->\n\n  <div class=\"col-lg-6\" *ngIf=\"selected_image.id != -1\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 style=\"float:left\">Settings</h5>\n        <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">\n          Save\n          <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n        </button>\n      </div>\n      <div class=\"card-body\">\n        <message duration=\"3000\" [(active)]=\"saveSuccess\">All changes have been saved!</message>\n        <div class=\"form-group\">\n          <label for=\"inputLabel\">Name of the image (display name)</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputLabel\" placeholder=\"DROID\" [(ngModel)]=\"selected_image.label\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputname\">Image tag (This is the docker-name of the image, added with --tag when an image is created)</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputname\" placeholder=\"droid\" [(ngModel)]=\"selected_image.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputMount\">Mount point of workdir inside image.</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputMount\" placeholder=\"/workdir/\" [(ngModel)]=\"selected_image.mountpoint\">\n        </div>\n        <button class=\"btn btn-success\" (click)=\"save()\">\n          Save\n          <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<modal [(active)]=\"modalactive\" title=\"Upload new docker image\">\n  <div modal-body>\n    <div class=\"alert alert-info\" *ngIf=\"modalMessage\">\n      Uploading image, {{uploadDone}}/{{uploadTotal}}\n    </div>\n    <div class=\"alert alert-warning\" *ngIf=\"modalOther.length > 0\">\n      {{modalOther}}\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputLabel\">Name of the image (display name)</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputLabel\" placeholder=\"i.e. DROID\" [(ngModel)]=\"newLabel\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"inputLabel\">Path to workdir inside image</label>\n      <input type=\"text\" class=\"form-control\" id=\"pathLabel\" placeholder=\"i.e. /code/workdir\" [(ngModel)]=\"newPath\">\n    </div>\n\n    <label for=\"inputLabel\">Docker image. (generated with docker save)</label>\n    <div class=\"custom-file\" id=\"customFile\" lang=\"en\">\n      <input type=\"file\" class=\"custom-file-input\" id=\"exampleInputFile\" (change)=\"fileSelected($event)\" name=\"import.tar\">\n      <label class=\"custom-file-label\" for=\"exampleInputFile\" [class.border-success]=\"fileStatus==2\" [class.border-danger]=\"fileStatus==1\">\n        {{fileName}}\n      </label>\n\n    </div>\n    <button class=\"btn btn-success\" type=\"submit\" (click)=\"importImage()\">Save</button>\n  </div>\n\n\n</modal>\n"

/***/ }),

/***/ "./src/app/Admin/AdminImages.component.sass":
/*!**************************************************!*\
  !*** ./src/app/Admin/AdminImages.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.card {\n  margin-bottom: 10px; }\n\n.icon-small {\n  font-size: 1em; }\n\n.active {\n  background-color: #ddd;\n  border-color: #bc044e; }\n\n.active label, .active p, .active i, .active small {\n    color: #333; }\n"

/***/ }),

/***/ "./src/app/Admin/AdminImages.component.ts":
/*!************************************************!*\
  !*** ./src/app/Admin/AdminImages.component.ts ***!
  \************************************************/
/*! exports provided: AdminImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminImagesComponent", function() { return AdminImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminImagesComponent = /** @class */ (function () {
    function AdminImagesComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.selected_image = { id: -1 };
        this.label = "";
        this.name = "";
        this.mountpoint = "";
        this.saveSuccess = false;
        this.fileName = "Select file...";
        this.fileStatus = 0;
        this.modalactive = false;
        this.newLabel = "";
        this.newPath = "";
        this.modalMessage = false;
        this.uploadDone = 0;
        this.uploadTotal = 0;
        this.modalOther = "";
        this.errorVisible = false;
        this.apiService.getDockerImages().subscribe(function (data) {
            _this.images = data;
        });
    }
    AdminImagesComponent.prototype.ngOnInit = function () { };
    AdminImagesComponent.prototype.selectImage = function (image) {
        this.selected_image = image;
    };
    AdminImagesComponent.prototype.save = function () {
        var _this = this;
        this.apiService
            .saveDockerImage(this.selected_image.id, this.selected_image)
            .subscribe(function (data) {
            _this.saveSuccess = true;
        });
    };
    AdminImagesComponent.prototype.openNewImageModal = function () {
        this.modalactive = true;
    };
    //validate the selected file, if it's a tar accept it, else return error.
    AdminImagesComponent.prototype.fileSelected = function (e) {
        if (e.target.files.length > 0) {
            //check fileFormat
            if (!e.target.files[0].name.endsWith(".tar")) {
                console.error("error, wrong fileType");
                this.fileName = "Select file...";
                this.fileStatus = 1;
            }
            else {
                this.file = e.target.files[0];
                this.fileName = this.file.name;
                this.fileStatus = 2;
            }
        }
    };
    AdminImagesComponent.prototype.importImage = function () {
        var _this = this;
        // a file is selectd, and the user has pressed upload. Submit the data to the backend.
        if (!this.file.name.endsWith(".tar")) {
            console.error("error, wrong fileType");
            return;
        }
        if (this.newLabel == "") {
            console.error("error, no name specified");
            return;
        }
        this.modalMessage = true;
        var formData = new FormData();
        formData.append("file", this.file, "import.tar");
        formData.append("label", this.newLabel);
        formData.append("workdir", this.newPath);
        this.apiService.importDockerImage(formData).subscribe(function (data) {
            // if (data.type == 4) {
            //   this.modules = data['body'] as [any];
            // }
            // console.log(data);
            if (data.type == 4) {
                _this.images.push(data["body"]);
                _this.modalactive = false;
                _this.fileName = "Select file...";
                _this.label = "";
                _this.modalMessage = false;
            }
            else if (data.type == 1) {
                _this.uploadDone = data["loaded"];
                _this.uploadTotal = data["total"];
            }
            else {
                // this.modalOther = data["body"];
                // console.log(data);
                if ("status" in data) {
                    if (data["status"] != 200) {
                        _this.modalOther =
                            "unknown error occured, status: " + data["status"];
                    }
                }
            }
        });
    };
    AdminImagesComponent.prototype.deleteImage = function (image) {
        var _this = this;
        if (confirm("Are you sure to delete " +
            image.label +
            "\n This action is irreversible")) {
            this.apiService.deleteDockerImage(image.id).subscribe(function (data) {
                console.log(data);
                _this.images = _this.images.filter(function (item) {
                    if (item.id == image.id) {
                        return false;
                    }
                    return true;
                });
            }, function (error) {
                if (error.status == 409) {
                    _this.errorVisible = true;
                }
            });
        }
    };
    AdminImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "admin-images",
            template: __webpack_require__(/*! ./AdminImages.component.html */ "./src/app/Admin/AdminImages.component.html"),
            styles: [__webpack_require__(/*! ./AdminImages.component.sass */ "./src/app/Admin/AdminImages.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]])
    ], AdminImagesComponent);
    return AdminImagesComponent;
}());



/***/ }),

/***/ "./src/app/Admin/AdminModules.component.html":
/*!***************************************************!*\
  !*** ./src/app/Admin/AdminModules.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Error message displayed if the module could not be removed -->\n<message duration=\"10000\" [(active)]=\"errorVisible\" type=\"alert-danger\">\n  <i class=\"material-icons align-middle\">warning</i> The tool could not be removed since it is in use by one or more packages or templates.\n</message>\n<div class=\"row\">\n\n  <!-- Existing tools, left side -->\n  <div class=\"col-lg-4\">\n    <h4>Existing Tools</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\">\n        Name\n      </div>\n      <div class=\"list-group list-group-flush\">\n        <div *ngFor=\"let module of modules\" class=\"list-group-item list-group-item-action\" (click)=\"selectModule(module)\" [class.active]=\"module.module_id == selected_module.module_id\">\n          <div class=\"d-flex w-100 justify-content-between\">\n            <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n            <i class=\"material-icons icon-button\" (click)=\"deleteModule(module)\">delete</i>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-success\" (click)=\"addNewModule()\">\n      Add new tool\n      <i class=\"material-icons my-auto align-middle\">add</i>\n    </button>\n    <button class=\"btn\" (click)=\"importModule()\">\n      Import tool\n    </button>\n  </div>\n\n  <!-- Detail view of tool -->\n\n  <div class=\"col-lg-8\" *ngIf=\"selected_module.module_id != -1\">\n    <h4>{{title}}</h4>\n\n    <!-- display the form if there is one -->\n    <div class=\"card\" *ngIf=\"selected_module.form.length > 0\">\n      <div class=\"card-header\">\n        <h5>Form preview</h5>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\" *ngFor=\"let input of selected_module.form\">\n          <div class=\"form-check\" *ngIf=\"input.type=='checkbox'\">\n            <input class=\"form-check-input\" type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"input.default\" />\n            <label class=\"form-check-label\" for=\"{{input.identifier}}\">\n              {{input.label}}\n            </label>\n          </div>\n          <ng-template [ngIf]=\"input.type=='text'\">\n            <label for=\"{{input.identifier}}\">{{input.label}}</label>\n            <input type=\"text\" class=\"form-control\" [id]=\"input.identifier\" placeholder=\"{{input.identifier}}\" [value]=\"input.default ? input.default : ''\">\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <!-- Display the general settings -->\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 style=\"float:left\">Settings</h5>\n        <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">\n          Save changes\n          <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n        </button>\n      </div>\n      <div class=\"card-body\">\n        <message duration=\"3000\" [(active)]=\"messageVisible\">All changes have been saved!</message>\n        <p class=\"Error-text\">{{commandJsonError}}</p>\n        <div class=\"form-group\">\n          <label for=\"inputName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Virus scan ClamAV\" [(ngModel)]=\"selected_module.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputDescription\">Description - for log file</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputDescription\" [(ngModel)]=\"selected_module.description\" placeholder=\"Sentence describing what the tool does\">\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"inputHidden\" [(ngModel)]=\"selected_module.hidden\">\n            <label class=\"form-check-label\" for=\"inputHidden\">Hidden</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputFileFilter\">File filter</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputFileFilter\" [(ngModel)]=\"selected_module.filter\" placeholder=\".*(\\.pdf)\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputForm\">\n            Form json\n            <i class=\"material-icons icon-button my-auto icon-small\" (click)=\"openFormJsonDocs()\">help</i>\n          </label>\n          <textarea class=\"form-control\" id=\"inputForm\" rows=\"7\" [(ngModel)]=\"formJson\"></textarea>\n        </div>\n\n        <p class=\"Error-text\">{{formJsonError}}</p>\n        <p>Avaliable types: checkbox, text (Should I create a ui for configuring the form or should I write documentation?)</p>\n\n        <!-- Display logfile checks -->\n        <h5 class=\"input-label\">\n          What qualifies succes in the log files:\n        </h5>\n        <div *ngFor=\"let filter of selected_module.resultFilter\">\n          <div class=\"form-row\">\n            <select class=\"custom-select col-sm-3 my-1 my-auto\" [(ngModel)]=\"filter.type\">\n              <option value=\"Containing\">Containing</option>\n              <option value=\"Not containing\">Not containing</option>\n            </select>\n            <div class=\"form-group my-auto\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"[\\w\\W]*pattern[\\w\\W]*\" [(ngModel)]=\"filter.value\">\n            </div>\n            <i class=\"material-icons icon-button my-auto\" (click)=\"removeResultFilter(filter)\">delete</i>\n          </div>\n        </div>\n        <hr>\n        <p>Add a new filter</p>\n        <div class=\"form-row\">\n          <select class=\"custom-select col-sm-3 my-1 my-auto\" [(ngModel)]=\"newResultFilter.type\">\n            <option value=\"Containing\">Containing</option>\n            <option value=\"Not containing\">Not containing</option>\n          </select>\n          <div class=\"form-group my-auto\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"[\\w\\W]*pattern[\\w\\W]*\" [(ngModel)]=\"newResultFilter.value\">\n          </div>\n          <i class=\"material-icons icon-button my-auto\" (click)=\"addResultFilter(filter)\">add</i>\n        </div>\n      </div>\n    </div>\n\n    <!-- Display the actual command to be run -->\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 style=\"float:left\">Command</h5>\n        <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">\n          Save changes\n          <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n        </button>\n      </div>\n      <div class=\"card-body\">\n\n        <message duration=\"3000\" [(active)]=\"messageVisible\">All changes have been saved!</message>\n        <label class=\"input-label\">\n          Type:\n          <select class=\"custom-select my-1 my-auto\" [(ngModel)]=\"selected_module.type\">\n            <option value=\"Command\">Command</option>\n            <option value=\"Python module\">Python module</option>\n            <option value=\"Docker Container\">Docker Container</option>\n            <option value=\"Smart docker module\">Smart docker module</option>\n          </select>\n        </label>\n        <div class=\"form-group\" *ngIf=\"selected_module.type == 'Command'\">\n          <label for=\"inputForm\">Command</label>\n          <textarea class=\"form-control\" id=\"inputForm\" rows=\"7\" [(ngModel)]=\"selected_module.command\"></textarea>\n        </div>\n        <div class=\"form-group\" *ngIf=\"selected_module.type == 'Python module'\">\n          <label for=\"inputName\">Python Module</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Path to python file\" [(ngModel)]=\"selected_module.python_module\">\n        </div>\n        <!-- If command type is docker -->\n        <ng-template [ngIf]=\"selected_module.type == 'Docker Container'\">\n          <label class=\"input-label\">\n            Docker image:\n            <select class=\"custom-select my-1 my-auto\" [(ngModel)]=\"selected_module.dockerImage\">\n              <option *ngFor=\"let image of images\" value=\"{{image.id}}\">{{image.label}}</option>\n            </select>\n          </label>\n          <div class=\"form-group\">\n            <label for=\"inputForm\">Command</label>\n            <textarea class=\"form-control\" id=\"inputForm\" rows=\"7\" [(ngModel)]=\"selected_module.command\"></textarea>\n          </div>\n          <!-- <button class=\"btn btn-success\" (click)=\"uploadDockerImage\">Upload Docker Image</button> -->\n          <!-- <div class=\"form-group\">\n            <label for=\"inputName\">Mount point for files/folder</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputName\">\n          </div> -->\n        </ng-template>\n        <ng-template [ngIf]=\"selected_module.type == 'Smart docker module'\">\n          <label class=\"input-label\">\n            Docker image:\n            <select class=\"custom-select my-1 my-auto\" [(ngModel)]=\"selected_module.dockerImage\">\n              <option *ngFor=\"let image of images\" value=\"{{image.id}}\">{{image.label}}</option>\n            </select>\n          </label>\n          <div class=\"form-group\">\n            <label for=\"inputForm\">Command</label>\n            <textarea class=\"form-control\" id=\"inputForm\" rows=\"7\" [(ngModel)]=\"selected_module.command\"></textarea>\n          </div>\n          <!-- <button class=\"btn btn-success\" (click)=\"uploadDockerImage\">Upload Docker Image</button> -->\n          <!-- <div class=\"form-group\">\n            <label for=\"inputName\">Mount point for files/folder</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputName\">\n          </div> -->\n        </ng-template>\n        <p class=\"Error-text\">{{commandJsonError}}</p>\n        <button class=\"btn btn-success\" (click)=\"openFileBrowser()\">\n          Browse files\n          <i class=\"material-icons my-auto align-middle icon-small\">folder_open</i>\n        </button>\n        <!-- <button class=\"btn btn-success\" (click)=\"save()\">Save changes</button> -->\n        <!-- <p>Export will export a tar file containing the json strucutre and the python file, if it exists</p> -->\n      </div>\n    </div>\n    <a class=\"btn btn-secondary\" href=\"/api/module/{{selected_module.module_id}}/export/\">Export tool</a>\n    <button class=\"btn btn-danger\" (click)=\"deleteModule(selected_module)\">\n      Delete\n      <i class=\"material-icons my-auto align-middle icon-small\">delete</i>\n    </button>\n    <div class=\"allow-scroll-beneath-page-end\"></div>\n  </div>\n</div>\n\n<modal [(active)]=\"modalactive\">\n  <div modal-body>\n    <form method=\"post\" enctype=\"multipart/form-data\">\n      <div class=\"custom-file\" id=\"customFile\" lang=\"en\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"exampleInputFile\" (change)=\"fileSelected($event)\" name=\"import.tar\">\n        <label class=\"custom-file-label\" for=\"exampleInputFile\" [class.border-success]=\"fileStatus==2\" [class.border-danger]=\"fileStatus==1\">\n          {{fileName}}\n        </label>\n      </div>\n      <button class=\"btn btn-success\" type=\"submit\" (click)=\"uploadFile()\">Upload</button>\n    </form>\n  </div>\n</modal>\n\n<filebrowser [(active)]=\"browserActive\" [path]=\"browserPath\"></filebrowser>\n\n<modal [(active)]=\"docsActive\" title=\"Form documentation\">\n  <div modal-body>\n    <p>\n      The form is specified as a json document. The structure must be an array of dictionaries. i.e. [ {{ '{' }}...{{ '}' }}, {{ '{' }}...{{ '}' }}, ...]\n    </p>\n    <p>\n      Each dictionay specifies one field in the form.\n    </p>\n\n    <ul>\n      <li>\n        <h5>type: [string] (required)</h5>\n        <p>\n          The type specifies which kind of form element is supposed to render. Options are: 'text' or 'checkbox'\n        </p>\n      </li>\n      <li>\n        <h5>identifier: [string] (required)</h5>\n        <p>\n          Identifer is the id that will be used in a command to select the value of this field. regex for possibilities: [a-Z0-9-_]\n        </p>\n      </li>\n      <li>\n        <h5>label: [string] (required)</h5>\n        <p>\n          A label which will be displayed in the final form. This can be any string.\n        </p>\n      </li>\n      <li>\n        <h5>default: [string] (optional)</h5>\n        <p>\n          An optional default state for the form. For a checkbox it must be true or false and for a textfield it must be a string.\n        </p>\n      </li>\n    </ul>\n  </div>\n</modal>\n"

/***/ }),

/***/ "./src/app/Admin/AdminModules.component.sass":
/*!***************************************************!*\
  !*** ./src/app/Admin/AdminModules.component.sass ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.card {\n  margin-bottom: 10px; }\n\n.icon-small {\n  font-size: 1em; }\n\n.input-label {\n  width: 100%; }\n\n.Error-text {\n  color: red; }\n\n.active {\n  background-color: #ddd;\n  border-color: #bc044e; }\n\n.active label, .active p, .active i, .active small {\n    color: #333; }\n\ntextarea {\n  width: 100%; }\n\n.allow-scroll-beneath-page-end {\n  height: 300px; }\n\n.form-row div, .form-row select {\n  margin-right: 5px; }\n"

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
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
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
    function AdminModulesComponent(apiService) {
        this.apiService = apiService;
        this.selected_module = { module_id: -1 };
        this.title = "";
        this.formJson = "";
        this.formJsonError = "";
        this.commandJsonError = "";
        this.resultFilters = [];
        this.newResultFilter = { type: 'Containing', value: '' };
        this.modalactive = false;
        this.fileName = "Select file...";
        this.fileStatus = 0;
        this.messageVisible = false;
        this.errorVisible = false;
        this.browserActive = false;
        this.browserPath = "";
        this.docsActive = false;
    }
    AdminModulesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //load initial data from server, module list
        this.apiService.getModules().subscribe(function (data) {
            _this.modules = data;
            console.log(_this.modules);
        });
        this.apiService.getDockerImages().subscribe(function (data) {
            _this.images = data;
        });
    };
    AdminModulesComponent.prototype.setModule = function (mod) {
        // sets the data needed for a module change
        this.selected_module = JSON.parse(JSON.stringify(mod));
        this.title = this.selected_module.name;
        // store the jsonfields as string temporarily to allow for
        this.formJson = this.getJson(this.selected_module.form);
    };
    AdminModulesComponent.prototype.addNewModule = function () {
        // Adding a new module only resets the data in all forms, saving the changes then creates a new module.
        this.selected_module = { module_id: -2, form: [], type: "Command" };
        this.title = "New module";
        this.formJson = "[]";
    };
    AdminModulesComponent.prototype.deleteModule = function (dmodule) {
        var _this = this;
        // Before a module can be deleted a confirmation is displayed, warning the user of the risks.
        if (confirm("Are you sure to delete " + dmodule.name + "\n This action is irreversible")) {
            this.apiService.deleteModule(dmodule.module_id).subscribe(function (data) {
                _this.modules = _this.modules.filter(function (item) {
                    if (item.module_id == dmodule.module_id) {
                        return false;
                    }
                    return true;
                });
                _this.selected_module = { module_id: -1 };
            }, function (error) {
                if (error.status == 409) {
                    _this.errorVisible = true;
                }
            });
        }
    };
    AdminModulesComponent.prototype.selectModule = function (mod) {
        // if this module isn't selected already, select it. Else deselect.
        if (!this.selected_module || this.selected_module.module_id != mod.module_id) {
            this.setModule(mod);
        }
        else {
            this.selected_module = { module_id: -1 };
        }
    };
    AdminModulesComponent.prototype.getJson = function (data) {
        return JSON.stringify(data, null, 4);
    };
    AdminModulesComponent.prototype.save = function () {
        // Save the changes from the huge form.
        var _this = this;
        //validate form json input
        try {
            this.selected_module.form = JSON.parse(this.formJson);
            this.formJsonError = "";
        }
        catch (e) {
            console.log("Error", e.message);
            this.formJsonError = e.message;
            return false;
        }
        //validate command json input
        // try {
        //   this.selected_module.command = JSON.parse(this.commandJson);
        //   this.commandJsonError = "";
        // } catch (e) {
        //   console.log("Error", e.message);
        //   this.commandJsonError = e.message;
        //   return false;
        // }
        //only pass the values that are defined to the server.
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
        else {
            data["resultFilter"] = [];
        }
        if (this.selected_module.dockerImage != undefined) {
            data["dockerImage"] = this.selected_module.dockerImage;
        }
        if (this.selected_module.description != undefined) {
            data["description"] = this.selected_module.description;
        }
        //verfiy that the tools action is implemented
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
        console.log(data);
        // if the id isn't -2, this is an existing module which should be updated
        if (this.selected_module.module_id != -2 && this.selected_module.module_id) {
            this.apiService.saveData(this.selected_module.module_id, data).subscribe(function (data) {
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
            // else this is a new module which has not been saved before.
            delete this.selected_module.module_id;
            this.apiService.createModule(data).subscribe(function (data) {
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
    //activate modal for selecting a file to import
    AdminModulesComponent.prototype.importModule = function () {
        this.modalactive = true;
    };
    //validate the selected file, if it's a tar accept it, else return error.
    AdminModulesComponent.prototype.fileSelected = function (e) {
        if (e.target.files.length > 0) {
            //check fileFormat
            if (!e.target.files[0].name.endsWith('.tar')) {
                console.error('error, wrong fileType');
                this.fileName = "Select file...";
                this.fileStatus = 1;
            }
            else {
                this.file = e.target.files[0];
                this.fileName = this.file.name;
                this.fileStatus = 2;
            }
        }
    };
    AdminModulesComponent.prototype.uploadFile = function () {
        var _this = this;
        // a file is selectd, and the user has pressed upload. Submit the data to the backend.
        if (!this.file.name.endsWith('.tar')) {
            console.error('error, wrong fileType');
            return;
        }
        this.modalactive = false;
        this.fileName = "Select file...";
        var formData = new FormData();
        formData.append('file', this.file, 'import.tar');
        this.apiService.importModule(formData).subscribe(function (data) {
            if (data.type == 4) {
                _this.modules = data['body'];
            }
        });
    };
    AdminModulesComponent.prototype.addResultFilter = function () {
        // add another filter for scanning the log files
        this.selected_module.resultFilter.push(__assign({}, this.newResultFilter));
        this.newResultFilter = { type: 'Containing', value: '' };
    };
    AdminModulesComponent.prototype.removeResultFilter = function (filter) {
        // remove a filter for scanning the log files
        var index = this.selected_module.resultFilter.indexOf(filter);
        if (index > -1) {
            this.selected_module.resultFilter.splice(index, 1);
        }
    };
    AdminModulesComponent.prototype.openFileBrowser = function () {
        this.browserPath = "/api/module/" + this.selected_module.module_id + "/files/";
        this.browserActive = true;
    };
    AdminModulesComponent.prototype.openFormJsonDocs = function () {
        this.docsActive = true;
    };
    AdminModulesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./AdminModules.component.html */ "./src/app/Admin/AdminModules.component.html"),
            styles: [__webpack_require__(/*! ./AdminModules.component.sass */ "./src/app/Admin/AdminModules.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]])
    ], AdminModulesComponent);
    return AdminModulesComponent;
}());



/***/ }),

/***/ "./src/app/Admin/AdminTemplates.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Admin/AdminTemplates.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- Error message for removal of templates in use -->\n  <message duration=\"10000\" [(active)]=\"errorVisible\" type=\"alert-danger\">\n    <i class=\"material-icons align-middle\">warning</i> The template could not be removed since it is in use by one or more packages.\n  </message>\n  <!-- list of all templates -->\n  <h4 style=\"clear: both; width: 100%\">Templates</h4>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\" (drop)=\"onDrop($event)\" (dragover)=\"allowDropTop($event)\">\n        Name\n      </div>\n      <div class=\"list-group list-group-flush\">\n        <ng-template ngFor let-template [ngForOf]=\"templates\">\n          <div class=\"list-group-item list-group-item-action\" [class.active]=\"template.template_id==selected_template_id\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectTemplate(template)\">\n                {{template.name}}\n              </p>\n              <!-- <i class=\"material-icons\">arrow_back</i> -->\n              <i class=\"material-icons icon-button\" (click)=\"deleteTemplate(template)\" *ngIf=\"template.template_id > 1\">delete</i>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n    <button class=\"btn btn-success\" (click)=\"createTemplateModal()\">Create new template</button>\n  </div>\n\n  <!-- Basic settings in a template (Only name at this time) -->\n  <div class=\"col-lg-6\">\n    <div class=\"card\" *ngIf=\"selected_template_id != -1\">\n      <div class=\"card-header\">\n        <h5 style=\"float:left\">Settings</h5>\n        <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">\n          Save changes\n          <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n        </button>\n      </div>\n      <div class=\"card-body\">\n        <message duration=\"3000\" [(active)]=\"messageVisible\">All changes have been saved!</message>\n        <div class=\"form-group\">\n          <label for=\"inputName\">Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selected_template.name\" placeholder=\"Virus scanning - ClamAV\">\n        </div>\n        <button class=\"btn btn-success float-right\" (click)=\"save()\">\n          Save\n          <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Processes and tools inside the template. Much like the Package.component.ts view -->\n<div class=\"row\" *ngIf=\"selected_template_id != -1\">\n  <div class=\"col-lg-6\" *ngIf=\"selected_template_id != -1\">\n    <h4>Tools in {{selected_template.name}}</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\" (dragover)=\"allowDropTop($event)\" (drop)=\"onDrop($event)\">\n        Name\n      </div>\n      <ng-template ngFor let-process [ngForOf]=\"selected_template.processes\">\n        <div class=\"list-group list-group-flush\">\n          <div draggable=\"true\" (dragstart)=\"dragStart($event, process.process_id, 'template', process.name)\" (drop)=\"onDrop($event)\" (dragover)=\"allowDrop($event, process.order)\" class=\"list-group-item list-group-item-action\" [class.active]=\"process.process_id==selected_process_id\"\n              [class.placeholder]=\"process.type=='placeholder'\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectProcess(process)\">\n                {{process.name}}\n              </p>\n              <!-- <i class=\"material-icons\">arrow_back</i> -->\n              <i *ngIf=\"process.order > 1\" class=\"material-icons icon-button\" (click)=\"moveUp(process)\">keyboard_arrow_up</i>\n              <i *ngIf=\"process.order < selected_template.processes.length\" class=\"material-icons icon-button\" (click)=\"moveDown(process)\">keyboard_arrow_down</i>\n              <i class=\"material-icons icon-button\" (click)=\"deleteProcess(process)\">delete</i>\n              <i class=\"material-icons drag-handle\">drag_handle</i>\n            </div>\n            <ng-template [ngIf]=\"process.process_id==selected_process_id\">\n              <form *ngIf=\"process.form.length>0\">\n                <div class=\"form-group\" *ngFor=\"let input of process.form\">\n                  <div class=\"form-check\" *ngIf=\"input.type=='checkbox'\">\n                    <input\n                      class=\"form-check-input\"\n                      type=\"checkbox\"\n                      *ngIf=\"input.type=='checkbox'\"\n                      [id]=\"input.identifier\"\n                      [checked]=\"getProcessValue(input.identifier)\"\n                      (change)=\"setProcessValue(input.identifier, $event.target.checked)\"\n                      />\n                    <label class=\"form-check-label\" for=\"{{input.identifier}}\">\n                      {{input.label}}\n                    </label>\n                  </div>\n                  <ng-template [ngIf]=\"input.type=='text'\">\n                    <label for=\"{{input.identifier}}\">{{input.label}}</label>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      [id]=\"input.identifier\"\n                      placeholder=\"{{input.identifier}}\"\n                      [value]=\"getProcessValue(input.identifier)\"\n                      (change)=\"setProcessValue(input.identifier, $event.target.value)\"\n                      (keyup)=\"setProcessValue(input.identifier, $event.target.value)\"\n                      >\n                  </ng-template>\n                </div>\n                <!-- <label *ngFor=\"let input of process.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n                  {{input.label}}\n                  <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"process.value[input.identifier]\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n                </label> -->\n              </form>\n            </ng-template>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n\n  <!-- Tool/Modules list -->\n  <div class=\"col-lg-6\">\n    <h4>Avaliable Tools</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\">\n        Name\n      </div>\n      <ng-template ngFor let-module [ngForOf]=\"modules\">\n        <div class=\"list-group list-group-flush\">\n          <div draggable=\"true\" (dragstart)=\"dragStart($event, module.module_id, 'module', module.name)\" (dragend)=\"onRelease($event)\" class=\"list-group-item list-group-item-action\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n              <i class=\"material-icons icon-button\" (click)=\"addProcessLast(module.module_id)\">add</i>\n              <i class=\"material-icons drag-handle\">drag_handle</i>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>\n\n<!-- Modal for creation of new templates -->\n<modal [(active)]=\"createModalActive\" title=\"Create a new template\">\n  <div modal-body>\n    <h5>Enter the name of the new template</h5>\n    <div class=\"form-group\">\n      <label for=\"inputName\">Name</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newTemplateName\" placeholder=\"Virus scanning - ClamAV\">\n    </div>\n    <button class=\"btn btn-success float-right\" (click)=\"createNewTemplate()\">Create</button>\n  </div>\n</modal>\n"

/***/ }),

/***/ "./src/app/Admin/AdminTemplates.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/Admin/AdminTemplates.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.card {\n  margin-bottom: 10px; }\n\n.icon-small {\n  font-size: 1em; }\n\n.list-group-item.active {\n  background-color: #ddd;\n  border-color: #bc044e; }\n\n.list-group-item.active label, .list-group-item.active p, .list-group-item.active i, .list-group-item.active small {\n    color: #333; }\n\n.placeholder {\n  opacity: 0.4; }\n"

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
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
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
    function AdminTemplatesComponent(apiService) {
        this.apiService = apiService;
        this.selected_template_id = -1;
        this.selected_template = undefined;
        this.selected_process_id = -1;
        this.selected_process = undefined;
        this.placeholderName = "";
        this.createModalActive = false;
        this.newTemplateName = "";
        this.messageVisible = false;
        this.errorVisible = false;
    }
    // load templates and modules at init
    AdminTemplatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getTemplates().subscribe(function (data) {
            _this.templates = data;
        });
        this.apiService.getModules().subscribe(function (data) {
            _this.modules = data;
        });
    };
    AdminTemplatesComponent.prototype.createTemplateModal = function () {
        //Activate modal for creation of a new template
        this.createModalActive = true;
        this.newTemplateName = "";
    };
    AdminTemplatesComponent.prototype.createNewTemplate = function () {
        var _this = this;
        //actuall creation of new template
        var data = { templateName: this.newTemplateName };
        this.apiService.postTemplate(data).subscribe(function (data) {
            // console.log(data);
            _this.templates.push(data);
            _this.newTemplateName = "";
            _this.createModalActive = false;
        });
    };
    AdminTemplatesComponent.prototype.save = function () {
        var _this = this;
        //save the changes made in a template to the server
        var data = {
            templateName: this.selected_template.name,
            template_id: this.selected_template_id
        };
        this.apiService.postTemplate(data).subscribe(function (data) {
            _this.messageVisible = true;
            for (var i in _this.templates) {
                var temp = _this.templates[i];
                if (temp.template_id == _this.selected_template_id) {
                    _this.templates[i].name = _this.selected_template.name;
                }
            }
        });
    };
    // delete a template
    AdminTemplatesComponent.prototype.deleteTemplate = function (template) {
        var _this = this;
        if (confirm('Are you sure to delete "' +
            template.name +
            '"\n This action is irreversible')) {
            this.apiService.deleteTemplate(template.template_id).subscribe(function (data) {
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
                    console.log("409 error, display error message");
                    _this.errorVisible = true;
                }
            });
        }
    };
    // select a template. If it is already selected, unselect it
    AdminTemplatesComponent.prototype.selectTemplate = function (template) {
        var _this = this;
        if (this.selected_template_id != template.template_id) {
            this.selected_template_id = template.template_id;
            this.selected_template = template;
            //Download template data
            this.apiService.getTemplate(this.selected_template_id).subscribe(function (data) {
                _this.selected_template = data;
                console.log(data);
            });
        }
        else {
            this.selected_template_id = -1;
            this.selected_template = undefined;
        }
    };
    // select a process. If it is already selected, unselect it
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
    // update a value for one of the processes (it's form value)
    AdminTemplatesComponent.prototype.setProcessValue = function (id, value) {
        var values = this.selected_process.value;
        values[id] = value;
        var data = { value: values };
        this.apiService
            .saveProcess(data, this.selected_process_id)
            .subscribe(function (data) {
            // console.log('data chagned')
            // console.log(data);
        });
    };
    // get a process value. use default if none are set
    AdminTemplatesComponent.prototype.getProcessValue = function (id) {
        var values = this.selected_process.value;
        if (id in values) {
            return values[id];
        }
        var form = this.selected_process.form;
        for (var i in form) {
            if (form[i].identifier == id) {
                if ("default" in form[i]) {
                    return form[i].default;
                }
            }
        }
        return "";
    };
    // Delete a process
    AdminTemplatesComponent.prototype.deleteProcess = function (process) {
        this.apiService.deleteProcess(process.process_id).subscribe(function (data) { });
        this.selected_template.processes = this.selected_template.processes.filter(function (item) {
            return item.process_id != process.process_id;
        });
        // move up all processes below
        var data = [];
        for (var index in this.selected_template.processes) {
            var item = this.selected_template.processes[index];
            if (item.type != "placeholder" && item.order > process.order) {
                item.order -= 1;
                data.push({ order: item.order, process_id: item.process_id });
            }
        }
        this.apiService
            .reorderTemplateProcesses(data, this.selected_template_id)
            .subscribe(function (data) {
            // console.log(data);
        });
        // update the visuals
        this.selected_template.processes = this.selected_template.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    // Simply add a process to the bottom of the list
    AdminTemplatesComponent.prototype.addProcessLast = function (module_id) {
        var _this = this;
        var order = 0;
        if (this.selected_template.processes.length > 0) {
            order =
                this.selected_template.processes[this.selected_template.processes.length - 1].order + 1;
        }
        this.apiService
            .addProcess({
            order: order,
            module: module_id,
            template: this.selected_template_id
        })
            .subscribe(function (data) {
            _this.selected_template.processes = data;
        });
    };
    // ---------------- (( Dragging)) ---------------- //
    AdminTemplatesComponent.prototype.moveUp = function (process) {
        var data = [];
        data.push({ order: process.order - 1, process_id: process.process_id });
        // swap places of process and the one above
        for (var i = 0; i < this.selected_template.processes.length; i++) {
            var p = this.selected_template.processes[i];
            if (p.order == process.order - 1) {
                data.push({ order: p.order + 1, process_id: p.process_id });
                // console.log(i);/
                this.selected_template.processes[i].order += 1;
                this.selected_template.processes[i + 1].order -= 1;
                break;
            }
        }
        this.apiService
            .reorderTemplateProcesses(data, this.selected_template_id)
            .subscribe(function (data) {
            // console.log(data);
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
        data.push({ order: process.order + 1, process_id: process.process_id });
        // swap places of process and the one below
        for (var i = 0; i < this.selected_template.processes.length; i++) {
            var p = this.selected_template.processes[i];
            if (p.order == process.order + 1) {
                data.push({ order: p.order - 1, process_id: p.process_id });
                this.selected_template.processes[i].order -= 1;
                this.selected_template.processes[i - 1].order += 1;
                break;
            }
        }
        this.apiService
            .reorderTemplateProcesses(data, this.selected_template_id)
            .subscribe(function (data) {
            // console.log(data);
        });
        this.selected_template.processes = this.selected_template.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    // store the data of the dragged object in the event
    AdminTemplatesComponent.prototype.dragStart = function (e, id, type, name) {
        e.dataTransfer.setData("id", id);
        e.dataTransfer.setData("type", type);
        e.dataTransfer.setData("name", name);
        this.placeholderName = name;
    };
    AdminTemplatesComponent.prototype.onDrop = function (e) {
        var _this = this;
        // calculate the new order for the dropped element
        var dropOrder = Math.ceil(this.placeholderLocation);
        if (dropOrder < 0) {
            dropOrder = 0;
        }
        // if the dropped element is a module, add it
        if (e.dataTransfer.getData("type") == "module") {
            var data = [];
            // move down all items under existingIndex
            for (var index in this.selected_template.processes) {
                var item = this.selected_template.processes[index];
                // console.log(this.package.processes[index]);
                if (item.type != "placeholder" && item.order >= dropOrder) {
                    item.order += 1;
                    data.push({ order: item.order, process_id: item.process_id }); // updates to push to backend
                }
            }
            //submit reorder:
            this.apiService
                .reorderTemplateProcesses(data, this.selected_template_id)
                .subscribe(function (data) {
                // console.log(data);
            });
            //add process temporarily until the request is completed
            var newProcess = {
                order: dropOrder,
                process_id: 100,
                module: e.dataTransfer.getData("id"),
                name: e.dataTransfer.getData("name")
            };
            this.selected_template.processes.splice(dropOrder, 0, newProcess);
            this.apiService
                .addProcess({
                order: dropOrder,
                module: e.dataTransfer.getData("id"),
                template: this.selected_template_id
            })
                .subscribe(function (data) {
                _this.selected_template.processes = data;
                _this.selected_process = undefined;
                _this.selected_process_id = -1;
            });
        }
        else {
            // else if the dropped element is a process, reorder the elements in the list
            var startOrder = -1;
            var movedProcessIndex;
            var data = [];
            for (var index in this.selected_template.processes) {
                var item = this.selected_template.processes[index];
                if (item.process_id == e.dataTransfer.getData("id")) {
                    startOrder = item.order;
                    movedProcessIndex = index;
                }
            }
            if (startOrder > dropOrder) {
                // the item was dragged up. items from dropOrder to startOrder should be moved down.
                for (var index in this.selected_template.processes) {
                    var item = this.selected_template.processes[index];
                    if (item.type != "placeholder" &&
                        item.order < startOrder &&
                        item.order >= dropOrder) {
                        item.order += 1;
                        data.push({ order: item.order, process_id: item.process_id });
                    }
                }
                this.selected_template.processes[movedProcessIndex].order = dropOrder;
                data.push({
                    order: this.selected_template.processes[movedProcessIndex].order,
                    process_id: this.selected_template.processes[movedProcessIndex]
                        .process_id
                });
            }
            else {
                // the item was dragged down. items smaller than startOrder and larger than dropOrder shall be moved up.
                for (var index in this.selected_template.processes) {
                    var item = this.selected_template.processes[index];
                    if (item.type != "placeholder" &&
                        item.order > startOrder &&
                        item.order < dropOrder) {
                        item.order -= 1;
                        data.push({ order: item.order, process_id: item.process_id });
                    }
                }
                this.selected_template.processes[movedProcessIndex].order =
                    dropOrder - 1;
                data.push({
                    order: this.selected_template.processes[movedProcessIndex].order,
                    process_id: this.selected_template.processes[movedProcessIndex]
                        .process_id
                });
            }
            // push changes to api
            this.apiService
                .reorderTemplateProcesses(data, this.selected_template_id)
                .subscribe(function (data) {
                // console.log(data);
            });
            this.onRelease(undefined);
            this.selected_template.processes = this.selected_template.processes.sort(function (a, b) {
                if (a.order > b.order) {
                    return 1;
                }
                return -1;
            });
        }
    };
    AdminTemplatesComponent.prototype.onRelease = function (e) {
        // remove the placeholder
        this.selected_template.processes = this.selected_template.processes.filter(function (item) {
            return item["type"] != "placeholder";
        });
    };
    AdminTemplatesComponent.prototype.allowDrop = function (e, index) {
        //set ghost image to show where you will drop.
        e.preventDefault();
        var element = e.target;
        if (Math.abs(index % 1) > 0.4 && Math.abs(index % 1) < 0.6) {
            return;
        }
        if (e.pageY - element.getBoundingClientRect().top >
            element.offsetHeight * 0.5) {
            // drop below elements
            var ind = index + 0.5;
            if (ind != this.placeholderLocation) {
                this.placeholderLocation = ind;
                this.onRelease(undefined);
                var temp = {
                    type: "placeholder",
                    order: ind,
                    name: this.placeholderName
                };
                this.selected_template.processes.splice(index + 1, 0, temp);
            }
        }
        else {
            //drop above element.
            var ind = index - 0.5;
            if (ind != this.placeholderLocation) {
                this.placeholderLocation = ind;
                this.onRelease(undefined);
                console.log(e.dataTransfer.getData("name"));
                var temp = {
                    type: "placeholder",
                    order: ind,
                    name: this.placeholderName
                };
                this.selected_template.processes.splice(index, 0, temp);
            }
        }
        this.placeholderTemplate = this.selected_template_id;
    };
    AdminTemplatesComponent.prototype.allowDropTop = function (e) {
        // create a placeholder at the correct place
        e.preventDefault();
        //calculate order. Order will be 0.5 lower than first visible.
        var order = -0.5;
        this.placeholderLocation = order;
        this.placeholderTemplate = this.selected_template_id;
        this.onRelease(undefined);
        var temp = {
            type: "placeholder",
            order: order,
            name: this.placeholderName
        };
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
            selector: "adminTemplates",
            template: __webpack_require__(/*! ./AdminTemplates.component.html */ "./src/app/Admin/AdminTemplates.component.html"),
            styles: [__webpack_require__(/*! ./AdminTemplates.component.sass */ "./src/app/Admin/AdminTemplates.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]])
    ], AdminTemplatesComponent);
    return AdminTemplatesComponent;
}());



/***/ }),

/***/ "./src/app/Components/FileBrowser/File.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Components/FileBrowser/File.component.ts ***!
  \**********************************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/api.service */ "./src/app/Services/api.service.ts");
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
    function FileComponent(apiService) {
        this.apiService = apiService;
        this.expanded = false;
    }
    FileComponent.prototype.ngOnInit = function () {
    };
    FileComponent.prototype.expand = function () {
        if (this.expanded) {
            this.expanded = false;
        }
        else {
            this.expanded = true;
            if (this.file.type == "folder") {
                this.fetchFiles();
            }
        }
    };
    FileComponent.prototype.fetchFiles = function () {
        var _this = this;
        console.log(this.specific_path);
        this.apiService.getFiles(this.path, this.specific_path).subscribe(function (data) {
            console.log(data);
            _this.children = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileComponent.prototype, "file", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FileComponent.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FileComponent.prototype, "specific_path", void 0);
    FileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'file',
            template: __webpack_require__(/*! ./file.component.html */ "./src/app/Components/FileBrowser/file.component.html"),
            styles: [__webpack_require__(/*! ./file.component.sass */ "./src/app/Components/FileBrowser/file.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./src/app/Components/FileBrowser/FileBrowser.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/FileBrowser/FileBrowser.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" [class.active]=\"active\" id=\"modal\">\n  <div class=\"main-modal modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">FileBrowser</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngFor=\"let level of levels; let i = index\" class=\"level\">\n          <div\n            *ngFor=\"let file of level\"\n            class=\"file\"\n            [class.selected]=\"i == selectedLevel && file.name == selectedFile.name\"\n            (contextmenu)=\"openContextMenu($event, i, file)\"\n            (click)=\"openNewLevel(i, file)\"\n            >\n            <!-- <file [file]=\"file\" [path]=\"path\" [specific_path]=\"file.name + '/'\"></file> -->\n            <i class=\"material-icons align-middle\" *ngIf=\"file.type == 'folder'\">folder</i>\n            <i class=\"material-icons align-middle\" *ngIf=\"file.type == 'file'\">insert_drive_file</i>\n            <p class=\"align-middle\">\n              {{file.name}}\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"openUploadModal()\">Upload file</button>\n        <button *ngIf=\"selectedFile != undefined\" type=\"button\" class=\"btn btn-warning\" (click)=\"openRenameModal()\">Rename</button>\n        <button *ngIf=\"selectedFile != undefined\" type=\"button\" class=\"btn btn-danger\" (click)=\"openDeleteModal()\">Delete</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Close</button>\n      </div>\n    </div>\n\n    <!-- Popup window inside modal -->\n    <div class=\"popUpQuestion modal\" *ngIf=\"innerModalVisible\">\n      <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 *ngIf=\"innerModalType == 'delete'\" class=\"modal-title\">Delete</h5>\n            <h5 *ngIf=\"innerModalType == 'rename'\" class=\"modal-title\">Rename</h5>\n            <h5 *ngIf=\"innerModalType == 'create'\" class=\"modal-title\">Create new folder</h5>\n            <h5 *ngIf=\"innerModalType == 'upload'\" class=\"modal-title\">Upload a file</h5>\n            <button type=\"button\" class=\"close\" (click)=\"closeInnerModal()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <p *ngIf=\"innerModalType == 'delete'\">\n              Are you sure you want to delete \"{{selectedFile.name}}\"? All it's content will permanently be deleted.\n            </p>\n            <div class=\"form-group\" *ngIf=\"innerModalType == 'rename'\">\n              <label for=\"inputName\">New name</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"New file name\" [(ngModel)]=\"innerModalValue\">\n            </div>\n            <div class=\"form-group\" *ngIf=\"innerModalType == 'create'\">\n              <label for=\"inputName\">Folder name</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Folder name\" [(ngModel)]=\"innerModalValue\">\n            </div>\n            <div *ngIf=\"innerModalType == 'upload'\" class=\"custom-file\" id=\"customFile\" lang=\"en\">\n              <input type=\"file\" class=\"custom-file-input\" id=\"exampleInputFile\" (change)=\"onFileSelected($event)\" name=\"import\">\n              <label class=\"custom-file-label\" for=\"exampleInputFile\" >\n                {{innerModalValue}}\n              </label>\n            </div>\n          </div>\n          <div class=\"modal-footer justify-content-between\">\n            <button *ngIf=\"innerModalType == 'delete'\" type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\n            <button *ngIf=\"innerModalType == 'rename'\" type=\"button\" class=\"btn btn-success\" (click)=\"rename()\">Rename</button>\n            <button *ngIf=\"innerModalType == 'create'\" type=\"button\" class=\"btn btn-success\" (click)=\"create()\">Create</button>\n            <button *ngIf=\"innerModalType == 'upload'\" type=\"button\" class=\"btn btn-success\" (click)=\"uploadFile()\">Upload</button>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeInnerModal()\">Cancel</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-background\" (click)=\"closeInnerModal()\"></div>\n    </div>\n  </div>\n  <div class=\"modal-background\" (click)=\"closeModal()\"></div>\n</div>\n\n<div class=\"contextMenu\" *ngIf=\"contextMenuPos.x != -1\" [ngStyle]=\"{'left.px': contextMenuPos.x, 'top.px': contextMenuPos.y}\">\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <div class=\"dropdown-header\">\n      <i class=\"material-icons align-middle float-left\" *ngIf=\"selectedFile.type == 'folder'\">folder</i>\n      <i class=\"material-icons align-middle float-left\" *ngIf=\"selectedFile.type == 'file'\">insert_drive_file</i>\n      <p class=\"float-left\">{{selectedFile.name}}</p>\n    </div>\n    <div class=\"dropdown-divider\"></div>\n    <a class=\"dropdown-item\" (click)=\"openRenameModal()\">Rename</a>\n    <a class=\"dropdown-item\" [href]=\"getDownloadPath()\">Download</a>\n    <a class=\"dropdown-item\" (click)=\"openDeleteModal()\">Delete</a>\n    <a class=\"dropdown-item\" (click)=\"openUploadModal()\">upload file</a>\n    <a class=\"dropdown-item\" (click)=\"openCreateFolderModal()\">Create folder</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/FileBrowser/FileBrowser.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/Components/FileBrowser/FileBrowser.component.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.card {\n  margin-bottom: 10px; }\n\n.icon-small {\n  font-size: 1em; }\n\n.modal.active {\n  display: block !important; }\n\n.main-modal.modal-dialog, .main-modal .modal-content {\n  height: 95%; }\n\n.modal-body {\n  overflow-x: auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  padding: 0; }\n\n.modal-body .level {\n    float: left;\n    min-width: 200px;\n    height: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n    border-right: 1px solid #e9ecef;\n    padding-left: 0; }\n\n.modal-body .level .file {\n      clear: both;\n      flex-wrap: nowrap;\n      display: flex;\n      padding-left: 10px;\n      align-items: center; }\n\n.modal-body .level .file p {\n        white-space: nowrap;\n        float: left;\n        vertical-align: middle;\n        margin: 5px; }\n\n.modal-body .level .file i {\n        float: left;\n        color: rgba(188, 4, 78, 0.5); }\n\n.modal-body .level .file.selected {\n        background-color: #bc044e; }\n\n.modal-body .level .file.selected p, .modal-body .level .file.selected i {\n          color: white; }\n\n.modal-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: -1; }\n\n.contextMenu {\n  position: fixed;\n  z-index: 10000; }\n\n.contextMenu .dropdown-menu {\n    display: block; }\n\n.contextMenu .dropdown-menu .dropdown-header {\n      padding: 0;\n      padding-left: 10px;\n      padding-top: 5px; }\n\n.contextMenu .dropdown-menu .dropdown-header p {\n        margin-left: 5px; }\n\n.contextMenu .dropdown-menu .dropdown-divider {\n      clear: both; }\n\n.popUpQuestion {\n  display: block; }\n\n.popUpQuestion .modal-body {\n    padding: 10px; }\n"

/***/ }),

/***/ "./src/app/Components/FileBrowser/FileBrowser.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/FileBrowser/FileBrowser.component.ts ***!
  \*****************************************************************/
/*! exports provided: FileBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserComponent", function() { return FileBrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/api.service */ "./src/app/Services/api.service.ts");
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
    function FileBrowserComponent(apiService) {
        this.apiService = apiService;
        this._active = false;
        this.activeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedFiles = undefined;
        this.levels = [[]];
        this.fullPath = [];
        this.selectedLevel = -1;
        this.selectedFile = undefined;
        this.contextMenuPos = { x: -1, y: -1 };
        this.innerModalVisible = false;
        this.innerModalValue = "";
        this.innerModalType = "";
    }
    Object.defineProperty(FileBrowserComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            this._active = active;
            if (this._active) {
                this.loadInitialData();
            }
        },
        enumerable: true,
        configurable: true
    });
    FileBrowserComponent.prototype.clickedOutside = function ($event) {
        // here you can hide your menu
        if ($event.button == 0) {
            this.contextMenuPos['x'] = -1;
            this.contextMenuPos['y'] = -1;
        }
    };
    FileBrowserComponent.prototype.closeModal = function () {
        this._active = false;
        this.activeChange.emit(this._active);
    };
    FileBrowserComponent.prototype.ngOnInit = function () {
        // root level files is fetched from path input
        if (this._active) {
            this.loadInitialData();
        }
    };
    FileBrowserComponent.prototype.loadInitialData = function () {
        var _this = this;
        this.levels = [[]];
        this.fullPath = [];
        this.selectedLevel = -1;
        this.selectedFile = undefined;
        this.apiService.getFiles(this.path).subscribe(function (data) {
            _this.levels[0] = data;
        });
    };
    FileBrowserComponent.prototype.calculatePath = function (index, file) {
        var path = "";
        if (file) {
            for (var i = 0; i < index; i++) {
                path += this.fullPath[i] + '/';
            }
            path += file.name;
        }
        return path;
    };
    FileBrowserComponent.prototype.openNewLevel = function (index, file) {
        var _this = this;
        // event.preventDefault();
        // event.stopPropagation();
        this.selectedLevel = index;
        this.selectedFile = file;
        while (this.levels.length > index + 1) {
            this.levels.pop();
            this.fullPath.pop();
        }
        if (file.type == "folder") {
            var path = this.calculatePath(index, file);
            this.apiService.getFiles(this.path, path).subscribe(function (data) {
                _this.levels.push(data);
                _this.fullPath.push(file.name);
            });
        }
    };
    FileBrowserComponent.prototype.openContextMenu = function (event, index, file) {
        event.preventDefault();
        event.stopPropagation();
        this.contextMenuPos['x'] = event.clientX;
        this.contextMenuPos['y'] = event.clientY;
        //select the rightclicked item:
        this.openNewLevel(index, file);
    };
    FileBrowserComponent.prototype.openRenameModal = function () {
        this.innerModalValue = this.selectedFile.name;
        this.innerModalType = 'rename';
        this.innerModalVisible = true;
    };
    FileBrowserComponent.prototype.rename = function () {
        var _this = this;
        var body = {};
        body['path'] = this.calculatePath(this.selectedLevel, this.selectedFile);
        body['name'] = this.innerModalValue;
        this.apiService.renameFile(this.path, body).subscribe(function (data) {
            _this.selectedFile.name = _this.innerModalValue;
            _this.levels.pop();
            if (_this.selectedFile.type == 'folder') {
                _this.levels.pop();
                _this.fullPath[_this.fullPath.length - 1] = _this.innerModalValue;
                _this.selectedFile = undefined;
                _this.selectedLevel = -1;
            }
            _this.levels.push(data);
            _this.closeInnerModal();
        });
    };
    FileBrowserComponent.prototype.getDownloadPath = function () {
        var path = this.calculatePath(this.selectedLevel, this.selectedFile);
        return this.path + "?path=" + path + "&download";
    };
    FileBrowserComponent.prototype.openDeleteModal = function () {
        this.innerModalVisible = true;
        this.innerModalType = 'delete';
    };
    FileBrowserComponent.prototype.delete = function () {
        var _this = this;
        if (!this.selectedFile) {
            return;
        }
        var path = this.calculatePath(this.selectedLevel, this.selectedFile);
        this.apiService.deleteFile(this.path, path).subscribe(function (data) {
            if (_this.selectedFile.type == 'folder') {
                _this.fullPath.pop();
                _this.levels.pop();
            }
            _this.levels.pop();
            _this.levels.push(data);
            _this.selectedFile.name = _this.fullPath[_this.fullPath.length - 1];
            _this.selectedFile.type = 'folder';
            _this.selectedLevel -= 1;
            _this.closeInnerModal();
        });
    };
    FileBrowserComponent.prototype.openUploadModal = function () {
        this.innerModalVisible = true;
        this.innerModalType = 'upload';
        this.innerModalValue = "";
    };
    FileBrowserComponent.prototype.openCreateFolderModal = function () {
        this.innerModalVisible = true;
        this.innerModalType = 'create';
        this.innerModalValue = "";
    };
    FileBrowserComponent.prototype.onFileSelected = function (e) {
        if (e.target.files.length > 0) {
            //check fileFormat
            // if (!e.target.files[0].name.endsWith('.tar')) {
            //   console.error('error, wrong fileType');
            //   this.innerModalValue = "Select file...";
            //   // this.fileStatus = 1;
            // } else {
            this.innerModalFile = e.target.files[0];
            this.innerModalValue = this.innerModalFile.name;
            // this.fileStatus = 2;
            // }
        }
    };
    FileBrowserComponent.prototype.uploadFile = function () {
        var _this = this;
        console.log('upload');
        if (!this.innerModalFile) {
            console.error('no file selected');
            return;
        }
        // this.modalactive = false;
        // this.fileName = "Select file...";
        var formData = new FormData();
        formData.append('file', this.innerModalFile, this.innerModalValue);
        //calculate the final path:
        var newPath = "";
        if (this.selectedFile) {
            var path = this.calculatePath(this.selectedLevel, this.selectedFile);
            if (this.selectedFile.type == "folder") {
                //create the new folder inside this.
                newPath = path + "/" + this.innerModalValue;
            }
            else {
                // create the new folder in this folder.
                var prev = path.substr(0, path.lastIndexOf('/'));
                if (prev != "") {
                    prev += "/";
                }
                newPath = prev + this.innerModalValue;
            }
        }
        else {
            newPath = this.innerModalValue;
        }
        formData.append('path', newPath);
        // console.log(this.innerModalValue)
        this.apiService.uploadFile(this.path, formData).subscribe(function (data) {
            if (data.type == 4) {
                _this.levels.pop();
                _this.levels.push(data['body']);
                _this.closeInnerModal();
            }
        });
    };
    FileBrowserComponent.prototype.create = function () {
        var _this = this;
        if (!this.selectedFile) {
            return;
        }
        var path = this.calculatePath(this.selectedLevel, this.selectedFile);
        var newPath = "";
        if (this.selectedFile.type == "folder") {
            //create the new folder inside this.
            newPath = path + "/" + this.innerModalValue;
        }
        else {
            // create the new folder in this folder.
            var prev = path.substr(0, path.lastIndexOf('/'));
            if (prev != "") {
                prev += "/";
            }
            newPath = prev + this.innerModalValue;
        }
        this.apiService.createFolder(this.path, newPath).subscribe(function (data) {
            _this.levels.pop();
            _this.levels.push(data);
            _this.closeInnerModal();
        });
    };
    FileBrowserComponent.prototype.closeInnerModal = function () {
        console.log('close inner modeal');
        this.innerModalVisible = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FileBrowserComponent.prototype, "package_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FileBrowserComponent.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], FileBrowserComponent.prototype, "active", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileBrowserComponent.prototype, "activeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileBrowserComponent.prototype, "selectedFiles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileBrowserComponent.prototype, "clickedOutside", null);
    FileBrowserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'filebrowser',
            template: __webpack_require__(/*! ./FileBrowser.component.html */ "./src/app/Components/FileBrowser/FileBrowser.component.html"),
            styles: [__webpack_require__(/*! ./FileBrowser.component.sass */ "./src/app/Components/FileBrowser/FileBrowser.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]])
    ], FileBrowserComponent);
    return FileBrowserComponent;
}());



/***/ }),

/***/ "./src/app/Components/FileBrowser/FileBrowser.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Components/FileBrowser/FileBrowser.module.ts ***!
  \**************************************************************/
/*! exports provided: FileBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserModule", function() { return FileBrowserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _FileBrowser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileBrowser.component */ "./src/app/Components/FileBrowser/FileBrowser.component.ts");
/* harmony import */ var _File_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./File.component */ "./src/app/Components/FileBrowser/File.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//angular modules



//declarations


var FileBrowserModule = /** @class */ (function () {
    function FileBrowserModule() {
    }
    FileBrowserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _FileBrowser_component__WEBPACK_IMPORTED_MODULE_3__["FileBrowserComponent"],
                _File_component__WEBPACK_IMPORTED_MODULE_4__["FileComponent"]
            ],
            providers: [],
            exports: [_FileBrowser_component__WEBPACK_IMPORTED_MODULE_3__["FileBrowserComponent"]]
        })
    ], FileBrowserModule);
    return FileBrowserModule;
}());



/***/ }),

/***/ "./src/app/Components/FileBrowser/file.component.html":
/*!************************************************************!*\
  !*** ./src/app/Components/FileBrowser/file.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"file-header noselect d-flex\" (click)=\"expand()\">\n  <ng-template [ngIf]=\"file.type == 'folder'\">\n    <i *ngIf=\"!expanded\" class=\"material-icons file-float\">arrow_right</i>\n    <i *ngIf=\"expanded\" class=\"material-icons file-float\">arrow_drop_down</i>\n  </ng-template>\n  <p class=\"file-float\">{{file.name}}</p>\n  <!-- <i class=\"material-icons file-float\">indeterminate_check_box</i> -->\n</div>\n<!-- <i *ngIf=\"file.selected == true && file.type == 'file'\" class=\"material-icons file-float\" (click)=\"select()\" tooltip=\"Deselect this file\" tooltipPlacement=\"right\">check_box</i> -->\n<!-- <i *ngIf=\"file.selected != true && file.type == 'file'\" class=\"material-icons file-float\" (click)=\"select()\" tooltip=\"Select this file\" tooltipPlacement=\"right\">check_box_outline_blank</i> -->\n<!-- <i *ngIf=\"file.type == 'folder'\" class=\"material-icons file-float\" tooltip=\"Set a filter for items in folder\" tooltipPlacement=\"right\">filter_list</i> -->\n<div *ngIf=\"expanded\" class=\"file-children\">\n  <!-- <div *ngFor=\"let file of file.children\"> -->\n    <file *ngFor=\"let f of children\" [file]=\"f\" [specific_path]=\"specific_path + f.name + '/'\" [path]=\"path\"></file>\n  <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/Components/FileBrowser/file.component.sass":
/*!************************************************************!*\
  !*** ./src/app/Components/FileBrowser/file.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".file-header {\n  cursor: pointer; }\n\n.file-children {\n  margin-left: 15px;\n  clear: both; }\n\n.tooltip {\n  background-color: red; }\n"

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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _Message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message.component */ "./src/app/Components/Message/Message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//angular modules



//declarations

var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            declarations: [
                _Message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]
            ],
            providers: [],
            exports: [_Message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]]
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ }),

/***/ "./src/app/Components/Modal/Modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Components/Modal/Modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal active\" *ngIf=\"active\" id=\"modal\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{title}}</h5>\n        <button type=\"button\" class=\"close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <ng-content select=\"[modal-body]\"></ng-content>\n      </div>\n      <div class=\"modal-footer\">\n        <ng-content select=\"[modal-footer]\"></ng-content>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Close</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-background\" (click)=\"close()\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/Modal/Modal.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/Components/Modal/Modal.component.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  max-height: 95%;\n  display: block !important; }\n\n.modal-dialog {\n  height: 100%;\n  max-width: 90%; }\n\n.modal-content {\n  max-height: 95%; }\n\n.modal-body {\n  margin-top: 5px;\n  overflow-y: scroll; }\n\n.modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: -1; }\n"

/***/ }),

/***/ "./src/app/Components/Modal/Modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/Modal/Modal.component.ts ***!
  \*****************************************************/
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
            template: __webpack_require__(/*! ./Modal.component.html */ "./src/app/Components/Modal/Modal.component.html"),
            styles: [__webpack_require__(/*! ./Modal.component.sass */ "./src/app/Components/Modal/Modal.component.sass")]
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/Components/Modal/Modal.module.ts":
/*!**************************************************!*\
  !*** ./src/app/Components/Modal/Modal.module.ts ***!
  \**************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Message_Message_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Message/Message.module */ "./src/app/Components/Message/Message.module.ts");
/* harmony import */ var _Modal_Modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modal/Modal.component */ "./src/app/Components/Modal/Modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//imports

//declarations

var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _Message_Message_module__WEBPACK_IMPORTED_MODULE_4__["MessageModule"],
            ],
            declarations: [
                _Modal_Modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]
            ],
            providers: [],
            exports: [
                _Modal_Modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]
            ]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "./src/app/Components/Navbar/Navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/Navbar/Navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-expand-lg fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" [routerLink]=\"['/']\">Sydarkivera</a>\n  <ul class=\"navbar-nav mr-auto\">\n    <ng-content></ng-content>\n  </ul>\n  <ul class=\"navbar-nav mr-2\">\n    <li class=\"nav-item\" *ngIf=\"!IsAuthenticated\">\n      <a class=\"nav-link\" [routerLink]=\"['/login']\">Sign in</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"IsAuthenticated\">\n      <a class=\"nav-link\" >Welcome, {{username}}</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"IsAuthenticated\">\n      <a class=\"nav-link\" (click)=\"signout()\">Sign out</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/Components/Navbar/Navbar.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/Components/Navbar/Navbar.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\n  background-color: #5c5c5c;\n  width: 220px;\n  min-width: 220px;\n  max-width: 220px; }\n\n.nav-user {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/Components/Navbar/Navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/Navbar/Navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        this.username = "";
        this.IsAuthenticated = false;
        //get username
        if (authService.isAuthenticated()) {
            this.IsAuthenticated = true;
            this.username = authService.getUsername();
        }
    }
    NavbarComponent.prototype.signout = function () {
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./Navbar.component.html */ "./src/app/Components/Navbar/Navbar.component.html"),
            styles: [__webpack_require__(/*! ./Navbar.component.sass */ "./src/app/Components/Navbar/Navbar.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/Components/Navbar/Navbar.module.ts":
/*!****************************************************!*\
  !*** ./src/app/Components/Navbar/Navbar.module.ts ***!
  \****************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.component */ "./src/app/Components/Navbar/Navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//components

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

/***/ "./src/app/Components/Tooltip/Tooltip.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/Components/Tooltip/Tooltip.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\n  opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/Components/Tooltip/Tooltip.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/Tooltip/Tooltip.component.ts ***!
  \*********************************************************/
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
            styles: [__webpack_require__(/*! ./Tooltip.component.sass */ "./src/app/Components/Tooltip/Tooltip.component.sass")],
            template: "\n<div class=\"tooltip {{ placement }}\"\n     [style.top]=\"top + 'px'\"\n     [style.left]=\"left + 'px'\"\n     [style.opacity]=\"opacity\"\n     [class.in]=\"isIn\"\n     [class.fade]=\"isFade\"\n     role=\"Atooltip\">\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\">\n        <ng-content></ng-content>\n        {{ content }}\n    </div>\n</div>\n"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/Components/Tooltip/Tooltip.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/Tooltip/Tooltip.directive.ts ***!
  \*********************************************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Tooltip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip.component */ "./src/app/Components/Tooltip/Tooltip.component.ts");
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

/***/ "./src/app/Components/Tooltip/Tooltip.module.ts":
/*!******************************************************!*\
  !*** ./src/app/Components/Tooltip/Tooltip.module.ts ***!
  \******************************************************/
/*! exports provided: TooltipModule, Tooltip, TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tooltip.directive */ "./src/app/Components/Tooltip/Tooltip.directive.ts");
/* harmony import */ var _Tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tooltip.component */ "./src/app/Components/Tooltip/Tooltip.component.ts");
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
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities */ "./src/app/Utilities.ts");
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
    function DashboardComponent(apiService) {
        this.apiService = apiService;
        this.stats = undefined;
        // options
        this.showLegend = true;
        this.colorScheme = {
            domain: _Utilities__WEBPACK_IMPORTED_MODULE_2__["GraphColors"]
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
        // load the data from the server and reorder it for the various graphs.
        this.apiService.getStatsDashboard().subscribe(function (data) {
            // console.log(data)
            _this.stats = data;
            _this.total_size = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["formatBytes"])(data['total_size']);
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
            _this.dataLoaded = true;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/Dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.sass */ "./src/app/Dashboard/dashboard.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]])
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

module.exports = "<navbar></navbar>\n\n<!-- To row of important numbers -->\n<div class=\"row numberRow\">\n  <div class=\"col-md-3 col-sm-4 col-xs-6\">\n    <p class=\"numberTitle\">\n      Total Packages:\n    </p>\n    <p class=\"number\">\n      {{total_number_of_packages}}\n    </p>\n  </div>\n  <div class=\"col-md-3 col-sm-4 col-xs-6 divider\">\n    <p class=\"numberTitle\">\n      Total Files:\n    </p>\n    <p class=\"number\">\n      {{total_number_of_files}}\n    </p>\n  </div>\n  <div class=\"col-md-3 col-sm-4 col-xs-6 divider\">\n    <p class=\"numberTitle\">\n      Total Errors:\n    </p>\n    <p class=\"number errors\">\n      {{total_number_of_errors}}\n    </p>\n  </div>\n  <div class=\"col-md-3 col-sm-4 col-xs-6 divider\">\n    <p class=\"numberTitle\">\n      Total Filesize:\n    </p>\n    <p class=\"number\">\n      {{total_size}}\n    </p>\n  </div>\n</div>\n\n<!-- Line graphs -->\n<div class=\"row  half-graph\">\n  <div class=\"card col-md-6\">\n    <div class=\"card-title\">\n      Number of files\n    </div>\n    <div class=\"card-body\">\n      <combo-chart-component\n        [results]=\"graphDataCount\"\n        xAxis=\"true\"\n        yAxis=\"true\"\n        >\n      </combo-chart-component>\n    </div>\n  </div>\n  <div class=\"card col-md-6\">\n    <div class=\"card-title\">\n      Total size of all files\n    </div>\n    <div class=\"card-body\">\n      <combo-chart-component\n        [results]=\"graphDataSize\"\n        xAxis=\"true\"\n        yAxis=\"true\"\n        >\n      </combo-chart-component>\n    </div>\n  </div>\n</div>\n\n<!-- Pie charts -->\n<div class=\"card filetypes\">\n  <ngx-charts-advanced-pie-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"fileTypes\"\n    [gradient]=\"gradient\"\n    label=\"Filetypes\">\n  </ngx-charts-advanced-pie-chart>\n</div>\n\n<div class=\"card filetypes\">\n  <ngx-charts-advanced-pie-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"fileTypesErrors\"\n    [gradient]=\"gradient\"\n    label=\"Errors per Filetype\">\n  </ngx-charts-advanced-pie-chart>\n</div>\n"

/***/ }),

/***/ "./src/app/Dashboard/dashboard.component.sass":
/*!****************************************************!*\
  !*** ./src/app/Dashboard/dashboard.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.card {\n  margin-bottom: 10px; }\n\n.icon-small {\n  font-size: 1em; }\n\n.numberRow {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 10px; }\n\n.numberTitle {\n  margin: 0; }\n\n.divider::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  height: 52px;\n  border-left: 2px solid rgba(188, 4, 78, 0.5);\n  margin-top: 10px; }\n\n.number {\n  font-size: 2em;\n  font-weight: bold;\n  margin: 0;\n  opacity: 0.5; }\n\n.number.errors {\n    color: red; }\n\n.half-graph {\n  margin: 0;\n  margin-bottom: 10px; }\n\n.half-graph .card {\n    padding-right: 40px; }\n\n.half-graph .card .card-body {\n      height: 200px;\n      padding: 0; }\n\n.filetypes {\n  height: 300px;\n  margin-bottom: 10px; }\n"

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

// S simple component to let the user know that the path they tried to navigate to does not exist.
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notFound',
            template: "<h1>Path not found </h1>"
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

module.exports = "\n<!-- PackageWorkflow -->\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <h4>Current workflow: {{package.template_name}}</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\" (drop)=\"onDrop($event)\" (dragover)=\"allowDropTop($event)\">\n        Name\n      </div>\n      <div class=\"list-group list-group-flush\">\n        <ng-template ngFor let-process [ngForOf]=\"package.processes\">\n          <div *ngIf=\"!process.hidden\" draggable=\"true\" (dragstart)=\"dragStart($event, process.process_id, 'process', process.name)\" (drop)=\"onDrop($event)\" (dragover)=\"allowDrop($event, process.order)\" class=\"list-group-item list-group-item-action\" [class.active]=\"process.process_id==selected_process_id\"\n              [class.template]=\"process.type=='placeholder'\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectProcess(process)\">\n                {{process.name}}\n              </p>\n              <i *ngIf=\"process.order != 0\" class=\"material-icons icon-button\" (click)=\"moveUp(process)\">keyboard_arrow_up</i>\n              <i *ngIf=\"process.order < package.processes.length-1\" class=\"material-icons icon-button\" (click)=\"moveDown(process)\">keyboard_arrow_down</i>\n              <i class=\"material-icons icon-button\" (click)=\"deleteProcess(process)\">delete</i>\n              <i class=\"material-icons drag-handle\">drag_handle</i>\n            </div>\n            <ng-template [ngIf]=\"process.process_id==selected_process_id\">\n              <form *ngIf=\"process.form.length>0\">\n                <div class=\"form-group\" *ngFor=\"let input of process.form\">\n                  <div class=\"form-check\" *ngIf=\"input.type=='checkbox'\">\n                    <input\n                      class=\"form-check-input\"\n                      type=\"checkbox\"\n                      *ngIf=\"input.type=='checkbox'\"\n                      [id]=\"input.identifier\"\n                      [checked]=\"getProcessValue(input.identifier)\"\n                      (change)=\"setProcessValue(input.identifier, $event.target.checked)\"\n                      />\n                    <label class=\"form-check-label\" for=\"{{input.identifier}}\">\n                      {{input.label}}\n                    </label>\n                  </div>\n                  <ng-template [ngIf]=\"input.type=='text'\">\n                    <label for=\"{{input.identifier}}\">{{input.label}}</label>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      [id]=\"input.identifier\"\n                      placeholder=\"{{input.identifier}}\"\n                      [value]=\"getProcessValue(input.identifier)\"\n                      (change)=\"setProcessValue(input.identifier, $event.target.value)\"\n                      (keyup)=\"setProcessValue(input.identifier, $event.target.value)\"\n                      >\n                  </ng-template>\n                </div>\n                <!-- <label *ngFor=\"let input of process.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n                  {{input.label}}\n                  <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"process.value[input.identifier]\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n                </label> -->\n              </form>\n            </ng-template>\n          </div>\n        </ng-template>\n        <div class=\"emptyList\" *ngIf=\"isListEmpty()\">\n          <p>\n            You have not selected any tools.\n            <br> Select on by either dragging it from the right or pressing the plus (\n            <i class=\"material-icons\">add</i> ) sign\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <h4>Avaliable Tools</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\">\n        Name\n      </div>\n      <ng-template ngFor let-module [ngForOf]=\"modules\">\n        <div *ngIf=\"!module.hidden\" class=\"list-group list-group-flush\">\n          <div draggable=\"true\" (dragstart)=\"dragStart($event, module.module_id, 'module', module.name)\" (dragend)=\"onRelease($event)\" class=\"list-group-item list-group-item-action\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n              <i class=\"material-icons icon-button\" (click)=\"addProcessLast(module.module_id)\">add</i>\n              <i class=\"material-icons drag-handle\">drag_handle</i>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n    <button class=\"btn btn-success float-right\" (click)=\"startWorkflow()\">\n      Start\n      <i class=\"material-icons my-auto align-middle icon-small\">play_arrow</i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/PackageDetail/Package.component.sass":
/*!******************************************************!*\
  !*** ./src/app/PackageDetail/Package.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.card {\n  margin-bottom: 10px; }\n\n.icon-small {\n  font-size: 1em; }\n\n.input-label {\n  width: 100%; }\n\n.template {\n  opacity: 0.4; }\n\n.emptyList {\n  height: 400px;\n  width: 100%;\n  background-color: #eee;\n  display: table;\n  padding: 0px 40px; }\n\n.emptyList p {\n    display: table-cell;\n    vertical-align: middle;\n    color: #444; }\n\n.emptyList i {\n    vertical-align: middle;\n    color: #444; }\n\n.list-group-item.active {\n  background-color: #ddd;\n  border-color: #bc044e; }\n\n.list-group-item.active label, .list-group-item.active p, .list-group-item.active i, .list-group-item.active small {\n    color: #333; }\n"

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
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//services

var PackageComponent = /** @class */ (function () {
    function PackageComponent(apiService, route, router) {
        this.apiService = apiService;
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
        // when id exists, load the package
        this.route.parent.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.apiService.getPackage(_this.id).subscribe(function (data) {
                _this.package = data;
                console.log(data['processes']);
            });
        });
        // load modules right away
        this.apiService.getModules().subscribe(function (data) {
            _this.modules = data;
        });
    };
    //exectute the workflow
    PackageComponent.prototype.startWorkflow = function () {
        this.apiService.startWorkflow(this.package.package_id);
        this.router.navigate(['packages', this.package.package_id, 'status']);
    };
    //select a process. If it is alreade selected, deselect it.
    PackageComponent.prototype.selectProcess = function (process) {
        if (this.selected_process_id != process.process_id) {
            this.selected_process_id = process.process_id;
            this.selected_process = process;
        }
        else {
            this.selected_process_id = -1;
            this.selected_process = undefined;
        }
    };
    // delete process
    PackageComponent.prototype.deleteProcess = function (process) {
        this.apiService.deleteProcess(process.process_id).subscribe(function (data) {
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
        this.apiService.reorderPackageProcesses(data, this.package.package_id).subscribe(function (data) {
        });
        this.package.processes = this.package.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    // add a new process to bottom of the list
    PackageComponent.prototype.addProcessLast = function (module_id) {
        var _this = this;
        var order = 0;
        if (this.package.processes.length > 0) {
            order = this.package.processes[this.package.processes.length - 1].order + 1;
        }
        this.apiService.addProcess({ "order": order, "module": module_id, "package": this.package.package_id }).subscribe(function (data) {
            _this.package.processes = data;
        });
    };
    // modify a process form value
    PackageComponent.prototype.setProcessValue = function (id, value) {
        var values = this.selected_process.value;
        values[id] = value;
        var data = { "value": values };
        this.apiService.saveProcess(data, this.selected_process_id).subscribe(function (data) {
        });
    };
    // get a process value. use default if none are set
    PackageComponent.prototype.getProcessValue = function (id) {
        var values = this.selected_process.value;
        if (id in values) {
            return values[id];
        }
        var form = this.selected_process.form;
        for (var i in form) {
            if (form[i].identifier == id) {
                if ("default" in form[i]) {
                    return form[i].default;
                }
            }
        }
        return "";
    };
    //check if the list of processes is empty
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
    // move up a process on step
    PackageComponent.prototype.moveUp = function (process) {
        var data = [];
        data.push({ "order": (process.order - 1), "process_id": process.process_id });
        //find the one below
        var below;
        for (var i = 0; i < this.package.processes.length; i++) {
            var p = this.package.processes[i];
            if (p.order == process.order - 1) {
                data.push({ "order": (p.order + 1), "process_id": p.process_id });
                this.package.processes[i].order += 1;
                this.package.processes[i + 1].order -= 1;
                break;
            }
        }
        this.apiService.reorderPackageProcesses(data, this.package.package_id).subscribe(function (data) {
        });
        this.package.processes = this.package.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    // move down a process on step
    PackageComponent.prototype.moveDown = function (process) {
        var data = [];
        data.push({ "order": (process.order + 1), "process_id": process.process_id });
        //find the one below
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
        this.apiService.reorderPackageProcesses(data, this.package.package_id).subscribe(function (data) {
        });
        this.package.processes = this.package.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    // store info about the moving object in the event
    PackageComponent.prototype.dragStart = function (e, id, type, name) {
        e.dataTransfer.setData('id', id);
        e.dataTransfer.setData('type', type);
        e.dataTransfer.setData('name', name);
    };
    // drop the element
    PackageComponent.prototype.onDrop = function (e) {
        var _this = this;
        // calculate where to drop the new element
        var dropOrder = Math.ceil(this.placeholderLocation);
        if (dropOrder < 0) {
            dropOrder = 0;
        }
        // if the element is a module, create a new process
        if (e.dataTransfer.getData('type') == 'module') {
            var data = [];
            // move down all items under existingIndex
            for (var index in this.package.processes) {
                var item = this.package.processes[index];
                if (item.type != 'placeholder' && item.order >= dropOrder) {
                    item.order += 1;
                    data.push({ "order": item.order, "process_id": item.process_id }); // updates to push to backend
                }
            }
            //submit reorder:
            this.apiService.reorderPackageProcesses(data, this.package.package_id).subscribe(function (data) {
            });
            //add temporary process
            var newProcess = {
                "order": dropOrder,
                "process_id": 100,
                "module": e.dataTransfer.getData('id'),
                "name": e.dataTransfer.getData('name')
            };
            this.package.processes.splice(dropOrder, 0, newProcess);
            this.apiService.addProcess({ "order": dropOrder, "module": e.dataTransfer.getData('id'), "package": this.package.package_id }).subscribe(function (data) {
                _this.package.processes = data;
            });
        }
        else {
            // if the elemenet is a process, move around the processes
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
            this.apiService.reorderPackageProcesses(data, this.package.package_id).subscribe(function (data) {
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
    };
    PackageComponent.prototype.onRelease = function (e) {
        //remove placeholder
        this.package.processes = this.package.processes.filter(function (item) {
            return item['type'] != 'placeholder';
        });
    };
    //set ghost image to show where you will drop.
    PackageComponent.prototype.allowDrop = function (e, index) {
        e.preventDefault();
        var element = e.target;
        if (Math.abs(index % 1) > 0.4 && Math.abs(index % 1) < 0.6) {
            return;
        }
        if (e.pageY - element.getBoundingClientRect().top > element.offsetHeight * 0.5) {
            // drop below elements
            var ind = index + 0.5;
            if (ind != this.placeholderLocation) {
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
            var ind = index - 0.5;
            if (ind != this.placeholderLocation) {
                this.placeholderLocation = ind;
                this.package.processes = this.package.processes.filter(function (item) {
                    return item.type != 'placeholder';
                });
                var temp = { type: "placeholder", order: ind, name: e.dataTransfer.getData('name') };
                this.package.processes.splice(index, 0, temp);
            }
        }
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
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _Components_Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Tooltip/Tooltip.module */ "./src/app/Components/Tooltip/Tooltip.module.ts");
/* harmony import */ var _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Navbar/Navbar.module */ "./src/app/Components/Navbar/Navbar.module.ts");
/* harmony import */ var _Components_Modal_Modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/Modal/Modal.module */ "./src/app/Components/Modal/Modal.module.ts");
/* harmony import */ var _Components_FileBrowser_FileBrowser_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Components/FileBrowser/FileBrowser.module */ "./src/app/Components/FileBrowser/FileBrowser.module.ts");
/* harmony import */ var _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Components/Message/Message.module */ "./src/app/Components/Message/Message.module.ts");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
/* harmony import */ var _Services_package_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Services/package.service */ "./src/app/Services/package.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// components





//modules





//services


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
                _Components_Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
                _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_11__["NavbarModule"],
                _Components_Modal_Modal_module__WEBPACK_IMPORTED_MODULE_12__["ModalModule"],
                _Components_FileBrowser_FileBrowser_module__WEBPACK_IMPORTED_MODULE_13__["FileBrowserModule"],
                _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_14__["MessageModule"]
            ],
            declarations: [
                _Package_component__WEBPACK_IMPORTED_MODULE_5__["PackageComponent"],
                _PackageDashboard_component__WEBPACK_IMPORTED_MODULE_6__["PackageDashboardComponent"],
                _PackageHeader_component__WEBPACK_IMPORTED_MODULE_9__["PackageHeaderComponent"],
                _PackageStatus_component__WEBPACK_IMPORTED_MODULE_7__["PackageStatusComponent"],
                _PackageTemplate_component__WEBPACK_IMPORTED_MODULE_8__["PackageTemplateComponent"]
            ],
            providers: [_Services_api_service__WEBPACK_IMPORTED_MODULE_15__["APIService"], _Services_package_service__WEBPACK_IMPORTED_MODULE_16__["PackageService"]]
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

module.exports = "\n<div class=\"row numberRow\">\n  <div class=\"col-md-4 col-sm-4 col-xs-6\">\n    <p class=\"numberTitle\">\n      Total Files:\n    </p>\n    <p class=\"number\">\n      {{total_number_of_files}}\n    </p>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-xs-6 divider\">\n    <p class=\"numberTitle\">\n      Total Filesize:\n    </p>\n    <p class=\"number\">\n      {{total_size}}\n    </p>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-xs-6 divider\">\n    <button class=\"btn btn-success browse\" (click)=\"openFileBrowser()\">\n      Browse package\n      <i class=\"material-icons my-auto align-middle\">folder_open</i>\n    </button>\n  </div>\n</div>\n\n<div class=\"progress border border-primary\">\n  <div\n    *ngFor=\"let process of package.processes\"\n    class=\"progress-bar text-dark text-center\"\n    [style.width]=\"process.progress/package.processes.length + '%'\"\n    [class.bg-success]=\"process.status == 'Done'\"\n    [class.bg-danger]=\"process.status == 'Error'\"\n    [class.progress-bar-animated]=\"process.status == 'Running'\"\n    [class.progress-bar-striped]=\"process.status == 'Running'\"\n    >\n  </div>\n</div>\n\n<div class=\"card filetypes\">\n  <ngx-charts-advanced-pie-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"fileTypes\"\n    [gradient]=\"gradient\"\n    label=\"Files\">\n  </ngx-charts-advanced-pie-chart>\n</div>\n\n<filebrowser [(active)]=\"browserActive\" [path]=\"browserPath\"></filebrowser>\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageDashboard.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/PackageDetail/PackageDashboard.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.card {\n  margin-bottom: 10px; }\n\n.icon-small {\n  font-size: 1em; }\n\n.numberRow {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 10px; }\n\n.numberTitle {\n  margin: 0; }\n\n.divider::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  height: 52px;\n  border-left: 2px solid rgba(188, 4, 78, 0.5);\n  margin-top: 10px; }\n\n.number {\n  font-size: 2em;\n  font-weight: bold;\n  margin: 0;\n  opacity: 0.5; }\n\n.number.errors {\n    color: red; }\n\n.half-graph {\n  margin: 0;\n  margin-bottom: 10px; }\n\n.half-graph .card {\n    padding-right: 40px; }\n\n.half-graph .card .card-body {\n      height: 200px;\n      padding: 0; }\n\n.filetypes {\n  height: 300px;\n  margin-bottom: 10px; }\n\n.btn.browse {\n  margin-top: 15px; }\n\n.progress {\n  margin-bottom: 10px; }\n"

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
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities */ "./src/app/Utilities.ts");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PackageDashboardComponent = /** @class */ (function () {
    function PackageDashboardComponent(apiService, route, router) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.id = -1;
        this.package = { processes: [] };
        this.fileTypes = [];
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
        this.view = [700, 400];
        // options
        this.showLegend = false;
        this.colorScheme = {
            domain: _Utilities__WEBPACK_IMPORTED_MODULE_2__["GraphColors"]
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
        this.browserActive = false;
        this.browserPath = "";
    }
    PackageDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.apiService.getPackage(_this.id).subscribe(function (data) {
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
                _this.fileTypes = res.sort(function (a, b) {
                    if (a['value'] > b['value']) {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                });
                _this.total_size = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["formatBytes"])(_this.package.statistics.total_size);
                _this.total_number_of_files = _this.package.statistics.total_number_of_files;
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
    PackageDashboardComponent.prototype.openFileBrowser = function () {
        this.browserPath = "/api/package/" + this.id + "/files/";
        this.browserActive = true;
    };
    PackageDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packageDashboard',
            template: __webpack_require__(/*! ./PackageDashboard.component.html */ "./src/app/PackageDetail/PackageDashboard.component.html"),
            styles: [__webpack_require__(/*! ./PackageDashboard.component.sass */ "./src/app/PackageDetail/PackageDashboard.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

/***/ "./src/app/PackageDetail/PackageHeader.component.html":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageHeader.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar>\n  <li class=\"nav-item nav-link dropdown\" [class.show]=\"showDropDown\">\n    <p class=\"navbar-link dropdown-toggle package_title\" (click)=\"showDropDown = !showDropDown\">\n      {{name}}\n    </p>\n    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" [class.show]=\"showDropDown\">\n      <a *ngFor=\"let package of packages\" class=\"dropdown-item\" (click)=\"navigateTo(package.package_id)\">{{package.name}}</a>\n    </div>\n  </li>\n  <li class=\"nav-item\"  routerLinkActive=\"active\">\n    <a class=\"nav-link\" [routerLink]=\"['dashboard']\">Dashboard</a>\n  </li>\n  <li class=\"nav-item\" routerLinkActive=\"active\" [class.disabled]=\"status==6\">\n    <a class=\"nav-link\" [routerLink]=\"['template']\" [class.disabled]=\"status==6\">Templates</a>\n  </li>\n  <li *ngIf=\"!active_template\" class=\"nav-item disabled\" tooltip=\"Select any template before you can modify it\" tooltipPlacement=\"bottom\" tooltipOpacity=\"0.8\">\n    <a class=\"nav-link disabled noselect\">Workflow</a>\n  </li>\n  <li *ngIf=\"active_template\" class=\"nav-item\" routerLinkActive=\"active\" [class.disabled]=\"status==6\">\n    <a class=\"nav-link\" [routerLink]=\"['edit']\" [class.disabled]=\"status==6\">Workflow</a>\n  </li>\n  <li class=\"nav-item\" routerLinkActive=\"active\">\n    <a class=\"nav-link\" [routerLink]=\"['status']\">Status</a>\n  </li>\n</navbar>\n\n<message [(active)]=\"messageActive\" type=\"alert-danger\" duration=\"4000\">Package not found, returning to package list</message>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageHeader.component.sass":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageHeader.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.card {\n  margin-bottom: 10px; }\n\n.icon-small {\n  font-size: 1em; }\n\n.package_title {\n  font-weight: bold;\n  color: white;\n  margin: 0;\n  padding: 0;\n  cursor: pointer; }\n\n.nav-item.disabled {\n  cursor: not-allowed; }\n\n.nav-item.active {\n  background-color: #bc044e; }\n\n.nav-item .nav-link {\n  color: white; }\n\n.nav-item .nav-link.disabled {\n    color: gray;\n    pointer-events: none;\n    cursor: not-allowed; }\n\n.dropdown-item:active {\n  background-color: #bc044e;\n  color: white !important; }\n"

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
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
/* harmony import */ var _Services_package_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/package.service */ "./src/app/Services/package.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PackageHeaderComponent = /** @class */ (function () {
    function PackageHeaderComponent(apiService, route, router, packageService) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.packageService = packageService;
        this.name = "";
        this.showDropDown = false;
        this.status = -1;
        this.messageActive = false;
    }
    PackageHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.apiService.getPackage(_this.id).subscribe(function (data) {
                _this.active_template = data['active_template'];
                _this.name = data['name'];
                _this.status = data['status'];
            }, function (error) {
                //package was not found, display message and return to package list.
                _this.messageActive = true;
                // console.log("package not found, redirecting")
                setTimeout(function () {
                    _this.router.navigate(['/packages']);
                }, 4000);
            });
        });
        this.apiService.getPackages().subscribe(function (data) {
            _this.packages = data;
        });
        this.packageService.packageEmitter$.subscribe(function (item) {
            if ('active_template' in item) {
                _this.active_template = item['active_template'];
            }
        });
    };
    PackageHeaderComponent.prototype.navigateTo = function (package_id) {
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
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"]])
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

module.exports = "<message [(active)]=\"messageActive\" duration=\"4000\">{{messageText}}</message>\n\n<h4>Package status: {{package.status}}</h4>\n<table class=\"table table-striped table-hover\" style=\"background-color: white;\">\n  <thead class=\"company-table-head\">\n    <tr>\n      <th>Name</th>\n      <th>Statusbar</th>\n      <th>Status</th>\n      <th>Log</th>\n      <th>\n        Error\n        <button class=\"refresh\" (click)=\"updateData()\"><i class=\"material-icons\">refresh</i></button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let process of package.processes\">\n      <td class=\"align-middle\">\n        {{process.name}} {{process.hidden ? '(Hidden)' : ''}}\n      </td>\n      <td class=\"align-middle\">\n        <div class=\"progress border border-primary\">\n          <div class=\"progress-bar text-dark text-center\"\n          [class.bg-success]=\"process.status == 'Done'\"\n          [class.bg-danger]=\"process.status == 'Error'\"\n          [class.progress-bar-animated]=\"process.status == 'Running'\"\n          [class.progress-bar-striped]=\"process.status == 'Running'\"\n          [style.width]=\"process.progress + '%'\">{{process.progress}}%</div>\n        </div>\n      </td>\n      <td class=\"align-middle\">{{process.status}}</td>\n      <td class=\"align-middle\"><button class=\"btn btn-outline-primary\" (click)=\"showModal(process, 'info_log')\" [disabled]=\"process.log_path == ''\">Open log</button></td>\n      <td class=\"align-middle\">\n        <button class=\"btn btn-danger\"\n                (click)=\"showModal(process, 'error_log')\"\n                [disabled]=\"process.status != 'Error' && process.errors.length <= 0\"\n                [class.btn-outline-danger]=\"process.errors.length <= 0\">\n                Errors: {{process.errors.length}}\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<button class=\"btn btn-success float-right\" (click)=\"startWorkflow()\" *ngIf=\"package.status != 'Finished'\">\n  Start\n  <i class=\"material-icons my-auto align-middle icon-small\">play_arrow</i>\n</button>\n<button class=\"btn btn-warning float-right\" (click)=\"finishPackage()\" *ngIf=\"package.status != 'Finished'\">\n  Done\n  <!-- <i class=\"material-icons my-auto align-middle icon-small\">done</i> -->\n</button>\n<button class=\"btn btn-danger float-right\" (click)=\"removePackage()\">\n  Delete\n  <i class=\"material-icons my-auto align-middle icon-small\">delete</i>\n</button>\n\n\n<!-- Modal for logfile display -->\n<modal [(active)]=\"modalactive\" title=\"Complete log\">\n  <div modal-body style=\"margin-bottom: 10px\">\n    <div class=\"loading mx-auto\" *ngIf=\"modalLoading\"></div>\n    <!-- <div *ngIf=\"modalType == 'info'\" [innerHTML]=\"modalData\" style=\"white-space: pre-wrap;\"></div> -->\n    <div class=\"list-group\">\n      <div *ngFor=\"let error of modalData\" class=\"list-group-item list-group-item-action selection-header\">\n        <div class=\" d-flex justify-content-between\" (click)=\"error.expanded = !error.expanded\">\n          <p class=\"\">{{error.file}}</p>\n          <i *ngIf=\"!error.expanded\" class=\"material-icons my-auto\">keyboard_arrow_right</i>\n          <i *ngIf=\"error.expanded\" class=\"material-icons my-auto\">keyboard_arrow_down</i>\n        </div>\n        <div *ngIf=\"error.expanded\" class=\"selection-header\">\n          <p [innerHTML]=\"sanitizeLog(error.log)\" style=\"white-space: pre-wrap;\">\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</modal>\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageStatus.component.sass":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageStatus.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Amodal.active {\n  display: block !important; }\n\n.modal-dialog, .modal-content {\n  height: 95%; }\n\n.modal-body {\n  overflow-y: scroll; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  float: right;\n  color: inherit; }\n\n.modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: -1; }\n\n.loading {\n  border: 6px solid #f3f3f3;\n  border-top: 6px solid #3498db;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.log-row {\n  padding: 0; }\n\n.selection-header {\n  padding: 0.75rem 1.25rem; }\n"

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
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PackageStatusComponent = /** @class */ (function () {
    function PackageStatusComponent(apiService, route, router) {
        var _this = this;
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.modalActive = false;
        this.modalData = '';
        this.modalactive = false;
        this.modalLoading = true;
        this.modalType = 'info';
        this.modalProcess = undefined;
        this.messageActive = false;
        this.messageText = "";
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
        //load data fromserver...
        this.modalactive = true;
        this.modalLoading = true;
        this.modalData = "";
        if (type == 'info_log') {
            this.modalLoading = false;
            this.modalData = process.logs;
            // this.modalType = 'info';
            console.log(process.logs);
            // this.apiService.getLogFile(type, process.process_id).subscribe((data) => {
            //   this.modalLoading = false;
            //   this.modalData = this.sanitizeLog(data);
            // });
        }
        else {
            this.modalLoading = false;
            console.log(process.errors);
            // this.modalType = 'error';
            // this.modalProcess = process;
            this.modalData = process.errors;
        }
    };
    PackageStatusComponent.prototype.startWorkflow = function () {
        this.apiService.startWorkflow(this.package.package_id);
        this.messageActive = true;
        this.messageText = "Workflow is now started";
        this.updateData();
    };
    PackageStatusComponent.prototype.finishPackage = function () {
        this.messageActive = true;
        this.messageText = "Package is now marked as finished. Depending on your configuration is is now safe to delete it";
        this.apiService.finishPackage(this.package.package_id);
        this.updateData();
    };
    PackageStatusComponent.prototype.updateData = function () {
        var _this = this;
        this.apiService.getPackage(this.id).subscribe(function (data) {
            _this.package = data;
            // console.log(data);
        });
    };
    PackageStatusComponent.prototype.removePackage = function () {
        var _this = this;
        if (confirm("Are you sure to delete \"" + this.package.name + "\"\n This action is irreversible")) {
            this.apiService.removePackage(this.id).subscribe(function (data) {
                _this.messageActive = true;
                _this.messageText = "Package was successfully deleted. You will now be redirected to packagelist";
            });
            setTimeout(function () {
                _this.router.navigate(['packages']);
            }, 2000);
        }
    };
    PackageStatusComponent.prototype.sanitizeLog = function (data) {
        // convert the file to html friendly text
        if (data) {
            return data.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split("\n").join("<br>");
        }
        return "Log is empty";
    };
    PackageStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packageStatus',
            template: __webpack_require__(/*! ./PackageStatus.component.html */ "./src/app/PackageDetail/PackageStatus.component.html"),
            styles: [__webpack_require__(/*! ./PackageStatus.component.sass */ "./src/app/PackageDetail/PackageStatus.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "<h4>Select a template to set as a startingpoint for this package</h4>\n\n<table class=\"table table-striped table-hover\" style=\"background-color: white;\">\n  <thead class=\"company-table-head\">\n    <tr>\n      <th>Name</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let template of templates\" [class.selected]=\"active_template==template.template_id\">\n      <td [class.selected]=\"active_template==template.template_id\">\n        {{template.name}}\n      </td>\n      <td class=\"small-column\" [class.selected]=\"active_template==template.template_id\">\n        <button class=\"btn btn-success\" *ngIf=\"active_template != template.template_id\" [class.btn-warning]=\"active_template != undefined\" (click)=\"selectTemplate(template)\">Select</button>\n        <button class=\"btn btn-success\" (click)=\"selectAndStart(template)\">\n          Start\n          <i class=\"material-icons my-auto align-middle icon-small\">play_arrow</i>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageTemplate.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/PackageDetail/PackageTemplate.component.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.card {\n  margin-bottom: 10px; }\n\n.icon-small {\n  font-size: 1em; }\n\n.small-column {\n  width: 200px; }\n\nbutton {\n  margin-left: 10px; }\n\n.selected {\n  background-color: #aaa;\n  color: white; }\n"

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
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
/* harmony import */ var _Services_package_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/package.service */ "./src/app/Services/package.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PackageTemplateComponent = /** @class */ (function () {
    function PackageTemplateComponent(apiService, route, router, packageService) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.packageService = packageService;
        this.active_template = -1;
    }
    PackageTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.package_id = +params['id'];
            // get package
            _this.apiService.getPackage(_this.package_id).subscribe(function (data) {
                _this.package = data;
                _this.active_template = data['active_template'];
            });
        });
        this.apiService.getTemplates().subscribe(function (data) {
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
        this.apiService.setActiveTemplate(template.template_id, this.package_id, data).subscribe(function (res) {
            // window.location.href = '/packages/' + this.package_id + '/edit';
            _this.packageService.updatePackageData(data);
            //navigate
            _this.router.navigate(['../', 'edit'], { relativeTo: _this.route });
        });
    };
    PackageTemplateComponent.prototype.selectAndStart = function (template) {
        var _this = this;
        var data = { "active_template": template.template_id };
        this.apiService.setActiveTemplate(template.template_id, this.package_id, data).subscribe(function (res) {
            _this.apiService.startWorkflow(_this.package.package_id);
            _this.router.navigate(['packages', _this.package.package_id, 'status']);
        });
    };
    PackageTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packageTemplate',
            template: __webpack_require__(/*! ./PackageTemplate.component.html */ "./src/app/PackageDetail/PackageTemplate.component.html"),
            styles: [__webpack_require__(/*! ./PackageTemplate.component.sass */ "./src/app/PackageDetail/PackageTemplate.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"]])
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

module.exports = "<navbar></navbar>\n\n<table class=\"table table-striped table-hover\" style=\"background-color: white;\">\n  <thead class=\"company-table-head\">\n    <tr>\n      <th>Name</th>\n      <th>Filename</th>\n      <th>Progress</th>\n      <th>\n        Status\n        <button class=\"refresh\" (click)=\"updateData()\"><i class=\"material-icons\">refresh</i></button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let package of packages\">\n      <td><a [routerLink]=\"[package.package_id]\">{{package.name}}</a></td>\n      <td>{{package.file_name}}</td>\n      <td>\n        <div class=\"progress border border-primary\">\n          <div\n            *ngFor=\"let process of package.processes\"\n            class=\"progress-bar text-dark text-center\"\n            [style.width]=\"process.progress/package.processes.length + '%'\"\n            [class.bg-success]=\"process.status == 'Done'\"\n            [class.bg-danger]=\"process.status == 'Error'\"\n            [class.progress-bar-animated]=\"process.status == 'Running'\"\n            [class.progress-bar-striped]=\"process.status == 'Running'\"\n            >\n          </div>\n        </div>\n      </td>\n      <td><a [routerLink]=\"[package.package_id, 'status']\">{{package.status}}</a></td>\n    </tr>\n  </tbody>\n\n</table>\n<div class=\"emptyList\" *ngIf=\"isListEmpty()\"  colspan=\"5\">\n  <p>\n    There are no packages\n    <br> Add pacakges to the packages folder an they will appear here\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/Packages/PackageList.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/Packages/PackageList.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emptyList {\n  height: 400px;\n  width: 100%;\n  background-color: #eee;\n  display: table;\n  padding: 0px 40px; }\n  .emptyList p {\n    display: table-cell;\n    vertical-align: middle;\n    color: #444; }\n  .table {\n  margin: 0; }\n"

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
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
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
    function PackageListComponent(apiService) {
        this.apiService = apiService;
        this.packages = [];
    }
    PackageListComponent.prototype.ngOnInit = function () {
        this.updateData();
    };
    PackageListComponent.prototype.updateData = function () {
        var _this = this;
        this.apiService.getPackages().subscribe(function (data) {
            _this.packages = data;
        }, function (error) {
            _this.packages = [];
        });
    };
    PackageListComponent.prototype.isListEmpty = function () {
        if (this.packages.length <= 0) {
            return true;
        }
        return false;
    };
    PackageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packages',
            template: __webpack_require__(/*! ./PackageList.component.html */ "./src/app/Packages/PackageList.component.html"),
            styles: [__webpack_require__(/*! ./PackageList.component.sass */ "./src/app/Packages/PackageList.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]])
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
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var packagesRoutes = [
    { path: 'packages', component: _Packages_component__WEBPACK_IMPORTED_MODULE_2__["PackagesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]], children: [
            { path: '', component: _PackageList_component__WEBPACK_IMPORTED_MODULE_3__["PackageListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }
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

var PackagesComponent = /** @class */ (function () {
    function PackagesComponent() {
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
/* harmony import */ var _Packages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Packages.component */ "./src/app/Packages/Packages.component.ts");
/* harmony import */ var _PackageList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PackageList.component */ "./src/app/Packages/PackageList.component.ts");
/* harmony import */ var _PackageDetail_Package_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PackageDetail/Package.module */ "./src/app/PackageDetail/Package.module.ts");
/* harmony import */ var _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Navbar/Navbar.module */ "./src/app/Components/Navbar/Navbar.module.ts");
/* harmony import */ var _Packages_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Packages-routing.module */ "./src/app/Packages/Packages-routing.module.ts");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// components


// modules



//services

var PackagesModule = /** @class */ (function () {
    function PackagesModule() {
    }
    PackagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _PackageDetail_Package_module__WEBPACK_IMPORTED_MODULE_5__["PackageModule"],
                _Packages_routing_module__WEBPACK_IMPORTED_MODULE_7__["PackagesRoutingModule"],
                _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_6__["NavbarModule"],
            ],
            declarations: [
                _Packages_component__WEBPACK_IMPORTED_MODULE_3__["PackagesComponent"],
                _PackageList_component__WEBPACK_IMPORTED_MODULE_4__["PackageListComponent"],
            ],
            providers: [_Services_api_service__WEBPACK_IMPORTED_MODULE_8__["APIService"]],
        })
    ], PackagesModule);
    return PackagesModule;
}());



/***/ }),

/***/ "./src/app/Services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Services/api.service.ts ***!
  \*****************************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
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


var APIService = /** @class */ (function () {
    function APIService(http) {
        this.http = http;
    }
    //Modules
    APIService.prototype.getModules = function () {
        return this.http.get('/api/module/');
    };
    APIService.prototype.createModule = function (data) {
        return this.http.put('/api/module/', data);
    };
    APIService.prototype.deleteModule = function (module_id) {
        return this.http.delete('/api/module/' + module_id + '/');
    };
    APIService.prototype.saveData = function (id, data) {
        return this.http.post('/api/module/' + id + '/', data);
    };
    APIService.prototype.importModule = function (formData) {
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', '/api/module/import/', formData, {
            reportProgress: true
        });
        return this.http.request(req);
    };
    //templates
    APIService.prototype.getTemplates = function () {
        return this.http.get('/api/template/');
    };
    APIService.prototype.getTemplate = function (id) {
        return this.http.get('/api/template/' + id + '/');
    };
    APIService.prototype.postTemplate = function (data) {
        return this.http.post('/api/template/', data);
    };
    APIService.prototype.deleteTemplate = function (template_id) {
        return this.http.delete('/api/template/' + template_id + '/');
    };
    APIService.prototype.setActiveTemplate = function (template_id, package_id, data) {
        return this.http.put('/api/template/' + template_id + '/package/' + package_id + '/', data);
    };
    //processes
    APIService.prototype.addProcess = function (process) {
        return this.http.post('/api/process/', process);
    };
    APIService.prototype.reorderTemplateProcesses = function (data, template_id) {
        return this.http.put('/api/template/' + template_id + '/process/', data);
    };
    APIService.prototype.reorderPackageProcesses = function (data, package_id) {
        return this.http.put('/api/package/' + package_id + '/process/', data);
    };
    APIService.prototype.deleteProcess = function (id) {
        return this.http.delete('/api/process/' + id + '/');
    };
    APIService.prototype.saveProcess = function (data, id) {
        return this.http.put('/api/process/' + id + '/', data);
    };
    APIService.prototype.getLogFile = function (path, process_id) {
        return this.http.get('/process/' + process_id + '/' + path, { responseType: 'text' });
    };
    //variables
    APIService.prototype.getVariables = function () {
        return this.http.get('/api/variables/global/');
    };
    APIService.prototype.setVariables = function (data) {
        return this.http.post('/api/variables/global/', data);
    };
    //stats
    APIService.prototype.getStatsDashboard = function () {
        return this.http.get('/api/stats/dashboard/');
    };
    //package
    APIService.prototype.getPackages = function () {
        return this.http.get('/api/package/');
    };
    APIService.prototype.getPackage = function (id) {
        return this.http.get('/api/package/' + id + '/');
    };
    APIService.prototype.removePackage = function (id) {
        return this.http.delete('/api/package/' + id + '/');
    };
    APIService.prototype.startWorkflow = function (package_id) {
        this.http.post('/api/package/' + package_id + '/execute/', {}).subscribe(function () {
        });
    };
    APIService.prototype.finishPackage = function (package_id) {
        this.http.post('/api/package/' + package_id + '/finish/', {}).subscribe(function () {
        });
    };
    //files
    APIService.prototype.getFiles = function (path, specific) {
        if (specific === void 0) { specific = ""; }
        return this.http.get(path + "?path=" + specific);
    };
    APIService.prototype.renameFile = function (path, body) {
        return this.http.put(path, body);
    };
    APIService.prototype.deleteFile = function (path, specific) {
        return this.http.delete(path + "?path=" + specific);
    };
    APIService.prototype.uploadFile = function (path, formData) {
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', path, formData, {});
        return this.http.request(req);
    };
    APIService.prototype.createFolder = function (path, specific) {
        return this.http.put(path, { 'path': specific });
    };
    //docker
    APIService.prototype.getDockerImages = function () {
        return this.http.get('/api/image/');
    };
    APIService.prototype.saveDockerImage = function (image_id, data) {
        return this.http.post('/api/image/' + image_id + '/', data);
    };
    APIService.prototype.importDockerImage = function (formData) {
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', '/api/image/import/', formData, {
            reportProgress: true
        });
        return this.http.request(req);
    };
    APIService.prototype.deleteDockerImage = function (image_id) {
        return this.http.delete('/api/image/' + image_id + '/');
    };
    APIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], APIService);
    return APIService;
}());



/***/ }),

/***/ "./src/app/Services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService, ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';

// import { AuthenticationService } from '../_services';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.username = "";
        this.token = "";
        this.permissions = [];
        this.permissionsLoaded = false;
        this.permissionClass = "";
        this.token = localStorage.getItem('access_token');
        this.username = localStorage.getItem('username');
        this.loadPermissions();
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('/auth/api-token-auth/', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            // login successful if there's a jwt token in the response
            if (res && res.token) {
                _this.token = res.token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('access_token', res.token);
                localStorage.setItem('username', username);
                _this.username = username;
                _this.loadToken();
                //get permission information.
                _this.loadPermissions();
            }
        }));
    };
    AuthenticationService.prototype.loadToken = function () {
        var base64Url = this.token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        this.payload = JSON.parse(window.atob(base64));
    };
    AuthenticationService.prototype.logout = function (navigate) {
        if (navigate === void 0) { navigate = true; }
        // console.log('sign out');
        // remove user from local storage to log user out
        localStorage.removeItem('access_token');
        localStorage.removeItem('username');
        //navigate to dashboard
        if (navigate) {
            this.router.navigate(['/login'], { queryParams: { message: "Sign out successful", type: "alert-success" } });
        }
    };
    AuthenticationService.prototype.getUsername = function () {
        return this.username;
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        if (localStorage.getItem('access_token')) {
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.loadPermissions = function () {
        var _this = this;
        // console.log('get Permission')
        if (!this.permissionsLoaded) {
            // console.log('get request')
            // console.log(this.permissionsLoaded);
            this.permissionsLoaded = true;
            if (this.token != "") {
                // console.log(this.token)
                setTimeout(function () {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                    headers.append('Authorization', 'JWT ' + _this.token);
                    _this.http.get('/api/permissions/', { headers: headers }).subscribe(function (data) {
                        // console.log(data);
                        if (data != null && data['admin']) {
                            _this.permissionClass = "admin";
                        }
                        else {
                            _this.permissionClass = 'none';
                        }
                    });
                }, 100);
            }
        }
    };
    AuthenticationService.prototype.getRequestPermissions = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Authorization', 'JWT ' + this.token);
        return this.http.get('/api/permissions/', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            // console.log(data);
            if (data != null && data['admin']) {
                _this.permissionClass = "admin";
            }
            else {
                _this.permissionClass = 'none';
            }
            return data;
        }));
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());

var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService, router, route) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // console.log('intercept 401')
                // auto logout if 401 response returned from api
                _this.authenticationService.logout(false);
                _this.router.navigate(['/login'], { queryParams: { message: "Session has expired, please sign in again", type: "alert-danger", returnUrl: _this.router.url } });
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [AuthenticationService, _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/Services/package.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/package.service.ts ***!
  \*********************************************/
/*! exports provided: PackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageService", function() { return PackageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
//music.service.ts

var PackageService = /** @class */ (function () {
    function PackageService() {
        this.packageEmitter$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PackageService.prototype.updatePackageData = function (packageData) {
        this.packageEmitter$.emit(packageData);
    };
    return PackageService;
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _Admin_Admin_routing_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Admin/Admin-routing.routes */ "./src/app/Admin/Admin-routing.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
].concat(_Admin_Admin_routing_routes__WEBPACK_IMPORTED_MODULE_5__["adminRoutes"], [
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

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <!-- A sidebar with global navigation -->\n    <nav class=\"col-md-2 d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"nav flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"dashboard\">\n                  <i class=\"material-icons\">dashboard</i>\n                  Dashboard\n                </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"packages\">\n                  <i class=\"material-icons\">pages</i>\n                  Packages\n                </a>\n          </li>\n        </ul>\n\n        <h6 *ngIf=\"authClass == 'admin'\" class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n              <span>Admin</span>\n              <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n                <span data-feather=\"plus-circle\"></span>\n              </a>\n            </h6>\n        <ul class=\"nav flex-column mb-2\" *ngIf=\"authClass == 'admin'\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"admin/modules\">\n                  <i class=\"material-icons\">category</i>\n                  Tools\n                </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"admin/global\">\n                  <i class=\"material-icons\">tune</i>\n                  Global Settings\n                </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"admin/templates\">\n                  <i class=\"material-icons\">format_list_numbered</i>\n                  Templates\n                </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"admin/images\">\n                  <i class=\"material-icons\">view_list</i>\n                  Docker images\n                </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n    <!-- Main window, all content will be located inside <router-outlet> -->\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4 main-view\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.card {\n  margin-bottom: 10px; }\n\n.icon-small {\n  font-size: 1em; }\n\nbody {\n  font-size: 0.875rem; }\n\n/* Sidebar */\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  padding: 48px 0 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n  width: 220px;\n  max-width: 220px; }\n\n.sidebar-sticky {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky; } }\n\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333; }\n\n.sidebar .nav-link.active {\n    color: #bc044e;\n    background-color: #cbcbcb; }\n\n.sidebar .nav-link:hover {\n    background-color: #dddddd; }\n\n.sidebar .nav-link:hover .active,\n.sidebar .nav-link.active .active {\n  color: inherit; }\n\n.sidebar-heading {\n  font-size: 0.75rem;\n  text-transform: uppercase; }\n\n/* Content */\n\n[role=\"main\"] {\n  padding-top: 48px; }\n\n/* Navbar */\n\n/* .navbar-brand\n * padding-top: .75rem\n * padding-bottom: .75rem\n * font-size: 1rem\n * margin: 0\n * margin-top: -10px\n * background-color: rgba(0, 0, 0, .75)\n * box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25) */\n\n.navbar-brand a {\n  color: white; }\n\n.navbar .form-control {\n  padding: 0.75rem 1rem;\n  border-width: 0;\n  border-radius: 0; }\n\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25); }\n\n/* Utilities */\n\n.material-icons {\n  float: left;\n  margin-right: 20px; }\n\n.main-view {\n  /* margin-left: 220px */\n  width: calc(100% - 220px);\n  min-width: calc(100% - 220px);\n  max-width: calc(100% - 220px);\n  float: left; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/authentication.service */ "./src/app/Services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.authClass = 'none';
        this.authClass = 'none';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            _this.authService.getRequestPermissions().subscribe(function (res) {
                _this.authClass = _this.authService.permissionClass;
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dashboard/Dashboard.component */ "./src/app/Dashboard/Dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _Dashboard_combo_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Dashboard/combo-chart.component */ "./src/app/Dashboard/combo-chart.component.ts");
/* harmony import */ var _NotFound_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NotFound.component */ "./src/app/NotFound.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _Packages_Packages_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Packages/Packages.module */ "./src/app/Packages/Packages.module.ts");
/* harmony import */ var _Admin_Admin_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Admin/Admin.module */ "./src/app/Admin/Admin.module.ts");
/* harmony import */ var _Components_Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/Tooltip/Tooltip.module */ "./src/app/Components/Tooltip/Tooltip.module.ts");
/* harmony import */ var _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/Navbar/Navbar.module */ "./src/app/Components/Navbar/Navbar.module.ts");
/* harmony import */ var _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/Message/Message.module */ "./src/app/Components/Message/Message.module.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Services/authentication.service */ "./src/app/Services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// JWT authentication

function tokenGetter() {
    // console.log('getting access token')
    return localStorage.getItem('access_token');
}













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _Dashboard_combo_chart_component__WEBPACK_IMPORTED_MODULE_9__["ComboChartComponent"],
                _NotFound_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost'],
                        blacklistedRoutes: ['localhost/auth/'],
                        authScheme: 'JWT '
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NgxChartsModule"],
                _Components_Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"],
                _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_16__["NavbarModule"],
                _Packages_Packages_module__WEBPACK_IMPORTED_MODULE_13__["PackagesModule"],
                _Admin_Admin_module__WEBPACK_IMPORTED_MODULE_14__["AdminModule"],
                _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_17__["MessageModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["ErrorInterceptor"],
                    multi: true
                },
                _Services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { map } from 'rxjs/operators';

// import { of } from 'rxjs/operators';
// import { of } from 'rxjs/observable/of';
// import { of } from 'rxjs/observable/of'
var AdminGuard = /** @class */ (function () {
    function AdminGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.getRequestPermissions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log(data);
            if (data['admin']) {
                return true;
            }
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url, message: "You need to have admin permissions to access this" } });
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url, message: "You need to have admin permissions to access this" } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
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
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
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


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log(localStorage.getItem('access_token'));
        if (localStorage.getItem('access_token')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n\n<message [(active)]=\"modalActive\" [type]=\"modalType\">{{modalMessage}}</message>\n\n<h1>Sign in</h1>\n\n<div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <!-- <h5 class=\"card-title\">Login</h5> -->\n    <label for=\"username\">Username</label>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      id=\"username\"\n      placeholder=\"Username\"\n      [(ngModel)]=\"username\"\n      [class.is-invalid]=\"usernameError != ''\"\n      >\n      <div class=\"invalid-feedback\" *ngIf=\"usernameError != ''\">\n        {{usernameError}}\n      </div>\n    <label for=\"username\">Password</label>\n    <input\n      type=\"password\"\n      class=\"form-control\"\n      id=\"password\"\n      placeholder=\"Password\"\n      [(ngModel)]=\"password\"\n      [class.is-invalid]=\"passwordError != ''\"\n      >\n      <div class=\"invalid-feedback\" *ngIf=\"passwordError != ''\">\n        {{usernameError}}\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"login()\">Sign in</button>\n  </div>\n</div>\n<!--\n<form class=\"col-xs-3\">\n  <label for=\"username\">Username</label>\n  <input\n    type=\"text\"\n    class=\"form-control\"\n    id=\"username\"\n    placeholder=\"Username\"\n    [value]=\"username\"\n    >\n  <label for=\"username\">Password</label>\n  <input\n    type=\"password\"\n    class=\"form-control\"\n    id=\"password\"\n    placeholder=\"Password\"\n    [value]=\"password\"\n    >\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n</form> -->\n\n<!-- <form class=\"form-signin\">\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n      </form> -->\n\n<!-- <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n    </div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n</form> -->\n"

/***/ }),

/***/ "./src/app/login/login.component.sass":
/*!********************************************!*\
  !*** ./src/app/login/login.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee; }\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\nbutton.btn {\n  margin: 2px; }\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px; }\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white; }\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.card {\n  margin-bottom: 10px; }\n\n.icon-small {\n  font-size: 1em; }\n\n.numberRow {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 10px; }\n\n.numberTitle {\n  margin: 0; }\n\n.divider::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  height: 52px;\n  border-left: 2px solid rgba(188, 4, 78, 0.5);\n  margin-top: 10px; }\n\n.number {\n  font-size: 2em;\n  font-weight: bold;\n  margin: 0;\n  opacity: 0.5; }\n\n.number.errors {\n    color: red; }\n\n.half-graph {\n  margin: 0;\n  margin-bottom: 10px; }\n\n.half-graph .card {\n    padding-right: 40px; }\n\n.half-graph .card .card-body {\n      height: 200px;\n      padding: 0; }\n\n.filetypes {\n  height: 300px;\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, route, authService, router) {
        this.apiService = apiService;
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.username = "";
        this.password = "";
        this.usernameError = "";
        this.passwordError = "";
        this.modalActive = false;
        this.modalMessage = "";
        this.modalType = "alert-success";
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if ('message' in params) {
                _this.modalMessage = params['message'];
                _this.modalActive = true;
                if ('type' in params) {
                    _this.modalType = params['type'];
                }
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
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
        this.authService.login(this.username, this.password).subscribe(function (data) {
            //redirect to returnUrl
            _this.route.queryParams.subscribe(function (params) {
                if ('returnUrl' in params) {
                    _this.router.navigate([params['returnUrl']]);
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        }, function (error) {
            //display error
            _this.modalMessage = "Wrong username or password";
            _this.modalActive = true;
            _this.modalType = "alert-danger";
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/login/login.component.sass")]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
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

module.exports = __webpack_require__(/*! /Users/Axenu/Sydarkivera/SAWorkflow/Angular6/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map