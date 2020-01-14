import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from "@angular/router";

import { APIService } from '../Services/api.service';

@Component({
  selector: 'packageStatus',
  templateUrl: './PackageStatus.component.html',

  styleUrls: ['./PackageStatus.component.sass']
})
export class PackageStatusComponent {
  id: number;
  package: any;
  modalActive = false;
  modalData = '';
  interval;
  modalactive = false;
  modalLoading = true;
  modalType = 'info';
  modalProcess = undefined;

  messageActive = false;
  messageText = "";

  constructor(private apiService: APIService, private route: ActivatedRoute, private router: Router) {
    this.package = {
      name: "Name"
    };
    router.events.subscribe((val) => {
        clearInterval(this.interval);
    });
  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
       this.id = +params['id'];
        this.updateData();
    });

    clearInterval(this.interval);
    // this.interval = setInterval(() => {
    //   this.updateData();
    // }, 3000);
  }

  showModal(process, type) {
    //load data fromserver...
    this.modalactive = true;
    this.modalLoading = true;
    this.modalData = "";

    if (type == 'info_log') {
      this.modalLoading = false;
      this.modalData = process.logs
      // this.modalType = 'info';
      console.log(process.logs)
      // this.apiService.getLogFile(type, process.process_id).subscribe((data) => {
      //   this.modalLoading = false;
      //   this.modalData = this.sanitizeLog(data);
      // });
    } else {
      this.modalLoading = false;
      console.log(process.errors)
      // this.modalType = 'error';
      // this.modalProcess = process;
      this.modalData = process.errors
    }
  }

  startWorkflow() {
    this.apiService.startWorkflow(this.package.package_id);
    this.messageActive = true;
    this.messageText = "Workflow is now started"
    this.updateData();
  }

  finishPackage() {
    this.messageActive = true;
    this.messageText = "Package is now marked as finished. Depending on your configuration is is now safe to delete it"
    this.apiService.finishPackage(this.package.package_id);
    this.updateData();
  }

  updateData() {
    this.apiService.getPackage(this.id).subscribe((data) => {
      this.package = data;
      // console.log(data);
    });
  }

  removePackage() {
    if (confirm("Are you sure to delete \"" + this.package.name + "\"\n This action is irreversible")) {
      this.apiService.removePackage(this.id).subscribe((data) => {
        this.messageActive = true;
        this.messageText = "Package was successfully deleted. You will now be redirected to packagelist"
      });
      setTimeout(() => {
        this.router.navigate(['packages']);
      }, 2000)
    }
  }

  abortProcess() {
    if (confirm("Are you sure to abort the process? You can restart it later.")) {


      // find running process
      // let processId = null;
      // for (let p of this.package.processes) {
      //   if (processId.status === 'Aborted') {
      //     processId = p.id;
      //   }
      // }

      this.apiService.abortPackage(this.id).subscribe((data) => {
        this.messageActive = true;
        this.messageText = "Package was successfully aborted."
      });
      // setTimeout(() => {
      //   this.router.navigate(['packages']);
      // }, 2000)
    }
  }

  sanitizeLog(data) {
    // convert the file to html friendly text
    if (data) {
      return data.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split("\n").join("<br>");
    }
    return "Log is empty";
  }
}
