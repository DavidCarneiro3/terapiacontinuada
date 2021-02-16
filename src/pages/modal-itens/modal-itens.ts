import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';
import { SigninPage } from '../signin/signin';
import { PopoverController } from 'ionic-angular';
import { UserInfoProvider } from '../../providers/service/user-info';
import { Storage } from '@ionic/storage';
import { FunctionProvider } from '../../providers/service/functions';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { CurrencyPipe } from '@angular/common';
import { ExchangePage } from '../exchange/exchange';


@Component({
  selector: 'page-modal-itens',
  templateUrl: 'modal-itens.html',
})
export class ModalItensPage {
  
  addressConp: boolean = false;
  
  dados: any[];
  itens: any[];
  ad = 0;
  fav: number;
  isActive: boolean;
  address: any[];
  uscore: number;
  perc: number;
  cpf: string = "";
  primary: string = "#8ad7ea";
  secondary: string = "#20c757";
  count: any;
  compare: number
  about: string =""
  lat: string = ""
  lng: string = ""
  adscore: any;
  advalue: any
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController, 
    public service: ServiceProvider,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    public userInfo: UserInfoProvider,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    public functionPrv: FunctionProvider,
    public callNumber: CallNumber,
    private geoLocation: Geolocation,
    private currencyPipe: CurrencyPipe) {
    this.cpf = this.userInfo.cpf;
    this.ad = parseInt(navParams.get("param"))
    console.log(this.ad)
    this.getAd(this.ad,this.cpf);
    this.getItens(this.ad);
    let val = (this.userInfo.cpf);
    this.getVisit(this.ad);
    this.getMinvalue();
    //this.userScore();
    
    console.log(val)
    //this.getFavorites(val,this.item)
    
    //this.fav[status] = "true";
    this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Carregando...',
      dismissOnPageChange: true
    }).present();

  }

  
   route(){
    this.geoLocation.getCurrentPosition()
    .then(resp => {
      window.open('https://www.google.com.br/maps/dir/'+resp.coords.latitude+','+resp.coords.longitude+'/'+this.lat+','+this.lng+'/')
    })
    
    
   }
  getVisit(id_ad){
    this.service.getVisits(id_ad)
    .subscribe(data => {
      this.count = data;
    },
  err => console.log(err))
  }
  userScore(){
    this.service.getUserScore(this.userInfo.cpf,this.ad)
    .subscribe(data => {
      this.uscore = data;
      console.log(data)
      
    },
    err => console.log(err));
  }
  call(phone){
    this.callNumber.callNumber(phone, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }
 getAd(id_ad,cpf){
   this.service.getAd(id_ad,cpf)
       .subscribe(
          data => {
            this.itens = data;
            this.uscore = this.itens[0].uscore
            this.about = this.itens[0].about
            this.lat = this.itens[0].lat
            this.lng = this.itens[0].lng
            console.log(this.itens);
          },
          err => console.log(err)
       );
  }
 

 getItens(id_ad){
  this.service.getItens(id_ad)
       .subscribe(
          data => {
            this.dados = data;
            if(this.uscore>=parseInt(this.dados[0].value)){
              this.compare = 1
            }else{
              this.compare = 0
            }
            console.log(this.compare);
            console.log(this.dados);
          },
          err => console.log(err)
       );
  }

percent(score: number, value: number){
  let tmp = 0;
  tmp = ((score*100)/value)
  if(tmp <= 100){
    this.perc = Math.round(tmp);
  }else{
    this.perc = 100;
  }
  
  return this.perc;
  
}
getMinvalue(){
  this.service.minValue(this.ad)
  .subscribe(data => {
    console.log(data)
      this.adscore = data[0].score
      this.advalue = data[0].minvalue
  })
}

exchange(data){
  console.log(data)
  this.navCtrl.push(ExchangePage, {prod: data.name,img:data.img,value:data.value,fk_ad:data.fk_ad,pid:data.pid, desc: data.desc})
}
  
}
