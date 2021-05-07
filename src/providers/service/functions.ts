import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events, ToastController } from 'ionic-angular';

@Injectable()
export class FunctionProvider {
  constructor(private storage: Storage, private event: Events, private toastCtrl: ToastController) {

  }

  toast(msg: string,time: number){
    let toast = this.toastCtrl.create({
          message: msg,
          duration: time
        });
        toast.present();
  }
}
