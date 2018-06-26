import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { PackageDetailService } from '../PackageDetail/PackageDetail.service';
import { ModuleService } from './Module.service';


@Component({
  selector: 'admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css']
})
export class AdminComponent {
  modules: [any];
  selected_module = undefined;
  title: ""
  formJson: string = "";
  commandJson: string = "";
  formJsonError = "";
  commandJsonError = "";
  resultFilters = undefined;
  newResultFilter = {type: 'Containing', value: ''}

  constructor(private packageService: PackageDetailService, private moduleService: ModuleService) {
  }

  ngOnInit() {
    this.packageService.getModules().subscribe((data) => {
      this.modules = data as [any];
      this.setModule(this.modules[this.modules.length-1]);
    });
  }

  setModule(mod) {
    console.log(mod);
    this.selected_module = JSON.parse(JSON.stringify(mod));
    this.title = this.selected_module.name;
    this.formJson = this.getJson(this.selected_module.form);
    this.commandJson = this.getJson(this.selected_module.command);
  }

  selectModule(mod) {
    if (!this.selected_module || this.selected_module.module_id != mod.module_id) {
      this.setModule(mod);
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

  getJson(data) {
    return JSON.stringify(data, null, 4);
  }

  exportModule() {

  }

  save() {
    //validate first!
    console.log(this.selected_module.type);

    try {
      this.selected_module.form = JSON.parse(this.formJson);
      this.formJsonError = "";
    } catch (e) {
      console.log("Error", e.message);
      this.formJsonError = e.message;
      return false;
    }

    try {
      this.selected_module.command = JSON.parse(this.commandJson);
      this.commandJsonError = "";
    } catch (e) {
      console.log("Error", e.message);
      this.commandJsonError = e.message;
      return false;
    }

    let data = {};
    data["name"] = this.selected_module.name;
    data["hidden"] = this.selected_module.hidden;
    data["form"] = this.selected_module.form;
    data["type"] = this.selected_module.type;
    data["command"] = this.selected_module.command;
    data["python_module"] = this.selected_module.python_module;
    data["multifile"] = this.selected_module.multifile;
    data["filter"] = this.selected_module.filter;
    data["resultFilter"] = this.selected_module.resultFilter;

    this.moduleService.saveData(this.selected_module.module_id, data).subscribe((data) => {
      // console.log(data);
      for (let i in this.modules) {
        let m = this.modules[i];
        if (m.module_id == data["module_id"]) {
          // m = data;
          this.modules[i] = data;
          this.setModule(data);
        }
      }
    });
  }

  setJSONForm(event) {
    // console.log(event)

    try {
      this.selected_module.form = JSON.parse(event)
    } catch (e) {
      console.log("Error", e.message);
      return false;
    }

  }

  addResultFilter() {
    this.selected_module.resultFilter.push({...this.newResultFilter});
    this.newResultFilter = {type: 'Containing', value: ''}
  }

  removeResultFilter(filter) {
    var index = this.selected_module.resultFilter.indexOf(filter);
    if (index > -1) {
      this.selected_module.resultFilter.splice(index, 1);
    }
  }


}
