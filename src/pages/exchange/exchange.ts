import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { UserInfoProvider } from '../../providers/service/user-info';
import { FunctionProvider } from '../../providers/service/functions';
import { HomePage } from '../home/home';
import { ChangeEndPage } from '../change-end/change-end';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { MyChangesPage } from '../my-changes/my-changes';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';


@Component({
  selector: 'page-exchange',
  templateUrl: 'exchange.html',
})
export class ExchangePage {
  count: number
  cpf: string = "";
  itens: any[];
  score: any = 0;
  msg: string = "";
  prod: string
  img:string
  value: number
  fk_ad:number
  about: string
  lat: string
  lng: string
  imgad:string
  namead: string
  district: string
  street:string
  phone:string
  number:number
  pid:number
  desc: string
  adress: string
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private service: ServiceProvider,
              private userInfo: UserInfoProvider,
              private funcPrv: FunctionProvider,
              private callNumber: CallNumber,
              private geoLocation: Geolocation,
              private alertCtrl: AlertController,
              private launchNavigator: LaunchNavigator) {
                this.prod = this.navParams.get("name");
                this.img = this.navParams.get("img");
                this.value = this.navParams.get("value");
                this.fk_ad = this.navParams.get("fk_ad");
                this.pid = this.navParams.get("pid");
                this.desc = this.navParams.get("desc");
                console.log(this.fk_ad)
                this.cpf = this.userInfo.cpf
                this.getScore(this.cpf,this.fk_ad)
                this.getAd(this.fk_ad,this.cpf)
                this.getVisit(this.fk_ad)

  }
/*
  route(){
    this.geoLocation.getCurrentPosition()
    .then(resp => {
      window.open('https://www.google.com.br/maps/dir/'+resp.coords.latitude+','+resp.coords.longitude+'/'+this.lat+','+this.lng+'/')
    })
    
    
   }
 */
route(adress){
  this.geoLocation.getCurrentPosition()
    .then(resp => {
      this.launchNavigator.navigate(adress, {
        start: resp.coords.latitude+','+resp.coords.longitude,
        app : this.launchNavigator.APP.USER_SELECT
      });
    })
  //this.launchNavigator.navigate(adress)
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
             
             this.namead = data[0].name
             this.imgad = data[0].img
             this.about = data[0].about
             this.lat = data[0].lat
             this.lng = data[0].lng
             this.street = data[0].street
             this.district = data[0].district
             this.number = data[0].number
             this.phone = data[0].phone
             this.adress = this.district+'-'+this.street+','+this.number
             console.log(data);
           },
           err => console.log(err)
        );
   }

  getScore(cpf,fk_ad){
    this.service.getUserScore(cpf,fk_ad)
    .subscribe(data => {
      console.log(data)
      this.score = parseInt(data)
    },
    err => console.log(err))
  }
  getVisit(id_ad){
    this.service.getVisits(id_ad)
    .subscribe(data => {
      this.count = data;
    },
  err => console.log(err))
  }
  getExchanges(uid){
    this.service.getExchanges(uid)
    .subscribe(data => {
      this.itens = data;
      console.log(this.itens)
    },
    err => console.log(err))
  }
  
 exchange(cpf_user,fk_comp,fk_prod,val){

    console.log(val)
    this.service.exchange(cpf_user,fk_comp,fk_prod,val)
    .subscribe(data => {
      this.msg = data[0].msg
      if(data[0].flag == 1){
        let alert = this.alertCtrl.create({
          title: this.msg,
          subTitle: 'Sua troca foi envidada para seu app, verifique o menu Trocas/Minhas Trocas, apresente-se ao balcão e receba seu prêmio',
          buttons: [
            {
            text: 'Fechar',
            handler: () => {
              this.navCtrl.setRoot(MyChangesPage)
            }
            }
          ]
        });
        alert.present();
      }else{
        let alert = this.alertCtrl.create({
          title: this.msg,
          subTitle: 'Houve problemas na sua troca, provalvelmente isso ocorreu por dados incompletos, verifique seus dados no menu Perfil e tente novamente.',
          buttons: [
            {
            text: 'Fechar',
            
            }
          ]
        });
        alert.present();
      }
    })
  }

  close(){
    this.navCtrl.pop();
  }
}
