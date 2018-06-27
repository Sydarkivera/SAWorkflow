import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

// import { PackagesService } from './Packages.service'
import { PackageDetailService } from './PackageDetail.service';
import { FileBrowserComponent } from '../FileBrowser/FileBrowser.component';


interface Placeholder {
    type: string;
    order: number;
    name: string;
}

@Component({
  selector: 'package',
  // template: '<p>PackageDetail</p>'
  templateUrl: './Package.component.html',

  styleUrls: ['./Package.component.css']
})
export class PackageComponent {
  id: number;
  package: any;
  modules: [any];
  placeholderLocation: number = -1;
  selected_process_id: number = -1;
  selected_process = undefined;
  FileBrowserOpen = false;
  modalActive = false;
  templateName = "";

  constructor(private packageService: PackageDetailService, private route: ActivatedRoute, private router: Router) {
    this.package = {
      name: "Name"
    };
  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
       this.id = +params['id'];
       this.packageService.getPackage(this.id).subscribe((data) => {
         console.log(data);
         console.log(data['processes'])
         this.package = data;
       });
    });
    this.packageService.getModules().subscribe((data) => {
      console.log(data);
      // this.package = data;
      this.modules = data as [any];
    });
    // this.client.fetch('/api/module/')
    //     .then(response => response.json())
    //     .then(data => {
    //         this.modules = data;
    //
    //     });
  }

  saveAsTemplate() {
    this.modalActive = true;
  }

  saveNewTemplate() {
    //backendcall with package_id and templateName.
    let data = {"package_id": this.package.package_id, "templateName": this.templateName};
    this.packageService.postTemplate(data).subscribe((data) => {
      console.log(data);
      // this.package = data;
      // this.modules = data as [any];
    });
    this.modalActive = false;
  }

  startWorkflow() {
    this.packageService.startWorkflow(this.package.package_id);
    this.router.navigate(['packages', this.package.package_id, 'status']);
  }

  selectProcess(process) {
    if (this.selected_process_id != process.process_id) {
      this.selected_process_id = process.process_id;
      this.selected_process = process;
      // this.active_process_values = process.value;
      console.log(process.value);
    } else {
      this.selected_process_id = -1;
      this.selected_process = undefined;
    }
    // console.log(this.selected_process_id);
  }

  deleteProcess(process) {
    this.packageService.deleteProcess(process.process_id).subscribe((data) => {
    });
    this.package.processes = this.package.processes.filter((item) => {
      return item.process_id != process.process_id;
    })
    // move up all processes below
    let data = []
    for (let index in this.package.processes) {
      let item = this.package.processes[index];
      if (item.type != 'placeholder' && item.order > process.order) {
        item.order -= 1;
        data.push({"order": item.order, "process_id":item.process_id});
      }
    }
    this.packageService.reorderProcesses(data, this.package.package_id).subscribe((data) => {
      // console.log(data);
    });

    this.package.processes = this.package.processes.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
       return -1;
    });
  }

  addProcessLast(module_id) {
    var order = 0;
    if (this.package.processes.length > 0) {
      order = this.package.processes[this.package.processes.length-1].order + 1;
    }
    this.packageService.addProcess({"order": order, "module": module_id, "package": this.package.package_id}).subscribe((data) => {
      console.log(data);
      this.package.processes = data;
    });
  }


  setProcessValue(id, value) {
      let values = this.selected_process.value;
      values[id] = value;
      let data = {"value": values};
      this.packageService.saveProcess(data, this.selected_process_id).subscribe((data) => {
        console.log('data chagned')
        console.log(data);
      })
      // this.client.fetch('/api/process/'+this.selected_process+'/', {
      //     method: "PUT",
      //     body: json(val),
      // }).then(response => response.json())
      // .then(data => {
      //     this.package.processes.splice(process_index, 1, data);
      // });
      // this.selected_process = -1;
  }

  isListEmpty() {
    if (this.package == undefined || this.package.processes == undefined) {
      return true;
    }
    for (let item of this.package.processes) {
      if (!item.hidden) {
        return false;
      }
    }
    return true;
  }

  moveUp(process) {
    let data = [];
    data.push({"order": (process.order - 1), "process_id": process.process_id});
    //find the one below
    // console.table(this.package.processes);
    var below;
    for (let i = 0; i < this.package.processes.length ; i++) {
      let p = this.package.processes[i];
      if (p.order == process.order - 1) {
        data.push({"order": (p.order + 1), "process_id": p.process_id});
        // console.log(i);/
        this.package.processes[i].order += 1;
        this.package.processes[i + 1].order -= 1;
        break;
      }
    }
    // console.table(data);
    // console.table(this.package.processes);
    this.packageService.reorderProcesses(data, this.package.package_id).subscribe((data) => {
      // console.log(data);
    });

    this.package.processes = this.package.processes.sort((a, b) => {
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
    for (let i = 0; i < this.package.processes.length ; i++) {
      let p = this.package.processes[i];
      if (p.order == process.order + 1) {
        data.push({"order": (p.order - 1), "process_id": p.process_id});
        // console.log(i);/
        this.package.processes[i].order -= 1;
        this.package.processes[i - 1].order += 1;
        break;
      }
    }
    // console.table(data);
    // console.table(this.package.processes);
    this.packageService.reorderProcesses(data, this.package.package_id).subscribe((data) => {
      // console.log(data);
    });

    this.package.processes = this.package.processes.sort((a, b) => {
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
      for (let index in this.package.processes) {
        let item = this.package.processes[index];
        // console.log(this.package.processes[index]);
        if (item.type != 'placeholder' && item.order >= dropOrder) {
          item.order += 1;
          data.push({"order": item.order, "process_id":item.process_id}); // updates to push to backend
        }
      }
      // console.log(data);

      //submit reorder:
      this.packageService.reorderProcesses(data, this.package.package_id).subscribe((data) => {
        console.log(data);
      });

      //add process
      let newProcess = {
        "order": dropOrder,
        "process_id": 100,
        "module": e.dataTransfer.getData('id'),
        "name": e.dataTransfer.getData('name')
      }

      this.package.processes.splice(dropOrder, 0, newProcess);

      this.packageService.addProcess({"order": dropOrder, "module": e.dataTransfer.getData('id'), "package": this.package.package_id}).subscribe((data) => {
        // console.log(data);
        this.package.processes = data;
      });

      // console.log(this.package.processes);
    } else {

      let startOrder = -1;
      var movedProcessIndex;
      let data = [];
      for (let index in this.package.processes) {
        let item = this.package.processes[index];
        if (item.process_id == e.dataTransfer.getData('id')) {
          startOrder = item.order;
          movedProcessIndex = index;
        }
      }

      if (startOrder > dropOrder) { // the item was dragged up. items from dropOrder to startOrder should be moved down.
        for (let index in this.package.processes) {
          let item = this.package.processes[index];
          if (item.type != 'placeholder' && item.order < startOrder && item.order >= dropOrder) {
            item.order += 1;
            data.push({"order": item.order, "process_id":item.process_id});
          }
        }
        this.package.processes[movedProcessIndex].order = dropOrder;
        data.push({"order": this.package.processes[movedProcessIndex].order, "process_id":this.package.processes[movedProcessIndex].process_id});
      } else { // the item was dragged down. items smaller than startOrder and larger than dropOrder shall be moved up.
        for (let index in this.package.processes) {
          let item = this.package.processes[index];
          if (item.type != 'placeholder' && item.order > startOrder && item.order < dropOrder) {
            item.order -= 1;
            data.push({"order": item.order, "process_id":item.process_id});
          }
        }
        this.package.processes[movedProcessIndex].order = dropOrder - 1;
        data.push({"order": this.package.processes[movedProcessIndex].order, "process_id":this.package.processes[movedProcessIndex].process_id});
      }
      // push changes to api
      this.packageService.reorderProcesses(data, this.package.package_id).subscribe((data) => {
        console.log(data);
      });

      this.package.processes = this.package.processes.filter((item) => {
        return item['type'] != 'placeholder'
      }).sort((a, b) => {
        if (a.order > b.order) {
          return 1;
        }
         return -1;
      });

    }


    //changing order:
    // let p1 = this.processes[processindex-1];
    // let p2 = this.processes[processindex];
    // let temp = p1.order;
    // p1.order = p2.order;
    // p2.order = temp;
    // this.processes.sort(function(a, b) {
    //     return a.order - b.order;
    // });
    // //upload change to server.
    // let data = [{"order":p2.order, "process_id":p2.process_id}, {"order":p1.order, "process_id":p1.process_id}];
    // this.client.fetch('/api/package/'+package_id+'/process/', {
    //     method: "PUT",
    //     body: json(data)
    // })

    console.groupEnd();
  }

  onRelease(e) {
    //reset
    this.package.processes = this.package.processes.filter((item) => {
      return item['type'] != 'placeholder'
    });
  }
//set ghost image to show where you will drop.
  allowDrop(e, index: number) {
  console.log(index)
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
        this.package.processes = this.package.processes.filter((item) => {
          return item.type != 'placeholder'
        });
        let temp = <Placeholder> {type: "placeholder", order: ind, name: e.dataTransfer.getData('name')};
        this.package.processes.splice(index + 1, 0, temp);
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
        this.package.processes = this.package.processes.filter((item) => {
          return item.type != 'placeholder'
        });
        let temp = <Placeholder> {type: "placeholder", order: ind, name: e.dataTransfer.getData('name')};
        this.package.processes.splice(index, 0, temp);
      }
    }
    // console.log(element.offsetHeight);


    // e.preventDefault();
  }

  allowDropTop(e) {
    e.preventDefault();
    //calculate order. Order will be 0.5 lower than first visible.
    var order = -0.5;
    for (let index in this.package.processes) {
      let item = this.package.processes[index];
      if (item.hidden) {
        order += 1;
      } else {
        break;
      }
    }
    this.placeholderLocation = order;
    this.package.processes = this.package.processes.filter((item) => {
      return item.type != 'placeholder'
    });
    let temp = <Placeholder> {type: "placeholder", order: order, name: e.dataTransfer.getData('name')};
    this.package.processes.push(temp);
    this.package.processes = this.package.processes.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
       return -1;
    });

  }

  //POST to create a new process from package_id and module_id
  // post module, package and order
  // let data = {"module":module.module_id, "package":package_id}
  // if (this.processes.length > 0) {
  //     data['order'] = this.processes[this.processes.length-1].order+1;
  // } else {
  //     data['order'] = 0;
  // }
  // this.client.fetch('/api/process/', {
  //     method: "POST",
  //     body: json(data),
  // })
  //     .then(response => response.json())
  //     .then(data => {
  //         this.processes = data;
  //     });
}
