import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { PackageDetailService } from '../PackageDetail/PackageDetail.service';
import { ModuleService } from './Module.service';


@Component({
  selector: 'adminTemplates',
  templateUrl: './AdminTemplates.component.html',
  styleUrls: ['./AdminTemplates.component.sass']
})
export class AdminTemplatesComponent {
  templates: [any];
  selected_template_id: number

  constructor(private moduleService: ModuleService) {
  }

  ngOnInit() {
    this.moduleService.getTemplates().subscribe((data) => {
      this.templates = data as [any];
      console.log(data);
      // this.setModule(this.modules[this.modules.length-1]);
    });
  }

  selectTemplate(template) {
    if (this.selected_template_id != template.template_id) {
      this.selected_template_id = template.template_id;
    } else {
      this.selected_template_id = -1;
    }
  }

}
