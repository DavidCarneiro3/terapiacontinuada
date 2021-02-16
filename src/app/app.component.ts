import { Component, ViewChild, ErrorHandler } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { UserPage } from '../pages/user/user';
import { CpfInfoPage } from '../pages/cpf-info/cpf-info';
import { TabsPage } from '../pages/tabs/tabs';

//services
import { Storage } from '@ionic/storage';
import { UserInfoProvider } from '../providers/service/user-info';
import { ServiceProvider } from '../providers/service/service';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NewsPage } from '../pages/news/news';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  lat: number = 51.678418;
  lng: number = 7.809007;
  rootPage: any = CpfInfoPage;
  user: any;
  loading: boolean = true;
  name: string;
  email: string;
  img: string;
  member: number;
  itens: any
  cpf = ""
  public permission: boolean = false;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen, 
              private event: Events,
              private storage: Storage,
              private userInfo: UserInfoProvider,
              private service: ServiceProvider,
              private localNotifications: LocalNotifications) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.styleDefault();
      this.storage.get('cpf').then((cpf) => {
        if(cpf != '' && cpf != null){
          this.rootPage = TabsPage;
        }
       console.log(cpf)
      });
      this.splashScreen.hide();
      //this.getUser();
      /*event.subscribe('user:loaded',() => {
        this.rootPage = TabsPage;
      })*/
    });
    this.cpf = this.userInfo.cpf
   if(this.platform.is('cordova')){
    this.service.getNewItem(this.cpf)
    .subscribe(data => { 
      if(data == 0){
        setInterval(() => {
          this.service.news()
          .subscribe(data =>{
            console.log(data)
            this.itens = data
          },
          err => {
            console.log(err)
          })
              // if(this.platform.is('android')){
              //   this.localNotifications.schedule({
              //     id: 1,
              //     title: this.itens[0].name,
              //     text: 'Tem uma novidade pra você!',
              //     sound: 'files://sound.mp3',
              //     smallIcon: 'res://mipmap-ldpi/icon.png',
              //     //at: new Date(new Date().getTime() + 10000)
              //   });
              // }
              // if(this.platform.is('ios')){
              //   this.localNotifications.schedule({
              //     id: 1,
              //     title: this.itens[0].name,
              //     text: 'Tem uma novidade pra você!',
              //     sound: 'http://m.toqueparacelular.com.br/d01/Little_Notification.mp3',
              //     //at: new Date(new Date().getTime() + 10000)
              //   });
              // }
              // this.localNotifications.schedule({
              //   id: 1,
              //   title: this.itens[0].name,
              //   text: 'Tem uma novidade pra você!',
              //   sound: 'http://m.toqueparacelular.com.br/d01/Little_Notification.mp3',
              //   //at: new Date(new Date().getTime() + 10000)
              // });
        },5000)
      }
      
    })
    
   }
  }
  
  openPage(pages) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(pages.component);
  }
  

  logOut(){
    this.storage.clear();
    this.nav.setRoot(SigninPage);

  }
}
