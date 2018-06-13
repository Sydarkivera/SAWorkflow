import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PackagesService {
  packagesURL = '/api/package/';

  constructor(private http: HttpClient) { }

  getPackages() {
    return this.http.get(this.packagesURL);
  }
}
