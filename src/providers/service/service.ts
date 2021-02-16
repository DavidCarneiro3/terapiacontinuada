import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';


//service
import { UserInfoProvider } from './user-info';


@Injectable()
export class ServiceProvider {

  api : string = 'http://gofidelize.tempsite.ws/service/';
  constructor(public http: Http, 
              private userInfo: UserInfoProvider,
              private storage: Storage) {}
    
  getData(cpf){
      let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
      return this.http.post(this.api+'adverts.php', {cpf}, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
      
  }
  getCateg(){
    return this.http.get(this.api+"categories.php").map(res => res.json())
  }

  news(){
    return this.http.get(this.api+"news.php").map(res => res.json())
  }

  getPartners(){
    return this.http.get(this.api+"get_partners.php").map(res => res.json())
  }

  getDataItens(id){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'cat_item.php', {id}, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }

  getAdress(parse){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'adress.php', parse, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }
 

  postData(param){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'updateClicks.php', param, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }

  signin(cpf: string,password: string){
    let headers = new Headers();
    headers.append('Content-type' , 'application/x-www-form-urlencoded')

    let options = new RequestOptions({headers: headers});

    return new Promise((resolve,reject) => {this.http.post(this.api+'login.php', {cpf,password}, options).map(
      (res:Response)  => {
        
        
        return res.json();
      }
    ).subscribe(data => {
        resolve(data);
      }, err => {
          reject(err);
      })
   })
  }

   signUp(user){
      let headers = new Headers();
      headers.append('Content-type' , 'application/x-www-form-urlencoded')

      let options = new RequestOptions({headers: headers});

      let body = new URLSearchParams();
      
      //body.append("name", user.name);
      //body.append("email", user.email);  
      //body.append("pass", user.pass);
     // body.append("cpf", user.cpf);
      //body.append("birth", user.birth);
      //body.append("fkgender", user.fkgender);
     // body.append("phone", user.phone);
     let name = user.name
     let email = user.email
     let cpf = user.cpf
     let pass = user.pass
     let fkgender = user.fkgender
     let phone = user.phone
     let birth = user.birth
      
      
      return new Promise((resolve, reject) => {
        this.http.post(this.api+'signup.php', {name,cpf,email,pass,birth,fkgender,phone}, options)
        .map(response =>{
          this.userInfo.name  = response.headers.get("name");
          this.userInfo.email = response.headers.get("email");
          this.userInfo.cpf = response.headers.get("cpf");
          
          /*
          this.storage.set('accessToken', this.userInfo.accessToken);
          this.storage.set('client', this.userInfo.client);
          this.storage.set('email', this.userInfo.email);
          */
          return response.json();
        }).subscribe(data => {
          resolve(data);
        }, err => {
            reject(err);
        })
      })
  }

  signUpFb(user){
      let headers = new Headers();
      headers.append('Content-type' , 'application/x-www-form-urlencoded')

      let options = new RequestOptions({headers: headers});

      let body = new URLSearchParams();
      
      body.append("user[name]", user.name);
      body.append("user[email]", user.email);  
      body.append("user[password]", user.pass);
      body.append("user[img]", user.picture.data.url);
      
      
      return new Promise((resolve, reject) => {
        this.http.post(this.api+'signup.php', body, options)
        .map(response =>{
          this.userInfo.name  = response.headers.get("name");
          this.userInfo.email = response.headers.get("email");
          
          /*
          this.storage.set('accessToken', this.userInfo.accessToken);
          this.storage.set('client', this.userInfo.client);
          this.storage.set('email', this.userInfo.email);
          */
          return response.json();
        }).subscribe(data => {
          resolve(data);
        }, err => {
            reject(err);
        })
      })
  }
  

  favorite(uid,id_ad){
     let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'favorites.php', {uid,id_ad},  {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }

  getFavorites(uid,id_ad){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_favorites.php', {uid,id_ad}, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }

  updateClicks(id_ad){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'updateClicks.php', {id_ad}, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }
  
  getAd(parse,cpf){
   let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_ad.php', {parse,cpf}, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }

 getAdGuest(parse){
  let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
   return this.http.post(this.api+'get_ad_guest.php', {parse}, {
     headers:headers,
     method:"POST"
   }).map(
     (res:Response)  => {
       
       return res.json();
     }
   );
}

  getItens(parse){
   let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_itens.php', parse, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }

 getItensFav(parse){
   let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_itens_fav.php', parse, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }
 genCode(uid){
   let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'gen_code.php', uid, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }

 getUser(cpf){
   let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_user.php', cpf, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }

 getUserInfo(cpf){
   let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_user_info.php', {cpf}, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }

 getUserScore(cpf,fk_ad){
   let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_user_score.php', {cpf,fk_ad}, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }
 
 get_location(lat: any,long: any){
   let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+ lat +','+ long +'&key=AIzaSyAQJiifevlk4l8ObCWg0P0G7bBvPfyTnqQ',{
      headers:headers,
      method:"GET"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }

 upUser(user){
   let headers = new Headers();
      headers.append('Content-type' , 'application/x-www-form-urlencoded')

      let options = new RequestOptions({headers: headers});

      let body = new URLSearchParams();
      
      body.append("name", user.name);
      body.append("email", user.email);  
      body.append("pass", user.pass);
      body.append("cpf", user.cpf);
      body.append("birth", user.birth);
      body.append("fkgender", user.fkgender);
      body.append("phone", user.phone);
      
      return new Promise((resolve, reject) => {
        this.http.post(this.api+'up_user.php', body, options)
        .map(response =>{
          this.userInfo.name  = response.headers.get("name");
          this.userInfo.email = response.headers.get("email");
          this.userInfo.cpf = response.headers.get("cpf");
          
          /*
          this.storage.set('accessToken', this.userInfo.accessToken);
          this.storage.set('client', this.userInfo.client);
          this.storage.set('email', this.userInfo.email);
          */
          return response.json();
        }).subscribe(data => {
          resolve(data);
        }, err => {
            reject(err);
        })
      })
  }

  countScores(uid){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_count_scores.php', uid, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }

  getParterItem(id){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_partner_item.php', id, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }
  getRule(id){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_rules.php', id, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }

  getLocation(id){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_location.php', id, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }
  
  exchange(cpf,comp,prod,val){
   let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'exchange.php', {cpf,comp,prod,val}, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }

 wishList(uid,id_pa){
     let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'wish_list.php', {uid,id_pa},  {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }

  getWish(uid,id_pa){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_wish.php', {uid,id_pa}, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }

  countWish(uid){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_count_wish.php', uid, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }

  countExc(uid){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_count_exchanges.php', uid, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
  }

  getSubCat(id){
   let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'sub_cat.php', id, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }
 wishes(uid){
   let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'wishes.php', uid, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }

 getExchanges(cpf){
   let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_changes.php', {cpf}, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }

 getActExchanges(cpf){
  let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
   return this.http.post(this.api+'get_act_changes.php', {cpf}, {
     headers:headers,
     method:"POST"
   }).map(
     (res:Response)  => {
       
       return res.json();
     }
   );
}

 getExchangesItem(id_pa,uid){
   let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'get_exchanges_item.php', {id_pa,uid}, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }
 user(email){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'forgot-pass.php', {email}, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }
 forgotEmail(email){
    let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
    return this.http.post(this.api+'forgot-pass.php', {email}, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)  => {
        
        return res.json();
      }
    );
 }
 
 getVisits(id_ad){
  let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
   return this.http.post(this.api+'get_visit.php', {id_ad}, {
     headers:headers,
     method:"POST"
   }).map(
     (res:Response)  => {
       
       return res.json();
     }
   );
}

notification(dev_id){
  let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
   return this.http.post(this.api+'notification.php', {dev_id}, {
     headers:headers,
     method:"POST"
   }).map(
     (res:Response)  => {
       
       return res.json();
     }
   );
}

getNewItem(cpf){
  let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
   return this.http.post(this.api+'get_new.php', {cpf}, {
     headers:headers,
     method:"POST"
   }).map(
     (res:Response)  => {
       
       return res.json();
     }
   );
}

getView(cpf,nid){
  let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
   return this.http.post(this.api+'get_view.php', {cpf,nid}, {
     headers:headers,
     method:"POST"
   }).map(
     (res:Response)  => {
       
       return res.json();
     }
   );
}

countView(nid){
  let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
   return this.http.post(this.api+'count_view.php', {nid}, {
     headers:headers,
     method:"POST"
   }).map(
     (res:Response)  => {
       
       return res.json();
     }
   );
}
minValue(nid){
  let headers = new Headers({ 'Content-type' : 'application/x-www-form-urlencoded' })
   return this.http.post(this.api+'min_value.php', {nid}, {
     headers:headers,
     method:"POST"
   }).map(
     (res:Response)  => {
       
       return res.json();
     }
   );
}
}
