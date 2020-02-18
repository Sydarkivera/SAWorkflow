import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { HttpEventType } from '@angular/common/http';
import { APIService } from '../../Services/api.service';

@Component({
  selector: 'app-filebrowser',
  templateUrl: './FileBrowser.component.html',
  styleUrls: ['./FileBrowser.component.sass']
})
export class FileBrowserComponent implements OnInit {
  @Input() set active(active: boolean) {
    this._active = active;
    if (this._active) {
      this.loadInitialData();
    }
  }
  get active(): boolean {
    return this._active;
  }

  @Input() canCreateFolder = true;
  @Input() package_id: number;
  @Input() path: string;
  @Input() isModal = true;
  @Output() readonly activeChange = new EventEmitter<boolean>();
  @Input() selectedFiles: any = undefined;

  levels: Array<any> = [[]];
  fullPath: Array<string> = [];
  selectedLevel = -1;
  selectedFile: any = undefined;

  selected = [];

  files: Array<any>;

  contextMenuPos = { x: -1, y: -1 };
  innerModalVisible = false;
  innerModalValue = '';
  innerModalType = '';
  innerModalFile: any;
  private _active = false;

  @HostListener('document:click', ['$event']) clickedOutside($event): void {
    // here you can hide your menu
    if ($event.button === 0) {
      this.contextMenuPos.x = -1;
      this.contextMenuPos.y = -1;
    }
  }

  constructor(private readonly apiService: APIService) {}

  closeModal(): void {
    this._active = false;
    this.activeChange.emit(this._active);
  }

  ngOnInit(): void {
    // root level files is fetched from path input
    if (this._active) {
      this.loadInitialData();
    }
  }

  loadInitialData(): void {
    this.levels = [[]];
    this.fullPath = [];
    this.selectedLevel = -1;
    this.selectedFile = undefined;
    this.selected = [];
    this.apiService.getFiles(this.path)
    .subscribe(data => {
      this.levels[0] = data as [any];
    });
  }

  calculatePath(index, file): string {
    let path = '';
    if (file) {
      for (let i = 0; i < index; i++) {
        path += `${this.fullPath[i]}/`;
      }
      path += file.name;
    }

    return path;
  }

  openNewLevel(index: number, file): void {
    // event.preventDefault();
    // event.stopPropagation();
    this.selectedLevel = index;
    this.selectedFile = file;

    while (this.levels.length > index + 1) {
      this.levels.pop();
      this.fullPath.pop();
    }

    while (this.selected.length > index) {
      this.selected.pop();
    }

    if (file.type === 'folder') {
      const path = this.calculatePath(index, file);

      this.apiService.getFiles(this.path, path)
      .subscribe(data => {
        this.levels.push(data);
        this.fullPath.push(file.name);
      });
    }
    this.selected.push(file.name);
  }

  openContextMenu(event, index, file): void {
    event.preventDefault();
    event.stopPropagation();
    this.contextMenuPos.x = event.clientX;
    this.contextMenuPos.y = event.clientY;

    if (event.clientY > window.innerHeight - 200) {
      this.contextMenuPos.y = event.clientY - 200;
    }

    // select the rightclicked item:
    this.openNewLevel(index, file);
  }

  openRenameModal(): void {
    this.innerModalValue = this.selectedFile.name;
    this.innerModalType = 'rename';
    this.innerModalVisible = true;
  }

  rename(): void {
    const body = {
      path: this.calculatePath(this.selectedLevel, this.selectedFile),
      name: this.innerModalValue
    };
    this.apiService.renameFile(this.path, body)
    .subscribe(data => {
      this.selectedFile.name = this.innerModalValue;
      this.levels.pop();
      if (this.selectedFile.type === 'folder') {
        this.levels.pop();
        this.fullPath[this.fullPath.length - 1] = this.innerModalValue;
        this.selectedFile = undefined;
        this.selectedLevel = -1;
      }
      this.levels.push(data);
      this.closeInnerModal();
    });
  }

  getDownloadPath(): string {
    const path = this.calculatePath(this.selectedLevel, this.selectedFile);

    return `${this.path}?path=${path}&download`;
  }

  openDeleteModal(): void {
    this.innerModalVisible = true;
    this.innerModalType = 'delete';
  }

  delete(): void {
    if (!this.selectedFile) {
      return;
    }
    const path = this.calculatePath(this.selectedLevel, this.selectedFile);
    this.apiService.deleteFile(this.path, path)
    .subscribe(data => {
      if (this.selectedFile.type === 'folder') {
        this.fullPath.pop();
        this.levels.pop();
      }
      this.levels.pop();
      this.levels.push(data);
      this.selectedFile.name = this.fullPath[this.fullPath.length - 1];
      this.selectedFile.type = 'folder';
      this.selectedLevel -= 1;
      this.closeInnerModal();
    });
  }

  openUploadModal(): void {
    this.innerModalVisible = true;
    this.innerModalType = 'upload';
    this.innerModalValue = '';
  }

  openCreateFolderModal(): void {
    this.innerModalVisible = true;
    this.innerModalType = 'create';
    this.innerModalValue = '';
  }

  onFileSelected(e): void {
    if (e.target.files.length > 0) {
      // check fileFormat
      // if (!e.target.files[0].name.endsWith('.tar')) {
      //   console.error('error, wrong fileType');
      //   this.innerModalValue = "Select file...";
      //   // this.fileStatus = 1;
      // } else {
      this.innerModalFile = e.target.files[0];
      this.innerModalValue = this.innerModalFile.name;
      // this.fileStatus = 2;
      // }
    }
  }

  uploadFile(): void {
    // console.log('upload');
    if (!this.innerModalFile) {
      console.error('no file selected');

      return;
    }
    // this.modalactive = false;
    // this.fileName = "Select file...";

    const formData: FormData = new FormData();
    formData.append('file', this.innerModalFile, this.innerModalValue);

    // calculate the final path:
    let newPath = '';
    if (this.selectedFile) {
      const path = this.calculatePath(this.selectedLevel, this.selectedFile);
      if (this.selectedFile.type === 'folder') {
        // create the new folder inside this.
        newPath = `${path}/${this.innerModalValue}`;
      } else {
        // create the new folder in this folder.
        let prev = path.substr(0, path.lastIndexOf('/'));
        if (prev !== '') {
          prev += '/';
        }
        newPath = prev + this.innerModalValue;
      }
    } else {
      newPath = this.innerModalValue;
    }

    formData.append('path', newPath);
    // console.log(this.innerModalValue)
    this.apiService.uploadFile(this.path, formData)
    .subscribe(data => {
      if (data.type === HttpEventType.Response) {
        this.levels.pop();
        this.levels.push(data.body);
        this.closeInnerModal();
      }
    });
  }

  create(): void {
    if (!this.selectedFile) {
      return;
    }
    const path = this.calculatePath(this.selectedLevel, this.selectedFile);
    let newPath = '';
    if (this.selectedFile.type === 'folder') {
      // create the new folder inside this.
      newPath = `${path}/${this.innerModalValue}`;
    } else {
      // create the new folder in this folder.
      let prev = path.substr(0, path.lastIndexOf('/'));
      if (prev !== '') {
        prev += '/';
      }
      newPath = prev + this.innerModalValue;
    }
    this.apiService.createFolder(this.path, newPath)
    .subscribe(data => {
      this.levels.pop();
      this.levels.push(data);
      this.closeInnerModal();
    });
  }

  closeInnerModal(): void {
    // console.log('close inner modeal');
    this.innerModalVisible = false;
  }
}
