import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

//services
import { APIService } from "../Services/api.service";

interface Placeholder {
  type: string;
  order: number;
  name: string;
}

@Component({
  selector: "package",
  templateUrl: "./Package.component.html",
  styleUrls: ["./Package.component.sass"]
})
export class PackageComponent {
  id: number;
  package: any;
  modules: [any];
  placeholderLocation: number = -1;
  placeholderName = "";
  selected_process_id: number = -1;
  selected_process = undefined;
  FileBrowserOpen = false;
  modalActive = false;
  templateName = "";

  currentProcesses = []

  constructor(
    private apiService: APIService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.package = {
      name: "Name"
    };
  }

  ngOnInit() {
    // when id exists, load the package
    this.route.parent.params.subscribe(params => {
      this.id = params["id"];
      this.apiService.getPackage(this.id).subscribe(data => {
        this.package = data;
        console.log(data["processes"]);
      });
    });
    // load modules right away
    this.apiService.getModules().subscribe(data => {
      this.modules = data as [any];
    });
  }

  getVisibleProcesses() {
    if (!this.package || !this.package.processes) {
      return [];
    }
    return this.package.processes.filter((item) => {
      return !item.hidden;
    });
  }

  //exectute the workflow
  startWorkflow() {
    this.apiService.startWorkflow(this.package.package_id);
    this.router.navigate(["packages", this.package.package_id, "status"]);
  }

  //select a process. If it is alreade selected, deselect it.
  selectProcess(process) {
    if (this.selected_process_id != process.process_id) {
      this.selected_process_id = process.process_id;
      this.selected_process = process;
    } else {
      this.selected_process_id = -1;
      this.selected_process = undefined;
    }
  }

  // delete process
  deleteProcess(process) {
    this.apiService.deleteProcess(process.process_id).subscribe(data => {});
    this.package.processes = this.package.processes.filter(item => {
      return item.process_id != process.process_id;
    });
    // move up all processes below
    let data = [];
    for (let index in this.package.processes) {
      let item = this.package.processes[index];
      if (item.type != "placeholder" && item.order > process.order) {
        item.order -= 1;
        data.push({ order: item.order, process_id: item.process_id });
      }
    }
    this.apiService
      .reorderPackageProcesses(data, this.package.package_id)
      .subscribe(data => {});

    this.package.processes = this.package.processes.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
      return -1;
    });
  }

  // add a new process to bottom of the list
  addProcessLast(module_id) {
    var order = 0;
    if (this.package.processes.length > 0) {
      order =
        this.package.processes[this.package.processes.length - 1].order + 1;
    }
    this.apiService
      .addProcess({
        order: order,
        module: module_id,
        package: this.package.package_id
      })
      .subscribe(data => {
        this.package.processes = data;
      });
  }

  // modify a process form value
  setProcessValue(id, value) {
    let values = this.selected_process.value;
    values[id] = value;
    let data = { value: values };
    this.apiService
      .saveProcess(data, this.selected_process_id)
      .subscribe(data => {});
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

  //check if the list of processes is empty
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

  // move up a process on step
  moveUp(process) {
    let data = [];
    data.push({ order: process.order - 1, process_id: process.process_id });
    //find the one below
    var below;
    for (let i = 0; i < this.package.processes.length; i++) {
      let p = this.package.processes[i];
      if (p.order == process.order - 1) {
        data.push({ order: p.order + 1, process_id: p.process_id });
        this.package.processes[i].order += 1;
        this.package.processes[i + 1].order -= 1;
        break;
      }
    }
    this.apiService
      .reorderPackageProcesses(data, this.package.package_id)
      .subscribe(data => {});

    this.package.processes = this.package.processes.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
      return -1;
    });
  }

  // move down a process on step
  moveDown(process) {
    let data = [];
    data.push({ order: process.order + 1, process_id: process.process_id });
    //find the one below
    var below;
    for (let i = 0; i < this.package.processes.length; i++) {
      let p = this.package.processes[i];
      if (p.order == process.order + 1) {
        data.push({ order: p.order - 1, process_id: p.process_id });
        // console.log(i);/
        this.package.processes[i].order -= 1;
        this.package.processes[i - 1].order += 1;
        break;
      }
    }
    this.apiService
      .reorderPackageProcesses(data, this.package.package_id)
      .subscribe(data => {});

    this.package.processes = this.package.processes.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
      return -1;
    });
  }

  // store info about the moving object in the event
  dragStart(e, id, type, name) {
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("type", type);
    e.dataTransfer.setData("name", name);
    this.placeholderName = name;
  }

  // drop the element
  onDrop(e) {
    // calculate where to drop the new element
    let dropOrder = Math.ceil(this.placeholderLocation);
    if (dropOrder < 0) {
      dropOrder = 0;
    }

    // if the element is a module, create a new process
    if (e.dataTransfer.getData("type") == "module") {
      let data = [];
      // move down all items under existingIndex
      for (let index in this.package.processes) {
        let item = this.package.processes[index];
        if (item.type != "placeholder" && item.order >= dropOrder) {
          item.order += 1;
          data.push({ order: item.order, process_id: item.process_id }); // updates to push to backend
        }
      }

      //submit reorder:
      this.apiService
        .reorderPackageProcesses(data, this.package.package_id)
        .subscribe(data => {});

      //add temporary process
      let newProcess = {
        order: dropOrder,
        process_id: 100,
        module: e.dataTransfer.getData("id"),
        name: this.placeholderName
      };

      this.package.processes.splice(dropOrder, 0, newProcess);

      this.apiService
        .addProcess({
          order: dropOrder,
          module: e.dataTransfer.getData("id"),
          package: this.package.package_id
        })
        .subscribe(data => {
          this.package.processes = data;
        });
    } else {
      // if the elemenet is a process, move around the processes
      let startOrder = -1;
      var movedProcessIndex;
      let data = [];
      for (let index in this.package.processes) {
        let item = this.package.processes[index];
        if (item.process_id == e.dataTransfer.getData("id")) {
          startOrder = item.order;
          movedProcessIndex = index;
        }
      }

      if (startOrder > dropOrder) {
        // the item was dragged up. items from dropOrder to startOrder should be moved down.
        for (let index in this.package.processes) {
          let item = this.package.processes[index];
          if (
            item.type != "placeholder" &&
            item.order < startOrder &&
            item.order >= dropOrder
          ) {
            item.order += 1;
            data.push({ order: item.order, process_id: item.process_id });
          }
        }
        this.package.processes[movedProcessIndex].order = dropOrder;
        data.push({
          order: this.package.processes[movedProcessIndex].order,
          process_id: this.package.processes[movedProcessIndex].process_id
        });
      } else {
        // the item was dragged down. items smaller than startOrder and larger than dropOrder shall be moved up.
        for (let index in this.package.processes) {
          let item = this.package.processes[index];
          if (
            item.type != "placeholder" &&
            item.order > startOrder &&
            item.order < dropOrder
          ) {
            item.order -= 1;
            data.push({ order: item.order, process_id: item.process_id });
          }
        }
        this.package.processes[movedProcessIndex].order = dropOrder - 1;
        data.push({
          order: this.package.processes[movedProcessIndex].order,
          process_id: this.package.processes[movedProcessIndex].process_id
        });
      }
      // push changes to api
      this.apiService
        .reorderPackageProcesses(data, this.package.package_id)
        .subscribe(data => {});

      this.package.processes = this.package.processes
        .filter(item => {
          return item["type"] != "placeholder";
        })
        .sort((a, b) => {
          if (a.order > b.order) {
            return 1;
          }
          return -1;
        });
    }
  }

  onRelease(e) {
    //remove placeholder
    this.package.processes = this.package.processes.filter(item => {
      return item["type"] != "placeholder";
    });
  }

  //set ghost image to show where you will drop.
  allowDrop(e, index: number) {
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
        this.package.processes = this.package.processes.filter(item => {
          return item.type != "placeholder";
        });
        let temp = <Placeholder>{
          type: "placeholder",
          order: ind,
          name: this.placeholderName
        };
        this.package.processes.splice(index + 1, 0, temp);
      }
    } else {
      //drop above element.
      var ind = index - 0.5;
      if (ind != this.placeholderLocation) {
        this.placeholderLocation = ind;
        this.package.processes = this.package.processes.filter(item => {
          return item.type != "placeholder";
        });
        let temp = <Placeholder>{
          type: "placeholder",
          order: ind,
          name: this.placeholderName
        };
        this.package.processes.splice(index, 0, temp);
      }
    }
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
    this.package.processes = this.package.processes.filter(item => {
      return item.type != "placeholder";
    });
    let temp = <Placeholder>{
      type: "placeholder",
      order: order,
      name: this.placeholderName
    };
    this.package.processes.push(temp);
    this.package.processes = this.package.processes.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
      return -1;
    });
  }
}
