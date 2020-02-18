// music.service.ts
import { EventEmitter } from '@angular/core';

export class PackageService {

packageEmitter$: EventEmitter<object>;

constructor() {

      this.packageEmitter$ = new EventEmitter();

   }

updatePackageData(packageData): void {

      this.packageEmitter$.emit(packageData);

   }

}
