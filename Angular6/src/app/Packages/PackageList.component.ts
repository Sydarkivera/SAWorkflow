import { Component } from '@angular/core';

import { PackagesService } from './Packages.service'

@Component({
  selector: 'packages',
  templateUrl: './PackageList.component.html',
  styleUrls: ['./PackageList.component.sass']
})
export class PackageListComponent {
  title = 'new title';
  packages = [];

  constructor(private packagesService: PackagesService) {

  }

  ngOnInit() {
    this.packagesService.getPackages().subscribe((data) => {
      console.log(data);
      this.packages = data as [any];
    });
  }

  updateData() {
    this.packagesService.getPackages().subscribe((data) => {
      console.log(data);
      this.packages = data as [any];
    });
  }
}
