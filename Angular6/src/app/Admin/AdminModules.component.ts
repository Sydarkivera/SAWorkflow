import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { PackageDetailService } from '../PackageDetail/PackageDetail.service';
import { ModuleService } from './Module.service';


@Component({
  selector: 'admin',
  templateUrl: './AdminModules.component.html',
  styleUrls: ['./AdminModules.component.sass']
})
export class AdminModulesComponent {
  modules: any[];
  selected_module: any = { module_id: -1 };
  title: string = "";
  formJson: string = "";
  commandJson: string = "";
  formJsonError = "";
  commandJsonError = "";
  resultFilters = [];
  newResultFilter = { type: 'Containing', value: '' }
  modalactive = false;
  file: any;
  fileName = "Select file..."
  messageVisible = false

  constructor(private packageService: PackageDetailService, private moduleService: ModuleService) {
  }

  ngOnInit() {
    this.packageService.getModules().subscribe((data) => {
      this.modules = data as [any];
      this.setModule(this.modules[this.modules.length - 1]);
    });
  }

  setModule(mod) {
    console.log(mod);
    this.selected_module = JSON.parse(JSON.stringify(mod));
    this.title = this.selected_module.name;
    this.formJson = this.getJson(this.selected_module.form);
    this.commandJson = this.getJson(this.selected_module.command);
  }

  addNewModule() {
    this.selected_module = { module_id: -2, form: [], type: "Command" };
    this.title = "New module";
    this.formJson = "[]";
    this.commandJson = "[]";
  }

  deleteModule(dmodule) {
    if(confirm("Are you sure to delete " + dmodule.name)) {
      this.moduleService.deleteModule(dmodule.module_id).subscribe((data) => {
        this.modules = this.modules.filter((item) => {
          if (item.module_id == dmodule.module_id) {
            return false;
          }
          return true;
        });
        this.selected_module = { module_id: -1 };
      })
    }
  }

  selectModule(mod) {
    if (!this.selected_module || this.selected_module.module_id != mod.module_id) {
      this.setModule(mod);
    } else {
      this.selected_module = { module_id: -1 };
    }
  }

  renderCommand() {
    var res = '';

    for (let cp of this.selected_module.command) {
      res += cp.value + ' ';
    }

    return res;
  }

  getJson(data) {
    return JSON.stringify(data, null, 4);
  }

  save() {
    //validate first!

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
    if (this.selected_module.name != undefined) {
      data["name"] = this.selected_module.name;
    }
    if (this.selected_module.hidden != undefined) {
      data["hidden"] = this.selected_module.hidden;
    }
    if (this.selected_module.form != undefined) {
      data["form"] = this.selected_module.form;
    }
    if (this.selected_module.type != undefined) {
      data["type"] = this.selected_module.type;
    }
    if (this.selected_module.command != undefined) {
      data["command"] = this.selected_module.command;
    }
    if (this.selected_module.python_module != undefined) {
      data["python_module"] = this.selected_module.python_module;
    }
    if (this.selected_module.multifile != undefined) {
      data["multifile"] = this.selected_module.multifile;
    }
    if (this.selected_module.filter != undefined) {
      data["filter"] = this.selected_module.filter;
    }
    if (this.selected_module.resultFilter != undefined) {
      data["resultFilter"] = this.selected_module.resultFilter;
    }

    console.log(this.selected_module.type)
    console.log(this.selected_module.command)
    console.log(this.selected_module.python_module)
    if (this.selected_module.type == 'Command') {
      if (!this.selected_module.command || this.selected_module.command.length <= 0) {
        this.commandJsonError = "to save a new tool, the command needs to be configured";
        return false;
      }
    } else if (this.selected_module.type == 'Python module') {
      if (!this.selected_module.python_module || this.selected_module.python_module == "") {
        this.commandJsonError = "to save a new tool, the python file needs to be specified";
        return false;
      }
    }

    if (this.selected_module.module_id != -2) {
      this.moduleService.saveData(this.selected_module.module_id, data).subscribe((data) => {
        this.messageVisible = true
        for (let i in this.modules) {
          let m = this.modules[i];
          if (m.module_id == data["module_id"]) {
            this.modules[i] = data;
            this.setModule(data);
          }
        }
      });
    } else {
      delete this.selected_module.module_id
      this.moduleService.createModule(data).subscribe((data) => {
        this.messageVisible = true
        this.setModule(data);
        this.modules.push(data);
        this.modules = this.modules.sort((a, b) => {
          if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1
          }
          return -1
        })
      });
    }
  }

  importModule() {
    this.modalactive = true;
  }

  fileSelected(e) {
    // console.log(e)
    if (e.target.files.length > 0) {
      //check fileFormat
      if (!e.target.files[0].name.endsWith('.tar')) {
        console.log('error, wrong fileType');
        this.fileName = "Select file...";
      } else {
        this.file = e.target.files[0]
        this.fileName = this.file.name;
      }
    }
  }

  uploadFile() {
    // console.log('upload');
    if (!this.file.name.endsWith('.tar')) {
      console.log('error, wrong fileType');
      return;
    }
    this.modalactive = false;
    this.fileName = "Select file...";

    const formData: FormData = new FormData();
    formData.append('file', this.file, 'import.tar');

    this.moduleService.importModule(formData).subscribe((data) => {
      if (data.type == 4) {
        // console.log(data['body']);
        this.modules = data['body'] as [any];
      }
      // this.setModule(this.modules[this.modules.length - 1]);

    })
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
    this.selected_module.resultFilter.push({ ...this.newResultFilter });
    this.newResultFilter = { type: 'Containing', value: '' }
  }

  removeResultFilter(filter) {
    var index = this.selected_module.resultFilter.indexOf(filter);
    if (index > -1) {
      this.selected_module.resultFilter.splice(index, 1);
    }
  }


}
