import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ServiceProvider } from '../../providers/service/service';


@Component({
  selector: 'page-change-end',
  templateUrl: 'change-end.html',
})
export class ChangeEndPage {
  cpf: string = "";
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private service: ServiceProvider) {
          this.cpf = this.navParams.get("cpf");
          console.log(this.cpf)
          
  }

back(){
    this.navCtrl.pop();
  }

}
