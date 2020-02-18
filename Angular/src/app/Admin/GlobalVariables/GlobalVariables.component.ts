import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { APIService } from '../../Services/api.service';


@Component({
  selector: 'admin',
  templateUrl: './GlobalVariables.component.html',
  styleUrls: ['./GlobalVariables.component.sass']
})
export class AdminGlobalComponent {
  work_dir_path = "";
  packages_path = "";
  premis_file_name = "";
  tools_path = "";
  work_dir_path_host = "";
  premis_template_path = "";
  premis_event_template_path = "";
  messageVisible = false;

  constructor(private apiService: APIService) {
  }

  ngOnInit() {
    this.apiService.getVariables().subscribe((data) => {
      // console.log(data)
      //load and set the variables loaded from the backend
      this.work_dir_path = data['work_dir_path']
      this.packages_path = data['packages_path']
      this.premis_file_name = data['premis_file_name']
      this.tools_path = data['tools_path']
      this.work_dir_path_host = data['work_dir_path_host']
      this.premis_template_path = data['premis_template_path']
      this.premis_event_template_path = data['premis_event_template_path']
    });
  }

  save() {
    // save the values loaded from the backend with their updates
    let data = {
      work_dir_path: this.work_dir_path,
      packages_path: this.packages_path,
      premis_file_name: this.premis_file_name,
      tools_path: this.tools_path,
      work_dir_path_host: this.work_dir_path_host,
      premis_template_path: this.premis_template_path,
      premis_event_template_path: this.premis_event_template_path
    }

    this.apiService.setVariables(data).subscribe((response) => {
      // display success message
      this.messageVisible = true;
    });
  }


}
