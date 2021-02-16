import { Component, ViewChild, Pipe } from '@angular/core';
import { Nav, NavController, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ServiceProvider } from '../../providers/service/service';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ModalItensPage } from '../modal-itens/modal-itens';
import { FormBuilder } from '@angular/forms';
import { MyApp } from '../../app/app.component';
import { OrderBy } from '../../pipes/orderBy';
import { SigninPage } from '../signin/signin';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/';
import * as geolib from 'geolib';
import { UserPage } from '../user/user';
import { UserInfoProvider } from '../../providers/service/user-info';
import { MyChangesPage } from '../my-changes/my-changes';
import { CategoriesPage } from '../categories/categories';

//declare var geolib: Geolib;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  //pipes: [OrderBy]
})

export class HomePage {
  ordenation: string;
  distance: any;
  @ViewChild(Nav) nav: Nav;
  page = {title: "Home", component: HomePage};
  users : any[];
  order: string = "";
  homePage = HomePage;
  uscore: number
  cpf: string = this.userInfo.cpf;
  places: any[] = [{name: 'Clínica 1', street: 'Rua 1',number: 1, img: 'assets/imgs/clinica1.jpeg', distance: 4.7},
                   {name: 'Clínica 2', street: 'Rua 2',number: 2, img: 'assets/imgs/clinica2.png', distance: 8.3},
                   {name: 'Clínica 3', street: 'Rua 3',number: 3, img: 'assets/imgs/clinica3.jpg', distance: 3.5},
                   {name: 'Clínica 4', street: 'Rua 4',number: 4, img: 'assets/imgs/clinica4.jpg', distance: 10.1}]
  constructor(public navCtrl: NavController, 
              public service:ServiceProvider, 
              formBuilder: FormBuilder, 
              public modalCtrl: ModalController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private storage: Storage,
              private geoLocation: Geolocation,
              public userInfo: UserInfoProvider) {
      console.log(this.cpf)
      //this.getData(this.cpf);
    
    this.ordenation = "";

   
  }

  ionViewDidEnter() {
    this.getData(this.cpf)
  }

  reorder(){
    this.order = this.ordenation;
    console.log(this.ordenation)
  }
/*
  userScore(cpf){
    this.service.getUserScore(cpf)
    .subscribe(data => {
      this.uscore = data;
      console.log(data)
    },
    err => console.log(err));
  }
  */
  
  getData(cpf){
    this.users = this.places
    // this.service.getData(cpf).subscribe(
    //   data => {
    //     this.users = data;
    //     console.log(data)
    //     setInterval(() => {
    //       this.getAllDistances();
    //     },3000)
        
    //   },
    //   err => console.log(err)
    // )
  }

  perfil(){
    this.navCtrl.push(UserPage,{cpf: this.cpf})
  }
  changes(){
    this.navCtrl.push(MyChangesPage,{cpf: this.cpf})
  }

  getAllDistances(){
    this.geoLocation.getCurrentPosition().then(resp => {
          for (let i = 0; i < this.users.length; i++) {
            let val = this.users[i];
            val.distance = this.getDistance(
              {lat: resp.coords.latitude,
              lng: resp.coords.longitude},
              {lat: val.lat,
              lng: val.lng}
            )
            val.hidden = false;
            if(val.distance > 50){
              val.hidden = true;
            }
          }
        });
  }

  getDistance(origin,dest){
    let distance = geolib.getDistance(origin,dest);
    return geolib.convertUnit('km',distance,1);
  }
  openModal(item) {
    // this.service.updateClicks(item.id_ad)
    //    .subscribe(
    //       data => console.log(data),
    //       err => console.log(err)
    //    );
    //let modal = this.modalCtrl.create(ModalItensPage, {param: item});
    //modal.present();
      
    console.log(item)
    this.navCtrl.push(ModalItensPage,{param: item.id_ad});
    
  }

  goCat(){
    this.navCtrl.push(CategoriesPage)
  }
  

  logOut(){
    this.storage.clear();
    this.navCtrl.setRoot(SigninPage,{flag: true});

  }
 
 
}
