import { Component } from '@angular/core';

import { APIService } from '../Services/api.service';

import { GraphColors, formatBytes } from '../Utilities';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {

  stats = undefined;
  fileTypes: any[];
  fileTypesErrors: any[];
  total_number_of_files: number;
  total_number_of_errors: number;
  total_number_of_packages: number;
  total_size: string;
  graphDataSize: any[];
  graphDataCount: any[];

  // options
  showLegend = true;

  colorScheme = {
    domain: GraphColors
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  // showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  autoScale = true;

  dataLoaded = false;

  constructor(private apiService: APIService) {
  }

  ngOnInit() {
      // load the data from the server and reorder it for the various graphs.
       this.apiService.getStatsDashboard().subscribe((data) => {
         // console.log(data)
         this.stats = data;
         this.total_size = formatBytes(data['total_size']);
         this.total_number_of_files = data['total_number_of_files'];
         this.total_number_of_errors = data['total_number_of_errors'];
         this.total_number_of_packages = data['total_number_of_packages'];
         this.fileTypes = []
         this.fileTypesErrors = []
         for (let key in this.stats.fileTypes) {
            let value = this.stats.fileTypes[key];
            this.fileTypes.push({"name":value['name'].toUpperCase(), "value":value['total']});
            this.fileTypesErrors.push({"name":value['name'].toUpperCase(), "value":value['errors']});
          }
          this.fileTypesErrors = this.fileTypesErrors.sort((a, b) => {
            if (a['value'] > b['value']) {
              return -1
            }
            return 1
          });
          let counts = []
          let sizes = []
          for (let key in this.stats.graphData) {
             let value = this.stats.graphData[key];
             counts.push({"name": value['date'], "value": value['count']});
             sizes.push({"name": value['date'], "value": value['size']});
           }
          this.graphDataSize = [
            {
              "name": "size",
              "series": sizes
            }
          ];
          this.graphDataCount = [
            {
              "name": "count",
              "series": counts
            }
          ];
          this.dataLoaded = true;
       });
  }
}
