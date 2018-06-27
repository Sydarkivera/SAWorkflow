import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ModuleService {
  packagesURL = '/api/module/';

  constructor(private http: HttpClient) { }

  saveData(id, data) {
    return this.http.post(this.packagesURL + id + '/', data);
  }

  getTemplate(id) {
    return this.http.get('/api/template/' + id + '/');
  }

  // getPackage(id: number) {
  //   return this.http.get(this.packagesURL + id + '/');
  // }
  //
  getModules() {
    return this.http.get('/api/module/');
  }

  addProcess(process) {
    return this.http.post('/api/process/', process);
  }

  reorderProcesses(data, template_id) {
    return this.http.put('/api/template/'+template_id+'/process/', data);
  }

  deleteProcess(id) {
    return this.http.delete('/api/process/'+id+'/');
  }
  //
  // saveProcess(data, id) {
  //   return this.http.put('/api/process/'+id+'/', data);
  // }
  //
  // getLogFile(path, process_id) {
  //   return this.http.get('/process/'+process_id+'/'+path, { responseType: 'text' });
  // }
  //
  // startWorkflow(package_id) {
  //   // this.client.fetch('/package/'+package_id+'/execute/', {
  //   //     method: "POST",
  //   // })
  //   this.http.post('/package/'+package_id+'/execute/', {}).subscribe(() => {
  //
  //   });
  // }
}
