import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { ModuleService } from './Module.service';


@Component({
  selector: 'admin',
  templateUrl: './AdminGlobal.component.html',
  styleUrls: ['./AdminGlobal.component.sass']
})
export class AdminGlobalComponent {
  work_dir_path = ""
  packages_path = ""
  premis_file_name = ""
  messageVisible = false;

  constructor(private moduleService: ModuleService) {
  }

  ngOnInit() {
    this.moduleService.getVariables().subscribe((data) => {
      // console.log(data)
      this.work_dir_path = data['work_dir_path']
      this.packages_path = data['packages_path']
      this.premis_file_name = data['premis_file_name']
    });
  }

  save() {

    let data = {
      work_dir_path: this.work_dir_path,
      packages_path: this.packages_path,
      premis_file_name: this.premis_file_name
    }

    this.moduleService.setVariables(data).subscribe((response) => {
      this.messageVisible = true;
    });
  }


}
