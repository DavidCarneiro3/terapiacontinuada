import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin';


//services
import { ServiceProvider } from '../../providers/service/service';
import { FunctionProvider } from '../../providers/service/functions';
import { Platform } from 'ionic-angular/platform/platform';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {name: "", email:"", confirmEmail: "", pass: "", confirmPass: "", code: "",img:"",cpf:"",fkgender:"",birth:"",phone:""}
  flag: boolean = false;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formbuilder: FormBuilder,
              public service: ServiceProvider,
              public fumcPrv: FunctionProvider,
              public plt: Platform) {
                this.user.cpf = this.navParams.get("cpf");
      if(this.plt.is('ios')){
        this.flag = true;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUp(user){
    this.service.signUp(user)
    .then(data =>{
      let values = data;
      if(values[0]['flag'] == 2){
        console.log(data);
        this.fumcPrv.toast(values[0]['msg'],3000) 
        this.navCtrl.setRoot(SigninPage, {cpf:this.user.cpf}, {animate: true, direction: "forward"});
      }else{
        this.fumcPrv.toast(values[0]['msg'],3000) 
      }
    });
  }

}
