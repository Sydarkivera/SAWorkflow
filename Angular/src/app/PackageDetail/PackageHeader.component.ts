import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { APIService } from '../Services/api.service';
import { PackageService } from '../Services/package.service';

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
  messageActive = false;

  constructor(private apiService: APIService, private route: ActivatedRoute, private router: Router, private packageService: PackageService) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = params['id'];

       this.apiService.getPackage(this.id).subscribe((data) => {
         this.active_template = data['active_template'];
         this.name = data['name'];
         this.status = data['status']
       }, (error) => {
         //package was not found, display message and return to package list.
         this.messageActive = true;
         // console.log("package not found, redirecting")
          setTimeout(()=>{    //<<<---    using ()=> syntax
            this.router.navigate(['/packages']);
          }, 4000);
       });
    });
    this.apiService.getPackages().subscribe((data) => {
      this.packages = data as [any];
    });
    this.packageService.packageEmitter$.subscribe(item => {
      if ('active_template' in item) {
        this.active_template = item['active_template'];
      }
    });
  }

  navigateTo(package_id) {
    let topPath = this.router.url.split("/").pop();
    this.router.navigate(['../', package_id, topPath], { relativeTo: this.route });
    this.showDropDown = false;
  }
}
