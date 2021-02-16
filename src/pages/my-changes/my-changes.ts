import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserInfoProvider } from '../../providers/service/user-info';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-my-changes',
  templateUrl: 'my-changes.html',
})
export class MyChangesPage {
  act_changes: any;
  cpf: string
  changes: any
  user: any
  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public userInfo: UserInfoProvider,
            public service: ServiceProvider) {
    this.cpf = this.userInfo.cpf;
    this.getUser()
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad MyChangesPage');
    this.getChanges(this.cpf)
    this.getActChanges(this.cpf)
    
  }
  getUser(){
    this.service.getUserInfo(this.cpf)
    .subscribe(data => {
      console.log(data)
      this.user = data
    },
  err => console.log(err))
  }
  getChanges(cpf){
    this.service.getExchanges(cpf).subscribe(
      data => {
        this.changes = data;
        console.log(data)        
      },
      err => console.log(err)
    )
  }
  getActChanges(cpf){
    this.service.getActExchanges(cpf).subscribe(
      data => {
        this.act_changes = data;
        console.log(data)        
      },
      err => console.log(err)
    )
  }

}
