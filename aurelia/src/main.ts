/*! Copyright 2017 Axenu */

import {Aurelia} from 'aurelia-framework'
import environment from './environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
  // aurelia.start().then(a => {
  //     aurelia.setRoot(a.host.attributes['start'].value)
  // });
}
