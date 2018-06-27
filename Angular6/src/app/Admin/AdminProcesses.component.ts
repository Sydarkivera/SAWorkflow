import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

// import { PackageDetailService } from '../PackageDetail/PackageDetail.service';
import { ModuleService } from './Module.service';

interface Placeholder {
    type: string;
    order: number;
    name: string;
}


@Component({
  selector: 'admin',
  templateUrl: './AdminProcesses.component.html',
  styleUrls: ['./AdminProcesses.component.css']
})
export class AdminProcessesComponent {
  workDir = "";
  startTemplate: any = {processes: []};
  endTemplate: any = {processes: []};
  selected_process: any;
  selected_process_id: number = -1;
  placeholderLocation: number;
  placeholderTemplate: number;
  modules: [any];
  templates: [any, any] = [undefined, undefined];

  constructor(private moduleService: ModuleService) {
  }

  ngOnInit() {
    this.moduleService.getTemplate(0).subscribe((data) => {
      console.log(data);
      this.startTemplate = data;
      this.templates[0] = data;
    });
    this.moduleService.getTemplate(1).subscribe((data) => {
      console.log(data);
      this.endTemplate = data;
      this.templates[1] = data;
    });
    this.moduleService.getModules().subscribe((data) => {
      this.modules = data as [any];
      // this.setModule(this.modules[this.modules.length-1]);
    });
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

  deleteProcess(process, template_id) {
    this.moduleService.deleteProcess(process.process_id).subscribe((data) => {
    });
    this.templates[template_id].processes = this.templates[template_id].processes.filter((item) => {
      return item.process_id != process.process_id;
    })
    // move up all processes below
    let data = []
    for (let index in this.templates[template_id].processes) {
      let item = this.templates[template_id].processes[index];
      if (item.type != 'placeholder' && item.order > process.order) {
        item.order -= 1;
        data.push({"order": item.order, "process_id":item.process_id});
      }
    }
    this.moduleService.reorderProcesses(data, template_id).subscribe((data) => {
      // console.log(data);
    });

    this.templates[template_id].processes = this.templates[template_id].processes.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
       return -1;
    });
  }

  //dragging:
  moveUp(process, template_id) {
    let data = [];
    data.push({"order": (process.order - 1), "process_id": process.process_id});
    //find the one below
    // console.table(this.package.processes);
    var below;
    for (let i = 0; i < this.templates[template_id].processes.length ; i++) {
      let p = this.templates[template_id].processes[i];
      if (p.order == process.order - 1) {
        data.push({"order": (p.order + 1), "process_id": p.process_id});
        // console.log(i);/
        this.templates[template_id].processes[i].order += 1;
        this.templates[template_id].processes[i + 1].order -= 1;
        break;
      }
    }
    // console.table(data);
    // console.table(this.package.processes);
    // this.packageService.reorderProcesses(data, this.package.package_id).subscribe((data) => {
    //   // console.log(data);
    // });
    this.moduleService.reorderProcesses(data, template_id).subscribe((data) => {
      console.log(data);
    });

    this.templates[template_id].processes = this.templates[template_id].processes.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
       return -1;
    });
  }

  moveDown(process, template_id) {
    let data = [];
    data.push({"order": (process.order + 1), "process_id": process.process_id});
    //find the one below
    // console.table(this.package.processes);
    var below;
    for (let i = 0; i < this.templates[template_id].processes.length ; i++) {
      let p = this.templates[template_id].processes[i];
      if (p.order == process.order + 1) {
        data.push({"order": (p.order - 1), "process_id": p.process_id});
        // console.log(i);/
        this.templates[template_id].processes[i].order -= 1;
        this.templates[template_id].processes[i - 1].order += 1;
        break;
      }
    }
    // console.table(data);
    // console.table(this.package.processes);
    // this.packageService.reorderProcesses(data, this.package.package_id).subscribe((data) => {
    //   // console.log(data);
    // });
    this.moduleService.reorderProcesses(data, template_id).subscribe((data) => {
      console.log(data);
    });

    this.templates[template_id].processes = this.templates[template_id].processes.sort((a, b) => {
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

  onDrop(e, template_id) {
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
      for (let index in this.templates[template_id].processes) {
        let item = this.templates[template_id].processes[index];
        // console.log(this.package.processes[index]);
        if (item.type != 'placeholder' && item.order >= dropOrder) {
          item.order += 1;
          data.push({"order": item.order, "process_id":item.process_id}); // updates to push to backend
        }
      }
      // console.log(data);

      //submit reorder:
      this.moduleService.reorderProcesses(data, template_id).subscribe((data) => {
        console.log(data);
      });

      //add process
      let newProcess = {
        "order": dropOrder,
        "process_id": 100,
        "module": e.dataTransfer.getData('id'),
        "name": e.dataTransfer.getData('name')
      }

      this.templates[template_id].processes.splice(dropOrder, 0, newProcess);

      this.moduleService.addProcess({"order": dropOrder, "module": e.dataTransfer.getData('id'), "template": template_id}).subscribe((data) => {
        console.log(data);
      });

      // console.log(this.package.processes);
    } else {

      let startOrder = -1;
      var movedProcessIndex;
      let data = [];
      for (let index in this.templates[template_id].processes) {
        let item = this.templates[template_id].processes[index];
        if (item.process_id == e.dataTransfer.getData('id')) {
          startOrder = item.order;
          movedProcessIndex = index;
        }
      }

      if (startOrder > dropOrder) { // the item was dragged up. items from dropOrder to startOrder should be moved down.
        for (let index in this.templates[template_id].processes) {
          let item = this.templates[template_id].processes[index];
          if (item.type != 'placeholder' && item.order < startOrder && item.order >= dropOrder) {
            item.order += 1;
            data.push({"order": item.order, "process_id":item.process_id});
          }
        }
        this.templates[template_id].processes[movedProcessIndex].order = dropOrder;
        data.push({"order": this.templates[template_id].processes[movedProcessIndex].order, "process_id":this.templates[template_id].processes[movedProcessIndex].process_id});
      } else { // the item was dragged down. items smaller than startOrder and larger than dropOrder shall be moved up.
        for (let index in this.templates[template_id].processes) {
          let item = this.templates[template_id].processes[index];
          if (item.type != 'placeholder' && item.order > startOrder && item.order < dropOrder) {
            item.order -= 1;
            data.push({"order": item.order, "process_id":item.process_id});
          }
        }
        this.templates[template_id].processes[movedProcessIndex].order = dropOrder - 1;
        data.push({"order": this.templates[template_id].processes[movedProcessIndex].order, "process_id":this.templates[template_id].processes[movedProcessIndex].process_id});
      }
      // push changes to api
      this.moduleService.reorderProcesses(data, template_id).subscribe((data) => {
        console.log(data);
      });
      this.onRelease(undefined);

      this.templates[template_id].processes = this.templates[template_id].processes.sort((a, b) => {
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
    this.templates[0].processes = this.templates[0].processes.filter((item) => {
      return item['type'] != 'placeholder'
    });
    this.templates[1].processes = this.templates[1].processes.filter((item) => {
      return item['type'] != 'placeholder'
    });
  }
//set ghost image to show where you will drop.
  allowDrop(e, index: number, template_id) {
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
        this.templates[template_id].processes.splice(index + 1, 0, temp);
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
        this.templates[template_id].processes.splice(index, 0, temp);
      }
    }
    this.placeholderTemplate = template_id;
    // console.log(element.offsetHeight);


    // e.preventDefault();
  }

  allowDropTop(e, template_id) {
    e.preventDefault();
    //calculate order. Order will be 0.5 lower than first visible.
    var order = -0.5;
    this.placeholderLocation = order;
    this.placeholderTemplate = template_id;
    this.onRelease(undefined);
    // this.templates[template_id].processes = this.package.processes.filter((item) => {
      // return item.type != 'placeholder'
    // });
    let temp = <Placeholder> {type: "placeholder", order: order, name: e.dataTransfer.getData('name')};
    this.templates[template_id].processes.push(temp);
    this.templates[template_id].processes = this.templates[template_id].processes.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
       return -1;
    });

  }

}
