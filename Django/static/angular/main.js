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

/***/ "./src/app/Admin/Admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/Admin/Admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-label {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/Admin/Admin.component.html":
/*!********************************************!*\
  !*** ./src/app/Admin/Admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\" data-query=\"view(Mooo)\">\n    <p>Admin</p>\n    <h4>Existing processes</h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Name\n      </div>\n      <div class=\"list-group list-group-flush\">\n        <div *ngFor=\"let module of modules\" class=\"list-group-item list-group-item-action\" (click)=\"selectModule(module)\">\n          <div class=\"d-flex w-100 justify-content-between\">\n            <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\" *ngIf=\"selected_module\">\n    <h4>{{selected_module.name}} preview</h4>\n      <label *ngFor=\"let input of selected_module.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n        {{input.label}}\n        <!-- <input type=\"text\" *ngIf=\"input.type=='text'\" [id]=\"input.identifier\" [value]=\"process.values[input.identifier]\" (keyup)=\"setProcessValue(input.identifier, $event.target.value)\" (change)=\"setProcessValue(input.identifier, $event.target.value)\"/> -->\n        <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"input.default\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n      </label>\n      <h5>Command Settings:</h5>\n      <p>Hidden: {{selected_module.hidden}}</p>\n      <p>Type: {{selected_module.type}}</p>\n      <p *ngIf=\"selected_module.type == 'Command'\">Command: {{renderCommand()}}</p>\n      <p *ngIf=\"selected_module.type == 'Python module'\">Python Module: {{selected_module.python_module}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Admin/Admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/Admin/Admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _PackageDetail_PackageDetail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PackageDetail/PackageDetail.service */ "./src/app/PackageDetail/PackageDetail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(packageService) {
        this.packageService = packageService;
        this.selected_module = undefined;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.packageService.getModules().subscribe(function (data) {
            _this.modules = data;
        });
    };
    AdminComponent.prototype.selectModule = function (mod) {
        if (!this.selected_module || this.selected_module.module_id != mod.module_id) {
            this.selected_module = mod;
            console.log(mod);
        }
        else {
            this.selected_module = undefined;
        }
    };
    AdminComponent.prototype.renderCommand = function () {
        var res = '';
        for (var _i = 0, _a = this.selected_module.command; _i < _a.length; _i++) {
            var cp = _a[_i];
            res += cp.value + ' ';
        }
        return res;
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./Admin.component.html */ "./src/app/Admin/Admin.component.html"),
            styles: [__webpack_require__(/*! ./Admin.component.css */ "./src/app/Admin/Admin.component.css")]
        }),
        __metadata("design:paramtypes", [_PackageDetail_PackageDetail_service__WEBPACK_IMPORTED_MODULE_1__["PackageDetailService"]])
    ], AdminComponent);
    return AdminComponent;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
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
        this.files = [];
    }
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

module.exports = "\n<div class=\"file-header\" (click)=\"expanded = !expanded\">\n  <ng-template [ngIf]=\"file.type == 'folder'\">\n    <i *ngIf=\"!expanded\" class=\"material-icons file-float\">arrow_right</i>\n    <i *ngIf=\"expanded\" class=\"material-icons file-float\">arrow_drop_down</i>\n  </ng-template>\n  <p class=\"file-float\">{{file.name}}</p>\n</div>\n<div *ngIf=\"expanded\" class=\"file-children\">\n  <!-- <div *ngFor=\"let file of file.children\"> -->\n    <file *ngFor=\"let f of file.children\" [file]=\"f\"></file>\n  <!-- </div> -->\n</div>\n"

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

module.exports = ".icon-button:hover {\n  background-color: #b5b5b5;\n    border-radius: 2px;\n    color: white;\n}\n\n.input-label {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/PackageDetail/Package.component.html":
/*!******************************************************!*\
  !*** ./src/app/PackageDetail/Package.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h4>Current workflow</h4>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Name\n            </div>\n            <div class=\"list-group list-group-flush\">\n              <!-- <div *ngIf=\"placeholderLocation==0.5\" class=\"list-group-item list-group-item-action\">\n              </div> -->\n                <div\n                  *ngFor=\"let process of package.processes\"\n                  draggable=\"true\"\n                  (dragstart)=\"dragStart($event, process.process_id, 'process')\"\n                  (drop)=\"onDrop($event)\"\n                  (dragover)=\"allowDrop($event, process.order)\"\n                  class=\"list-group-item list-group-item-action\"\n                  [class.active]=\"process.process_id==selected_process_id\"\n                  if.bind=\"!process.hidden\"\n                >\n                    <div class=\"d-flex w-100 justify-content-between\">\n                        <p\n                        style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectProcess(process)\">\n                          {{process.name}}\n                        </p>\n                        <!-- <i class=\"material-icons\">arrow_back</i> -->\n                        <i *ngIf=\"process.order != 0\" class=\"material-icons icon-button\" (click)=\"moveUp(process)\">keyboard_arrow_up</i>\n                        <i *ngIf=\"process.order < package.processes.length-1\" class=\"material-icons icon-button\" (click)=\"moveDown(process)\">keyboard_arrow_down</i>\n                        <i class=\"material-icons icon-button\" (click)=\"deleteProcess(process.process_id)\">delete</i>\n                        <small>{{process.status}}</small>\n                    </div>\n                    <ng-template [ngIf]=\"process.process_id==selected_process_id\">\n                        <form *ngIf=\"process.form.length>0\">\n                                <label *ngFor=\"let input of process.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n                                  {{input.label}}\n                                  <!-- <input type=\"text\" *ngIf=\"input.type=='text'\" [id]=\"input.identifier\" [value]=\"process.values[input.identifier]\" (keyup)=\"setProcessValue(input.identifier, $event.target.value)\" (change)=\"setProcessValue(input.identifier, $event.target.value)\"/> -->\n                                  <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"process.value[input.identifier]\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n                                  <button class=\"btn\" (click)=\"openFileBrowser()\">Files: All</button>\n                                </label>\n                        </form>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\" data-query=\"view(Mooo)\">\n        <h4>Avaliable processes</h4>\n        <div class=\"card\">\n             <div class=\"card-header\">\n                Name\n             </div>\n             <div class=\"list-group list-group-flush\" data-query=\"each(modules)\">\n                 <div *ngFor=\"let module of modules\" draggable=\"true\" (dragstart)=\"dragStart($event, module.module_id, 'module')\" (dragend)=\"onRelease($event)\" class=\"list-group-item list-group-item-action\">\n                   <div *ngIf=\"!module.hidden\" class=\"d-flex w-100 justify-content-between\">\n                    <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n                    <i class=\"material-icons icon-button\" (click)=\"addProcessLast(module.module_id)\">add</i>\n                   </div>\n                </div>\n             </div>\n        </div>\n    </div>\n</div>\n<button class=\"btn btn-success float-right\" (click)=\"startWorkflow()\">Start</button>\n\n<button class=\"btn\" (click)=\"FileBrowserOpen = !FileBrowserOpen\">Files: All</button>\n<FileBrowser [(active)]=\"FileBrowserOpen\" [package_id]=\"id\"> </FileBrowser>\n"

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
    PackageComponent.prototype.deleteProcess = function (id) {
        this.packageService.deleteProcess(id).subscribe(function (data) {
        });
        this.package.processes = this.package.processes.filter(function (item) {
            return item.process_id != id;
        });
        // this.client.fetch('/api/process/'+id+'/', {
        //     method: "DELETE",
        // })
        // this.package.processes.splice(id, 1);
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
    PackageComponent.prototype.dragStart = function (e, id, type) {
        console.log('drag start: ' + e);
        // console.log(id);
        e.dataTransfer.setData('id', id);
        e.dataTransfer.setData('type', type);
    };
    PackageComponent.prototype.onDrop = function (e) {
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
                "name": "added module"
            };
            this.package.processes.splice(dropOrder, 0, newProcess);
            this.packageService.addProcess({ "order": dropOrder, "module": e.dataTransfer.getData('id'), "package": this.package.package_id }).subscribe(function (data) {
                console.log(data);
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
                var temp = { type: "placeholder", order: ind };
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
                var temp = { type: "placeholder", order: ind };
                this.package.processes.splice(index, 0, temp);
            }
        }
        // console.log(element.offsetHeight);
        // e.preventDefault();
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
/* harmony import */ var _PackageHeader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PackageHeader.component */ "./src/app/PackageDetail/PackageHeader.component.ts");
/* harmony import */ var _PackageDetail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PackageDetail.service */ "./src/app/PackageDetail/PackageDetail.service.ts");
/* harmony import */ var _FileBrowser_FileBrowser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FileBrowser/FileBrowser.component */ "./src/app/FileBrowser/FileBrowser.component.ts");
/* harmony import */ var _FileBrowser_File_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FileBrowser/File.component */ "./src/app/FileBrowser/File.component.ts");
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
            ],
            declarations: [
                _Package_component__WEBPACK_IMPORTED_MODULE_5__["PackageComponent"],
                _PackageDashboard_component__WEBPACK_IMPORTED_MODULE_6__["PackageDashboardComponent"],
                _PackageHeader_component__WEBPACK_IMPORTED_MODULE_8__["PackageHeaderComponent"],
                _PackageStatus_component__WEBPACK_IMPORTED_MODULE_7__["PackageStatusComponent"],
                _FileBrowser_FileBrowser_component__WEBPACK_IMPORTED_MODULE_10__["FileBrowserComponent"],
                _FileBrowser_File_component__WEBPACK_IMPORTED_MODULE_11__["FileComponent"]
            ],
            // bootstrap: [PackageHeaderComponent] s
            providers: [_PackageDetail_service__WEBPACK_IMPORTED_MODULE_9__["PackageDetailService"]],
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

module.exports = "<p>Package Dashboard</p>\n<ngx-charts-pie-chart\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"single\"\n  [legend]=\"showLegend\"\n  [explodeSlices]=\"explodeSlices\"\n  [labels]=\"showLabels\"\n  [doughnut]=\"doughnut\"\n  [gradient]=\"gradient\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-pie-chart>\n<ngx-charts-gauge\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"single\"\n  [min]=\"0\"\n  [max]=\"100\"\n  [angleSpan]=\"240\"\n  [startAngle]=\"-120\"\n  [units]=\"'alerts'\"\n  [bigSegments]=\"10\"\n  [smallSegments]=\"5\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-gauge>\n"

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
var PackageDashboardComponent = /** @class */ (function () {
    function PackageDashboardComponent() {
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
    PackageDashboardComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    PackageDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packageDashboard',
            template: __webpack_require__(/*! ./PackageDashboard.component.html */ "./src/app/PackageDetail/PackageDashboard.component.html"),
            styles: [__webpack_require__(/*! ./PackageDashboard.component.css */ "./src/app/PackageDetail/PackageDashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
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




var packageRoutes = [
    { path: ':id', component: _PackageHeader_component__WEBPACK_IMPORTED_MODULE_1__["PackageHeaderComponent"], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: _PackageDashboard_component__WEBPACK_IMPORTED_MODULE_2__["PackageDashboardComponent"] },
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
    PackageDetailService.prototype.getPackage = function (id) {
        return this.http.get(this.packagesURL + id + '/');
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

module.exports = "<!-- <p>PackageHeader</p> -->\n<ul class=\"nav nav-tabs\"><li class=\"nav-link\"  routerLinkActive=\"active\">\n  <a class=\"navbar-link\">{{name}}</a>\n</li>\n  <li class=\"nav-link\"  routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['dashboard']\">Dashboard</a>\n  </li>\n  <li class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['edit']\">Workflow</a>\n  </li>\n  <li class=\"nav-link\" routerLinkActive=\"active\">\n    <a class=\"navbar-link\" [routerLink]=\"['status']\">Status</a>\n  </li>\n</ul>\n<router-outlet></router-outlet>\n"

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
    function PackageHeaderComponent(packageService, route) {
        this.packageService = packageService;
        this.route = route;
        this.title = 'new title';
        this.name = "";
    }
    PackageHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.packageService.getPackage(_this.id).subscribe(function (data) {
                // console.log(data);
                // this.package = data;
                _this.name = data['name'];
            });
        });
    };
    PackageHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'package',
            template: __webpack_require__(/*! ./PackageHeader.component.html */ "./src/app/PackageDetail/PackageHeader.component.html"),
        }),
        __metadata("design:paramtypes", [_PackageDetail_service__WEBPACK_IMPORTED_MODULE_2__["PackageDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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

module.exports = ".Amodal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  /* width: 80%; */\n  max-width: 100%;\n  height: 98%;\n  max-height: 100%;\n  /* overflow-y: scroll; */\n  /* background-color: white; */\n}\n\n.Amodal.active {\n  display: block !important;\n}\n\n.modal-dialog,\n.modal-content {\n    /* 80% of window height */\n    height: 95%;\n}\n\n.modal-body {\n    /* 100% = dialog height, 120px = header + footer */\n    /* max-height: calc(100% + 120px); */\n    overflow-y: scroll;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px; */\n  float:right;\n  color: inherit;\n}\n"

/***/ }),

/***/ "./src/app/PackageDetail/PackageStatus.component.html":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageStatus.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n     <div class=\"card-header\">\n         <div class=\"row justify-content-end\">\n             <div class=\"col\">\n                Name\n             </div>\n             <div class=\"col\">\n                Statusbar\n             </div>\n             <div class=\"col-sm-2\">\n                Status\n             </div>\n             <div class=\"col-sm-2\">\n                Log\n             </div>\n             <div class=\"col-sm-2\">\n                Error\n                <!-- <a href=\"#\" click=\"updateData()\" class=\"tab\"><i class=\"material-icons\">refresh</i></a> -->\n                <button class=\"refresh\" (click)=\"updateData()\"><i class=\"material-icons\">refresh</i></button>\n             </div>\n         </div>\n     </div>\n     <div class=\"list-group list-group-flush\">\n         <div style=\"padding-left:0;padding-right:0;\" *ngFor=\"let process of package.processes\" repeat.for=\"process of processes\" class=\"list-group-item list-group-item-action\">\n             <div class=\"col\">\n                {{process.name}} {{process.hidden ? '(Hidden)' : ''}}\n            </div>\n            <div class=\"col\">\n               Statusbar\n            </div>\n            <div class=\"col-sm-2\">\n               {{process.status}}\n            </div>\n            <div class=\"col-sm-2\">\n               <!-- <a (click)=\"showModal(process)\" [class.disabled]=\"process.log_path == ''\">view log</a> -->\n               <button class=\"btn btn-outline-primary\" (click)=\"showModal(process, 'info_log')\" [disabled]=\"process.log_path == ''\">Info</button>\n            </div>\n            <div class=\"col-sm-2\">\n                <!-- <a href=\"/process/${process.process_id}/error_log\" [class.disabled]=\"process.log_path == ''\">view error log</a> -->\n                <button class=\"btn btn-outline-danger\" (click)=\"showModal(process, 'error_log')\" [disabled]=\"process.err_path == ''\">Error</button>\n            </div>\n        </div>\n     </div>\n</div>\n<button class=\"btn btn-success float-right\" (click)=\"startWorkflow()\">Starta</button>\n<button class=\"btn btn-danger float-right\" (click)=\"removePackage()\">Done (Remove package from workdir)</button>\n\n\n\n<div class=\"modal Amodal\" [class.active]=\"modalActive\" id=\"modal\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n        <button type=\"button\" class=\"close\" (click)=\"modalActive=false\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        {{modalData}}\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalActive=false\">Close</button>\n        <!-- <button type=\"button\" class=\"btn btn-primary\">Save changes</button> -->\n      </div>\n    </div>\n  </div>\n</div>\n"

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
        this.packageService = packageService;
        this.route = route;
        this.router = router;
        this.logActive = true;
        this.modalActive = false;
        this.modalData = '';
        this.package = {
            name: "Name"
        };
    }
    PackageStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.updateData();
        });
    };
    PackageStatusComponent.prototype.showModal = function (process, type) {
        var _this = this;
        this.modalActive = true;
        //load data fromserver...
        this.packageService.getLogFile(type, process.process_id).subscribe(function (data) {
            console.log(data);
            _this.modalData = data;
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
            console.log(data);
            _this.package = data;
        });
    };
    PackageStatusComponent.prototype.removePackage = function () {
        this.packageService.removePackage(this.id).subscribe(function (data) {
            console.log(data);
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

/***/ "./src/app/Packages/PackageList.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Packages/PackageList.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Packages</p>\n<div class=\"card\">\n     <div class=\"card-header\">\n         <div class=\"row\">\n             <div class=\"col\">\n                Namn\n             </div>\n             <div class=\"col\">\n                Filnamn\n             </div>\n             <div class=\"col-sm-1\">\n                Status\n             </div>\n         </div>\n     </div>\n     <div class=\"list-group list-group-flush\">\n         <div style=\"padding-left:0;padding-right:0;\" *ngFor=\"let package of packages\" class=\"list-group-item list-group-item-action\">\n             <div class=\"col\">\n                <a [routerLink]=\"[package.package_id]\">{{package.name}}</a>\n            </div>\n            <div class=\"col\">\n                {{package.file_name}}\n            </div>\n            <div class=\"col-sm-1\">\n                <a [routerLink]=\"[package.package_id, 'status']\">{{package.status}}</a>\n            </div>\n        </div>\n     </div>\n</div>\n"

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
    PackageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packages',
            template: __webpack_require__(/*! ./PackageList.component.html */ "./src/app/Packages/PackageList.component.html"),
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
/* harmony import */ var _Admin_Admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Admin/Admin.component */ "./src/app/Admin/Admin.component.ts");
/* harmony import */ var _NotFound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFound.component */ "./src/app/NotFound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { PackagesComponent } from './Packages/packages.component';



var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // { path: 'Packages', component: PackagesComponent },
    { path: 'dashboard', component: _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'admin', component: _Admin_Admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
    { path: '**', component: _NotFound_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Packages_Packages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Packages/Packages.module */ "./src/app/Packages/Packages.module.ts");
/* harmony import */ var _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dashboard/Dashboard.component */ "./src/app/Dashboard/Dashboard.component.ts");
/* harmony import */ var _NotFound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NotFound.component */ "./src/app/NotFound.component.ts");
/* harmony import */ var _Admin_Admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Admin/Admin.component */ "./src/app/Admin/Admin.component.ts");
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




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // FileBrowserComponent,
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _NotFound_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _Admin_Admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                // DndListModule,
                // NgxDnDModule,
                // DragulaModule,
                // DragDropDirectiveModule,
                _Packages_Packages_module__WEBPACK_IMPORTED_MODULE_7__["PackagesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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