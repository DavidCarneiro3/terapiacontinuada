import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { FunctionProvider } from '../../providers/service/functions';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  email: string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private service: ServiceProvider,
              private func: FunctionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  recoverPassword(useremail){
    this.service.forgotEmail(useremail)
    .subscribe(data => {
      
      this.func.toast(data,3000)
    })
  }
}
