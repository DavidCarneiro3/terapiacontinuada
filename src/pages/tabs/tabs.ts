import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { NewsPage } from '../news/news';
import { ServiceProvider } from '../../providers/service/service';
import { UserInfoProvider } from '../../providers/service/user-info';
import { ShopPage } from '../shop/shop';
import { VideoPage } from '../video/video';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  home: any = HomePage
  user: any = UserPage
  news: any = NewsPage
  shop: any = ShopPage
  video: any = VideoPage
  valbadge: any
  email: string = "";
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public service: ServiceProvider,
              public uInfo: UserInfoProvider) {
       this.email = this.uInfo.email;
       //this.getNew()
  }

  ionViewDidLoad() {
    
    //console.log('ionViewDidLoad TabsPage:'+data);
  }
  getNew(){
    this.service.getNewItem(this.email)
      .subscribe(data => {
        this.valbadge = data
        console.log(data);
      },
    err => console.log(err))
    
  }

}
