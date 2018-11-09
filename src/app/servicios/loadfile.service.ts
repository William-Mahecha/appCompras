import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject  } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Archivo } from '../upload/file.modal';

@Injectable({
  providedIn: 'root'
})
export class LoadfileService {
  private basePath = '/uploads';
  
  constructor(private db: AngularFireDatabase) { }

  pushFileToStorage(fileUpload: Archivo, progress: { porcentage: number }) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
      const snap = snapshot as firebase.storage.UploadTaskSnapshot;
      progress.porcentage = ((snap.bytesTransferred / snap.totalBytes) * 100);
    },
    (error) => {
      // fail
      console.log(error);
    },
    () => {
      // success
      uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
        console.log('File available at', downloadURL);
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData(fileUpload);
      });
    });
  }
  private saveFileData(fileUpload: Archivo) {
    this.db.list(`${this.basePath}/`).push(fileUpload);
  }
}
