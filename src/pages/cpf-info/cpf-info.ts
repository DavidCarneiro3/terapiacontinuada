import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { SigninPage } from '../signin/signin';
import { FunctionProvider } from '../../providers/service/functions';
import { SignupPage } from '../signup/signup';
import { HomeGuestPage } from '../home-guest/home-guest';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-cpf-info',
  templateUrl: 'cpf-info.html',
})
export class CpfInfoPage {
  email: string = "";
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private service: ServiceProvider,
              private func: FunctionProvider) {

  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad MyChangesPage');
    let elem = document.querySelector(".tabbar")
    if (elem != null) {
      elem['style'].display = 'none';
    }
  }

  send(email){
    // this.service.getUser(cpf)
    // .subscribe(
    //   data => {
    //     console.log(data)
    //     if(data[0]["flag"] == 1){
    //       this.navCtrl.push(SigninPage, {cpf: cpf})
    //       this.func.toast(data[0]["msg"],3000);
    //     }else{
    //       if(data[0]["flag"] == 2){
    //         this.navCtrl.push(SignupPage, {cpf: cpf});
    //       }else{
    //         this.func.toast(data[0]["msg"],3000);
    //       }
    //     }
    //   },
    //   err => console.log(err))
    if(email){
      this.navCtrl.push(TabsPage, {email: email});
    }else{
      this.navCtrl.push(SignupPage, {email: email});
    }
    
  }

  goGuest(){
    this.navCtrl.push(HomeGuestPage)
  }

}
