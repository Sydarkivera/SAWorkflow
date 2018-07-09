import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from "@angular/router";

// import { PackagesService } from './Packages.service'
import { PackageDetailService } from './PackageDetail.service';

@Component({
  selector: 'packageTemplate',
  // template: '<p>PackageDetail</p>'
  templateUrl: './PackageTemplate.component.html',

  styleUrls: ['./PackageTemplate.component.sass']
})
export class PackageTemplateComponent {

  templates: any[];
  package_id: number;
  package: any;
  active_template: number = -1

  constructor(private packageService: PackageDetailService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
       this.package_id = +params['id'];
       // get package
       this.packageService.getPackage(this.package_id).subscribe((data) => {
         this.package = data
         this.active_template = data['active_template'];
         console.log(data);
       });
    });
    this.packageService.getTemplates().subscribe((data) => {
      console.log(data);
      // this.package = data;
      let res = data as [any]
      this.templates = res.filter((item) => {
        if (item.template_id > 1) {
          return true;
        }
        return false;
      });
    });
  }

  selectTemplate(template) {
    // api call to set the template for package.
    let data = {"active_template": template.template_id};
    this.packageService.setActiveTemplate(template.template_id, this.package_id, data).subscribe((res) => {
      console.log(res);
      // this.router.navigate(['packages', this.package_id, 'edit']);
      window.location.href = '/packages/' + this.package_id + '/edit';
    });
  }
}
