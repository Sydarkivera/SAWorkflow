import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { APIService } from '../Services/api.service';


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
  fileStatus = 0;
  messageVisible = false
  errorVisible = false

  browserActive = true;

  constructor(private apiService: APIService) {
  }

  ngOnInit() {
    //load initial data from server, module list
    this.apiService.getModules().subscribe((data) => {
      this.modules = data as [any];
    });
  }

  setModule(mod) {
    // sets the data needed for a module change
    this.selected_module = JSON.parse(JSON.stringify(mod));
    this.title = this.selected_module.name;
    // store the jsonfields as string temporarily to allow for
    this.formJson = this.getJson(this.selected_module.form);
    this.commandJson = this.getJson(this.selected_module.command);
  }

  addNewModule() {
    // Adding a new module only resets the data in all forms, saving the changes then creates a new module.
    this.selected_module = { module_id: -2, form: [], type: "Command" };
    this.title = "New module";
    this.formJson = "[]";
    this.commandJson = "[]";
  }

  deleteModule(dmodule) {
    // Before a module can be deleted a confirmation is displayed, warning the user of the risks.
    if(confirm("Are you sure to delete " + dmodule.name + "\n This action is irreversible")) {
      this.apiService.deleteModule(dmodule.module_id).subscribe((data) => {
        this.modules = this.modules.filter((item) => {
          if (item.module_id == dmodule.module_id) {
            return false;
          }
          return true;
        });
        this.selected_module = { module_id: -1 };
      }, (error) => {
        if (error.status == 409) {
          this.errorVisible = true;
        }
      })
    }
  }

  selectModule(mod) {
    // if this module isn't selected already, select it. Else deselect.
    if (!this.selected_module || this.selected_module.module_id != mod.module_id) {
      this.setModule(mod);
    } else {
      this.selected_module = { module_id: -1 };
    }
  }

  getJson(data) {
    return JSON.stringify(data, null, 4);
  }

  save() {
    // Save the changes from the huge form.

    //validate form json input
    try {
      this.selected_module.form = JSON.parse(this.formJson);
      this.formJsonError = "";
    } catch (e) {
      console.log("Error", e.message);
      this.formJsonError = e.message;
      return false;
    }

    //validate command json input
    try {
      this.selected_module.command = JSON.parse(this.commandJson);
      this.commandJsonError = "";
    } catch (e) {
      console.log("Error", e.message);
      this.commandJsonError = e.message;
      return false;
    }

    //only pass the values that are defined to the server.
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

    //verfiy that the tools action is implemented
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

    // if the id isn't -2, this is an existing module which should be updated
    if (this.selected_module.module_id != -2) {
      this.apiService.saveData(this.selected_module.module_id, data).subscribe((data) => {
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
      // else this is a new module which has not been saved before.
      delete this.selected_module.module_id
      this.apiService.createModule(data).subscribe((data) => {
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

  //activate modal for selecting a file to import
  importModule() {
    this.modalactive = true;
  }

  //validate the selected file, if it's a tar accept it, else return error.
  fileSelected(e) {
    if (e.target.files.length > 0) {
      //check fileFormat
      if (!e.target.files[0].name.endsWith('.tar')) {
        console.error('error, wrong fileType');
        this.fileName = "Select file...";
        this.fileStatus = 1;
      } else {
        this.file = e.target.files[0]
        this.fileName = this.file.name;
        this.fileStatus = 2;
      }
    }
  }

  uploadFile() {
    // a file is selectd, and the user has pressed upload. Submit the data to the backend.
    if (!this.file.name.endsWith('.tar')) {
      console.error('error, wrong fileType');
      return;
    }
    this.modalactive = false;
    this.fileName = "Select file...";

    const formData: FormData = new FormData();
    formData.append('file', this.file, 'import.tar');

    this.apiService.importModule(formData).subscribe((data) => {
      if (data.type == 4) {
        this.modules = data['body'] as [any];
      }

    })
  }

  addResultFilter() {
    // add another filter for scanning the log files
    this.selected_module.resultFilter.push({ ...this.newResultFilter });
    this.newResultFilter = { type: 'Containing', value: '' }
  }

  removeResultFilter(filter) {
    // remove a filter for scanning the log files
    var index = this.selected_module.resultFilter.indexOf(filter);
    if (index > -1) {
      this.selected_module.resultFilter.splice(index, 1);
    }
  }


}
