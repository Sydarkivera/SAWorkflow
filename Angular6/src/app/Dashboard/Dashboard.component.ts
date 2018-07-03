import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { PackageDetailService } from '../PackageDetail/PackageDetail.service';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {

  stats = undefined;
  fileTypes: any[];
  total_number_of_files: number;
  total_number_of_errors: number;
  total_number_of_packages: number;
  total_size: number;
  graphData: any[];


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
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor(private packageService: PackageDetailService, private route: ActivatedRoute, private router: Router) {
    // Object.assign(this, {single, multi})

  }

  ngOnInit() {
       this.packageService.getStatsDashboard().subscribe((data) => {
         console.log(data);
         this.stats = data;
         this.total_size = data['total_size'];
         this.total_number_of_files = data['total_number_of_files'];
         this.total_number_of_errors = data['total_number_of_errors'];
         this.total_number_of_packages = data['total_number_of_packages'];
         this.fileTypes = []
         for (let key in this.stats.fileTypes) {
            let value = this.stats.fileTypes[key];
            this.fileTypes.push({"name":value['name'].toUpperCase(), "value":value['total']});
          }
          let counts = []
          let sizes = []
          for (let key in this.stats.graphData) {
             let value = this.stats.graphData[key];
             counts.push({"name": value['date'], "value": value['count']});
             sizes.push({"name": value['date'], "value": value['size']});
             // this.fileTypes.push({"name":value['name'].toUpperCase(), "value":value['total']});
           }
          this.graphData = [
            {
              "name": "count",
              "series": counts
            },
            {
              "name": "size",
              "series": sizes
            }
          ];

       });
  }

  onSelect(event) {
    console.log(event);
  }
}
