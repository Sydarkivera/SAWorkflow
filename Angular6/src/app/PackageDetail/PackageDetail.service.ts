import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PackageDetailService {
  packagesURL = '/api/package/';

  constructor(private http: HttpClient) { }

  getAllPackages() {
    return this.http.get(this.packagesURL);
  }

  getPackage(id: number) {
    return this.http.get(this.packagesURL + id + '/');
  }

  setActiveTemplate(template_id: number, package_id: number, data) {
    return this.http.put('/api/template/' + template_id + '/package/' + package_id + '/', data);
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
    this.http.post('/api/package/'+package_id+'/execute/', {}).subscribe(() => {

    });
  }

  finishPackage(package_id) {
    this.http.post('/api/package/'+package_id+'/finish/', {}).subscribe(() => {

    });
  }

  removePackage(id) {
    return this.http.delete('/api/package/'+id+'/');
  }

  getTemplates() {
    return this.http.get('/api/template/');
  }

  postTemplate(data) {
    return this.http.post('/api/template/', data);
  }

  getStatsDashboard() {
    return this.http.get('/api/stats/dashboard/');
  }

}
