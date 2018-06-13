import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { PackagesService } from './Packages.service'
import { PackageDetailService } from './PackageDetail.service';

@Component({
  selector: 'package',
  // template: '<p>PackageDetail</p>'
  templateUrl: './PackageStatus.component.html',

  // styleUrls: ['./packages.component.css']
})
export class PackageStatusComponent {
  id: number;
  package: any;

  constructor(private packageService: PackageDetailService, private route: ActivatedRoute) {
    this.package = {
      name: "Name"
    };
  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
       this.id = +params['id'];
       this.packageService.getPackage(this.id).subscribe((data) => {
         console.log(data);
         this.package = data;
       });
    });
    // this.packageService.getPackage(this.id).subscribe((data) => {
    //   console.log(data);
    //   this.package = data;
    // });
    // this.packageService.getModules().subscribe((data) => {
    //   console.log(data);
    //   // this.package = data;
    //   this.modules = data as [any];
    // });
    // this.client.fetch('/api/module/')
    //     .then(response => response.json())
    //     .then(data => {
    //         this.modules = data;
    //
    //     });
  }
}
