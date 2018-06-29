import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { PackagesService } from './Packages.service'
import { PackageDetailService } from './PackageDetail.service';

@Component({
  selector: 'package',
  // template: '<p>PackageHeader</p><router-outlet></router-outlet>'
  templateUrl: './PackageHeader.component.html',

  styleUrls: ['./PackageHeader.component.sass']
})
export class PackageHeaderComponent {
  title = 'new title';
  name = "";
  id: number;
  private sub: any;
  showDropDown = false;
  packages: [any];
  active_template: any;

  constructor(private packageService: PackageDetailService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    // console.log(this.router.url);
    // console.log(this.route);
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];

       this.packageService.getPackage(this.id).subscribe((data) => {
         // console.log(data);
         this.active_template = data['active_template'];
         this.name = data['name'];
       });
    });
    this.packageService.getAllPackages().subscribe((data) => {
      // console.log(data);
      this.packages = data as [any];
      // this.name = data['name'];
    });
  }

  navigateTo(package_id) {
    // console.log(this.router.url);
    // console.log(this.route);
    let topPath = this.router.url.split("/").pop();
    this.router.navigate(['../', package_id, topPath], { relativeTo: this.route });
    this.showDropDown = false;
  }

  // ngOnInit() {
  //   this.packagesService.getPackages().subscribe((data) => {
  //     console.log(data);
  //     this.packages = data as [any];
  //   });
  // }
}
