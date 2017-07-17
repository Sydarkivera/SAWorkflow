/*! Copyright 2017 Axenu */

import {HttpClient, json} from 'aurelia-fetch-client';

declare var package_id: any;

export class PackageAdmin {
    title='S.A.W';
    description='Välj vilka moduler som ska köras';
    processes = [];
    modules = [];
    package = {};
    selected_module = 0;
    selected_process = 0;
    active_process_values = {};
    process_has_changed = false;
    client = new HttpClient();

    constructor() {
        this.client = new HttpClient();
        this.client.fetch('/api/package/'+package_id+'/')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.package = data;
                this.processes = data["processes"];
                // this.processes = data;
            });
        this.client.fetch('/api/module/')
            .then(response => response.json())
            .then(data => {
                this.modules = data;

            });
    }

    clickProcess(process) {
        if (this.selected_process == process.process_id) {
            this.selected_process = 0;
        } else {
                this.selected_process = process.process_id;
                this.active_process_values = process.value;
        }
    }

    clickModule(module) {
        // console.log(module.name);
        if (this.selected_module == module.module_id) {
            this.selected_module = 0;
        } else {
            this.selected_module = module.module_id;
        }
    }

    addModule(module) {
        //POST to create a new process from package_id and module_id
        // post module, package and order
        let data = {"module":module.module_id, "package":package_id}
        if (this.processes.length > 0) {
            data['order'] = this.processes[this.processes.length-1].order+1;
        } else {
            data['order'] = 0;
        }
        this.client.fetch('/api/process/', {
            method: "POST",
            body: json(data),
        })
            .then(response => response.json())
            .then(data => {
                this.processes = data;
            });
    }

    setProcessValue(identifier, value) {
        this.active_process_values[identifier] = value;
        this.process_has_changed = true;
    }

    saveProcess(index) {
        if (this.process_has_changed) {
            let val = {'value':this.active_process_values};
            this.client.fetch('/api/process/'+this.selected_process+'/', {
                method: "PUT",
                body: json(val),
            }).then(response => response.json())
            .then(data => {
                this.processes.splice(index, 1, data);
            });
            this.process_has_changed = false;
            this.selected_process = 0;
        }
    }

    execute() {
        // call ececute post then redirect
        this.client.fetch('/package/'+package_id+'/execute/', {
            method: "POST",
        })
        window.location.href = "/package/"+package_id+"/status/";
    }

    moveUp(processindex) {
        let p1 = this.processes[processindex-1];
        let p2 = this.processes[processindex];
        let temp = p1.order;
        p1.order = p2.order;
        p2.order = temp;
        this.processes.sort(function(a, b) {
            return a.order - b.order;
        });
        //upload change to server.
        let data = [{"order":p2.order, "process_id":p2.process_id}, {"order":p1.order, "process_id":p1.process_id}];
        this.client.fetch('/api/package/'+package_id+'/process/', {
            method: "PUT",
            body: json(data)
        })
    }
    moveDown(processindex) {
        let p1 = this.processes[processindex+1];
        let p2 = this.processes[processindex];
        let temp = p1.order;
        p1.order = p2.order;
        p2.order = temp;
        this.processes.sort(function(a, b) {
            return a.order - b.order;
        });
        let data = [{"order":p1.order, "process_id":p1.process_id}, {"order":p2.order, "process_id":p2.process_id}];
        this.client.fetch('/api/package/'+package_id+'/process/', {
            method: "PUT",
            body: json(data)
        })
    }

    removeProcess(processindex) {
        this.client.fetch('/api/process/'+this.processes[processindex].process_id+'/', {
            method: "DELETE",
        })
        this.processes.splice(processindex, 1);
    }
}
