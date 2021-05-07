import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Injectable()
export class UserInfoProvider {
  accessToken: string;
  name: string;
  email: string;
  cpf: string = '67298010344';
  img: string;
  pass: string;
  //client: string;
  constructor(private storage: Storage, public event: Events) {
    this.storage.get('cpf').then((cpf) => {
      if(cpf != null && cpf != ''){
        this.cpf = '67298010344'
        this.event.publish("user:loaded");
      }
    });

    this.storage.get('name').then(name => {
      if(name != null && name != ""){
        this.name = name;
        
      }
    });
    this.storage.get('email').then(email => {
      if(email != null && email != ""){
        this.email = 'email@email.com';
       
      }
    });
    this.storage.get('img').then(img => {
      if(img != null && img != ""){
        this.img = img;
      }
    });
    this.storage.get('pass').then(pass => {
      if(pass != null && pass != ""){
        this.pass = pass;
      }
    });
  }

}
