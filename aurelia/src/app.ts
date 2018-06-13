/*! Copyright 2017 Axenu */

import {HttpClient} from 'aurelia-fetch-client';
import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
    router: Router;
    title='A.P.P';
    description='Välj ett paket att administrera';
    packages = [];

    constructor() {

    }

      configureRouter(config: RouterConfiguration, router: Router): void {
        config.title = 'Index | A.P.P';
        // config.options.root = '/';
        config.map([
          { route: ['', 'home'], name: 'Dashboard', moduleId: './dashboard', title: 'Dashboard | A.P.P', nav: true },
          { route: 'packages', name: 'Packages', moduleId: './packages', title: 'Packages | A.P.P', nav: true },
        ]);
        console.log(config)
        console.log(router);
          this.router = router;
      }
}
