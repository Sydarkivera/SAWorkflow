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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjs7OztJQUkzQjtRQUtJO1lBQUEsaUJBUUM7WUFaRCxVQUFLLEdBQUMsT0FBTyxDQUFDO1lBQ2QsZ0JBQVcsR0FBQyxpQ0FBaUMsQ0FBQztZQUM5QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1lBR1YsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQ0FBVSxFQUFFLENBQUM7WUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7aUJBQ3hCLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxVQUFBLElBQUk7Z0JBRU4sS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDO1FBRUQsaUNBQWlCLEdBQWpCLFVBQWtCLGVBQWU7WUFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7UUFDM0QsQ0FBQztRQUNMLFlBQUM7SUFBRCxDQWxCQSxBQWtCQyxJQUFBO0lBbEJZLHNCQUFLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIENvcHlyaWdodCAyMDE3IEF4ZW51ICovXG5cbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuXG5leHBvcnQgY2xhc3MgSW5kZXgge1xuICAgIHRpdGxlPSdTLkEuVyc7XG4gICAgZGVzY3JpcHRpb249J1bDpGxqIGV0dCBwYWtldCBhdHQgYWRtaW5pc3RyZXJhJztcbiAgICBwYWNrYWdlcyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuICAgICAgICBjbGllbnQuZmV0Y2goJy9hcGkvcGFja2FnZS8nKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWNrYWdlcyA9IGRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb3RvUGFja2FnZUNvbmZpZyhhcmNoaXZlX3BhY2thZ2UpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wYWNrYWdlL1wiK2FyY2hpdmVfcGFja2FnZStcIi9cIjtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

/*! Copyright 2017 Axenu */
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
        aurelia.start().then(function (a) {
            aurelia.setRoot(a.host.attributes['start'].value);
        });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCOzs7O0lBSzNCLG1CQUEwQixPQUFnQjtRQUN4QyxPQUFPLENBQUMsR0FBRzthQUNSLHFCQUFxQixFQUFFO2FBQ3ZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV4QixFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDbEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFoQkQsOEJBZ0JDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgQ29weXJpZ2h0IDIwMTcgQXhlbnUgKi9cblxuaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpO1xuXG4gIGlmIChlbnZpcm9ubWVudC5kZWJ1Zykge1xuICAgIGF1cmVsaWEudXNlLmRldmVsb3BtZW50TG9nZ2luZygpO1xuICB9XG5cbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtdGVzdGluZycpO1xuICB9XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oYSA9PiB7XG4gICAgICBhdXJlbGlhLnNldFJvb3QoYS5ob3N0LmF0dHJpYnV0ZXNbJ3N0YXJ0J10udmFsdWUpXG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
            this.active_process_values = {};
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFZO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsR0FBQyxHQUFHLEVBQUU7Z0JBQzNFLE1BQU0sRUFBRSxRQUFRO2FBQ25CLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQXJJQSxBQXFJQyxJQUFBO0lBcklZLG9DQUFZIiwiZmlsZSI6InBhY2thZ2VBZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBDb3B5cmlnaHQgMjAxNyBBeGVudSAqL1xuXG5pbXBvcnQge0h0dHBDbGllbnQsIGpzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcblxuZGVjbGFyZSB2YXIgcGFja2FnZV9pZDogYW55O1xuXG5leHBvcnQgY2xhc3MgUGFja2FnZUFkbWluIHtcbiAgICB0aXRsZT0nUy5BLlcnO1xuICAgIGRlc2NyaXB0aW9uPSdWw6RsaiB2aWxrYSBtb2R1bGVyIHNvbSBza2Ega8O2cmFzJztcbiAgICBwcm9jZXNzZXMgPSBbXTtcbiAgICBtb2R1bGVzID0gW107XG4gICAgcGFja2FnZSA9IHt9O1xuICAgIHNlbGVjdGVkX21vZHVsZSA9IDA7XG4gICAgc2VsZWN0ZWRfcHJvY2VzcyA9IDA7XG4gICAgYWN0aXZlX3Byb2Nlc3NfdmFsdWVzID0ge307XG4gICAgcHJvY2Vzc19oYXNfY2hhbmdlZCA9IGZhbHNlO1xuICAgIGNsaWVudCA9IG5ldyBIdHRwQ2xpZW50KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuICAgICAgICB0aGlzLmNsaWVudC5mZXRjaCgnL2FwaS9wYWNrYWdlLycrcGFja2FnZV9pZCsnLycpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhY2thZ2UgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2VzID0gZGF0YVtcInByb2Nlc3Nlc1wiXTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnByb2Nlc3NlcyA9IGRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGllbnQuZmV0Y2goJy9hcGkvbW9kdWxlLycpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXMgPSBkYXRhO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGlja1Byb2Nlc3MocHJvY2Vzcykge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9wcm9jZXNzID09IHByb2Nlc3MucHJvY2Vzc19pZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9wcm9jZXNzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX3Byb2Nlc3MgPSBwcm9jZXNzLnByb2Nlc3NfaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVfcHJvY2Vzc192YWx1ZXMgPSBwcm9jZXNzLnZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xpY2tNb2R1bGUobW9kdWxlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1vZHVsZS5uYW1lKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfbW9kdWxlID09IG1vZHVsZS5tb2R1bGVfaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbW9kdWxlID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbW9kdWxlID0gbW9kdWxlLm1vZHVsZV9pZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZE1vZHVsZShtb2R1bGUpIHtcbiAgICAgICAgLy9QT1NUIHRvIGNyZWF0ZSBhIG5ldyBwcm9jZXNzIGZyb20gcGFja2FnZV9pZCBhbmQgbW9kdWxlX2lkXG4gICAgICAgIC8vIHBvc3QgbW9kdWxlLCBwYWNrYWdlIGFuZCBvcmRlclxuICAgICAgICBsZXQgZGF0YSA9IHtcIm1vZHVsZVwiOm1vZHVsZS5tb2R1bGVfaWQsIFwicGFja2FnZVwiOnBhY2thZ2VfaWR9XG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkYXRhWydvcmRlciddID0gdGhpcy5wcm9jZXNzZXNbdGhpcy5wcm9jZXNzZXMubGVuZ3RoLTFdLm9yZGVyKzE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhWydvcmRlciddID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsaWVudC5mZXRjaCgnL2FwaS9wcm9jZXNzLycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBqc29uKGRhdGEpLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzZXMgPSBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0UHJvY2Vzc1ZhbHVlKGlkZW50aWZpZXIsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlX3Byb2Nlc3NfdmFsdWVzW2lkZW50aWZpZXJdID0gdmFsdWU7XG4gICAgICAgIHRoaXMucHJvY2Vzc19oYXNfY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2F2ZVByb2Nlc3MoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvY2Vzc19oYXNfY2hhbmdlZCkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IHsndmFsdWUnOnRoaXMuYWN0aXZlX3Byb2Nlc3NfdmFsdWVzfTtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmZldGNoKCcvYXBpL3Byb2Nlc3MvJyt0aGlzLnNlbGVjdGVkX3Byb2Nlc3MrJy8nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgICAgIGJvZHk6IGpzb24odmFsKSxcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzZXMuc3BsaWNlKGluZGV4LCAxLCBkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzX2hhc19jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkX3Byb2Nlc3MgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgLy8gY2FsbCBlY2VjdXRlIHBvc3QgdGhlbiByZWRpcmVjdFxuICAgICAgICB0aGlzLmNsaWVudC5mZXRjaCgnL3BhY2thZ2UvJytwYWNrYWdlX2lkKycvZXhlY3V0ZS8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3BhY2thZ2UvXCIrcGFja2FnZV9pZCtcIi9zdGF0dXMvXCI7XG4gICAgfVxuXG4gICAgbW92ZVVwKHByb2Nlc3NpbmRleCkge1xuICAgICAgICBsZXQgcDEgPSB0aGlzLnByb2Nlc3Nlc1twcm9jZXNzaW5kZXgtMV07XG4gICAgICAgIGxldCBwMiA9IHRoaXMucHJvY2Vzc2VzW3Byb2Nlc3NpbmRleF07XG4gICAgICAgIGxldCB0ZW1wID0gcDEub3JkZXI7XG4gICAgICAgIHAxLm9yZGVyID0gcDIub3JkZXI7XG4gICAgICAgIHAyLm9yZGVyID0gdGVtcDtcbiAgICAgICAgdGhpcy5wcm9jZXNzZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XG4gICAgICAgIH0pO1xuICAgICAgICAvL3VwbG9hZCBjaGFuZ2UgdG8gc2VydmVyLlxuICAgICAgICBsZXQgZGF0YSA9IFt7XCJvcmRlclwiOnAyLm9yZGVyLCBcInByb2Nlc3NfaWRcIjpwMi5wcm9jZXNzX2lkfSwge1wib3JkZXJcIjpwMS5vcmRlciwgXCJwcm9jZXNzX2lkXCI6cDEucHJvY2Vzc19pZH1dO1xuICAgICAgICB0aGlzLmNsaWVudC5mZXRjaCgnL2FwaS9wYWNrYWdlLycrcGFja2FnZV9pZCsnL3Byb2Nlc3MvJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgYm9keToganNvbihkYXRhKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBtb3ZlRG93bihwcm9jZXNzaW5kZXgpIHtcbiAgICAgICAgbGV0IHAxID0gdGhpcy5wcm9jZXNzZXNbcHJvY2Vzc2luZGV4KzFdO1xuICAgICAgICBsZXQgcDIgPSB0aGlzLnByb2Nlc3Nlc1twcm9jZXNzaW5kZXhdO1xuICAgICAgICBsZXQgdGVtcCA9IHAxLm9yZGVyO1xuICAgICAgICBwMS5vcmRlciA9IHAyLm9yZGVyO1xuICAgICAgICBwMi5vcmRlciA9IHRlbXA7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGRhdGEgPSBbe1wib3JkZXJcIjpwMS5vcmRlciwgXCJwcm9jZXNzX2lkXCI6cDEucHJvY2Vzc19pZH0sIHtcIm9yZGVyXCI6cDIub3JkZXIsIFwicHJvY2Vzc19pZFwiOnAyLnByb2Nlc3NfaWR9XTtcbiAgICAgICAgdGhpcy5jbGllbnQuZmV0Y2goJy9hcGkvcGFja2FnZS8nK3BhY2thZ2VfaWQrJy9wcm9jZXNzLycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgICAgIGJvZHk6IGpzb24oZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW1vdmVQcm9jZXNzKHByb2Nlc3NpbmRleCkge1xuICAgICAgICB0aGlzLmNsaWVudC5mZXRjaCgnL2FwaS9wcm9jZXNzLycrdGhpcy5wcm9jZXNzZXNbcHJvY2Vzc2luZGV4XS5wcm9jZXNzX2lkKycvJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnByb2Nlc3Nlcy5zcGxpY2UocHJvY2Vzc2luZGV4LCAxKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7Ozs7SUFNM0I7UUFVSTtZQUFBLGlCQUtDO1lBZEQsVUFBSyxHQUFDLE9BQU8sQ0FBQztZQUNkLGdCQUFXLEdBQUMsMkJBQTJCLENBQUM7WUFDeEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNmLFlBQU8sR0FBRyxFQUFFLENBQUM7WUFDYixrQkFBYSxHQUFHLEtBQUssQ0FBQztZQUN0QixXQUFNLEdBQUcsSUFBSSxpQ0FBVSxFQUFFLENBQUM7WUFFMUIsWUFBTyxHQUFHLEtBQUssQ0FBQztZQUdaLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUM7UUFFRCwwQkFBVSxHQUFWO1lBQUEsaUJBVUM7WUFURyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUMsVUFBVSxHQUFDLEdBQUcsQ0FBQztpQkFDNUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDakMsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUVELDZCQUFhLEdBQWI7WUFDSSxJQUFJLElBQUksR0FBRyxFQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFDLFVBQVUsR0FBQyxHQUFHLEVBQUU7Z0JBQzlDLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixJQUFJLEVBQUUsMkJBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkIsQ0FBQztpQkFDRyxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7UUFFRCx1QkFBTyxHQUFQO1lBRUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFDLFVBQVUsR0FBQyxXQUFXLEVBQUU7Z0JBQ2xELE1BQU0sRUFBRSxNQUFNO2FBQ2pCLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFDTCxZQUFDO0lBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtJQS9DWSxzQkFBSyIsImZpbGUiOiJzdGF0dXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgQ29weXJpZ2h0IDIwMTcgQXhlbnUgKi9cblxuaW1wb3J0IHtIdHRwQ2xpZW50LGpzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcblxuZGVjbGFyZSB2YXIgcGFja2FnZV9pZDogYW55O1xuXG5leHBvcnQgY2xhc3MgSW5kZXgge1xuICAgIHRpdGxlPSdTLkEuVyc7XG4gICAgZGVzY3JpcHRpb249J1NlIHN0YXR1c2VuIGbDtnIgcGFrZXRldDogJztcbiAgICBwcm9jZXNzZXMgPSBbXTtcbiAgICBwYWNrYWdlID0ge307XG4gICAgcmVtb3ZlV29ya2RpciA9IGZhbHNlO1xuICAgIGNsaWVudCA9IG5ldyBIdHRwQ2xpZW50KCk7XG4gICAgdGltZXI7XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY2xpZW50LmZldGNoKCcvYXBpL3BhY2thZ2UvJytwYWNrYWdlX2lkKycvJylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFja2FnZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzZXMgPSBkYXRhWydwcm9jZXNzZXMnXTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZVBhY2thZ2UoKSB7XG4gICAgICAgIGxldCBib2R5ID0ge1wicmVtb3ZlV29ya2RpclwiOiB0aGlzLnJlbW92ZVdvcmtkaXJ9O1xuICAgICAgICB0aGlzLmNsaWVudC5mZXRjaCgnL2FwaS9wYWNrYWdlLycrcGFja2FnZV9pZCsnLycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGJvZHk6IGpzb24oYm9keSksXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgLy8gY2FsbCBlY2VjdXRlIHBvc3QgdGhlbiByZWRpcmVjdFxuICAgICAgICB0aGlzLmNsaWVudC5mZXRjaCgnL3BhY2thZ2UvJytwYWNrYWdlX2lkKycvZXhlY3V0ZS8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!index.html', ['module'], function(module) { module.exports = "<template><div class=\"container\"><h1><a href=\"/\">${title}</a></h1><img class=\"logga\" src=\"static/img/logga.jpg\"><p>${description}</p><div class=\"card\"><div class=\"card-header\"><div class=\"row\"><div class=\"col\">Namn</div><div class=\"col\">Filnamn</div><div class=\"col-sm-1\">Status</div></div></div><div class=\"list-group list-group-flush\"><div style=\"padding-left:0;padding-right:0\" repeat.for=\"package of packages\" class=\"list-group-item list-group-item-action\"><div class=\"col\"><a href=\"package/${package.package_id}/\">${package.name}</a></div><div class=\"col\"> ${package.file_name} </div><div class=\"col-sm-1\"><a href=\"package/${package.package_id}/status/\">${package.status}</a></div></div></div></div></div></template>"; });
define('text!packageAdmin.html', ['module'], function(module) { module.exports = "<template><div class=\"container\"><h1><a href=\"/\">${title}</a></h1><img class=\"logga\" src=\"static/img/logga.jpg\"><h2>Paket: ${package.name}</h2><a href=\"package/${package.package_id}/status\" class=\"float-right\">Status</a><p>${description}</p><div class=\"row\"><div class=\"col-lg-6\"><h4>Valda moduler</h4><div class=\"card\"><div class=\"card-header\">Namn</div><div class=\"list-group list-group-flush\"><div repeat.for=\"process of processes\" class=\"list-group-item list-group-item-action ${process.process_id==selected_process ? 'active' : ''}\" if.bind=\"!process.hidden\"><div class=\"d-flex w-100 justify-content-between\"><p style=\"margin-bottom:0\" class=\"d-flex w-100 noselect\" click.delegate=\"clickProcess(process)\">${process.name}</p><small>${process.status}</small></div><template if.bind=\"process.process_id==selected_process\" containterless><form if.bind=\"process.form.length>0\"><label repeat.for=\"input of process.form\" for=\"${input.identifier}\">${input.label} <input type=\"text\" if.bind=\"input.type=='text'\" id.bind=\"input.identifier\" value.one-way=\"active_process_values[input.identifier]\" keyup.delegate=\"setProcessValue(input.identifier, $event.target.value)\" change.delegate=\"setProcessValue(input.identifier, $event.target.value)\"> <input type=\"checkbox\" if.bind=\"input.type=='checkbox'\" id.bind=\"input.identifier\" checked.one-way=\"active_process_values[input.identifier]\" change.delegate=\"setProcessValue(input.identifier, $event.target.checked)\"></label><button class=\"btn btn-success\" click.delegate=\"saveProcess($index)\" disabled.bind=\"!process_has_changed\">Spara</button></form><button class=\"btn btn-success\" disabled.bind=\"$index<=0\" click.delegate=\"moveUp($index)\">Flytta upp</button> <button class=\"btn btn-success\" disabled.bind=\"$index>=processes.length-1\" click.delegate=\"moveDown($index)\">Flytta ner</button> <button class=\"btn btn-danger\" click.delegate=\"removeProcess($index)\">Ta bort</button></template></div></div></div></div><div class=\"col-lg-6\" data-query=\"view(Mooo)\"><h4>Tillgängliga moduler</h4><div class=\"card\"><div class=\"card-header\">Namn</div><div class=\"list-group list-group-flush\" data-query=\"each(modules)\"><div repeat.for=\"module of modules\" class=\"list-group-item list-group-item-action ${module.module_id==selected_module ? 'active' : ''}\" if.bind=\"!module.hidden\"><p style=\"margin-bottom:0\" class=\"d-flex w-100 noselect\" click.trigger=\"clickModule(module)\">${module.name}</p><div if.bind=\"module.module_id==selected_module\"><button class=\"btn btn-success\" click.delegate=\"addModule(module)\">Lägg till modul</button></div></div></div></div></div></div><button class=\"btn btn-success float-right\" click.delegate=\"execute()\">Starta</button></div></template>"; });
define('text!status.html', ['module'], function(module) { module.exports = "<template><div class=\"container\"><h1><a href=\"/\">${title}</a></h1><img class=\"logga\" src=\"static/img/logga.jpg\"><h2>Paket: ${package.name}</h2><a href=\"package/${package.package_id}/\" class=\"float-right\">Ändra</a><p>${description}</p><div class=\"card\"><div class=\"card-header\"><div class=\"row justify-content-end\"><div class=\"col\">Namn</div><div class=\"col\">Statusbar</div><div class=\"col-sm-2\">Status</div><div class=\"col-sm-2\">Log</div><div class=\"col-sm-2\">Fel <a href=\"#\" click.delegate=\"updateData()\" class=\"tab\"><span class=\"fa fa-refresh fa-2x ${loading ? 'fa-spin' : ''}\" aria-hidden=\"true\"></span></a></div></div></div><div class=\"list-group list-group-flush\"><div style=\"padding-left:0;padding-right:0\" repeat.for=\"process of processes\" class=\"list-group-item list-group-item-action\"><div class=\"col\"> ${process.name} ${process.hidden ? '(Hidden)' : ''} </div><div class=\"col\">Statusbar</div><div class=\"col-sm-2\"> ${process.status} </div><div class=\"col-sm-2\"><a href=\"/process/${process.process_id}/info_log\" class=\"${process.log_path == '' ? 'disabled' : ''}\">view log</a></div><div class=\"col-sm-2\"><a href=\"/process/${process.process_id}/error_log\" class=\"${process.err_path == '' ? 'disabled' : ''}\">view error log</a></div></div></div></div><button class=\"btn btn-success float-right\" click.delegate=\"execute()\">Starta</button><label>Ta bort paketfiler i workdir: <input type=\"checkbox\" checked.bind=\"removeWorkdir\"></label><button class=\"btn btn-danger float-right\" click.delegate=\"removePackage()\">Klar (Ta bort projekt från databasen)</button></div></template>"; });
//# sourceMappingURL=app-bundle.js.map