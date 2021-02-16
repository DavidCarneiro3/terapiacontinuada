import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { NewsItemPage } from '../news-item/news-item';


@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  itens: any;
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
    this.service.news()
    .subscribe(data =>{
      console.log(data)
      this.itens = data
    },
    err => {
      console.log(err)
    })
  }

}
