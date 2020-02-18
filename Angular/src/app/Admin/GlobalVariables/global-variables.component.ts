import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Variables } from '@app/Services/models';
import { APIService } from '../../Services/api.service';

@Component({
  selector: 'app-admin-variables',
  templateUrl: './global-variables.component.html',
  styleUrls: ['./global-variables.component.sass']
})
export class AdminGlobalComponent implements OnInit {
  workdirPath = '';
  packagesPath = '';
  premisFileName = '';
  toolsPath = '';
  workdirPathHost = '';
  premisTemplatePath = '';
  premisEventTemplatePath = '';
  messageVisible = false;

  constructor(private readonly apiService: APIService) {
  }

  ngOnInit(): void {
    this.apiService
    .getVariables()
    .subscribe(data => {
      // console.log(data)
      // load and set the variables loaded from the backend
      this.workdirPath = data.work_dir_path;
      this.packagesPath = data.packages_path;
      this.premisFileName = data.premis_file_name;
      this.toolsPath = data.tools_path;
      this.workdirPathHost = data.work_dir_path_host;
      this.premisTemplatePath = data.premis_template_path;
      this.premisEventTemplatePath = data.premis_event_template_path;
    });
  }

  save(): void {
    // save the values loaded from the backend with their updates
    const data: Variables = {
      work_dir_path: this.workdirPath,
      packages_path: this.packagesPath,
      premis_file_name: this.premisFileName,
      tools_path: this.toolsPath,
      work_dir_path_host: this.workdirPathHost,
      premis_template_path: this.premisTemplatePath,
      premis_event_template_path: this.premisEventTemplatePath
    };

    this.apiService.setVariables(data)
    .subscribe(response => {
      // display success message
      this.messageVisible = true;
    });
  }

}
