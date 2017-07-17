define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBQ0UsWUFBTyxHQUFHLGNBQWMsQ0FBQztRQUMzQixDQUFDO1FBQUQsVUFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcCB7XG4gIG1lc3NhZ2UgPSAnSGVsbG8gV29ybGQhJztcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

/*! Copyright 2017 Axenu */
define('index',["require", "exports", "aurelia-fetch-client"], function (require, exports, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function () {
        function Index() {
            var _this = this;
            this.title = 'S.A.W';
            this.description = 'Välj ett paket att administrera';
            this.packages = [];
            var client = new aurelia_fetch_client_1.HttpClient();
            client.fetch('/api/package/')
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.packages = data;
            });
        }
        Index.prototype.gotoPackageConfig = function (archive_package) {
            window.location.href = "/package/" + archive_package + "/";
        };
        return Index;
    }());
    exports.Index = Index;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjs7OztJQUkzQjtRQUtJO1lBQUEsaUJBUUM7WUFaRCxVQUFLLEdBQUMsT0FBTyxDQUFDO1lBQ2QsZ0JBQVcsR0FBQyxpQ0FBaUMsQ0FBQztZQUM5QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1lBR1YsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQ0FBVSxFQUFFLENBQUM7WUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7aUJBQ3hCLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxVQUFBLElBQUk7Z0JBRU4sS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDO1FBRUQsaUNBQWlCLEdBQWpCLFVBQWtCLGVBQWU7WUFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7UUFDM0QsQ0FBQztRQUVMLFlBQUM7SUFBRCxDQW5CQSxBQW1CQyxJQUFBO0lBbkJZLHNCQUFLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIENvcHlyaWdodCAyMDE3IEF4ZW51ICovXG5cbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuXG5leHBvcnQgY2xhc3MgSW5kZXgge1xuICAgIHRpdGxlPSdTLkEuVyc7XG4gICAgZGVzY3JpcHRpb249J1bDpGxqIGV0dCBwYWtldCBhdHQgYWRtaW5pc3RyZXJhJztcbiAgICBwYWNrYWdlcyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuICAgICAgICBjbGllbnQuZmV0Y2goJy9hcGkvcGFja2FnZS8nKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWNrYWdlcyA9IGRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb3RvUGFja2FnZUNvbmZpZyhhcmNoaXZlX3BhY2thZ2UpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wYWNrYWdlL1wiK2FyY2hpdmVfcGFja2FnZStcIi9cIjtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

/*! Copyright 2017 Axenu */
define('packageAdmin',["require", "exports", "aurelia-fetch-client"], function (require, exports, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PackageAdmin = (function () {
        function PackageAdmin() {
            var _this = this;
            this.title = 'S.A.W';
            this.description = 'Välj vilka moduler som ska köras';
            this.processes = [];
            this.modules = [];
            this.package = {};
            this.selected_module = 0;
            this.selected_process = 0;
            this.active_process_values = { 'filename': 'name' };
            this.process_has_changed = false;
            this.client = new aurelia_fetch_client_1.HttpClient();
            this.client = new aurelia_fetch_client_1.HttpClient();
            this.client.fetch('/api/package/' + package_id + '/')
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.package = data;
                _this.processes = data["processes"];
            });
            this.client.fetch('/api/module/')
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.modules = data;
            });
        }
        PackageAdmin.prototype.clickProcess = function (process) {
            if (this.selected_process == process.process_id) {
                this.selected_process = 0;
            }
            else {
                this.selected_process = process.process_id;
                this.active_process_values = process.value;
            }
        };
        PackageAdmin.prototype.clickModule = function (module) {
            if (this.selected_module == module.module_id) {
                this.selected_module = 0;
            }
            else {
                this.selected_module = module.module_id;
            }
        };
        PackageAdmin.prototype.addModule = function (module) {
            var _this = this;
            var data = { "module": module.module_id, "package": package_id };
            if (this.processes.length > 0) {
                data['order'] = this.processes[this.processes.length - 1].order + 1;
            }
            else {
                data['order'] = 0;
            }
            this.client.fetch('/api/process/', {
                method: "POST",
                body: aurelia_fetch_client_1.json(data),
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.processes = data;
            });
        };
        PackageAdmin.prototype.setProcessValue = function (identifier, value) {
            this.active_process_values[identifier] = value;
            this.process_has_changed = true;
        };
        PackageAdmin.prototype.saveProcess = function (index) {
            var _this = this;
            if (this.process_has_changed) {
                var val = { 'value': this.active_process_values };
                this.client.fetch('/api/process/' + this.selected_process + '/', {
                    method: "PUT",
                    body: aurelia_fetch_client_1.json(val),
                }).then(function (response) { return response.json(); })
                    .then(function (data) {
                    _this.processes.splice(index, 1, data);
                });
                this.process_has_changed = false;
                this.selected_process = 0;
            }
        };
        PackageAdmin.prototype.execute = function () {
            this.client.fetch('/package/' + package_id + '/execute/', {
                method: "POST",
            });
            window.location.href = "/package/" + package_id + "/status/";
        };
        PackageAdmin.prototype.moveUp = function (processindex) {
            var p1 = this.processes[processindex - 1];
            var p2 = this.processes[processindex];
            var temp = p1.order;
            p1.order = p2.order;
            p2.order = temp;
            this.processes.sort(function (a, b) {
                return a.order - b.order;
            });
            var data = [{ "order": p2.order, "process_id": p2.process_id }, { "order": p1.order, "process_id": p1.process_id }];
            this.client.fetch('/api/package/' + package_id + '/process/', {
                method: "PUT",
                body: aurelia_fetch_client_1.json(data)
            });
        };
        PackageAdmin.prototype.moveDown = function (processindex) {
            var p1 = this.processes[processindex + 1];
            var p2 = this.processes[processindex];
            var temp = p1.order;
            p1.order = p2.order;
            p2.order = temp;
            this.processes.sort(function (a, b) {
                return a.order - b.order;
            });
            var data = [{ "order": p1.order, "process_id": p1.process_id }, { "order": p2.order, "process_id": p2.process_id }];
            this.client.fetch('/api/package/' + package_id + '/process/', {
                method: "PUT",
                body: aurelia_fetch_client_1.json(data)
            });
        };
        PackageAdmin.prototype.removeProcess = function (processindex) {
            this.client.fetch('/api/process/' + this.processes[processindex].process_id + '/', {
                method: "DELETE",
            });
            this.processes.splice(processindex, 1);
        };
        return PackageAdmin;
    }());
    exports.PackageAdmin = PackageAdmin;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RUQsb0NBQWEsR0FBYixVQUFjLFlBQVk7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxHQUFDLEdBQUcsRUFBRTtnQkFDM0UsTUFBTSxFQUFFLFFBQVE7YUFDbkIsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFDTCxtQkFBQztJQUFELENBcklBLEFBcUlDLElBQUE7SUFySVksb0NBQVkiLCJmaWxlIjoicGFja2FnZUFkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIENvcHlyaWdodCAyMDE3IEF4ZW51ICovXG5cbmltcG9ydCB7SHR0cENsaWVudCwganNvbn0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuXG5kZWNsYXJlIHZhciBwYWNrYWdlX2lkOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBQYWNrYWdlQWRtaW4ge1xuICAgIHRpdGxlPSdTLkEuVyc7XG4gICAgZGVzY3JpcHRpb249J1bDpGxqIHZpbGthIG1vZHVsZXIgc29tIHNrYSBrw7ZyYXMnO1xuICAgIHByb2Nlc3NlcyA9IFtdO1xuICAgIG1vZHVsZXMgPSBbXTtcbiAgICBwYWNrYWdlID0ge307XG4gICAgc2VsZWN0ZWRfbW9kdWxlID0gMDtcbiAgICBzZWxlY3RlZF9wcm9jZXNzID0gMDtcbiAgICBhY3RpdmVfcHJvY2Vzc192YWx1ZXMgPSB7J2ZpbGVuYW1lJzonbmFtZSd9O1xuICAgIHByb2Nlc3NfaGFzX2NoYW5nZWQgPSBmYWxzZTtcbiAgICBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcbiAgICAgICAgdGhpcy5jbGllbnQuZmV0Y2goJy9hcGkvcGFja2FnZS8nK3BhY2thZ2VfaWQrJy8nKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWNrYWdlID0gZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NlcyA9IGRhdGFbXCJwcm9jZXNzZXNcIl07XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9jZXNzZXMgPSBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xpZW50LmZldGNoKCcvYXBpL21vZHVsZS8nKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVzID0gZGF0YTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xpY2tQcm9jZXNzKHByb2Nlc3MpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfcHJvY2VzcyA9PSBwcm9jZXNzLnByb2Nlc3NfaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfcHJvY2VzcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9wcm9jZXNzID0gcHJvY2Vzcy5wcm9jZXNzX2lkO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlX3Byb2Nlc3NfdmFsdWVzID0gcHJvY2Vzcy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrTW9kdWxlKG1vZHVsZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhtb2R1bGUubmFtZSk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkX21vZHVsZSA9PSBtb2R1bGUubW9kdWxlX2lkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkX21vZHVsZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkX21vZHVsZSA9IG1vZHVsZS5tb2R1bGVfaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRNb2R1bGUobW9kdWxlKSB7XG4gICAgICAgIC8vUE9TVCB0byBjcmVhdGUgYSBuZXcgcHJvY2VzcyBmcm9tIHBhY2thZ2VfaWQgYW5kIG1vZHVsZV9pZFxuICAgICAgICAvLyBwb3N0IG1vZHVsZSwgcGFja2FnZSBhbmQgb3JkZXJcbiAgICAgICAgbGV0IGRhdGEgPSB7XCJtb2R1bGVcIjptb2R1bGUubW9kdWxlX2lkLCBcInBhY2thZ2VcIjpwYWNrYWdlX2lkfVxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGF0YVsnb3JkZXInXSA9IHRoaXMucHJvY2Vzc2VzW3RoaXMucHJvY2Vzc2VzLmxlbmd0aC0xXS5vcmRlcisxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YVsnb3JkZXInXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGllbnQuZmV0Y2goJy9hcGkvcHJvY2Vzcy8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keToganNvbihkYXRhKSxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2VzID0gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFByb2Nlc3NWYWx1ZShpZGVudGlmaWVyLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZV9wcm9jZXNzX3ZhbHVlc1tpZGVudGlmaWVyXSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnByb2Nlc3NfaGFzX2NoYW5nZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHNhdmVQcm9jZXNzKGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3NfaGFzX2NoYW5nZWQpIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSB7J3ZhbHVlJzp0aGlzLmFjdGl2ZV9wcm9jZXNzX3ZhbHVlc307XG4gICAgICAgICAgICB0aGlzLmNsaWVudC5mZXRjaCgnL2FwaS9wcm9jZXNzLycrdGhpcy5zZWxlY3RlZF9wcm9jZXNzKycvJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgICAgICAgICBib2R5OiBqc29uKHZhbCksXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2VzLnNwbGljZShpbmRleCwgMSwgZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc19oYXNfY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9wcm9jZXNzID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4ZWN1dGUoKSB7XG4gICAgICAgIC8vIGNhbGwgZWNlY3V0ZSBwb3N0IHRoZW4gcmVkaXJlY3RcbiAgICAgICAgdGhpcy5jbGllbnQuZmV0Y2goJy9wYWNrYWdlLycrcGFja2FnZV9pZCsnL2V4ZWN1dGUvJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wYWNrYWdlL1wiK3BhY2thZ2VfaWQrXCIvc3RhdHVzL1wiO1xuICAgIH1cblxuICAgIG1vdmVVcChwcm9jZXNzaW5kZXgpIHtcbiAgICAgICAgbGV0IHAxID0gdGhpcy5wcm9jZXNzZXNbcHJvY2Vzc2luZGV4LTFdO1xuICAgICAgICBsZXQgcDIgPSB0aGlzLnByb2Nlc3Nlc1twcm9jZXNzaW5kZXhdO1xuICAgICAgICBsZXQgdGVtcCA9IHAxLm9yZGVyO1xuICAgICAgICBwMS5vcmRlciA9IHAyLm9yZGVyO1xuICAgICAgICBwMi5vcmRlciA9IHRlbXA7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xuICAgICAgICB9KTtcbiAgICAgICAgLy91cGxvYWQgY2hhbmdlIHRvIHNlcnZlci5cbiAgICAgICAgbGV0IGRhdGEgPSBbe1wib3JkZXJcIjpwMi5vcmRlciwgXCJwcm9jZXNzX2lkXCI6cDIucHJvY2Vzc19pZH0sIHtcIm9yZGVyXCI6cDEub3JkZXIsIFwicHJvY2Vzc19pZFwiOnAxLnByb2Nlc3NfaWR9XTtcbiAgICAgICAgdGhpcy5jbGllbnQuZmV0Y2goJy9hcGkvcGFja2FnZS8nK3BhY2thZ2VfaWQrJy9wcm9jZXNzLycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgICAgIGJvZHk6IGpzb24oZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgbW92ZURvd24ocHJvY2Vzc2luZGV4KSB7XG4gICAgICAgIGxldCBwMSA9IHRoaXMucHJvY2Vzc2VzW3Byb2Nlc3NpbmRleCsxXTtcbiAgICAgICAgbGV0IHAyID0gdGhpcy5wcm9jZXNzZXNbcHJvY2Vzc2luZGV4XTtcbiAgICAgICAgbGV0IHRlbXAgPSBwMS5vcmRlcjtcbiAgICAgICAgcDEub3JkZXIgPSBwMi5vcmRlcjtcbiAgICAgICAgcDIub3JkZXIgPSB0ZW1wO1xuICAgICAgICB0aGlzLnByb2Nlc3Nlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkYXRhID0gW3tcIm9yZGVyXCI6cDEub3JkZXIsIFwicHJvY2Vzc19pZFwiOnAxLnByb2Nlc3NfaWR9LCB7XCJvcmRlclwiOnAyLm9yZGVyLCBcInByb2Nlc3NfaWRcIjpwMi5wcm9jZXNzX2lkfV07XG4gICAgICAgIHRoaXMuY2xpZW50LmZldGNoKCcvYXBpL3BhY2thZ2UvJytwYWNrYWdlX2lkKycvcHJvY2Vzcy8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgICAgICBib2R5OiBqc29uKGRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvY2Vzcyhwcm9jZXNzaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jbGllbnQuZmV0Y2goJy9hcGkvcHJvY2Vzcy8nK3RoaXMucHJvY2Vzc2VzW3Byb2Nlc3NpbmRleF0ucHJvY2Vzc19pZCsnLycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wcm9jZXNzZXMuc3BsaWNlKHByb2Nlc3NpbmRleCwgMSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

/*! Copyright 2017 Axenu */
define('status',["require", "exports", "aurelia-fetch-client"], function (require, exports, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function () {
        function Index() {
            var _this = this;
            this.title = 'S.A.W';
            this.description = 'Se statusen för paketet: ';
            this.processes = [];
            this.package = {};
            this.removeWorkdir = false;
            this.client = new aurelia_fetch_client_1.HttpClient();
            this.loading = false;
            this.updateData();
            this.timer = setInterval(function () {
                _this.updateData();
            }, 5000);
        }
        Index.prototype.updateData = function () {
            var _this = this;
            this.loading = true;
            this.client.fetch('/api/package/' + package_id + '/')
                .then(function (response) { return response.json(); })
                .then(function (data) {
                console.log(data);
                _this.package = data;
                _this.processes = data['processes'];
                _this.loading = false;
            });
        };
        Index.prototype.removePackage = function () {
            var body = { "removeWorkdir": this.removeWorkdir };
            this.client.fetch('/api/package/' + package_id + '/', {
                method: "DELETE",
                body: aurelia_fetch_client_1.json(body),
            })
                .then(function (response) {
                console.log(response.json());
                window.location.href = "/";
            });
        };
        Index.prototype.execute = function () {
            this.client.fetch('/package/' + package_id + '/execute/', {
                method: "POST",
            });
        };
        return Index;
    }());
    exports.Index = Index;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7Ozs7SUFNM0I7UUFVSTtZQUFBLGlCQUtDO1lBZEQsVUFBSyxHQUFDLE9BQU8sQ0FBQztZQUNkLGdCQUFXLEdBQUMsMkJBQTJCLENBQUM7WUFDeEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNmLFlBQU8sR0FBRyxFQUFFLENBQUM7WUFDYixrQkFBYSxHQUFHLEtBQUssQ0FBQztZQUN0QixXQUFNLEdBQUcsSUFBSSxpQ0FBVSxFQUFFLENBQUM7WUFFMUIsWUFBTyxHQUFHLEtBQUssQ0FBQztZQUdaLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUM7UUFFRCwwQkFBVSxHQUFWO1lBQUEsaUJBVUM7WUFURyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUMsVUFBVSxHQUFDLEdBQUcsQ0FBQztpQkFDNUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDakMsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUVELDZCQUFhLEdBQWI7WUFDSSxJQUFJLElBQUksR0FBRyxFQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFDLFVBQVUsR0FBQyxHQUFHLEVBQUU7Z0JBQzlDLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixJQUFJLEVBQUUsMkJBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkIsQ0FBQztpQkFDRyxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7UUFFRCx1QkFBTyxHQUFQO1lBRUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFDLFVBQVUsR0FBQyxXQUFXLEVBQUU7Z0JBQ2xELE1BQU0sRUFBRSxNQUFNO2FBQ2pCLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFFTCxZQUFDO0lBQUQsQ0FoREEsQUFnREMsSUFBQTtJQWhEWSxzQkFBSyIsImZpbGUiOiJzdGF0dXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgQ29weXJpZ2h0IDIwMTcgQXhlbnUgKi9cblxuaW1wb3J0IHtIdHRwQ2xpZW50LGpzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcblxuZGVjbGFyZSB2YXIgcGFja2FnZV9pZDogYW55O1xuXG5leHBvcnQgY2xhc3MgSW5kZXgge1xuICAgIHRpdGxlPSdTLkEuVyc7XG4gICAgZGVzY3JpcHRpb249J1NlIHN0YXR1c2VuIGbDtnIgcGFrZXRldDogJztcbiAgICBwcm9jZXNzZXMgPSBbXTtcbiAgICBwYWNrYWdlID0ge307XG4gICAgcmVtb3ZlV29ya2RpciA9IGZhbHNlO1xuICAgIGNsaWVudCA9IG5ldyBIdHRwQ2xpZW50KCk7XG4gICAgdGltZXI7XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY2xpZW50LmZldGNoKCcvYXBpL3BhY2thZ2UvJytwYWNrYWdlX2lkKycvJylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFja2FnZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzZXMgPSBkYXRhWydwcm9jZXNzZXMnXTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZVBhY2thZ2UoKSB7XG4gICAgICAgIGxldCBib2R5ID0ge1wicmVtb3ZlV29ya2RpclwiOiB0aGlzLnJlbW92ZVdvcmtkaXJ9O1xuICAgICAgICB0aGlzLmNsaWVudC5mZXRjaCgnL2FwaS9wYWNrYWdlLycrcGFja2FnZV9pZCsnLycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGJvZHk6IGpzb24oYm9keSksXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgLy8gY2FsbCBlY2VjdXRlIHBvc3QgdGhlbiByZWRpcmVjdFxuICAgICAgICB0aGlzLmNsaWVudC5mZXRjaCgnL3BhY2thZ2UvJytwYWNrYWdlX2lkKycvZXhlY3V0ZS8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICB9KVxuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1></template>"; });
define('text!index.html', ['module'], function(module) { module.exports = "<template><div class=container><h1><a href=/ >${title}</a></h1><img class=logga src=static/img/logga.jpg><p>${description}</p><div class=card><div class=card-header><div class=row><div class=col>Label</div><div class=col>Filnamn</div><div class=col-sm-1>Status</div></div></div><div class=\"list-group list-group-flush\"><button style=padding-left:0;padding-right:0 repeat.for=\"package of packages\" class=\"list-group-item list-group-item-action\"><div class=col><a href=\"package/${package.package_id}/\">${package.name}</a></div><div class=col> ${package.file_name} </div><div class=col-sm-1><a href=\"package/${package.package_id}/status/\">${package.status}</a></div></button></div></div></div></template>"; });
define('text!packageAdmin.html', ['module'], function(module) { module.exports = "<template><div class=container><h1><a href=/ >${title}</a></h1><img class=logga src=static/img/logga.jpg><h2>Paket: ${package.name}</h2><a href=\"package/${package.package_id}/status\" class=float-right>Status</a><p>${description}</p><div class=row><div class=col-lg-6><h4>Valda moduler</h4><div class=card><div class=card-header>Namn</div><div class=\"list-group list-group-flush\"><div repeat.for=\"process of processes\" class=\"list-group-item list-group-item-action ${process.process_id==selected_process ? 'active' : ''}\" if.bind=!process.hidden><div class=\"d-flex w-100 justify-content-between\"><p style=margin-bottom:0 class=\"d-flex w-100 noselect\" click.delegate=clickProcess(process)>${process.name}</p><small>${process.status}</small></div><template if.bind=\"process.process_id==selected_process\" containterless><form if.bind=\"process.form.length>0\"><label repeat.for=\"input of process.form\" for=\"${input.identifier}\">${input.label} <input type=text if.bind=\"input.type=='text'\" id.bind=input.identifier value.one-way=active_process_values[input.identifier] keyup.delegate=\"setProcessValue(input.identifier, $event.target.value)\" change.delegate=\"setProcessValue(input.identifier, $event.target.value)\"> <input type=checkbox if.bind=\"input.type=='checkbox'\" id.bind=input.identifier checked.one-way=active_process_values[input.identifier] change.delegate=\"setProcessValue(input.identifier, $event.target.checked)\"></label><button class=\"btn btn-success\" click.delegate=saveProcess($index) disabled.bind=!process_has_changed>Save</button></form><button class=\"btn btn-success\" disabled.bind=\"$index<=0\" click.delegate=moveUp($index)>Move up</button><button class=\"btn btn-success\" disabled.bind=\"$index>=processes.length-1\" click.delegate=moveDown($index)>Move down</button><button class=\"btn btn-danger\" click.delegate=removeProcess($index)>Remove</button></template></div></div></div></div><div class=col-lg-6 data-query=view(Mooo)><h4>Tillgängliga moduler</h4><div class=card><div class=card-header>Namn</div><div class=\"list-group list-group-flush\" data-query=each(modules)><div repeat.for=\"module of modules\" class=\"list-group-item list-group-item-action ${module.module_id==selected_module ? 'active' : ''}\" if.bind=!module.hidden><p style=margin-bottom:0 class=\"d-flex w-100 noselect\" click.trigger=clickModule(module)>${module.name}</p><div if.bind=\"module.module_id==selected_module\"><button class=\"btn btn-success\" click.delegate=addModule(module)>Add module</button></div></div></div></div></div></div><button class=\"btn btn-success float-right\" click.delegate=execute()>Starta</button></div></template>"; });
define('text!status.html', ['module'], function(module) { module.exports = "<template><div class=container><h1><a href=/ >${title}</a></h1><img class=logga src=static/img/logga.jpg><h2>Paket: ${package.name}</h2><a href=\"package/${package.package_id}/\" class=float-right>Ändra</a><p>${description}</p><div class=card><div class=card-header><div class=\"row justify-content-end\"><div class=col>Label</div><div class=col>Statusbar</div><div class=col-sm-2>Status</div><div class=col-sm-2>Log</div><div class=col-sm-2>Error<a href=# click.delegate=updateData() class=tab><span class=\"fa fa-refresh fa-2x ${loading ? 'fa-spin' : ''}\" aria-hidden=true></span></a></div></div></div><div class=\"list-group list-group-flush\"><div style=padding-left:0;padding-right:0 repeat.for=\"process of processes\" class=\"list-group-item list-group-item-action\"><div class=col> ${process.name} ${process.hidden ? '(Hidden)' : ''} </div><div class=col>Statusbar</div><div class=col-sm-2> ${process.status} </div><div class=col-sm-2><a href=\"/process/${process.process_id}/info_log\" class=\"${process.log_path == '' ? 'disabled' : ''}\">view log</a></div><div class=col-sm-2><a href=\"/process/${process.process_id}/error_log\" class=\"${process.err_path == '' ? 'disabled' : ''}\">view error log</a></div></div></div></div><button class=\"btn btn-success float-right\" click.delegate=execute()>Starta</button><label>Ta bort paketfiler i workdir: <input type=checkbox checked.bind=removeWorkdir></label><button class=\"btn btn-danger float-right\" click.delegate=removePackage()>Klar (Ta bort projekt från databasen)</button></div></template>"; });
//# sourceMappingURL=app-bundle.js.map