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
    this.modalProcess = undefined;

    if (type == 'info_log') {
      // fetch info log
      this.apiService.getProcessLogs(process.process_id).subscribe((data:any) => {
        

        this.modalLoading = false;
        this.modalData = data.logs;
        this.modalProcess = process;
      })
      // this.modalType = 'info';
      // console.log(process.logs)
      // this.apiService.getLogFile(type, process.process_id).subscribe((data) => {
      //   this.modalLoading = false;
      //   this.modalData = this.sanitizeLog(data);
      // });
    } else {
      this.modalLoading = false;
      this.modalProcess = process;
      // console.log(process.errors)
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

  getFilePath(filePath) {
    const pParts = this.modalProcess.log_path.split('/')
    const fParts = filePath.split('/')
    for (var i = 0; i < pParts.length; i++) {
      if (pParts[i] !== fParts[i]) {
        break;
      }
    }
    let res = ""
    for (var j = i; j < fParts.length; j++) {
      res += '/' + fParts[j]
    }
    return res;
  }

  getDuration(process: any) {
    
    if (!process || !process.start_time) {
      return ''
    }
    const start = new Date(process.start_time);
    let end = new Date();
    if (process.end_time) {
      end = new Date(process.end_time);
    }

    return this.formatDuration(end.getTime() - start.getTime());
  }

  zeroPad(n, width, z='0') {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  formatDuration(dt) {
    const milli = Math.floor((dt/100) % 10);
    const seconds = Math.floor((dt/1000) % 60);
    const minutes = Math.floor((dt/60000) % 60);
    const hours = Math.floor(dt/3600000);
    if (dt < 60 * 1000) { // less than 60 seconds
      return `${seconds}.${this.zeroPad(milli, 1)}s`
    } else { // less than 1 day
      return `${this.zeroPad(hours, 2)}:${this.zeroPad(minutes, 2)}:${this.zeroPad(seconds, 2)}`
    }
  }
}
