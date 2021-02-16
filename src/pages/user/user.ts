import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Events } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { UserInfoProvider } from '../../providers/service/user-info';
import { FunctionProvider } from '../../providers/service/functions';
import { Storage } from '@ionic/storage';
import { SigninPage } from '../signin/signin';
import { Geolocation } from '@ionic-native/geolocation';
import { AddressComponent } from '../../components/address/address';
import { CpfInfoPage } from '../cpf-info/cpf-info';


@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  wishes = 0;
  exchanges = 0;
  itens: any;
  user = {name: "", email:"",  pass: "",cpf:"",birth:"",gender:"",fkgender:0,phone:""}
  id: any = (this.userInfo.cpf);
  location: any;
  city: string;
  state: string;
  full_address: any;
  fav_count: any;
  count_score: any;
  constructor(public platform: Platform,
              public navCtrl: NavController, 
              public navParams: NavParams,
              public service: ServiceProvider,
              public userInfo: UserInfoProvider,
              private functionPrv: FunctionProvider,
              private storage: Storage,
              private geolocation: Geolocation,
              private event: Events) {
        //this.id = this.navParams.get("cpf")
        console.log(this.id)
                
          //document.querySelector("ion-tabs")['style'].display = 'none'
          
  
  }
  
  ionViewDidEnter() {
    console.log('ionViewDidLoad UserPage')
    this.getUser(this.id)
  }

  getUser(cpf){
    this.service.getUserInfo(cpf)
    .subscribe(
          data => {
            console.log(data);
            
            this.itens = data;
            this.user.name = this.itens[0].name
            this.user.email = this.itens[0].email
            this.user.pass = this.itens[0].pass
            this.user.cpf = this.itens[0].cpf
            this.user.gender = this.itens[0].gender
            this.user.fkgender = this.itens[0].fkgender
            this.user.phone = this.itens[0].phone
            if(this.itens[0].birth != "//"){
              this.user.birth = this.itens[0].birth
            }else{
              this.user.birth = ""
            }
            
            console.log(this.user);
          },
          err => console.log(err)
       );
  }

 getItensFav(id){
  let val = (this.userInfo.cpf);
  this.service.getItensFav(val)
       .subscribe(
          data => {
            let i = 1;
            for(let value of data){
              this.fav_count = i++;
            }
            console.log(this.fav_count);            
          },
          err => console.log(err)
       );
  }

  getCountScores(uid){
    this.service.countScores(uid)
    .subscribe(data => {
      this.count_score = data;
      console.log(data);
    })
  }

  upUser(){
    
    this.service.upUser(this.user)
    .then(data => {
      console.log(data)
      let toast = JSON.stringify(data);
      this.functionPrv.toast(toast,3000);

      this.getUser(this.user.cpf);
    });
  }
  logout(){
    this.userInfo.email = "";
    this.userInfo.name = "";
    this.userInfo.cpf = "";
    this.userInfo.pass = "";
    this.storage.set('email',"");
    this.storage.set('name',"");
    this.storage.set('cpf',"");
    this.storage.set('pass',"");
    
    this.navCtrl.setRoot(CpfInfoPage);

  }
  openPage(page) {
    this.navCtrl.push(page,{param: this.userInfo.cpf});
  }

  countWish(){
    let user = (this.userInfo.cpf);
    this.service.countWish(user)
    .subscribe(data => {
      this.wishes = data;
    })
  }

  countExc(){
    let user = (this.userInfo.cpf);
    this.service.countExc(user)
    .subscribe(data => {
      this.exchanges = data;
    })
  }

}
