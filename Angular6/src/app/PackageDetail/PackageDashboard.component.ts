import { Component } from '@angular/core';

// import { PackagesService } from './Packages.service'

@Component({
  selector: 'packageDashboard',
  templateUrl: './PackageDashboard.component.html',
  // template: '<p>Package Dashboard</p>'
  styleUrls: ['./PackageDashboard.component.css']
})
export class PackageDashboardComponent {
  title = 'new title';
  single = [
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

  view: any[] = [700, 400];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
    // Object.assign(this, {single, multi})
  }

  onSelect(event) {
    console.log(event);
  }
}
