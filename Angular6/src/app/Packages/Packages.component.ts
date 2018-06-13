import { Component } from '@angular/core';

// import { PackagesService } from './Packages.service'

@Component({
  selector: 'packages',
  templateUrl: './Packages.component.html',
  // styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  title = 'new title';
  packages = [];

  constructor() {

  }
}
