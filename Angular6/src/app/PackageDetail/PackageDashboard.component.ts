import { Component } from '@angular/core';

// import { PackagesService } from './Packages.service'

@Component({
  selector: 'package',
  // templateUrl: './Package.component.html',
  template: '<p>Package Dashboard</p>'
  // styleUrls: ['./packages.component.css']
})
export class PackageDashboardComponent {
  title = 'new title';
  packages = [];

  constructor() {

  }

  // ngOnInit() {
  //   this.packagesService.getPackages().subscribe((data) => {
  //     console.log(data);
  //     this.packages = data as [any];
  //   });
  // }
}
