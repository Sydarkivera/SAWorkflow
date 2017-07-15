/*! Copyright 2017 Axenu */

import {HttpClient} from 'aurelia-fetch-client';

export class Index {
    title='Toolkit';
    description='Lite beskrivande text';
    packages = [];

    constructor() {
        let client = new HttpClient();
        client.fetch('/api/package/')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.packages = data;
            });
    }

    gotoPackageConfig(archive_package) {
        window.location.href = "/package/"+archive_package+"/";
    }

}
