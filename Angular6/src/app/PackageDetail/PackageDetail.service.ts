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
}
