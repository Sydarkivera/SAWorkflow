import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { PackagesService } from './Packages.service'
import { PackageDetailService } from './PackageDetail.service';

@Component({
  selector: 'package',
  // template: '<p>PackageHeader</p><router-outlet></router-outlet>'
  templateUrl: './PackageHeader.component.html',

  // styleUrls: ['./packages.component.css']
})
export class PackageHeaderComponent {
  title = 'new title';
  name = "";
  id: number;
  private sub: any;

  constructor(private packageService: PackageDetailService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];

       this.packageService.getPackage(this.id).subscribe((data) => {
         // console.log(data);
         // this.package = data;
         this.name = data['name'];
       });
    });
  }

  // ngOnInit() {
  //   this.packagesService.getPackages().subscribe((data) => {
  //     console.log(data);
  //     this.packages = data as [any];
  //   });
  // }
}
