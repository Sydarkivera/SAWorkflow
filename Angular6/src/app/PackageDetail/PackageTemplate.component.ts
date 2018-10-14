import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from "@angular/router";

import { APIService } from '../Services/api.service';
import { PackageService } from '../Services/package.service';

@Component({
  selector: 'packageTemplate',
  templateUrl: './PackageTemplate.component.html',

  styleUrls: ['./PackageTemplate.component.sass']
})
export class PackageTemplateComponent {

  templates: any[];
  package_id: number;
  package: any;
  active_template: number = -1

  constructor(private apiService: APIService, private route: ActivatedRoute, private router: Router, private packageService: PackageService) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
       this.package_id = +params['id'];
       // get package
       this.apiService.getPackage(this.package_id).subscribe((data) => {
         this.package = data
         this.active_template = data['active_template'];
       });
    });
    this.apiService.getTemplates().subscribe((data) => {
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
    this.apiService.setActiveTemplate(template.template_id, this.package_id, data).subscribe((res) => {
      // window.location.href = '/packages/' + this.package_id + '/edit';
      this.packageService.updatePackageData(data);
      //navigate
      this.router.navigate(['../', 'edit'], { relativeTo: this.route });
    });
  }

  selectAndStart(template) {
    let data = {"active_template": template.template_id};
    this.apiService.setActiveTemplate(template.template_id, this.package_id, data).subscribe((res) => {
        this.apiService.startWorkflow(this.package.package_id);
        this.router.navigate(['packages', this.package.package_id, 'status']);
    });
  }

}
