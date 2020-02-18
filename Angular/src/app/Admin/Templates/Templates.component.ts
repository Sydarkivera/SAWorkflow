import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

import { APIService } from "@app/Services/api.service";

interface Placeholder {
  type: string;
  order: number;
  name: string;
}

@Component({
  selector: "adminTemplates",
  templateUrl: "./Templates.component.html",
  styleUrls: ["./Templates.component.sass"]
})
export class AdminTemplatesComponent {
  templates: any[];
  modules: any[];
  selected_template_id: number = -1;
  selected_template: any = undefined;
  selected_process_id: number = -1;
  selected_process: any = undefined;
  placeholderLocation: number;
  placeholderTemplate: number;
  placeholderName = "";
  createModalActive = false;
  newTemplateName = "";
  messageVisible = false;
  errorVisible = false;

  constructor(private apiService: APIService) {}

  // load templates and modules at init
  ngOnInit() {
    this.apiService.getTemplates().subscribe(data => {
      this.templates = data as [any];
    });
    this.apiService.getModules().subscribe(data => {
      this.modules = data as [any];
    });
  }

  createTemplateModal() {
    //Activate modal for creation of a new template
    this.createModalActive = true;
    this.newTemplateName = "";
  }

  createNewTemplate() {
    //actuall creation of new template
    let data = { templateName: this.newTemplateName };
    this.apiService.postTemplate(data).subscribe(data => {
      // console.log(data);
      this.templates.push(data);
      this.newTemplateName = "";
      this.createModalActive = false;
    });
  }

  save() {
    //save the changes made in a template to the server
    let data = {
      templateName: this.selected_template.name,
      template_id: this.selected_template_id
    };
    this.apiService.postTemplate(data).subscribe(data => {
      this.messageVisible = true;
      for (let i in this.templates) {
        let temp = this.templates[i];
        if (temp.template_id == this.selected_template_id) {
          this.templates[i].name = this.selected_template.name;
        }
      }
    });
  }

  // delete a template
  deleteTemplate(template) {
    if (
      confirm(
        'Are you sure to delete "' +
          template.name +
          '"\n This action is irreversible'
      )
    ) {
      this.apiService.deleteTemplate(template.template_id).subscribe(
        data => {
          // console.log(data);
          this.templates = this.templates.filter(item => {
            if (item.template_id == template.template_id) {
              return false;
            }
            return true;
          });
          this.selected_process = undefined;
          this.selected_process_id = -1;
        },
        error => {
          console.log(error);
          if (error.status == 409) {
            console.log("409 error, display error message");
            this.errorVisible = true;
          }
        }
      );
    }
  }

  // select a template. If it is already selected, unselect it
  selectTemplate(template) {
    if (this.selected_template_id != template.template_id) {
      this.selected_template_id = template.template_id;
      this.selected_template = template;
      //Download template data
      this.apiService.getTemplate(this.selected_template_id).subscribe(data => {
        this.selected_template = data;
        console.log(data);
      });
    } else {
      this.selected_template_id = -1;
      this.selected_template = undefined;
    }
  }

  // select a process. If it is already selected, unselect it
  selectProcess(process) {
    if (this.selected_process_id != process.process_id) {
      this.selected_process = process;
      this.selected_process_id = process.process_id;
    } else {
      this.selected_process = undefined;
      this.selected_process_id = -1;
    }
  }

  // update a value for one of the processes (it's form value)
  setProcessValue(id, value) {
    let values = this.selected_process.value;
    values[id] = value;
    let data = { value: values };
    this.apiService
      .saveProcess(data, this.selected_process_id)
      .subscribe(data => {
        // console.log('data chagned')
        // console.log(data);
      });
  }

  // get a process value. use default if none are set
  getProcessValue(id) {
    let values = this.selected_process.value;
    if (id in values) {
      return values[id];
    }
    let form = this.selected_process.form;
    for (let i in form) {
      if (form[i].identifier == id) {
        if ("default" in form[i]) {
          return form[i].default;
        }
      }
    }
    return "";
  }

  // Delete a process
  deleteProcess(process) {
    this.apiService.deleteProcess(process.process_id).subscribe(data => {});
    this.selected_template.processes = this.selected_template.processes.filter(
      item => {
        return item.process_id != process.process_id;
      }
    );
    // move up all processes below
    let data = [];
    for (let index in this.selected_template.processes) {
      let item = this.selected_template.processes[index];
      if (item.type != "placeholder" && item.order > process.order) {
        item.order -= 1;
        data.push({ order: item.order, process_id: item.process_id });
      }
    }
    this.apiService
      .reorderTemplateProcesses(data, this.selected_template_id)
      .subscribe(data => {
        // console.log(data);
      });
    // update the visuals
    this.selected_template.processes = this.selected_template.processes.sort(
      (a, b) => {
        if (a.order > b.order) {
          return 1;
        }
        return -1;
      }
    );
  }

  // Simply add a process to the bottom of the list
  addProcessLast(module_id) {
    var order = 0;
    if (this.selected_template.processes.length > 0) {
      order =
        this.selected_template.processes[
          this.selected_template.processes.length - 1
        ].order + 1;
    }
    this.apiService
      .addProcess({
        order: order,
        module: module_id,
        template: this.selected_template_id
      })
      .subscribe(data => {
        this.selected_template.processes = data;
      });
  }

  // ---------------- (( Dragging)) ---------------- //

  moveUp(process) {
    let data = [];
    data.push({ order: process.order - 1, process_id: process.process_id });
    // swap places of process and the one above
    for (let i = 0; i < this.selected_template.processes.length; i++) {
      let p = this.selected_template.processes[i];
      if (p.order == process.order - 1) {
        data.push({ order: p.order + 1, process_id: p.process_id });
        // console.log(i);/
        this.selected_template.processes[i].order += 1;
        this.selected_template.processes[i + 1].order -= 1;
        break;
      }
    }
    this.apiService
      .reorderTemplateProcesses(data, this.selected_template_id)
      .subscribe(data => {
        // console.log(data);
      });

    this.selected_template.processes = this.selected_template.processes.sort(
      (a, b) => {
        if (a.order > b.order) {
          return 1;
        }
        return -1;
      }
    );
  }

  moveDown(process) {
    let data = [];
    data.push({ order: process.order + 1, process_id: process.process_id });
    // swap places of process and the one below
    for (let i = 0; i < this.selected_template.processes.length; i++) {
      let p = this.selected_template.processes[i];
      if (p.order == process.order + 1) {
        data.push({ order: p.order - 1, process_id: p.process_id });
        this.selected_template.processes[i].order -= 1;
        this.selected_template.processes[i - 1].order += 1;
        break;
      }
    }
    this.apiService
      .reorderTemplateProcesses(data, this.selected_template_id)
      .subscribe(data => {
        // console.log(data);
      });

    this.selected_template.processes = this.selected_template.processes.sort(
      (a, b) => {
        if (a.order > b.order) {
          return 1;
        }
        return -1;
      }
    );
  }

  // store the data of the dragged object in the event
  dragStart(e, id, type, name) {
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("type", type);
    e.dataTransfer.setData("name", name);
    this.placeholderName = name;
  }

  onDrop(e) {
    // calculate the new order for the dropped element
    let dropOrder = Math.ceil(this.placeholderLocation);
    if (dropOrder < 0) {
      dropOrder = 0;
    }

    // if the dropped element is a module, add it
    if (e.dataTransfer.getData("type") == "module") {
      let data = [];
      // move down all items under existingIndex
      for (let index in this.selected_template.processes) {
        let item = this.selected_template.processes[index];
        // console.log(this.package.processes[index]);
        if (item.type != "placeholder" && item.order >= dropOrder) {
          item.order += 1;
          data.push({ order: item.order, process_id: item.process_id }); // updates to push to backend
        }
      }

      //submit reorder:
      this.apiService
        .reorderTemplateProcesses(data, this.selected_template_id)
        .subscribe(data => {
          // console.log(data);
        });

      //add process temporarily until the request is completed
      let newProcess = {
        order: dropOrder,
        process_id: 100,
        module: e.dataTransfer.getData("id"),
        name: e.dataTransfer.getData("name")
      };

      this.selected_template.processes.splice(dropOrder, 0, newProcess);

      this.apiService
        .addProcess({
          order: dropOrder,
          module: e.dataTransfer.getData("id"),
          template: this.selected_template_id
        })
        .subscribe(data => {
          this.selected_template.processes = data;
          this.selected_process = undefined;
          this.selected_process_id = -1;
        });
    } else {
      // else if the dropped element is a process, reorder the elements in the list
      let startOrder = -1;
      var movedProcessIndex;
      let data = [];
      for (let index in this.selected_template.processes) {
        let item = this.selected_template.processes[index];
        if (item.process_id == e.dataTransfer.getData("id")) {
          startOrder = item.order;
          movedProcessIndex = index;
        }
      }

      if (startOrder > dropOrder) {
        // the item was dragged up. items from dropOrder to startOrder should be moved down.
        for (let index in this.selected_template.processes) {
          let item = this.selected_template.processes[index];
          if (
            item.type != "placeholder" &&
            item.order < startOrder &&
            item.order >= dropOrder
          ) {
            item.order += 1;
            data.push({ order: item.order, process_id: item.process_id });
          }
        }
        this.selected_template.processes[movedProcessIndex].order = dropOrder;
        data.push({
          order: this.selected_template.processes[movedProcessIndex].order,
          process_id: this.selected_template.processes[movedProcessIndex]
            .process_id
        });
      } else {
        // the item was dragged down. items smaller than startOrder and larger than dropOrder shall be moved up.
        for (let index in this.selected_template.processes) {
          let item = this.selected_template.processes[index];
          if (
            item.type != "placeholder" &&
            item.order > startOrder &&
            item.order < dropOrder
          ) {
            item.order -= 1;
            data.push({ order: item.order, process_id: item.process_id });
          }
        }
        this.selected_template.processes[movedProcessIndex].order =
          dropOrder - 1;
        data.push({
          order: this.selected_template.processes[movedProcessIndex].order,
          process_id: this.selected_template.processes[movedProcessIndex]
            .process_id
        });
      }
      // push changes to api
      this.apiService
        .reorderTemplateProcesses(data, this.selected_template_id)
        .subscribe(data => {
          // console.log(data);
        });
      this.onRelease(undefined);

      this.selected_template.processes = this.selected_template.processes.sort(
        (a, b) => {
          if (a.order > b.order) {
            return 1;
          }
          return -1;
        }
      );
    }
  }

  onRelease(e) {
    // remove the placeholder
    this.selected_template.processes = this.selected_template.processes.filter(
      item => {
        return item["type"] != "placeholder";
      }
    );
  }

  allowDrop(e, index: number) {
    //set ghost image to show where you will drop.
    e.preventDefault();
    var element = e.target as HTMLElement;

    if (Math.abs(index % 1) > 0.4 && Math.abs(index % 1) < 0.6) {
      return;
    }
    if (
      e.pageY - element.getBoundingClientRect().top >
      element.offsetHeight * 0.5
    ) {
      // drop below elements

      var ind = index + 0.5;
      if (ind != this.placeholderLocation) {
        this.placeholderLocation = ind;
        this.onRelease(undefined);
        let temp = <Placeholder>{
          type: "placeholder",
          order: ind,
          name: this.placeholderName
        };
        this.selected_template.processes.splice(index + 1, 0, temp);
      }
    } else {
      //drop above element.
      var ind = index - 0.5;
      if (ind != this.placeholderLocation) {
        this.placeholderLocation = ind;
        this.onRelease(undefined);
        console.log(e.dataTransfer.getData("name"));
        let temp = <Placeholder>{
          type: "placeholder",
          order: ind,
          name: this.placeholderName
        };
        this.selected_template.processes.splice(index, 0, temp);
      }
    }
    this.placeholderTemplate = this.selected_template_id;
  }

  allowDropTop(e) {
    // create a placeholder at the correct place
    e.preventDefault();
    //calculate order. Order will be 0.5 lower than first visible.
    var order = -0.5;
    this.placeholderLocation = order;
    this.placeholderTemplate = this.selected_template_id;
    this.onRelease(undefined);

    let temp = <Placeholder>{
      type: "placeholder",
      order: order,
      name: this.placeholderName
    };
    this.selected_template.processes.push(temp);
    this.selected_template.processes = this.selected_template.processes.sort(
      (a, b) => {
        if (a.order > b.order) {
          return 1;
        }
        return -1;
      }
    );
  }
}
