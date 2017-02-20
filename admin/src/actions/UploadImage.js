import axios from "axios"

import * as con from './const'
import base from '../config/db'

export const updateImage = (file) => {
  return new Promise((resolve, reject) => {
    let storageRef = base.storage().ref()
    let metaData = {
      contentType : 'image/jpeg'
    }
    let uploadTask = storageRef.child('images' + file.name).put(file, metaData)
    uploadTask.on(base.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case base.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case base.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        var downloadURL = uploadTask.snapshot.downloadURL;
        resolve(downloadURL)
      });
  });
}