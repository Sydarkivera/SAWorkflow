/*! Copyright 2017 Axenu */

import {HttpClient,json} from 'aurelia-fetch-client';

declare var package_id: any;

export class Index {
    title='S.A.W';
    description='Se statusen för paketet: ';
    processes = [];
    package = {};
    removeWorkdir = false;
    client = new HttpClient();
    timer;
    loading = false;

    constructor() {
        this.updateData();
        this.timer = setInterval(() => {
            this.updateData();
        }, 5000);
    }

    updateData() {
        this.loading = true;
        this.client.fetch('/api/package/'+package_id+'/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.package = data;
                this.processes = data['processes'];
                this.loading = false;
            });
    }

    removePackage() {
        let body = {"removeWorkdir": this.removeWorkdir};
        this.client.fetch('/api/package/'+package_id+'/', {
            method: "DELETE",
            body: json(body),
        })
            .then(response => {
                console.log(response.json());
                window.location.href = "/";
            });
    }

    execute() {
        // call ececute post then redirect
        this.client.fetch('/package/'+package_id+'/execute/', {
            method: "POST",
        })
    }

}
