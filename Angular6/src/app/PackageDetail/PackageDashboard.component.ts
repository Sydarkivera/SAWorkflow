import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

// import { PackagesService } from './Packages.service'
import { PackageDetailService } from './PackageDetail.service';
// import { FileBrowserComponent } from '../FileBrowser/FileBrowser.component';

// import { PackagesService } from './Packages.service'

import { GraphColors, formatBytes } from '../Utilities';

@Component({
  selector: 'packageDashboard',
  templateUrl: './PackageDashboard.component.html',
  // template: '<p>Package Dashboard</p>'
  styleUrls: ['./PackageDashboard.component.sass']
})
export class PackageDashboardComponent {
  id: number = -1;
  package: any = {processes: []}
  fileTypes = []
  //   {
  //     "name":'pdf',
  //     "value":10
  //   },
  //   {
  //     "name":"xml",
  //     "value":3
  //   }
  // ];

  title = 'new title';
  single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];
  // multi: any[];

  view: any[] = [700, 400];

  // options
  showLegend = false;

  colorScheme = {
    domain: GraphColors
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  gradient = false;

// change to 0 later
  total_number_of_files = 12
  total_size = '3.45 GB'
  progress = 0


  constructor(private packageService: PackageDetailService, private route: ActivatedRoute, private router: Router) {
    // Object.assign(this, {single, multi})

  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
       this.id = +params['id'];
       this.packageService.getPackage(this.id).subscribe((data) => {
         console.log(data);
         this.package = data;
         let res = []
         for (let key in this.package.statistics.fileTypes) {
            let value = this.package.statistics.fileTypes[key];
            // Use `key` and `value`
            var temp = {}
            temp['name'] = key;
            temp['value'] = value;
            res.push({"name":key.toUpperCase(), "value":value});
          }
          this.total_size = formatBytes(this.package.statistics.total_size);
          this.total_number_of_files = this.package.statistics.total_number_of_files;
          this.fileTypes = [...res]
          //calculate total progress
          this.progress = 0
          for (let process of this.package.processes) {
            this.progress += Number(process.progress);
          }
          this.progress = this.progress / this.package.processes.length;
       });
    });
  }

  onSelect(event) {
    console.log(event);
  }
}
