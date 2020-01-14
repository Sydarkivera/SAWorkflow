import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { GraphColors, formatBytes } from '../Utilities';

import { APIService } from '../Services/api.service';


@Component({
  selector: 'packageFiles',
  templateUrl: './PackageFiles.component.html',
  // styleUrls: ['./PackageFiles.component.sass']
})
export class PackageFilesComponent {
  id: number = -1;

  browserActive = false;
  browserPath = "";


  constructor(private apiService: APIService, private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
       this.id = +params['id'];
       this.browserPath = "/api/package/"+this.id+"/files/"
    });
  }
}
