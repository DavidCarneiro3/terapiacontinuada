import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController, ModalController, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { UserInfoProvider } from '../../providers/service/user-info';
import { FunctionProvider } from '../../providers/service/functions';
import { CallNumber } from '@ionic-native/call-number';


@Component({
  selector: 'page-prod-guest',
  templateUrl: 'prod-guest.html',
})
export class ProdGuestPage {
  addressConp: boolean = false;
  
  dados: any[];
  itens: any[];
  item = 0;
  fav: number;
  isActive: boolean;
  address: any[];
  uscore: number;
  perc: number;
  cpf: string = this.userInfo.cpf;
  primary: string = "#8ad7ea";
  secondary: string = "#20c757";
  count: any;
  compare: number
  about: string =""
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController, 
    public service: ServiceProvider,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    public userInfo: UserInfoProvider,
    public loadingCtrl: LoadingController,
    public functionPrv: FunctionProvider,
    public callNumber: CallNumber) {

    this.item = parseInt(navParams.get("param"))
    console.log(this.item)
    this.getAdGuest(this.item);
    this.getItens(this.item);
    let val = (this.userInfo.cpf);
    this.getVisit(this.item);
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

  getVisit(id_ad){
    this.service.getVisits(id_ad)
    .subscribe(data => {
      this.count = data;
    },
  err => console.log(err))
  }
  
  call(phone){
    this.callNumber.callNumber(phone, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }
 getAdGuest(id_ad){
   this.service.getAdGuest(id_ad)
       .subscribe(
          data => {
            this.itens = data;
            this.uscore = this.itens[0].uscore
            this.about = this.itens[0].about
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
}
