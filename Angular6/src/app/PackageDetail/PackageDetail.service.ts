import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PackageDetailService {
  packagesURL = '/api/package/';

  constructor(private http: HttpClient) { }

  getPackage(id: number) {
    return this.http.get(this.packagesURL + id + '/');
  }

  getModules() {
    return this.http.get('/api/module/');
  }

  addProcess(process) {
    return this.http.post('/api/process/', process);
  }

  reorderProcesses(data, package_id) {
    return this.http.put('/api/package/'+package_id+'/process/', data);
  }

  deleteProcess(id) {
    return this.http.delete('/api/process/'+id+'/');
  }

  saveProcess(data, id) {
    return this.http.put('/api/process/'+id+'/', data);
  }

  getLogFile(path, process_id) {
    return this.http.get('/process/'+process_id+'/'+path, { responseType: 'text' });
  }

  startWorkflow(package_id) {
    // this.client.fetch('/package/'+package_id+'/execute/', {
    //     method: "POST",
    // })
    this.http.post('/package/'+package_id+'/execute/', {}).subscribe(() => {

    });
  }

  removePackage(id) {

    return this.http.delete('/api/package/'+id+'/');

  //   let body = {"removeWorkdir": this.removeWorkdir};
  //   this.client.fetch('/api/package/'+package_id+'/', {
  //       method: "DELETE",
  //       body: json(body),
  //   })
  //       .then(response => {
  //           console.log(response.json());
  //           window.location.href = "/";
  //       });
  // }
  }
}
