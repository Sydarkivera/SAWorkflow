import { Component } from '@angular/core';

import { HttpEventType } from '@angular/common/http';
import { Module } from '@app/Services/models';
import { APIService } from '../../Services/api.service';

@Component({
  selector: "admin",
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.sass']
})
export class AdminModulesComponent {
  modules: Array<Module>;
  images: Array<any>;
  selectedModule: any = { module_id: -1 };
  title = '';
  formJson = '';
  formJsonError = '';
  commandJsonError = '';
  resultFilters = [];
  newResultFilter = { type: 'Containing', value: '' };
  modalactive = false;
  file: any;
  fileName = 'Select file...';
  fileStatus = 0;
  messageVisible = false;
  errorVisible = false;
  errorMessage = 'Error';

  browserActive = false;
  browserPath = '';

  docsActive = false;
  commandDocsActive = false;

  constructor(private readonly apiService: APIService) {}

  ngOnInit() {
    // load initial data from server, module list
    this.apiService.getModules().subscribe(data => {
      this.modules = data as [any];
      console.log(this.modules);
    });

    this.apiService.getDockerImages().subscribe(data => {
      this.images = data as [any];
      console.log(this.images);
    });
  }

  setModule(mod) {
    // sets the data needed for a module change
    this.selectedModule = JSON.parse(JSON.stringify(mod));
    this.title = this.selectedModule.name;
    // store the jsonfields as string temporarily to allow for
    this.formJson = this.getJson(this.selectedModule.form);
  }

  addNewModule() {
    // Adding a new module only resets the data in all forms, saving the changes then creates a new module.
    this.selectedModule = { module_id: -2, form: [], type: 'Command', resultFilter: [] };
    this.title = 'New module';
    this.formJson = '[]';
  }

  deleteModule(dmodule) {
    // Before a module can be deleted a confirmation is displayed, warning the user of the risks.
    if (
      confirm(
        'Are you sure to delete ' +
          dmodule.name +
          '\n This action is irreversible'
      )
    ) {
      this.apiService.deleteModule(dmodule.module_id).subscribe(
        data => {
          this.modules = this.modules.filter(item => {
            if (item.module_id == dmodule.module_id) {
              return false;
            }

            return true;
          });
          this.selectedModule = { module_id: -1 };
        },
        error => {
          console.log(error);
          if (error.status == 409) {
            this.errorVisible = true;
            this.errorMessage = error.error;
            console.log(error.error);
          }
        }
      );
    }
  }

  selectModule(mod) {
    // if this module isn't selected already, select it. Else deselect.
    if (
      !this.selectedModule ||
      this.selectedModule.module_id != mod.module_id
    ) {
      this.setModule(mod);
    } else {
      this.selectedModule = { module_id: -1 };
    }
  }

  getJson(data) {
    return JSON.stringify(data, null, 4);
  }

  save() {
    // Save the changes from the huge form.

    // validate form json input
    try {
      this.selectedModule.form = JSON.parse(this.formJson);
      this.formJsonError = '';
    } catch (e) {
      console.log('Error', e.message);
      this.formJsonError = e.message;

      return false;
    }

    // only pass the values that are defined to the server.
    const data: Module = new Module();
    if (this.selectedModule.name) {
      console.log(data.name,  this.selectedModule.name);

      data.name = this.selectedModule.name;
      if (data.name === '') {
        this.commandJsonError = 'Name must be filled in';

        return false;
      } else {
        this.commandJsonError = '';
      }
    } else {
      this.commandJsonError = 'Name must be filled in';

      return false;
    }
    if (this.selectedModule.hidden != undefined) {
      data.hidden = this.selectedModule.hidden;
    }
    if (this.selectedModule.form != undefined) {
      data.form = this.selectedModule.form;
    }
    if (this.selectedModule.type != undefined) {
      data.type = this.selectedModule.type;
    }
    if (this.selectedModule.command != undefined) {
      data.command = this.selectedModule.command;
    }
    if (this.selectedModule.python_module != undefined) {
      data.python_module = this.selectedModule.python_module;
    }
    if (this.selectedModule.multifile != undefined) {
      data.multifile = this.selectedModule.multifile;
    }
    if (this.selectedModule.filter != undefined) {
      data.filter = this.selectedModule.filter;
    }
    if (this.selectedModule.resultFilter != undefined) {
      data.resultFilter = this.selectedModule.resultFilter;
    } else {
      data.resultFilter = '[]';
    }
    if (this.selectedModule.dockerImage != undefined) {
      data.dockerImage = this.selectedModule.dockerImage;
    }
    if (this.selectedModule.description != undefined) {
      data.description = this.selectedModule.description;
    }
    if (this.selectedModule.parallell_jobs != undefined) {
      data.parallell_jobs = this.selectedModule.parallell_jobs;
    }

    // verfiy that the tools action is implemented
    if (this.selectedModule.type == 'Command') {
      if (
        !this.selectedModule.command ||
        this.selectedModule.command.length <= 0
      ) {
        this.commandJsonError =
          'to save a new tool, the command needs to be configured';

        return false;
      }
    } else if (this.selectedModule.type == 'Python module') {
      if (
        !this.selectedModule.python_module ||
        this.selectedModule.python_module == ''
      ) {
        this.commandJsonError =
          'to save a new tool, the python file needs to be specified';

        return false;
      }
    } else if (this.selectedModule.type === 'Smart docker') {
      if (this.selectedModule.parallell_jobs <= 0 && this.selectedModule.parallell_jobs >= 100) {
        this.commandJsonError =
          'The value for number of parallell jobs must be between 1 and 100';

        return false;
      }
    }
    this.commandJsonError = '';

    console.log(data);

    // if the id isn't -2, this is an existing module which should be updated
    if (
      this.selectedModule.module_id != -2 &&
      this.selectedModule.module_id
    ) {
      this.apiService
        .saveData(this.selectedModule.module_id, data)
        .subscribe(data => {
          this.messageVisible = true;
          for (const i in this.modules) {
            const m = this.modules[i];
            if (m.module_id == data.module_id) {
              this.modules[i] = data;
              this.setModule(data);
            }
          }
        });
    } else {
      // else this is a new module which has not been saved before.
      delete this.selectedModule.module_id;
      this.apiService.createModule(data).subscribe(data => {
        this.messageVisible = true;
        this.setModule(data);
        this.modules.push(data);
        this.modules = this.modules.sort((a, b) => {
          if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
          }

          return -1;
        });
      });
    }
  }

  // activate modal for selecting a file to import
  importModule() {
    this.modalactive = true;
  }

  // validate the selected file, if it's a tar accept it, else return error.
  fileSelected(e) {
    if (e.target.files.length > 0) {
      // check fileFormat
      if (!e.target.files[0].name.endsWith('.tar')) {
        console.error('error, wrong fileType');
        this.fileName = 'Select file...';
        this.fileStatus = 1;
      } else {
        this.file = e.target.files[0];
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
    this.fileName = 'Select file...';

    const formData: FormData = new FormData();
    formData.append('file', this.file, 'import.tar');

    this.apiService.importModule(formData).subscribe(data => {
      if (data.type == HttpEventType.Response) {
        this.modules = data.body as [Module];
      }
    });
  }

  addResultFilter() {
    // add another filter for scanning the log files
    this.selectedModule.resultFilter.push({ ...this.newResultFilter });
    this.newResultFilter = { type: 'Containing', value: '' };
  }

  removeResultFilter(filter) {
    // remove a filter for scanning the log files
    const index = this.selectedModule.resultFilter.indexOf(filter);
    if (index > -1) {
      this.selectedModule.resultFilter.splice(index, 1);
    }
  }

  openFileBrowser() {
    this.browserPath =
      '/api/module/' + this.selectedModule.module_id + '/files/';
    this.browserActive = true;
  }

  openFormJsonDocs() {
    this.docsActive = true;
  }

  openModalCommandDocs() {
    this.commandDocsActive = true;
  }
}
