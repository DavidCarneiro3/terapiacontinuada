import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { UserInfoProvider } from '../../providers/service/user-info';
import { ServiceProvider } from '../../providers/service/service';


@Component({
  selector: 'page-news-item',
  templateUrl: 'news-item.html',
})
export class NewsItemPage {
  itens: any
  views: number = 0;
  cpf: string = "";
  nid: number = 0;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private callNumber: CallNumber,
              private uinf: UserInfoProvider,
              private service: ServiceProvider) {
    this.itens = this.navParams.get('itens');
    console.log(this.itens)
    this.cpf = this.uinf.cpf
    this.nid = this.itens.nid
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsItemPage');
    this.getView()
    this.countViews()
  }
  getView(){
    this.service.getView(this.cpf,this.nid)
    .subscribe(data => {
      console.log(data)
    },
  err => console.log(err))
  }
  countViews(){
    this.service.countView(this.nid)
    .subscribe(data => {
      console.log(data)
      this.views = data[0].count;
    },
  err => console.log(err))
  }
  call(phone){
    this.callNumber.callNumber(phone, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }

  back(){
    this.navCtrl.pop();
  }

}
