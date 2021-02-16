import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ServiceProvider } from '../../providers/service/service';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserInfoProvider } from '../../providers/service/user-info';
import { FunctionProvider } from '../../providers/service/functions';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { TabsPage } from '../tabs/tabs';




@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  item: Array<{title: string, description: string, ends: string}>;
  root: any = HomePage;
  values: any = {id_user: "", email: ""};
  email: string;
  password: string;
  flag: boolean = false;
  user: any;
  cpf: string = "";
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public service: ServiceProvider, 
              public toastCtrl: ToastController,
              public storage: Storage,
              public userInfo: UserInfoProvider,
              public functionPrv: FunctionProvider
              ) {
    //this.item = navParams.get("param")
    this.cpf = navParams.get("cpf")
    console.log(this.item)
    //this.signin(this.item);
  }

  
  login() {
    //console.log(this.email);
   // console.log(this.password);
    this.service.signin(this.cpf,this.password)
    .then(data =>{
      console.log(data);
      if(data[0].email != null){
        this.userInfo.name  = data[0].name;
        this.userInfo.email = data[0].email;
        this.userInfo.cpf = data[0].cpf;
        this.userInfo.pass = data[0].pass;
        
        this.storage.set('name', data[0].name);
        this.storage.set('email', data[0].email);
        this.storage.set('cpf', data[0].cpf);
        this.storage.set('pass', data[0].pass);
        this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: "forward"});
      }else{
       this.functionPrv.toast("Dados incorretos!",2000);
      }
      
    });
  }
  forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }
  signup(){
    this.navCtrl.push(SignupPage);
  }

  // loginFacebook(){
  //   return new Promise((resolve,reject) => {
  //     // Just FB Login
  //     // this.fb.login(['public_profile', 'email'])
  //     // .then((res: FacebookLoginResponse) => resolve(res))
  //     // .catch( e => reject(e));

  //     // FB Login & API request
  //     this.fb.login(["public_profile", "email"])
  //     .then(connection => {
  //       this.fb.api("me?fields=id,name,email,picture.width(200).height(200)", ["public_profile", "email"]).then(user => {
  //         resolve({user: user, connection: connection});
  //         //console.log(user);
  //         console.log(user.email);
  //         //console.log(user.picture.data.url);
         
  //         this.service.signUpFb(user)
  //         .then(data => {
  //           let values = data;
  //           this.functionPrv.toast(values[0]['msg'],3000);
  //           if(values[0].flag > 0){
  //             this.service.signin(user.email,"123456")
  //             .then(val =>{
  //               console.log(val);
  //               if(val[0].email != null){
  //                 this.navCtrl.setRoot(MainSectionPage, {}, {animate: true, direction: "forward"});
  //               }else{
  //               this.functionPrv.toast("Dados incorretos!",2000);
  //               }
  //             });
  //           }
  //         });
          
  //       });
  //     })
  //     .catch(e => reject(e));
  //   });
  // }
 

}
