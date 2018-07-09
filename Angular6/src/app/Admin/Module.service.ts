import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class ModuleService {
  packagesURL = '/api/module/';

  constructor(private http: HttpClient) { }

  saveData(id, data) {
    return this.http.post(this.packagesURL + id + '/', data);
  }

  getTemplates() {
    return this.http.get('/api/template/');
  }

  getTemplate(id) {
    return this.http.get('/api/template/' + id + '/');
  }

  createNewTemplate(data) {
    return this.http.post('/api/template/', data);
  }

  deleteTemplate(template_id) {
    return this.http.delete('/api/template/' + template_id + '/');
  }

  // getPackage(id: number) {
  //   return this.http.get(this.packagesURL + id + '/');
  // }
  //
  getModules() {
    return this.http.get('/api/module/');
  }

  createModule(data) {
    console.log(data)
    return this.http.put(this.packagesURL, data);
  }

  deleteModule(module_id) {
    return this.http.delete(this.packagesURL + module_id + '/');
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

  importModule(formData) {
    // create a http-post request and pass the form
    // tell it to report the upload progress
    const req = new HttpRequest('POST', '/api/module/import/', formData, {
      reportProgress: true
    });
    return this.http.request(req);
  }

  getVariables() {
    return this.http.get('/api/variables/global/');
  }

  setVariables(data) {
    return this.http.post('/api/variables/global/', data);
  }


  saveProcess(data, id) {
    return this.http.put('/api/process/'+id+'/', data);
  }
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
