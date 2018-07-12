import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { APIService } from '../Services/api.service';


@Component({
  selector: 'Admin-containers',
  templateUrl: './AdminContainers.component.html',
  styleUrls: ['./AdminContainers.component.sass']
})
export class AdminContainersComponent {
  work_dir_path = ""
  packages_path = ""
  premis_file_name = ""
  messageVisible = false;

  constructor(private apiService: APIService) {
  }

  ngOnInit() {
    // this.apiService.getContainers().subscribe((data) => {
    // });
  }


}
