import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { CatItensPage } from '../cat-itens/cat-itens';


@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  cats: any
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public service: ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
    this.getCateg()
  }
  getCateg(){
    this.service.getCateg()
    .subscribe(data => {
      this.cats = data
      console.log(this.cats)
    },
  err => console.log(err))
  }
  
  goToPage(cat_id){
    this.navCtrl.push(CatItensPage,{catid: cat_id})
  }

}
