import { Component, OnInit } from '@angular/core';
import { Archivo } from './file.modal';
import { LoadfileService } from '../servicios/loadfile.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

 selectedFiles: FileList;
  currentFileUpload: Archivo;
  progress: { porcentage: number } = { porcentage: 0 };
 
  constructor(private uploadService: LoadfileService) { }
 
  ngOnInit() {
  }
 
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.currentFileUpload = new Archivo(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }
}
