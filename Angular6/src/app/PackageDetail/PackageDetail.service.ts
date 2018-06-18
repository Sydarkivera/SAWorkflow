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

  // this.client.fetch('/api/package/'+package_id+'/process/', {
  //     method: "PUT",
  //     body: json(data)
  // })
}
