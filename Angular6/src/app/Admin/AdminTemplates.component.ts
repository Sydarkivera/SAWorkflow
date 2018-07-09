import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { PackageDetailService } from '../PackageDetail/PackageDetail.service';
import { ModuleService } from './Module.service';

interface Placeholder {
    type: string;
    order: number;
    name: string;
}

@Component({
  selector: 'adminTemplates',
  templateUrl: './AdminTemplates.component.html',
  styleUrls: ['./AdminTemplates.component.sass']
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
  createModalActive = false
  newTemplateName = "";
  messageVisible = false;
  errorVisible = false;

  constructor(private moduleService: ModuleService) {
  }

  ngOnInit() {
    this.moduleService.getTemplates().subscribe((data) => {
      this.templates = data as [any];
      console.log(data);
      //TODO remove auto select template:
      this.selectTemplate(data[1])
    });
    this.moduleService.getModules().subscribe((data) => {
      this.modules = data as [any];
    });
  }

  createTemplateModal() {
    //modal active
    this.createModalActive = true;
    this.newTemplateName = "";
  }

  createNewTemplate() {
    //actuall creation of new template
    let data = {'templateName': this.newTemplateName}
    this.moduleService.createNewTemplate(data).subscribe((data) => {
      console.log(data);
      this.templates.push(data);
      this.newTemplateName = "";
      this.createModalActive = false;
    })
  }

  save() {
    let data = {'templateName': this.selected_template.name, 'template_id': this.selected_template_id}
    this.moduleService.createNewTemplate(data).subscribe((data) => {
      this.messageVisible = true
      for (let i in this.templates) {
        let temp = this.templates[i]
        if (temp.template_id == this.selected_template_id) {
          this.templates[i].name = this.selected_template.name;
        }
      }
    })
  }

  deleteTemplate(template) {
    this.moduleService.deleteTemplate(template.template_id).subscribe((data) => {
      // console.log(data);
      this.templates = this.templates.filter((item) => {
        if(item.template_id == template.template_id) {
          return false;
        }
        return true;
      })
      this.selected_process = undefined;
      this.selected_process_id = -1;
    }, (error) => {
      console.log(error)
      if (error.status == 409) {
        console.log('409 error, display error message')
        this.errorVisible = true;
      }
    })
  }

  selectTemplate(template) {
    if (this.selected_template_id != template.template_id) {
      this.selected_template_id = template.template_id;
      this.selected_template = template;
      //Download tempalte data
      this.moduleService.getTemplate(this.selected_template_id).subscribe((data) => {
        console.log(data);
        this.selected_template = data;
      });
    } else {
      this.selected_template_id = -1;
      this.selected_template = undefined;
    }
  }

  selectProcess(process) {
    if (this.selected_process_id != process.process_id) {
      this.selected_process = process;
      this.selected_process_id = process.process_id;
    } else {
      this.selected_process = undefined;
      this.selected_process_id = -1;
    }
  }

  setProcessValue(id, value) {
      let values = this.selected_process.value;
      values[id] = value;
      let data = {"value": values};
      this.moduleService.saveProcess(data, this.selected_process_id).subscribe((data) => {
        console.log('data chagned')
        console.log(data);
      })
  }

  deleteProcess(process) {
    console.log(process)
    this.moduleService.deleteProcess(process.process_id).subscribe((data) => {
    });
    this.selected_template.processes = this.selected_template.processes.filter((item) => {
      return item.process_id != process.process_id;
    })
    // move up all processes below
    let data = []
    for (let index in this.selected_template.processes) {
      let item = this.selected_template.processes[index];
      if (item.type != 'placeholder' && item.order > process.order) {
        item.order -= 1;
        data.push({"order": item.order, "process_id":item.process_id});
      }
    }
    this.moduleService.reorderProcesses(data, this.selected_template_id).subscribe((data) => {
      // console.log(data);
    });

    this.selected_template.processes = this.selected_template.processes.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
       return -1;
    });
  }

  addProcessLast(module_id) {
    var order = 0;
    if (this.selected_template.processes.length > 0) {
      order = this.selected_template.processes[this.selected_template.processes.length-1].order + 1;
    }
    this.moduleService.addProcess({"order": order, "module": module_id, "template": this.selected_template_id}).subscribe((data) => {
      console.log(data);
      this.selected_template.processes = data;
    });
  }


    //dragging:
    moveUp(process) {
      let data = [];
      data.push({"order": (process.order - 1), "process_id": process.process_id});
      //find the one below
      // console.table(this.package.processes);
      var below;
      for (let i = 0; i < this.selected_template.processes.length ; i++) {
        let p = this.selected_template.processes[i];
        if (p.order == process.order - 1) {
          data.push({"order": (p.order + 1), "process_id": p.process_id});
          // console.log(i);/
          this.selected_template.processes[i].order += 1;
          this.selected_template.processes[i + 1].order -= 1;
          break;
        }
      }
      this.moduleService.reorderProcesses(data, this.selected_template_id).subscribe((data) => {
        console.log(data);
      });

      this.selected_template.processes = this.selected_template.processes.sort((a, b) => {
        if (a.order > b.order) {
          return 1;
        }
         return -1;
      });
    }

    moveDown(process) {
      let data = [];
      data.push({"order": (process.order + 1), "process_id": process.process_id});
      //find the one below
      // console.table(this.package.processes);
      var below;
      for (let i = 0; i < this.selected_template.processes.length ; i++) {
        let p = this.selected_template.processes[i];
        if (p.order == process.order + 1) {
          data.push({"order": (p.order - 1), "process_id": p.process_id});
          this.selected_template.processes[i].order -= 1;
          this.selected_template.processes[i - 1].order += 1;
          break;
        }
      }
      this.moduleService.reorderProcesses(data, this.selected_template_id).subscribe((data) => {
        console.log(data);
      });

      this.selected_template.processes = this.selected_template.processes.sort((a, b) => {
        if (a.order > b.order) {
          return 1;
        }
         return -1;
      });
    }


      dragStart(e, id, type, name) {
        console.log('drag start: ' + e);
        // console.log(id);
        e.dataTransfer.setData('id', id);
        e.dataTransfer.setData('type', type);
        e.dataTransfer.setData('name', name);
      }

      onDrop(e) {
        console.group('dropEvent');
        // console.log('drop: ' + e);
        // console.log(e.dataTransfer.getData('id'));
        // console.log(e.dataTransfer.getData('type'));
        // console.log(this.placeholderLocation);

        // if this.placeholderLocation == -0.5, insert first
        // if this.placeholderLocation == 0.5, insert afeter first

        let dropOrder = Math.ceil(this.placeholderLocation);
        if (dropOrder < 0) {
          dropOrder = 0;
        }
        // console.log(dropOrder);

        if (e.dataTransfer.getData('type') == 'module') {

          let data = [];
          // move down all items under existingIndex
          for (let index in this.selected_template.processes) {
            let item = this.selected_template.processes[index];
            // console.log(this.package.processes[index]);
            if (item.type != 'placeholder' && item.order >= dropOrder) {
              item.order += 1;
              data.push({"order": item.order, "process_id":item.process_id}); // updates to push to backend
            }
          }
          // console.log(data);

          //submit reorder:
          this.moduleService.reorderProcesses(data, this.selected_template_id).subscribe((data) => {
            console.log(data);
          });

          //add process
          let newProcess = {
            "order": dropOrder,
            "process_id": 100,
            "module": e.dataTransfer.getData('id'),
            "name": e.dataTransfer.getData('name')
          }

          this.selected_template.processes.splice(dropOrder, 0, newProcess);

          this.moduleService.addProcess({"order": dropOrder, "module": e.dataTransfer.getData('id'), "template": this.selected_template_id}).subscribe((data) => {
            // console.log(data);
            this.selected_template.processes = data;
            this.selected_process = undefined;
            this.selected_process_id = -1;

          });

          // console.log(this.package.processes);
        } else {

          let startOrder = -1;
          var movedProcessIndex;
          let data = [];
          for (let index in this.selected_template.processes) {
            let item = this.selected_template.processes[index];
            if (item.process_id == e.dataTransfer.getData('id')) {
              startOrder = item.order;
              movedProcessIndex = index;
            }
          }

          if (startOrder > dropOrder) { // the item was dragged up. items from dropOrder to startOrder should be moved down.
            for (let index in this.selected_template.processes) {
              let item = this.selected_template.processes[index];
              if (item.type != 'placeholder' && item.order < startOrder && item.order >= dropOrder) {
                item.order += 1;
                data.push({"order": item.order, "process_id":item.process_id});
              }
            }
            this.selected_template.processes[movedProcessIndex].order = dropOrder;
            data.push({"order": this.selected_template.processes[movedProcessIndex].order, "process_id":this.selected_template.processes[movedProcessIndex].process_id});
          } else { // the item was dragged down. items smaller than startOrder and larger than dropOrder shall be moved up.
            for (let index in this.selected_template.processes) {
              let item = this.selected_template.processes[index];
              if (item.type != 'placeholder' && item.order > startOrder && item.order < dropOrder) {
                item.order -= 1;
                data.push({"order": item.order, "process_id":item.process_id});
              }
            }
            this.selected_template.processes[movedProcessIndex].order = dropOrder - 1;
            data.push({"order": this.selected_template.processes[movedProcessIndex].order, "process_id":this.selected_template.processes[movedProcessIndex].process_id});
          }
          // push changes to api
          this.moduleService.reorderProcesses(data, this.selected_template_id).subscribe((data) => {
            console.log(data);
          });
          this.onRelease(undefined);

          this.selected_template.processes = this.selected_template.processes.sort((a, b) => {
            if (a.order > b.order) {
              return 1;
            }
             return -1;
          });

        }
        console.groupEnd();
      }

      onRelease(e) {
        //reset
        this.selected_template.processes = this.selected_template.processes.filter((item) => {
          return item['type'] != 'placeholder'
        });
      }
    //set ghost image to show where you will drop.
      allowDrop(e, index: number) {
        e.preventDefault();
        // console.log(index);
        var element = e.target as HTMLElement;
        // console.log(e.pageY);
        // console.log(e.pageY - element.getBoundingClientRect().top);
        if (Math.abs(index % 1) > 0.4 && Math.abs(index % 1) < 0.6) {
          return
        }
        if (e.pageY - element.getBoundingClientRect().top > element.offsetHeight * 0.5) {
          // drop below elements
          // console.log('s');

          var ind = index + 0.5;
          if (ind != this.placeholderLocation) {
            // console.log(ind);
            // console.log(index);
            // console.log(this.placeholderLocation);
            this.placeholderLocation = ind;
            // this.package.processes = this.package.processes.filter((item) => {
            //   return item.type != 'placeholder'
            // });
            this.onRelease(undefined)
            let temp = <Placeholder> {type: "placeholder", order: ind, name: e.dataTransfer.getData('name')};
            this.selected_template.processes.splice(index + 1, 0, temp);
          }

        } else {
          //drop above element.
          // this.placeholderLocation = index + 0.5;
          var ind = index - 0.5;
          if (ind != this.placeholderLocation) {
            // console.log(ind);
            // console.log(index);
            // console.log(this.placeholderLocation);
            this.placeholderLocation = ind;
            this.onRelease(undefined)
            let temp = <Placeholder> {type: "placeholder", order: ind, name: e.dataTransfer.getData('name')};
            this.selected_template.processes.splice(index, 0, temp);
          }
        }
        this.placeholderTemplate = this.selected_template_id;
        // console.log(element.offsetHeight);


        // e.preventDefault();
      }

      allowDropTop(e) {
        e.preventDefault();
        //calculate order. Order will be 0.5 lower than first visible.
        var order = -0.5;
        this.placeholderLocation = order;
        this.placeholderTemplate = this.selected_template_id;
        this.onRelease(undefined);
        // this.templates[template_id].processes = this.package.processes.filter((item) => {
          // return item.type != 'placeholder'
        // });
        let temp = <Placeholder> {type: "placeholder", order: order, name: e.dataTransfer.getData('name')};
        this.selected_template.processes.push(temp);
        this.selected_template.processes = this.selected_template.processes.sort((a, b) => {
          if (a.order > b.order) {
            return 1;
          }
           return -1;
        });

      }

}
