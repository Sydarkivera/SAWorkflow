import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { PackageDetailService } from '../PackageDetail/PackageDetail.service';


@Component({
  selector: 'admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css']
})
export class AdminComponent {
  modules: [any];
  selected_module = undefined;

  constructor(private packageService: PackageDetailService) {
  }

  ngOnInit() {
    this.packageService.getModules().subscribe((data) => {
      this.modules = data as [any];
    });
  }

  selectModule(mod) {
    if (!this.selected_module || this.selected_module.module_id != mod.module_id) {
      this.selected_module = mod;
      console.log(mod);
    } else {
      this.selected_module = undefined;
    }
  }

  renderCommand() {
    var res = '';

    for(let cp of this.selected_module.command) {
      res += cp.value + ' ';
    }

    return res;
  }
}
