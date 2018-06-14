import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { PackagesService } from './Packages.service'
import { PackageDetailService } from './PackageDetail.service';

@Component({
  selector: 'package',
  // template: '<p>PackageDetail</p>'
  templateUrl: './Package.component.html',

  // styleUrls: ['./packages.component.css']
})
export class PackageComponent {
  id: number;
  package: any;
  modules: [any];
  placeholderLocation: number = -1;

  constructor(private packageService: PackageDetailService, private route: ActivatedRoute) {
    this.package = {
      name: "Name"
    };
  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
       this.id = +params['id'];
       this.packageService.getPackage(this.id).subscribe((data) => {
         console.log(data);
         this.package = data;
       });
    });
    this.packageService.getModules().subscribe((data) => {
      console.log(data);
      // this.package = data;
      this.modules = data as [any];
    });
    // this.client.fetch('/api/module/')
    //     .then(response => response.json())
    //     .then(data => {
    //         this.modules = data;
    //
    //     });
  }

  dragStart(e, id, type) {
    console.log('drag start: ' + e);
    // console.log(id);
    e.dataTransfer.setData('id', id);
    e.dataTransfer.setData('type', type);
  }

  onDrop(e) {
    console.log('drop: ' + e);
    console.log(e.dataTransfer.getData('id'));
    console.log(e.dataTransfer.getData('type'));
  }

  onRelease(e) {
    //reset
    this.package.processes = this.package.processes.filter((item) => {
      return item['type'] != 'placeholder'
    });
  }

  allowDrop(e, index: number) {

    interface Placeholder {
        type: string;
        order: number;
    }
    // console.log(index);
    var element = e.target as HTMLElement;
    // console.log(e.pageY);
    // console.log(e.pageY - element.getBoundingClientRect().top);
    if (Math.abs(index % 1) > 0.4 && Math.abs(index % 1) < 0.6) {
      return
    }
    if (e.pageY - element.getBoundingClientRect().top > element.offsetHeight * 0.5) {
      // drop below elements
      // console.log('s');

      var ind = index + 0.5;
      if (ind != this.placeholderLocation) {
        console.log(ind);
        // console.log(index);
        console.log(this.placeholderLocation);
        this.placeholderLocation = ind;
        this.package.processes = this.package.processes.filter((item) => {
          return item.type != 'placeholder'
        });
        let temp = <Placeholder> {type: "placeholder", order: ind};
        this.package.processes.splice(index + 1, 0, temp);
      }

    } else {
      //drop above element.
      // this.placeholderLocation = index + 0.5;
      var ind = index - 0.5;
      if (ind != this.placeholderLocation) {
        console.log(ind);
        // console.log(index);
        console.log(this.placeholderLocation);
        this.placeholderLocation = ind;
        this.package.processes = this.package.processes.filter((item) => {
          return item.type != 'placeholder'
        });
        let temp = <Placeholder> {type: "placeholder", order: ind};
        this.package.processes.splice(index, 0, temp);
      }
    }
    // console.log(element.offsetHeight);


    e.preventDefault();
  }

  //POST to create a new process from package_id and module_id
  // post module, package and order
  // let data = {"module":module.module_id, "package":package_id}
  // if (this.processes.length > 0) {
  //     data['order'] = this.processes[this.processes.length-1].order+1;
  // } else {
  //     data['order'] = 0;
  // }
  // this.client.fetch('/api/process/', {
  //     method: "POST",
  //     body: json(data),
  // })
  //     .then(response => response.json())
  //     .then(data => {
  //         this.processes = data;
  //     });
}
