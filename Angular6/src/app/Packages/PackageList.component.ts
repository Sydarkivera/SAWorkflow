import { Component } from '@angular/core';

import { APIService } from '../Services/api.service';

@Component({
  selector: 'packages',
  templateUrl: './PackageList.component.html',
  styleUrls: ['./PackageList.component.sass']
})
export class PackageListComponent {
  packages = [];

  constructor(private apiService: APIService) {

  }

  ngOnInit() {
    this.updateData()
  }

  updateData() {
    this.apiService.getPackages().subscribe((data) => {
      this.packages = data as [any];
    });
  }
}
