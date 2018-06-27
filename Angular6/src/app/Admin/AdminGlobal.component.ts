import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

// import { PackageDetailService } from '../PackageDetail/PackageDetail.service';
import { ModuleService } from './Module.service';


@Component({
  selector: 'admin',
  templateUrl: './AdminGlobal.component.html',
  styleUrls: ['./AdminGlobal.component.css']
})
export class AdminGlobalComponent {
  workDir = ""

  constructor(private moduleService: ModuleService) {
  }

  ngOnInit() {
    // this.packageService.getModules().subscribe((data) => {
    //   this.modules = data as [any];
    //   this.setModule(this.modules[this.modules.length-1]);
    // });
  }


}
