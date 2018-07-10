import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class APIService {

  constructor(private http: HttpClient) { }

  saveData(id, data) {
    return this.http.post('/api/module/' + id + '/', data);
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
  getModules() {
    return this.http.get('/api/module/');
  }

  createModule(data) {
    return this.http.put('/api/module/', data);
  }

  deleteModule(module_id) {
    return this.http.delete('/api/module/' + module_id + '/');
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
}
