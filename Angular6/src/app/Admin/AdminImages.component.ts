import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

import { APIService } from "../Services/api.service";

@Component({
  selector: "admin-images",
  templateUrl: "./AdminImages.component.html",
  styleUrls: ["./AdminImages.component.sass"]
})
export class AdminImagesComponent {
  images: any[];
  selected_image: any = { id: -1 };
  label = "";
  name = "";
  mountpoint = "";
  saveSuccess = false;

  fileName = "Select file...";
  file: any;
  fileStatus = 0;
  modalactive = false;
  newLabel = "";
  newPath = "";
  modalMessage = false;
  uploadDone = 0;
  uploadTotal = 0;
  modalOther = "";

  errorVisible = false;

  constructor(private apiService: APIService) {
    this.apiService.getDockerImages().subscribe(data => {
      this.images = data as [any];
    });
  }

  ngOnInit() {}

  selectImage(image) {
    this.selected_image = image;
  }

  save() {
    this.apiService
      .saveDockerImage(this.selected_image.id, this.selected_image)
      .subscribe(data => {
        this.saveSuccess = true;
      });
  }

  openNewImageModal() {
    this.modalactive = true;
  }

  //validate the selected file, if it's a tar accept it, else return error.
  fileSelected(e) {
    if (e.target.files.length > 0) {
      //check fileFormat
      if (!e.target.files[0].name.endsWith(".tar")) {
        console.error("error, wrong fileType");
        this.fileName = "Select file...";
        this.fileStatus = 1;
      } else {
        this.file = e.target.files[0];
        this.fileName = this.file.name;
        this.fileStatus = 2;
      }
    }
  }

  importImage() {
    // a file is selectd, and the user has pressed upload. Submit the data to the backend.
    if (!this.file.name.endsWith(".tar")) {
      console.error("error, wrong fileType");
      return;
    }
    if (this.newLabel == "") {
      console.error("error, no name specified");
      return;
    }
    this.modalMessage = true;

    const formData: FormData = new FormData();
    formData.append("file", this.file, "import.tar");
    formData.append("label", this.newLabel);
    formData.append("workdir", this.newPath);

    this.apiService.importDockerImage(formData).subscribe(data => {
      // if (data.type == 4) {
      //   this.modules = data['body'] as [any];
      // }
      // console.log(data);
      if (data.type == 4) {
        this.images.push(data["body"]);
        this.modalactive = false;
        this.fileName = "Select file...";
        this.label = "";
        this.modalMessage = false;
      } else if (data.type == 1) {
        this.uploadDone = data["loaded"];
        this.uploadTotal = data["total"];
      } else {
        // this.modalOther = data["body"];
        // console.log(data);
        if ("status" in data) {
          if (data["status"] != 200) {
            this.modalOther =
              "unknown error occured, status: " + data["status"];
          }
        }
      }
    });
  }

  deleteImage(image) {
    if (
      confirm(
        "Are you sure to delete " +
          image.label +
          "\n This action is irreversible"
      )
    ) {
      this.apiService.deleteDockerImage(image.id).subscribe(
        data => {
          console.log(data);
          this.images = this.images.filter(item => {
            if (item.id == image.id) {
              return false;
            }
            return true;
          });
        },
        error => {
          if (error.status == 409) {
            this.errorVisible = true;
          }
        }
      );
    }
  }
}
