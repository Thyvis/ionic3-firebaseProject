//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  constructor(
    //public http: HttpClient
    public toastCtrl: ToastController
    ) {
    //console.log('Hello ToastProvider Provider');
  }

  show(msg: string, duration: number) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: duration
    });
    return toast;
  }

}
