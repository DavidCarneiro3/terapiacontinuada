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
    let val = (this.userInfo.cpf);
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

  





  
}
