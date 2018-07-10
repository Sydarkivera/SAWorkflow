import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { APIService } from '../Services/api.service';

@Component({
  selector: 'package',
  templateUrl: './PackageHeader.component.html',

  styleUrls: ['./PackageHeader.component.sass']
})
export class PackageHeaderComponent {
  name = "";
  id: number;
  showDropDown = false;
  packages: [any];
  active_template: any;
  status = -1

  constructor(private apiService: APIService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = params['id'];

       this.apiService.getPackage(this.id).subscribe((data) => {
         this.active_template = data['active_template'];
         this.name = data['name'];
         this.status = data['status']
       });
    });
    this.apiService.getPackages().subscribe((data) => {
      this.packages = data as [any];
    });
  }

  navigateTo(package_id) {
    let topPath = this.router.url.split("/").pop();
    this.router.navigate(['../', package_id, topPath], { relativeTo: this.route });
    this.showDropDown = false;
  }
}
