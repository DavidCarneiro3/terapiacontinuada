import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { NewsItemPage } from '../news-item/news-item';


@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  itens: any[];
  count: any;
  count_ok: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
            public service: ServiceProvider) {

             
  }

  ionViewDidEnter() {
    this.getNews()
  }
  
  goTo(item){
  
    this.navCtrl.push(NewsItemPage,{itens:item})
  }

  getNews(){
    this.service.followup()
    .subscribe(data =>{
      this.itens = data.datas
      console.log(data)
    },
    err => {
      console.log(err)
    })
  }

  getCount(cod){
    this.service.followupCount(cod)
    .subscribe(data => {
      console.log('Counts',data.datas);
      this.count = data.datas['count'];
      this.count_ok = data.datas['count_ok'];
      
    })
  }

}
