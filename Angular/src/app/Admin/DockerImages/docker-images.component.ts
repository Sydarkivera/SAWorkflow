import { Component } from '@angular/core';

import { HttpEventType } from '@angular/common/http';
import { APIService } from '@app/Services/api.service';

@Component({
  selector: 'app-admin-images',
  templateUrl: './docker-images.component.html',
  styleUrls: ['./docker-images.component.sass']
})
export class AdminImagesComponent {
  images: Array<any>;
  selectedImage: any = { id: -1 };
  label = '';
  name = '';
  mountpoint = '';
  saveSuccess = false;

  fileName = 'Select file...';
  file: any;
  fileStatus = 0;
  modalactive = false;
  newLabel = '';
  newPath = '';
  modalMessage = false;
  uploadDone = 0;
  uploadTotal = 0;
  modalOther = '';

  errorVisible = false;

  constructor(private readonly apiService: APIService) {
    this.apiService.getDockerImages()
    .subscribe(data => {
      this.images = data as [any];
    });
  }

  selectImage(image): void {
    this.selectedImage = (image === this.selectedImage) ? { id: -1 } : image;
  }

  save(): void {
    this.apiService
      .saveDockerImage(this.selectedImage.id, this.selectedImage)
      .subscribe(data => {
        this.saveSuccess = true;
      });
  }

  openNewImageModal(): void {
    this.modalactive = true;

    this.fileName = 'Select file...';
    this.newLabel = '';
    this.newPath = '';
  }

  // validate the selected file, if it's a tar accept it, else return error.
  fileSelected(e): void {
    if (e.target.files.length > 0) {
      // check fileFormat
      if (!e.target.files[0].name.endsWith('.tar')) {
        console.error('error, wrong fileType');
        this.fileName = 'Select file...';
        this.fileStatus = 1;
      } else {
        this.file = e.target.files[0];
        this.fileName = this.file.name;
        this.fileStatus = 2;
      }
    }
  }

  importImage(): void {
    // a file is selectd, and the user has pressed upload. Submit the data to the backend.
    if (!this.file.name.endsWith('.tar')) {
      console.error('error, wrong fileType');

      return;
    }
    if (this.newLabel === '') {
      console.error('error, no name specified');

      return;
    }
    this.modalMessage = true;

    const formData: FormData = new FormData();
    formData.append('file', this.file, 'import.tar');
    formData.append('label', this.newLabel);
    formData.append('workdir', this.newPath);

    this.apiService.importDockerImage(formData)
    .subscribe(data => {
      // if (data.type == 4) {
      //   this.modules = data['body'] as [any];
      // }
      // console.log(data);
      if (data.type === HttpEventType.Response) {
        this.images.push(data.body);
        this.modalactive = false;
        this.fileName = 'Select file...';
        this.label = '';
        this.modalMessage = false;
        this.selectedImage = this.images[this.images.length - 1];
      } else if (data.type === HttpEventType.UploadProgress) {
        this.uploadDone = data.loaded;
        this.uploadTotal = data.total;
      } else {
        // this.modalOther = data["body"];
        // console.log(data);
        if ('status' in data) {
          if (data.status !== 200) {
            this.modalOther =
              `unknown error occured, status: ${data.status}`;
          }
        }
      }
    });
  }

  deleteImage(image): void {
    if (
      confirm(
        `Are you sure to delete ${image.label}\n This action is irreversible`
      )
    ) {
      this.apiService.deleteDockerImage(image.id)
      .subscribe(
        data => {
          this.images = this.images.filter(item => {
            if (item.id === image.id) {
              return false;
            }

            return true;
          });
          this.selectedImage = { id: -1 };
        },
        error => {
          if (error.status === 409) {
            this.errorVisible = true;
          }
        }
      );
    }
  }
}
