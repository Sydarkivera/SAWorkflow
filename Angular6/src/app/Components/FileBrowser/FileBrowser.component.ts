import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

import { APIService } from '../../Services/api.service';

@Component({
  selector: 'filebrowser',
  templateUrl: './FileBrowser.component.html',
  styleUrls: ['./FileBrowser.component.sass']
})
export class FileBrowserComponent {

  @Input() package_id: number;
  @Input() path: string;
  @Input() active: boolean = false;
  @Output() activeChange = new EventEmitter<boolean>();
  @Input() selectedFiles: any = undefined;

  levels: any[] = [[]]
  fullPath: string[] = []
  selectedLevel = -1
  selectedFile: any = undefined;

  files: any[]

  contextMenuPos = {x: -1, y: -1}
  innerModalVisible = false
  innerModalValue = "";
  innerModalType = "";

  @HostListener('document:click', ['$event'])
  clickedOutside($event){
    // here you can hide your menu
    if ($event.button == 0) {
      this.contextMenuPos['x'] = -1;
      this.contextMenuPos['y'] = -1;
    }
  }

  constructor(private apiService: APIService) {

  }

  closeModal() {
    this.active = false;
    this.activeChange.emit(this.active);
  }

  ngOnInit() {
    // root level files is fetched from path input
    this.apiService.getFiles(this.path).subscribe((data) => {
      this.levels[0] = data as [any];
    });
  }

  calculatePath(index, file) {
    let path = "";
    for (let i = 0; i < index; i++) {
      path += this.fullPath[i] + '/';
    }
    path += file.name;
    return path
  }

  openNewLevel(index, file) {
    // event.preventDefault();
    // event.stopPropagation();
    this.selectedLevel = index;
    this.selectedFile = file;

    while(this.levels.length > index+1) {
      this.levels.pop();
      this.fullPath.pop();
    }

    if (file.type == "folder") {
      let path = this.calculatePath(index, file);

      this.apiService.getFiles(this.path, path).subscribe((data) => {
        this.levels.push(data);
        this.fullPath.push(file.name);
      });
    }
  }

  openContextMenu(event, index, file) {
    event.preventDefault();
    event.stopPropagation();
    this.contextMenuPos['x'] = event.clientX;
    this.contextMenuPos['y'] = event.clientY;

    //select the rightclicked item:
    this.openNewLevel(index, file)
  }

  openRenameModal() {
    this.innerModalValue = this.selectedFile.name;
    this.innerModalType = 'rename';
    this.innerModalVisible = true;
  }

  rename() {
    let body = {}
    body['path'] = this.calculatePath(this.selectedLevel, this.selectedFile);
    body['name'] = this.innerModalValue;
    this.apiService.renameFile(this.path, body).subscribe((data) => {
      console.log(data)
      this.selectedFile.name = this.innerModalValue;
      this.levels.pop();
      if (this.selectedFile.type == 'folder') {
        this.levels.pop();
        this.fullPath[this.fullPath.length-1] = this.innerModalValue
        this.selectedFile = undefined
        this.selectedLevel = -1
      }
      this.levels.push(data);
      this.innerModalVisible = false;
    })
  }

  getDownloadPath() {
    let path = this.calculatePath(this.selectedLevel, this.selectedFile);

    return this.path + "?path=" + path + "&download"
  }

  openDeleteModal() {
    this.innerModalVisible = true;
    this.innerModalType =  'delete';
  }

  delete() {
    if (!this.selectedFile) {
      return;
    }
    let path = this.calculatePath(this.selectedLevel, this.selectedFile);
    this.apiService.deleteFile(this.path, path).subscribe((data) => {
      if (this.selectedFile.type == 'folder') {
        this.fullPath.pop()
        this.levels.pop()
      }
      this.levels.pop()
      this.levels.push(data);
      this.selectedFile.name = this.fullPath[this.fullPath.length - 1]
      this.selectedFile.type = 'folder';
      this.selectedLevel -= 1;
      this.closeInnerModal()
    });
  }

  closeInnerModal() {
    console.log('close inner modeal')
    this.innerModalVisible = false
  }
}
