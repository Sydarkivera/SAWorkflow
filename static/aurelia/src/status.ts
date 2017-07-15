/*! Copyright 2017 Axenu */

import {HttpClient,json} from 'aurelia-fetch-client';

declare var package_id: any;

export class Index {
    title='Toolkit';
    description='Se statusen för paketet: ';
    processes = [];
    removeWorkdir = false;
    client = new HttpClient();

    constructor() {
        this.client.fetch('/api/package/'+package_id+'/process')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.processes = data;
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

}
