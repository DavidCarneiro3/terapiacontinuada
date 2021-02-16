import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ModalItensPage } from '../modal-itens/modal-itens';


@Component({
  selector: 'page-cat-itens',
  templateUrl: 'cat-itens.html',
})
export class CatItensPage {
  catid: any
  itens: any
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public service: ServiceProvider) {
      this.catid = this.navParams.get('catid')
      console.log(this.catid)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatItensPage');
    this.getCatItem()
  }

  getCatItem(){
    this.service.getDataItens(this.catid)
    .subscribe(data => {
       this.itens = data
       console.log(this.itens)
    },
  err => console.log(err))
  }
  
  openModal(item) {
      console.log(item)
    this.navCtrl.push(ModalItensPage,{param: item.id_ad});
    
  }
}
