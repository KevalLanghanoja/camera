import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myphoto: string;
  constructor(private flashlight: Flashlight,private camera: Camera) { }
  flashlight1(){
    this.flashlight.switchOn();
  }
  flashlight2(){
    this.flashlight.switchOff();
  }
  takephoto(){
    const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.myphoto = 'data:image/jpeg;base64,' + imageData;
  //  alert(this.myphoto);
  //  console.log(this.myphoto);
  }, (err) => {
   // Handle error
  });
}
  
}

