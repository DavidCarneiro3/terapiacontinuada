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
  itens: any[]
  views: number = 0;
  cpf: string = "";
  nid: number = 0;
  cod: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private callNumber: CallNumber,
              private uinf: UserInfoProvider,
              private service: ServiceProvider) {
    this.cod = this.navParams.get('itens');
    console.log(this.cod)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsItemPage');
    this.getView()
  }
  getView(){
    this.service.followupExerc(this.cod)
    .subscribe(data => {
      console.log(data)
      this.itens = data.datas
    },
  err => console.log(err))
  }
  
  
  back(){
    this.navCtrl.pop();
  }

}
