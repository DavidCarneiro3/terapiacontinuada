webpackJsonp([0],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_info__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//service

var ServiceProvider = (function () {
    function ServiceProvider(http, userInfo, storage) {
        this.http = http;
        this.userInfo = userInfo;
        this.storage = storage;
        this.api = 'http://gofidelize.tempsite.ws/service/';
    }
    ServiceProvider.prototype.getData = function (cpf) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'adverts.php', { cpf: cpf }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getCateg = function () {
        return this.http.get(this.api + "categories.php").map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.news = function () {
        return this.http.get(this.api + "news.php").map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.getPartners = function () {
        return this.http.get(this.api + "get_partners.php").map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.getDataItens = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'cat_item.php', { id: id }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getAdress = function (parse) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'adress.php', parse, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.postData = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'updateClicks.php', param, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.signin = function (cpf, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.api + 'login.php', { cpf: cpf, password: password }, options).map(function (res) {
                return res.json();
            }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceProvider.prototype.signUp = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        //body.append("name", user.name);
        //body.append("email", user.email);  
        //body.append("pass", user.pass);
        // body.append("cpf", user.cpf);
        //body.append("birth", user.birth);
        //body.append("fkgender", user.fkgender);
        // body.append("phone", user.phone);
        var name = user.name;
        var email = user.email;
        var cpf = user.cpf;
        var pass = user.pass;
        var fkgender = user.fkgender;
        var phone = user.phone;
        var birth = user.birth;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.api + 'signup.php', { name: name, cpf: cpf, email: email, pass: pass, birth: birth, fkgender: fkgender, phone: phone }, options)
                .map(function (response) {
                _this.userInfo.name = response.headers.get("name");
                _this.userInfo.email = response.headers.get("email");
                _this.userInfo.cpf = response.headers.get("cpf");
                /*
                this.storage.set('accessToken', this.userInfo.accessToken);
                this.storage.set('client', this.userInfo.client);
                this.storage.set('email', this.userInfo.email);
                */
                return response.json();
            }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceProvider.prototype.signUpFb = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        body.append("user[name]", user.name);
        body.append("user[email]", user.email);
        body.append("user[password]", user.pass);
        body.append("user[img]", user.picture.data.url);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.api + 'signup.php', body, options)
                .map(function (response) {
                _this.userInfo.name = response.headers.get("name");
                _this.userInfo.email = response.headers.get("email");
                /*
                this.storage.set('accessToken', this.userInfo.accessToken);
                this.storage.set('client', this.userInfo.client);
                this.storage.set('email', this.userInfo.email);
                */
                return response.json();
            }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceProvider.prototype.favorite = function (uid, id_ad) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'favorites.php', { uid: uid, id_ad: id_ad }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getFavorites = function (uid, id_ad) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_favorites.php', { uid: uid, id_ad: id_ad }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.updateClicks = function (id_ad) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'updateClicks.php', { id_ad: id_ad }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getAd = function (parse, cpf) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_ad.php', { parse: parse, cpf: cpf }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getAdGuest = function (parse) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_ad_guest.php', { parse: parse }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getItens = function (parse) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_itens.php', parse, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getItensFav = function (parse) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_itens_fav.php', parse, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.genCode = function (uid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'gen_code.php', uid, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getUser = function (cpf) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_user.php', cpf, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getUserInfo = function (cpf) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_user_info.php', { cpf: cpf }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getUserScore = function (cpf, fk_ad) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_user_score.php', { cpf: cpf, fk_ad: fk_ad }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.get_location = function (lat, long) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=AIzaSyAQJiifevlk4l8ObCWg0P0G7bBvPfyTnqQ', {
            headers: headers,
            method: "GET"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.upUser = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        body.append("name", user.name);
        body.append("email", user.email);
        body.append("pass", user.pass);
        body.append("cpf", user.cpf);
        body.append("birth", user.birth);
        body.append("fkgender", user.fkgender);
        body.append("phone", user.phone);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.api + 'up_user.php', body, options)
                .map(function (response) {
                _this.userInfo.name = response.headers.get("name");
                _this.userInfo.email = response.headers.get("email");
                _this.userInfo.cpf = response.headers.get("cpf");
                /*
                this.storage.set('accessToken', this.userInfo.accessToken);
                this.storage.set('client', this.userInfo.client);
                this.storage.set('email', this.userInfo.email);
                */
                return response.json();
            }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceProvider.prototype.countScores = function (uid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_count_scores.php', uid, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getParterItem = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_partner_item.php', id, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getRule = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_rules.php', id, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getLocation = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_location.php', id, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.exchange = function (cpf, comp, prod, val) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'exchange.php', { cpf: cpf, comp: comp, prod: prod, val: val }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.wishList = function (uid, id_pa) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'wish_list.php', { uid: uid, id_pa: id_pa }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getWish = function (uid, id_pa) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_wish.php', { uid: uid, id_pa: id_pa }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.countWish = function (uid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_count_wish.php', uid, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.countExc = function (uid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_count_exchanges.php', uid, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getSubCat = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'sub_cat.php', id, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.wishes = function (uid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'wishes.php', uid, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getExchanges = function (cpf) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_changes.php', { cpf: cpf }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getActExchanges = function (cpf) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_act_changes.php', { cpf: cpf }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getExchangesItem = function (id_pa, uid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_exchanges_item.php', { id_pa: id_pa, uid: uid }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.user = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'forgot-pass.php', { email: email }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.forgotEmail = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'forgot-pass.php', { email: email }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getVisits = function (id_ad) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_visit.php', { id_ad: id_ad }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.notification = function (dev_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'notification.php', { dev_id: dev_id }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getNewItem = function (cpf) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_new.php', { cpf: cpf }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.getView = function (cpf, nid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'get_view.php', { cpf: cpf, nid: nid }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.countView = function (nid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'count_view.php', { nid: nid }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider.prototype.minValue = function (nid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + 'min_value.php', { nid: nid }, {
            headers: headers,
            method: "POST"
        }).map(function (res) {
            return res.json();
        });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__user_info__["a" /* UserInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_itens_modal_itens__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation___ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_geolib__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_geolib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_geolib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_service_user_info__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_changes_my_changes__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__categories_categories__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















//declare var geolib: Geolib;
var HomePage = (function () {
    function HomePage(navCtrl, service, formBuilder, modalCtrl, navParams, loadingCtrl, storage, geoLocation, userInfo) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.geoLocation = geoLocation;
        this.userInfo = userInfo;
        this.page = { title: "Home", component: HomePage_1 };
        this.order = "";
        this.homePage = HomePage_1;
        this.cpf = this.userInfo.cpf;
        this.places = [{ name: 'Clínica 1', street: 'Rua 1', number: 1, img: 'assets/imgs/clinica1.jpeg', distance: 4.7 },
            { name: 'Clínica 2', street: 'Rua 2', number: 2, img: 'assets/imgs/clinica2.png', distance: 8.3 },
            { name: 'Clínica 3', street: 'Rua 3', number: 3, img: 'assets/imgs/clinica3.jpg', distance: 3.5 },
            { name: 'Clínica 4', street: 'Rua 4', number: 4, img: 'assets/imgs/clinica4.jpg', distance: 10.1 }];
        console.log(this.cpf);
        //this.getData(this.cpf);
        this.ordenation = "";
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidEnter = function () {
        this.getData(this.cpf);
    };
    HomePage.prototype.reorder = function () {
        this.order = this.ordenation;
        console.log(this.ordenation);
    };
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
    HomePage.prototype.getData = function (cpf) {
        this.users = this.places;
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
    };
    HomePage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__user_user__["a" /* UserPage */], { cpf: this.cpf });
    };
    HomePage.prototype.changes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__my_changes_my_changes__["a" /* MyChangesPage */], { cpf: this.cpf });
    };
    HomePage.prototype.getAllDistances = function () {
        var _this = this;
        this.geoLocation.getCurrentPosition().then(function (resp) {
            for (var i = 0; i < _this.users.length; i++) {
                var val = _this.users[i];
                val.distance = _this.getDistance({ lat: resp.coords.latitude,
                    lng: resp.coords.longitude }, { lat: val.lat,
                    lng: val.lng });
                val.hidden = false;
                if (val.distance > 50) {
                    val.hidden = true;
                }
            }
        });
    };
    HomePage.prototype.getDistance = function (origin, dest) {
        var distance = __WEBPACK_IMPORTED_MODULE_8_geolib__["getDistance"](origin, dest);
        return __WEBPACK_IMPORTED_MODULE_8_geolib__["convertUnit"]('km', distance, 1);
    };
    HomePage.prototype.openModal = function (item) {
        // this.service.updateClicks(item.id_ad)
        //    .subscribe(
        //       data => console.log(data),
        //       err => console.log(err)
        //    );
        //let modal = this.modalCtrl.create(ModalItensPage, {param: item});
        //modal.present();
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modal_itens_modal_itens__["a" /* ModalItensPage */], { param: item.id_ad });
    };
    HomePage.prototype.goCat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__categories_categories__["a" /* CategoriesPage */]);
    };
    HomePage.prototype.logOut = function () {
        this.storage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__signin_signin__["a" /* SigninPage */], { flag: true });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>Terapia Continuada</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (tap)="goCat()">\n          <ion-icon name="ios-list"></ion-icon>\n          \n        </button>\n      </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n    <div>\n  <div class="info" ion-fixed>\n    Locais por Perto\n  </div>\n \n  <!-- <ion-list no-lines class="order" ion-fixed>\n    <ion-item>\n      <ion-label>Ordenar:</ion-label>\n        <ion-select [(ngModel)]="ordenation" (ionChange)="reorder()">\n          <ion-option value="+distance">Mais próximos</ion-option>\n          <ion-option value="-uscore">Pontuação+</ion-option>\n          <ion-option value="+uscore">Pontuação-</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-list> -->\n  \n  <ion-list *ngIf="users">\n  <ion-item *ngFor="let item of users | orderBy : [order]:ordenation" [hidden]="item.hidden" (click)="openModal(item)" >\n      \n      <ion-thumbnail item-start>\n        <img src="{{item.img}}">\n      </ion-thumbnail>\n      <h2 class="title">{{item.name}}</h2>\n      <p>{{item.street+\', \'+item.number}}</p>\n      <p *ngIf="item.distance"><ion-icon class="icon" name="pin"></ion-icon>{{\' \'+item.distance+\' km\'}}</p>\n      <p *ngIf="!item.distance"><ion-icon class="icon" name="pin"></ion-icon> Carregando...</p>\n      <p><ion-icon class="icon" name="ios-star"></ion-icon>{{\' \'+item.uscore+\' \'}}<ion-icon class="icon" name="ribbon"></ion-icon>{{\' \'+item.uexc+\' \'}}</p>\n      <ion-icon name="arrow-dropright" item-end color="primary"></ion-icon>\n    </ion-item>\n </ion-list>\n</div>\n <!-- Skeleton screen -->\n<!-- <div *ngIf="!item">\n  <div class="ion-padding custom-skeleton">\n    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n    <ion-skeleton-text animated></ion-skeleton-text>\n    <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>\n    <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>\n    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n  </div>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-avatar slot="start">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot="start">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-skeleton-text animated style="width: 27px; height: 27px" slot="start"></ion-skeleton-text>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation___["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_10__providers_service_user_info__["a" /* UserInfoProvider */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalItensPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_user_info__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exchange_exchange__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ModalItensPage = (function () {
    function ModalItensPage(navCtrl, navParams, viewCtrl, service, popoverCtrl, modalCtrl, userInfo, loadingCtrl, storage, functionPrv, callNumber, geoLocation, currencyPipe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.userInfo = userInfo;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.functionPrv = functionPrv;
        this.callNumber = callNumber;
        this.geoLocation = geoLocation;
        this.currencyPipe = currencyPipe;
        this.addressConp = false;
        this.ad = 0;
        this.cpf = "";
        this.primary = "#8ad7ea";
        this.secondary = "#20c757";
        this.about = "";
        this.lat = "";
        this.lng = "";
        this.cpf = this.userInfo.cpf;
        this.ad = parseInt(navParams.get("param"));
        console.log(this.ad);
        this.getAd(this.ad, this.cpf);
        this.getItens(this.ad);
        var val = (this.userInfo.cpf);
        this.getVisit(this.ad);
        this.getMinvalue();
        //this.userScore();
        console.log(val);
        //this.getFavorites(val,this.item)
        //this.fav[status] = "true";
        this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Carregando...',
            dismissOnPageChange: true
        }).present();
    }
    ModalItensPage.prototype.route = function () {
        var _this = this;
        this.geoLocation.getCurrentPosition()
            .then(function (resp) {
            window.open('https://www.google.com.br/maps/dir/' + resp.coords.latitude + ',' + resp.coords.longitude + '/' + _this.lat + ',' + _this.lng + '/');
        });
    };
    ModalItensPage.prototype.getVisit = function (id_ad) {
        var _this = this;
        this.service.getVisits(id_ad)
            .subscribe(function (data) {
            _this.count = data;
        }, function (err) { return console.log(err); });
    };
    ModalItensPage.prototype.userScore = function () {
        var _this = this;
        this.service.getUserScore(this.userInfo.cpf, this.ad)
            .subscribe(function (data) {
            _this.uscore = data;
            console.log(data);
        }, function (err) { return console.log(err); });
    };
    ModalItensPage.prototype.call = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    ModalItensPage.prototype.getAd = function (id_ad, cpf) {
        var _this = this;
        this.service.getAd(id_ad, cpf)
            .subscribe(function (data) {
            _this.itens = data;
            _this.uscore = _this.itens[0].uscore;
            _this.about = _this.itens[0].about;
            _this.lat = _this.itens[0].lat;
            _this.lng = _this.itens[0].lng;
            console.log(_this.itens);
        }, function (err) { return console.log(err); });
    };
    ModalItensPage.prototype.getItens = function (id_ad) {
        var _this = this;
        this.service.getItens(id_ad)
            .subscribe(function (data) {
            _this.dados = data;
            if (_this.uscore >= parseInt(_this.dados[0].value)) {
                _this.compare = 1;
            }
            else {
                _this.compare = 0;
            }
            console.log(_this.compare);
            console.log(_this.dados);
        }, function (err) { return console.log(err); });
    };
    ModalItensPage.prototype.percent = function (score, value) {
        var tmp = 0;
        tmp = ((score * 100) / value);
        if (tmp <= 100) {
            this.perc = Math.round(tmp);
        }
        else {
            this.perc = 100;
        }
        return this.perc;
    };
    ModalItensPage.prototype.getMinvalue = function () {
        var _this = this;
        this.service.minValue(this.ad)
            .subscribe(function (data) {
            console.log(data);
            _this.adscore = data[0].score;
            _this.advalue = data[0].minvalue;
        });
    };
    ModalItensPage.prototype.exchange = function (data) {
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__exchange_exchange__["a" /* ExchangePage */], { prod: data.name, img: data.img, value: data.value, fk_ad: data.fk_ad, pid: data.pid, desc: data.desc });
    };
    ModalItensPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-itens',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/modal-itens/modal-itens.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Terapia Continuada</ion-title>\n\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content>\n<!-- <div>\n  <ion-list *ngFor="let item of itens" >\n  <ion-item>\n      \n    <ion-thumbnail item-start>\n      <img src="{{\'http://gofidelize.tempsite.ws/service/lojas/\'+item.img}}">\n    </ion-thumbnail>\n    <h2 class="title">{{item.name}}</h2>\n    <p (click)="route()"><ion-icon name="map" icon-left></ion-icon>{{\' \'+item.street+\', \'+item.number}}</p>\n    <p (tap)="call(item.phone)"><ion-icon name="call"></ion-icon>{{\' \'+item.phone}}</p>\n    <p><ion-icon name="contacts"></ion-icon>{{\' \'+count+ \' Pessoas foram a essa loja\'}}</p>\n    </ion-item>\n   \n  </ion-list>\n  <div class="scores">\n    Você tem <span>{{uscore}}</span> pontos\n  </div>\n  \n  <div class="section">\n    <h2 class="head">Prêmios</h2>\n    <div class="prods" *ngFor="let data of dados" tappable (tap)="exchange(data)">\n      <span class="txt">{{data.name}}</span><label>{{data.value+\' pts.\'}}</label>\n      <progress-bar [progress]="uscore" [percent]="percent(uscore,data.value)" [value]="100" *ngIf="percent(uscore,data.value)<100" [color]="primary"></progress-bar>\n      <progress-bar [progress]="uscore" [percent]="percent(uscore,data.value)" [value]="100" *ngIf="percent(uscore,data.value)==100" [color]="secondary"></progress-bar>\n    </div>\n  </div>\n  <div class="section">\n    <h2 class="head">Sobre a loja</h2>\n      <div class="about">{{about}}</div>\n  </div>\n  <div class="section" *ngIf="adscore != 0">\n    <h2 class="bonus">Bonus</h2>\n      <div *ngIf="adscore>1" class="about">Ganhe {{adscore}} pontos a cada {{\'R$\'+advalue}}</div>\n      <div *ngIf="adscore==1" class="about">Ganhe {{adscore}} ponto a cada {{\'R$\'+advalue}}</div>\n  </div>\n</div>\n<br> -->\n<ion-grid>\n  <ion-row>\n    <ion-col col-6>\n      <ion-card>\n        <img src="assets/imgs/fisio1.jpg">\n        <ion-card-content>\n          <ion-card-title>\n            <h2 class="card-title">Serviço 1</h2> \n          </ion-card-title>\n          <p class="price">R$29,90</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-6>\n      <ion-card (click)="goToProd(item)">\n        <img src="assets/imgs/fisio2.jpeg">\n        <ion-card-content>\n          <ion-card-title>\n            <h2 class="card-title">Serviço 2</h2> \n          </ion-card-title>\n          <p class="price">R$39,90</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-6>\n      <ion-card (click)="goToProd(item)">\n        <img src="assets/imgs/fisio3.jpeg">\n        <ion-card-content>\n          <ion-card-title>\n            <h2 class="card-title">Serviço 3</h2> \n          </ion-card-title>\n          <p class="price">R$49,90</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-6>\n      <ion-card (click)="goToProd(item)">\n        <img src="assets/imgs/fisio4.jpeg">\n        <ion-card-content>\n          <ion-card-title>\n            <h2 class="card-title">Serviço 4</h2> \n          </ion-card-title>\n          <p class="price">R$59,90</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-6>\n      <ion-card (click)="goToProd(item)">\n        <img src="assets/imgs/fisio5.jpeg">\n        <ion-card-content>\n          <ion-card-title>\n            <h2 class="card-title">Serviço 5</h2> \n          </ion-card-title>\n          <p class="price">R$79,90</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-6>\n      <ion-card (click)="goToProd(item)">\n        <img src="assets/imgs/fisio6.jpeg">\n        <ion-card-content>\n          <ion-card-title>\n            <h2 class="card-title">Serviço 6</h2> \n          </ion-card-title>\n          <p class="price">R$89,90</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/modal-itens/modal-itens.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_user_info__["a" /* UserInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__["a" /* FunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["c" /* CurrencyPipe */]])
    ], ModalItensPage);
    return ModalItensPage;
}());

//# sourceMappingURL=modal-itens.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpfInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_guest_home_guest__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CpfInfoPage = (function () {
    function CpfInfoPage(navCtrl, navParams, service, func) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.func = func;
        this.email = "";
    }
    CpfInfoPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad MyChangesPage');
        var elem = document.querySelector(".tabbar");
        if (elem != null) {
            elem['style'].display = 'none';
        }
    };
    CpfInfoPage.prototype.send = function (email) {
        // this.service.getUser(cpf)
        // .subscribe(
        //   data => {
        //     console.log(data)
        //     if(data[0]["flag"] == 1){
        //       this.navCtrl.push(SigninPage, {cpf: cpf})
        //       this.func.toast(data[0]["msg"],3000);
        //     }else{
        //       if(data[0]["flag"] == 2){
        //         this.navCtrl.push(SignupPage, {cpf: cpf});
        //       }else{
        //         this.func.toast(data[0]["msg"],3000);
        //       }
        //     }
        //   },
        //   err => console.log(err))
        if (email) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */], { email: email });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */], { email: email });
        }
    };
    CpfInfoPage.prototype.goGuest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_guest_home_guest__["a" /* HomeGuestPage */]);
    };
    CpfInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cpf-info',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/cpf-info/cpf-info.html"*/'\n\n<ion-content padding>\n  <div class="img">\n      <img src="./assets/imgs/logo.jpeg" alt="">\n    </div>\n  <div class="info">\n    Bem vindo, informe seu email para fazer login, ou, se cadastrar.\n  </div>\n  <ion-item>\n    <ion-input type="email" [(ngModel)]="email" placeholder="Email..."></ion-input>\n  </ion-item>\n  <button ion-button icon-right block color="fourth" (click)="send(email)">Enviar<ion-icon name="send"></ion-icon></button>\n  <button ion-button clear icon-right block color="light" (click)="goGuest()">Entrar como visitante</button>\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/cpf-info/cpf-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* FunctionProvider */]])
    ], CpfInfoPage);
    return CpfInfoPage;
}());

//# sourceMappingURL=cpf-info.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_platform_platform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//services




var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, formbuilder, service, fumcPrv, plt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.service = service;
        this.fumcPrv = fumcPrv;
        this.plt = plt;
        this.user = { name: "", email: "", confirmEmail: "", pass: "", confirmPass: "", code: "", img: "", cpf: "", fkgender: "", birth: "", phone: "" };
        this.flag = false;
        this.user.cpf = this.navParams.get("cpf");
        if (this.plt.is('ios')) {
            this.flag = true;
        }
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signUp = function (user) {
        var _this = this;
        this.service.signUp(user)
            .then(function (data) {
            var values = data;
            if (values[0]['flag'] == 2) {
                console.log(data);
                _this.fumcPrv.toast(values[0]['msg'], 3000);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */], { cpf: _this.user.cpf }, { animate: true, direction: "forward" });
            }
            else {
                _this.fumcPrv.toast(values[0]['msg'], 3000);
            }
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SigupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Terapia Continuada</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2 class="head">Cadastro</h2>\n  \n  <div class="infos">\n    <form #signupForm="ngForm">\n        \n      <ion-list inset>\n        \n        <ion-item>\n          <ion-label>\n            Nome\n          </ion-label>\n          <ion-input [(ngModel)]="user.name" placeholder="Nome" type="text" name="name" required minlength="4"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                Email\n              </ion-label>\n          <ion-input [(ngModel)]="user.email" placeholder="Email" type="email" name="email" required #email="ngModel"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                Nascimento\n              </ion-label>\n          <ion-datetime placeholder="Nascimento" displayFormat="DD/MM/YYYY" pickerFormat="DD MM YYYY" name="birth" [(ngModel)]="user.birth"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                Telefone\n              </ion-label>\n            <ion-input  type="text" name="phone" [brmasker]="{phone:true}" [(ngModel)]="user.phone" required></ion-input>\n            <!-- <div class="form-error" *ngIf="phone.errors.required">\n                <span>Telefone obrigatório!</span>\n              </div> -->\n          </ion-item>\n        <ion-list>\n      <ion-item>\n          <ion-label>\n              Sexo\n            </ion-label>\n        <ion-select [(ngModel)]="user.fkgender" name="fkgender" #fkgender="ngModel">\n          <ion-option value="" disabled="true">Sexo</ion-option>\n          <ion-option value="1">Feminino</ion-option>\n          <ion-option value="2">Masculino</ion-option>\n          <ion-option value="3">Outro</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n        <!-- <div class="form-error" *ngIf="email.invalid && email.touched">\n          <span>Email é obrigatório</span>\n        </div> -->\n        <ion-item>\n            <ion-label>\n                Senha\n              </ion-label>\n          <ion-input [(ngModel)]="user.pass"  type="password" name="pass" required minlength="6" maxlength="12"  #pass="ngModel"></ion-input>\n        </ion-item>\n        <!-- <div class="form-error" *ngIf="pass.invalid && pass.dirty">\n           <div *ngIf="pass.errors.required">\n            <span>Senha obrigatória!</span>\n          </div>\n          <div *ngIf="pass.errors.minlength">\n            <span>Mínimo de 6 caracteres!</span>\n          </div>\n          <div *ngIf="pass.errors.maxlength">\n            <span>Máximo de 12 caracteres!</span>\n          </div> \n          \n        </div> -->\n      </ion-list>\n      <button ion-button block (click)="signUp(user)">CADASTRAR</button>\n      \n    </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* FunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_platform_platform__["a" /* Platform */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cat_itens_cat_itens__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesPage = (function () {
    function CategoriesPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
    }
    CategoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoriesPage');
        this.getCateg();
    };
    CategoriesPage.prototype.getCateg = function () {
        var _this = this;
        this.service.getCateg()
            .subscribe(function (data) {
            _this.cats = data;
            console.log(_this.cats);
        }, function (err) { return console.log(err); });
    };
    CategoriesPage.prototype.goToPage = function (cat_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cat_itens_cat_itens__["a" /* CatItensPage */], { catid: cat_id });
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/categories/categories.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Go Fidelize</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of cats" (click)="goToPage(item.catid)">\n      {{ item.name }}\n    </button> \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/categories/categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoProvider = (function () {
    //client: string;
    function UserInfoProvider(storage, event) {
        var _this = this;
        this.storage = storage;
        this.event = event;
        this.cpf = '67298010344';
        this.storage.get('cpf').then(function (cpf) {
            if (cpf != null && cpf != '') {
                _this.cpf = '67298010344';
                _this.event.publish("user:loaded");
            }
        });
        this.storage.get('name').then(function (name) {
            if (name != null && name != "") {
                _this.name = name;
            }
        });
        this.storage.get('email').then(function (email) {
            if (email != null && email != "") {
                _this.email = 'email@email.com';
            }
        });
        this.storage.get('img').then(function (img) {
            if (img != null && img != "") {
                _this.img = img;
            }
        });
        this.storage.get('pass').then(function (pass) {
            if (pass != null && pass != "") {
                _this.pass = pass;
            }
        });
    }
    UserInfoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */]])
    ], UserInfoProvider);
    return UserInfoProvider;
}());

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_user_info__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_changes_my_changes__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_launch_navigator__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ExchangePage = (function () {
    function ExchangePage(navCtrl, navParams, service, userInfo, funcPrv, callNumber, geoLocation, alertCtrl, launchNavigator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.userInfo = userInfo;
        this.funcPrv = funcPrv;
        this.callNumber = callNumber;
        this.geoLocation = geoLocation;
        this.alertCtrl = alertCtrl;
        this.launchNavigator = launchNavigator;
        this.cpf = "";
        this.score = 0;
        this.msg = "";
        this.prod = this.navParams.get("name");
        this.img = this.navParams.get("img");
        this.value = this.navParams.get("value");
        this.fk_ad = this.navParams.get("fk_ad");
        this.pid = this.navParams.get("pid");
        this.desc = this.navParams.get("desc");
        console.log(this.fk_ad);
        this.cpf = this.userInfo.cpf;
        this.getScore(this.cpf, this.fk_ad);
        this.getAd(this.fk_ad, this.cpf);
        this.getVisit(this.fk_ad);
    }
    /*
      route(){
        this.geoLocation.getCurrentPosition()
        .then(resp => {
          window.open('https://www.google.com.br/maps/dir/'+resp.coords.latitude+','+resp.coords.longitude+'/'+this.lat+','+this.lng+'/')
        })
        
        
       }
     */
    ExchangePage.prototype.route = function (adress) {
        var _this = this;
        this.geoLocation.getCurrentPosition()
            .then(function (resp) {
            _this.launchNavigator.navigate(adress, {
                start: resp.coords.latitude + ',' + resp.coords.longitude,
                app: _this.launchNavigator.APP.USER_SELECT
            });
        });
        //this.launchNavigator.navigate(adress)
    };
    ExchangePage.prototype.call = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    ExchangePage.prototype.getAd = function (id_ad, cpf) {
        var _this = this;
        this.service.getAd(id_ad, cpf)
            .subscribe(function (data) {
            _this.namead = data[0].name;
            _this.imgad = data[0].img;
            _this.about = data[0].about;
            _this.lat = data[0].lat;
            _this.lng = data[0].lng;
            _this.street = data[0].street;
            _this.district = data[0].district;
            _this.number = data[0].number;
            _this.phone = data[0].phone;
            _this.adress = _this.district + '-' + _this.street + ',' + _this.number;
            console.log(data);
        }, function (err) { return console.log(err); });
    };
    ExchangePage.prototype.getScore = function (cpf, fk_ad) {
        var _this = this;
        this.service.getUserScore(cpf, fk_ad)
            .subscribe(function (data) {
            console.log(data);
            _this.score = parseInt(data);
        }, function (err) { return console.log(err); });
    };
    ExchangePage.prototype.getVisit = function (id_ad) {
        var _this = this;
        this.service.getVisits(id_ad)
            .subscribe(function (data) {
            _this.count = data;
        }, function (err) { return console.log(err); });
    };
    ExchangePage.prototype.getExchanges = function (uid) {
        var _this = this;
        this.service.getExchanges(uid)
            .subscribe(function (data) {
            _this.itens = data;
            console.log(_this.itens);
        }, function (err) { return console.log(err); });
    };
    ExchangePage.prototype.exchange = function (cpf_user, fk_comp, fk_prod, val) {
        var _this = this;
        console.log(val);
        this.service.exchange(cpf_user, fk_comp, fk_prod, val)
            .subscribe(function (data) {
            _this.msg = data[0].msg;
            if (data[0].flag == 1) {
                var alert_1 = _this.alertCtrl.create({
                    title: _this.msg,
                    subTitle: 'Sua troca foi envidada para seu app, verifique o menu Trocas/Minhas Trocas, apresente-se ao balcão e receba seu prêmio',
                    buttons: [
                        {
                            text: 'Fechar',
                            handler: function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__my_changes_my_changes__["a" /* MyChangesPage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: _this.msg,
                    subTitle: 'Houve problemas na sua troca, provalvelmente isso ocorreu por dados incompletos, verifique seus dados no menu Perfil e tente novamente.',
                    buttons: [
                        {
                            text: 'Fechar',
                        }
                    ]
                });
                alert_2.present();
            }
        });
    };
    ExchangePage.prototype.close = function () {
        this.navCtrl.pop();
    };
    ExchangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-exchange',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/exchange/exchange.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>Go Fidelize</ion-title>\n      <ion-buttons end>\n        \n      </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="{{\'http://gofidelize.tempsite.ws/service/lojas/\'+imgad}}">\n          </ion-thumbnail>\n          <h2 class="title">{{namead}}</h2>\n          <p ><ion-icon name="map" icon-left></ion-icon>{{\' \'+street+\', \'+number}}</p>\n          <p><ion-icon name="call"></ion-icon>{{\' \'+phone}}</p>\n          <p><ion-icon name="contacts"></ion-icon>{{\' \'+count+ \' Pessoas foram a essa loja\'}}</p>\n          </ion-item>\n         \n        </ion-list>\n  <ion-card>\n    <ion-card-header>\n      <img src="{{\'http://gofidelize.tempsite.ws/service/img/\'+img}}"/>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-fab right middle>\n            <button ion-fab ><ion-icon name="add"></ion-icon></button>\n            <ion-fab-list side="top">\n              <button ion-fab (click)="route(adress)"><ion-icon name="pin"></ion-icon></button>\n              <button ion-fab (click)="call(phone)"><ion-icon name="call"></ion-icon></button>\n            </ion-fab-list>\n        </ion-fab>\n      <h2 class="h2-title">{{name}}</h2>\n      <span color="fonts">{{desc}}</span>\n      <p>{{value}} pts.</p>\n      <button large ion-button block type="" *ngIf="score >= value" (tap)="exchange(cpf,fk_ad,pid,value)">TROCAR</button>\n      <span class="minus-score" *ngIf="score < value">Faltam {{value-score+\' Pts.\'}}</span>\n    </ion-card-content>\n  </ion-card>\n  <!--<ion-footer class="footer" ion-fixed>\n    <div class="score-footer">\n      <div class="top">\n      Valor: {{itens.val+\' Pts.\'}}\n    </div>\n    \n    </div>\n   \n    <div>\n      <button ion-button type="" *ngIf="score >= itens.val" (tap)="exchange(cpf,1,itens.id_cat, itens.val)">TROCAR</button>\n      <span class="minus-score" *ngIf="score < itens.val">Faltam {{itens.val-score+\' Pts.\'}}</span>\n    </div>\n  \n</ion-footer>--> \n  \n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/exchange/exchange.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_user_info__["a" /* UserInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* FunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], ExchangePage);
    return ExchangePage;
}());

//# sourceMappingURL=exchange.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeGuestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_geolib__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_geolib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_geolib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_user_info__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_changes_my_changes__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__categories_categories__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__prod_guest_prod_guest__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















//declare var geolib: Geolib;
var HomeGuestPage = (function () {
    function HomeGuestPage(navCtrl, service, formBuilder, modalCtrl, navParams, loadingCtrl, storage, geoLocation, userInfo) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.geoLocation = geoLocation;
        this.userInfo = userInfo;
        this.page = { title: "Home", component: HomeGuestPage_1 };
        this.order = "";
        this.homePage = HomeGuestPage_1;
        this.cpf = this.userInfo.cpf;
        console.log(this.cpf);
        //this.getData(this.cpf);
        this.ordenation = "";
    }
    HomeGuestPage_1 = HomeGuestPage;
    HomeGuestPage.prototype.ionViewDidEnter = function () {
        this.getData(this.cpf);
    };
    HomeGuestPage.prototype.reorder = function () {
        this.order = this.ordenation;
        console.log(this.ordenation);
    };
    /*
      userScore(cpf){
        this.service.getUserScore(cpf)
        .subscribe(data => {
          this.uscore = data;
          console.log(data)
        },
        err => console.log(err));
      }*/
    HomeGuestPage.prototype.getData = function (cpf) {
        var _this = this;
        this.service.getData(cpf).subscribe(function (data) {
            _this.users = data;
            console.log(data);
            setInterval(function () {
                _this.getAllDistances();
            }, 3000);
        }, function (err) { return console.log(err); });
    };
    HomeGuestPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__user_user__["a" /* UserPage */], { cpf: this.cpf });
    };
    HomeGuestPage.prototype.changes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__my_changes_my_changes__["a" /* MyChangesPage */], { cpf: this.cpf });
    };
    HomeGuestPage.prototype.getAllDistances = function () {
        var _this = this;
        this.geoLocation.getCurrentPosition().then(function (resp) {
            for (var i = 0; i < _this.users.length; i++) {
                var val = _this.users[i];
                val.distance = _this.getDistance({ lat: resp.coords.latitude,
                    lng: resp.coords.longitude }, { lat: val.lat,
                    lng: val.lng });
                val.hidden = false;
                if (val.distance > 50) {
                    val.hidden = true;
                }
            }
        });
    };
    HomeGuestPage.prototype.getDistance = function (origin, dest) {
        var distance = __WEBPACK_IMPORTED_MODULE_7_geolib__["getDistance"](origin, dest);
        return __WEBPACK_IMPORTED_MODULE_7_geolib__["convertUnit"]('km', distance, 1);
    };
    HomeGuestPage.prototype.openModal = function (item) {
        // this.service.updateClicks(item.id_ad)
        //    .subscribe(
        //       data => console.log(data),
        //       err => console.log(err)
        //    );
        //let modal = this.modalCtrl.create(ModalItensPage, {param: item});
        //modal.present();
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__prod_guest_prod_guest__["a" /* ProdGuestPage */], { param: item.id_ad });
    };
    HomeGuestPage.prototype.goCat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__categories_categories__["a" /* CategoriesPage */]);
    };
    HomeGuestPage.prototype.logOut = function () {
        this.storage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */], { flag: true });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], HomeGuestPage.prototype, "nav", void 0);
    HomeGuestPage = HomeGuestPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home-guest',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/home-guest/home-guest.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>Go Fidelize</ion-title>\n      \n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n  <div class="info" ion-fixed>\n    Locais na região\n  </div>\n  <ion-list no-lines class="order" ion-fixed>\n    <ion-item>\n      <ion-label>Ordenar:</ion-label>\n        <ion-select [(ngModel)]="ordenation" (ionChange)="reorder()">\n          <ion-option value="+distance">Mais próximos</ion-option>\n          <ion-option value="-uscore">Pontuação+</ion-option>\n          <ion-option value="+uscore">Pontuação-</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n  <ion-item *ngFor="let item of users | orderBy : [order]:ordenation" [hidden]="item.hidden" (click)="openModal(item)" >\n      \n      <ion-thumbnail item-start>\n        <img src="{{\'http://gofidelize.tempsite.ws/service/lojas/\'+item.img}}">\n      </ion-thumbnail>\n      <h2 class="title">{{item.name}}</h2>\n      <p>{{item.district+\' - \'+item.street+\', \'+item.number}}</p>\n      <p *ngIf="item.distance"><ion-icon class="icon" name="pin"></ion-icon>{{\' \'+item.distance+\' km\'}}</p>\n      <p><ion-icon class="icon" name="ios-star"></ion-icon>{{\' \'+item.uscore+\' \'}}<ion-icon class="icon" name="ribbon"></ion-icon>{{\' \'+item.uexc+\' \'}}</p>\n      <ion-icon name="arrow-dropright" item-end color="primary"></ion-icon>\n    </ion-item>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/home-guest/home-guest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_9__providers_service_user_info__["a" /* UserInfoProvider */]])
    ], HomeGuestPage);
    return HomeGuestPage;
    var HomeGuestPage_1;
}());

//# sourceMappingURL=home-guest.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatItensPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_itens_modal_itens__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatItensPage = (function () {
    function CatItensPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.catid = this.navParams.get('catid');
        console.log(this.catid);
    }
    CatItensPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CatItensPage');
        this.getCatItem();
    };
    CatItensPage.prototype.getCatItem = function () {
        var _this = this;
        this.service.getDataItens(this.catid)
            .subscribe(function (data) {
            _this.itens = data;
            console.log(_this.itens);
        }, function (err) { return console.log(err); });
    };
    CatItensPage.prototype.openModal = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modal_itens_modal_itens__["a" /* ModalItensPage */], { param: item.id_ad });
    };
    CatItensPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cat-itens',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/cat-itens/cat-itens.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>Go Fidelize</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n  <div class="info" ion-fixed>\n    Locais na região\n  </div>\n  <ion-list no-lines class="order" ion-fixed>\n    <ion-item>\n      <ion-label>Ordenar:</ion-label>\n        <ion-select [(ngModel)]="ordenation" (ionChange)="reorder()">\n          <ion-option value="+distance">Mais próximos</ion-option>\n          <ion-option value="-uscore">Pontuação+</ion-option>\n          <ion-option value="+uscore">Pontuação-</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n  <ion-item *ngFor="let item of itens | orderBy : [order]:ordenation" [hidden]="item.hidden" (click)="openModal(item)" >\n      \n      <ion-thumbnail item-start>\n        <img src="{{\'http://gofidelize.tempsite.ws/service/lojas/\'+item.img}}">\n      </ion-thumbnail>\n      <h2 class="title">{{item.name}}</h2>\n      <p>{{item.district+\' - \'+item.street+\', \'+item.number}}</p>\n      <p *ngIf="item.distance"><ion-icon class="icon" name="pin"></ion-icon>{{\' \'+item.distance+\' km\'}}</p>\n      <p><ion-icon class="icon" name="ios-star"></ion-icon>{{\' \'+item.uscore+\' \'}}<ion-icon class="icon" name="ribbon"></ion-icon>{{\' \'+item.uexc+\' \'}}</p>\n      <ion-icon name="arrow-dropright" item-end color="primary"></ion-icon>\n    </ion-item>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/cat-itens/cat-itens.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], CatItensPage);
    return CatItensPage;
}());

//# sourceMappingURL=cat-itens.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdGuestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_user_info__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProdGuestPage = (function () {
    function ProdGuestPage(navCtrl, navParams, viewCtrl, service, popoverCtrl, modalCtrl, userInfo, loadingCtrl, functionPrv, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.userInfo = userInfo;
        this.loadingCtrl = loadingCtrl;
        this.functionPrv = functionPrv;
        this.callNumber = callNumber;
        this.addressConp = false;
        this.item = 0;
        this.cpf = this.userInfo.cpf;
        this.primary = "#8ad7ea";
        this.secondary = "#20c757";
        this.about = "";
        this.item = parseInt(navParams.get("param"));
        console.log(this.item);
        this.getAdGuest(this.item);
        this.getItens(this.item);
        var val = (this.userInfo.cpf);
        this.getVisit(this.item);
        //this.userScore();
        console.log(val);
        //this.getFavorites(val,this.item)
        //this.fav[status] = "true";
        this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Carregando...',
            dismissOnPageChange: true
        }).present();
    }
    ProdGuestPage.prototype.getVisit = function (id_ad) {
        var _this = this;
        this.service.getVisits(id_ad)
            .subscribe(function (data) {
            _this.count = data;
        }, function (err) { return console.log(err); });
    };
    ProdGuestPage.prototype.call = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    ProdGuestPage.prototype.getAdGuest = function (id_ad) {
        var _this = this;
        this.service.getAdGuest(id_ad)
            .subscribe(function (data) {
            _this.itens = data;
            _this.uscore = _this.itens[0].uscore;
            _this.about = _this.itens[0].about;
            console.log(_this.itens);
        }, function (err) { return console.log(err); });
    };
    ProdGuestPage.prototype.getItens = function (id_ad) {
        var _this = this;
        this.service.getItens(id_ad)
            .subscribe(function (data) {
            _this.dados = data;
            if (_this.uscore >= parseInt(_this.dados[0].value)) {
                _this.compare = 1;
            }
            else {
                _this.compare = 0;
            }
            console.log(_this.compare);
            console.log(_this.dados);
        }, function (err) { return console.log(err); });
    };
    ProdGuestPage.prototype.percent = function (score, value) {
        var tmp = 0;
        tmp = ((score * 100) / value);
        if (tmp <= 100) {
            this.perc = Math.round(tmp);
        }
        else {
            this.perc = 100;
        }
        return this.perc;
    };
    ProdGuestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-prod-guest',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/prod-guest/prod-guest.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Go Fidelize</ion-title>\n\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content>\n<div>\n  <ion-list *ngFor="let item of itens" >\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="{{\'http://gofidelize.tempsite.ws/service/lojas/\'+item.img}}">\n    </ion-thumbnail>\n    <h2 class="title">{{item.name}}</h2>\n    <p><ion-icon name="map" icon-left></ion-icon>{{\' \'+item.district+\' - \'+item.street+\', \'+item.number}}</p>\n    <p (tap)="call(item.phone)"><ion-icon name="call"></ion-icon>{{\' \'+item.phone}}</p>\n    <p><ion-icon name="contacts"></ion-icon>{{\' \'+count+ \' Pessoas foram a essa loja\'}}</p>\n    </ion-item>\n   \n  </ion-list>\n  <div class="scores">\n    Visite lojas parceiras para acumular pontos ;)\n  </div>\n  \n  <div class="section">\n    <h2 class="head">Prêmios</h2>\n    <div class="prods" *ngFor="let data of dados">\n      <span class="txt">{{data.name}}</span><label>{{data.value+\' pts.\'}}</label>\n      <progress-bar [progress]="0" [percent]="0" [value]="100" *ngIf="compare==0" [color]="primary"></progress-bar>\n      <progress-bar [progress]="0" [percent]="0" [value]="100" *ngIf="compare==1" [color]="secondary"></progress-bar>\n    </div>\n  </div>\n  <div class="section">\n    <h2 class="head">Sobre a loja</h2>\n      <div class="about">{{about}}</div>\n  </div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/prod-guest/prod-guest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_user_info__["a" /* UserInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* FunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */]])
    ], ProdGuestPage);
    return ProdGuestPage;
}());

//# sourceMappingURL=prod-guest.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_item_news_item__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsPage = (function () {
    function NewsPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
    }
    NewsPage.prototype.ionViewDidEnter = function () {
        this.getNews();
    };
    NewsPage.prototype.goTo = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__news_item_news_item__["a" /* NewsItemPage */], { itens: item });
    };
    NewsPage.prototype.getNews = function () {
        var _this = this;
        this.service.news()
            .subscribe(function (data) {
            console.log(data);
            _this.itens = data;
        }, function (err) {
            console.log(err);
        });
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/news/news.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Go Fidelize</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of itens" (tap)="goTo(item)">\n      <ion-thumbnail item-start>\n        <img src="{{\'http://gofidelize.tempsite.ws/service/lojas/\'+item.imgad}}">\n      </ion-thumbnail>\n      <h2 class="title">{{item.title}}</h2>\n      <p color="text">Valido até {{item.dt_end}}</p>\n      <button ion-button clear item-end *ngIf="item.new == 1"><ion-badge>novo</ion-badge></button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_user_info__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsItemPage = (function () {
    function NewsItemPage(navCtrl, navParams, callNumber, uinf, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.uinf = uinf;
        this.service = service;
        this.views = 0;
        this.cpf = "";
        this.nid = 0;
        this.itens = this.navParams.get('itens');
        console.log(this.itens);
        this.cpf = this.uinf.cpf;
        this.nid = this.itens.nid;
    }
    NewsItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsItemPage');
        this.getView();
        this.countViews();
    };
    NewsItemPage.prototype.getView = function () {
        this.service.getView(this.cpf, this.nid)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) { return console.log(err); });
    };
    NewsItemPage.prototype.countViews = function () {
        var _this = this;
        this.service.countView(this.nid)
            .subscribe(function (data) {
            console.log(data);
            _this.views = data[0].count;
        }, function (err) { return console.log(err); });
    };
    NewsItemPage.prototype.call = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    NewsItemPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    NewsItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-news-item',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/news-item/news-item.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Go Fidelize</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div class="image-wrapper">\n    <img [src]="\'http://gofidelize.tempsite.ws/service/img/\'+itens.img_promo">\n    <div class="back-shadow">\n      <span class="">{{ itens.street +\', \'+ itens.number +\' - \'+ itens.district}}</span>\n      <span class="phone" (tap)="call(itens.phone)">{{itens.phone}}</span>\n    </div>\n    \n  </div>\n  <div class="view">\n    <label><ion-icon name="md-eye"></ion-icon>\n      {{views}}</label>\n  </div>\n  \n    <div class="info">  \n      <h2 class="title">{{itens.title}}</h2>\n      <p class="text">{{itens.text}}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/news-item/news-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_user_info__["a" /* UserInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], NewsItemPage);
    return NewsItemPage;
}());

//# sourceMappingURL=news-item.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, navParams, service, func) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.func = func;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.recoverPassword = function (useremail) {
        var _this = this;
        this.service.forgotEmail(useremail)
            .subscribe(function (data) {
            _this.func.toast(data, 3000);
        });
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/forgot-password/forgot-password.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-input [(ngModel)]="email" type="text" placeholder="Email"></ion-input>\n  </ion-item>\n  <div class="options">\n    <button ion-button full (click)="recoverPassword(email)">RECUPERAR SENHA</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/forgot-password/forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* FunctionProvider */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FunctionProvider = (function () {
    function FunctionProvider(storage, event, toastCtrl) {
        this.storage = storage;
        this.event = event;
        this.toastCtrl = toastCtrl;
    }
    FunctionProvider.prototype.toast = function (msg, time) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time
        });
        toast.present();
    };
    FunctionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], FunctionProvider);
    return FunctionProvider;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modal_itens_modal_itens__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_user__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forgot_password_forgot_password__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cpf_info_cpf_info__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_changes_my_changes__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_news_news__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_news_item_news_item__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_categories_categories__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cat_itens_cat_itens__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_guest_home_guest__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_prod_guest_prod_guest__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_exchange_exchange__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_change_end_change_end__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_orderBy__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_service_user_info__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_service_functions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_geolocation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_google_maps__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_local_notifications__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_call_number__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_brmasker_ionic_3__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_launch_navigator__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_progress_bar_progress_bar__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























//pipes


//services


//providers







//components

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modal_itens_modal_itens__["a" /* ModalItensPage */],
                __WEBPACK_IMPORTED_MODULE_25__pipes_orderBy__["a" /* OrderBy */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_36__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cpf_info_cpf_info__["a" /* CpfInfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_changes_my_changes__["a" /* MyChangesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_news_item_news_item__["a" /* NewsItemPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cat_itens_cat_itens__["a" /* CatItensPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_guest_home_guest__["a" /* HomeGuestPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_prod_guest_prod_guest__["a" /* ProdGuestPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_exchange_exchange__["a" /* ExchangePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_change_end_change_end__["a" /* ChangeEndPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_34_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    platforms: {
                        ios: {
                            backButtonText: 'Voltar'
                        }
                    }
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modal_itens_modal_itens__["a" /* ModalItensPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_36__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cpf_info_cpf_info__["a" /* CpfInfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_changes_my_changes__["a" /* MyChangesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_news_item_news_item__["a" /* NewsItemPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cat_itens_cat_itens__["a" /* CatItensPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_guest_home_guest__["a" /* HomeGuestPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_prod_guest_prod_guest__["a" /* ProdGuestPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_exchange_exchange__["a" /* ExchangePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_change_end_change_end__["a" /* ChangeEndPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_27__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_service_user_info__["a" /* UserInfoProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_service_functions__["a" /* FunctionProvider */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_26__angular_common__["c" /* CurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_launch_navigator__["a" /* LaunchNavigator */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cpf_info_cpf_info__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_service_user_info__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//services




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, event, storage, userInfo, service, localNotifications) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.event = event;
        this.storage = storage;
        this.userInfo = userInfo;
        this.service = service;
        this.localNotifications = localNotifications;
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_cpf_info_cpf_info__["a" /* CpfInfoPage */];
        this.loading = true;
        this.cpf = "";
        this.permission = false;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //this.statusBar.styleDefault();
            _this.storage.get('cpf').then(function (cpf) {
                if (cpf != '' && cpf != null) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
                }
                console.log(cpf);
            });
            _this.splashScreen.hide();
            //this.getUser();
            /*event.subscribe('user:loaded',() => {
              this.rootPage = TabsPage;
            })*/
        });
        this.cpf = this.userInfo.cpf;
        if (this.platform.is('cordova')) {
            this.service.getNewItem(this.cpf)
                .subscribe(function (data) {
                if (data == 0) {
                    setInterval(function () {
                        _this.service.news()
                            .subscribe(function (data) {
                            console.log(data);
                            _this.itens = data;
                        }, function (err) {
                            console.log(err);
                        });
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
                    }, 5000);
                }
            });
        }
    }
    MyApp.prototype.openPage = function (pages) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(pages.component);
    };
    MyApp.prototype.logOut = function () {
        this.storage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/app/app.html"*/'\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__providers_service_user_info__["a" /* UserInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeEndPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangeEndPage = (function () {
    function ChangeEndPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.cpf = "";
        this.cpf = this.navParams.get("cpf");
        console.log(this.cpf);
    }
    ChangeEndPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ChangeEndPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-change-end',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/change-end/change-end.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>Go Fidelize</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (tap)="goCat()">\n          <ion-icon name="ios-list"></ion-icon>\n          \n        </button>\n      </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding>\n   <div>\n    <h1 class="title">Go Fidelize</h1>\n  </div>\n  <div class="score-info">\n    <h1>Troca efetuada!</h1>\n    <p>Obrigado por nos visitar, sua troca foi enviada para seu app, verifique o menu Trocas/Última troca, apresente-se o \n       no caixa para validar sua troca e receber o produto. Volte sempre!</p>\n  </div>\n  <div class="control">\n    <button ion-button icon-right start block (tap)="back()">\n      Próximo\n      <ion-icon name="send"></ion-icon>\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/change-end/change-end.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], ChangeEndPage);
    return ChangeEndPage;
}());

//# sourceMappingURL=change-end.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderBy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/*
 * Example use
 *		Basic Array of single type: *ngFor="#todo of todoService.todos | orderBy : '-'"
 *		Multidimensional Array Sort on single column: *ngFor="#todo of todoService.todos | orderBy : ['-status']"
 *		Multidimensional Array Sort on multiple columns: *ngFor="#todo of todoService.todos | orderBy : ['status', '-title']"
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderBy = (function () {
    function OrderBy() {
    }
    OrderBy_1 = OrderBy;
    OrderBy._orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderBy.prototype.transform = function (input, _a) {
        var _b = _a[0], config = _b === void 0 ? '+' : _b;
        if (!Array.isArray(input))
            return input;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc ? input.sort() : input.sort().reverse();
            }
            else {
                var property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return input.sort(function (a, b) {
                    return !desc
                        ? OrderBy_1._orderByComparator(a[property], b[property])
                        : -OrderBy_1._orderByComparator(a[property], b[property]);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return input.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    var comparison = !desc
                        ? OrderBy_1._orderByComparator(a[property], b[property])
                        : -OrderBy_1._orderByComparator(a[property], b[property]);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    OrderBy = OrderBy_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'orderBy', pure: false })
    ], OrderBy);
    return OrderBy;
    var OrderBy_1;
}());

//# sourceMappingURL=orderBy.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('value'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('percent'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "percent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('color'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "color", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer" [style.width]="value + \'%\'">\n    <div class="progress-inner" [style.width]="percent + \'%\'" [style.background-color]="color">\n        {{progress}}pts\n    </div>\n</div>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_user_info__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_functions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forgot_password_forgot_password__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_tabs__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, service, toastCtrl, storage, userInfo, functionPrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.userInfo = userInfo;
        this.functionPrv = functionPrv;
        this.root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.values = { id_user: "", email: "" };
        this.flag = false;
        this.cpf = "";
        //this.item = navParams.get("param")
        this.cpf = navParams.get("cpf");
        console.log(this.item);
        //this.signin(this.item);
    }
    SigninPage.prototype.login = function () {
        var _this = this;
        //console.log(this.email);
        // console.log(this.password);
        this.service.signin(this.cpf, this.password)
            .then(function (data) {
            console.log(data);
            if (data[0].email != null) {
                _this.userInfo.name = data[0].name;
                _this.userInfo.email = data[0].email;
                _this.userInfo.cpf = data[0].cpf;
                _this.userInfo.pass = data[0].pass;
                _this.storage.set('name', data[0].name);
                _this.storage.set('email', data[0].email);
                _this.storage.set('cpf', data[0].cpf);
                _this.storage.set('pass', data[0].pass);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */], {}, { animate: true, direction: "forward" });
            }
            else {
                _this.functionPrv.toast("Dados incorretos!", 2000);
            }
        });
    };
    SigninPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    SigninPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/signin/signin.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>Go Fidelize</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n      <div class="cpf-info">\n          {{cpf}}\n      </div>\n      <div class="options">\n         <ion-list>\n        \n        <ion-item>\n          <ion-input [(ngModel)]="password" type="password" placeholder="Senha"></ion-input>\n        </ion-item>\n      </ion-list>\n      </div>\n      \n      <div>\n        <button ion-button full  (click)="login()">ENTRAR</button>\n        <a (click)="forgotPassword()" class="forgot-password" color="secondary">Esqueci minha senha</a> \n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_user_info__["a" /* UserInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_service_functions__["a" /* FunctionProvider */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyChangesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_user_info__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyChangesPage = (function () {
    function MyChangesPage(navCtrl, navParams, userInfo, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userInfo = userInfo;
        this.service = service;
        this.cpf = this.userInfo.cpf;
        this.getUser();
    }
    MyChangesPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad MyChangesPage');
        this.getChanges(this.cpf);
        this.getActChanges(this.cpf);
    };
    MyChangesPage.prototype.getUser = function () {
        var _this = this;
        this.service.getUserInfo(this.cpf)
            .subscribe(function (data) {
            console.log(data);
            _this.user = data;
        }, function (err) { return console.log(err); });
    };
    MyChangesPage.prototype.getChanges = function (cpf) {
        var _this = this;
        this.service.getExchanges(cpf).subscribe(function (data) {
            _this.changes = data;
            console.log(data);
        }, function (err) { return console.log(err); });
    };
    MyChangesPage.prototype.getActChanges = function (cpf) {
        var _this = this;
        this.service.getActExchanges(cpf).subscribe(function (data) {
            _this.act_changes = data;
            console.log(data);
        }, function (err) { return console.log(err); });
    };
    MyChangesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-changes',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/my-changes/my-changes.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>Go Fidelize</ion-title>   \n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content>\n \n    <h2 class="head">Última Troca</h2>\n    <ion-list class="list1">\n        <ion-item *ngFor="let itens of act_changes | orderBy : [order]:ordenation" >\n            <ion-thumbnail item-start>\n              <img src="{{\'http://gofidelize.tempsite.ws/service/lojas/\'+itens.img}}">\n            </ion-thumbnail>\n            <h2 class="title">{{itens.comp}}</h2>\n            <p><ion-icon class="icon" name="md-medal"></ion-icon>{{\' \'+itens.prod+\' - \'+itens.value+\' pts.\'}}</p>\n            <p><ion-icon class="icon" name="md-calendar"></ion-icon>{{\' \'+itens.date}} </p>\n            <p><ion-icon class="icon" name="time"></ion-icon>{{\' \'+itens.hour}} </p>\n            \n          </ion-item>\n       </ion-list>\n    <h2 class="head">Histórico</h2>\n    <ion-list class="list2">\n    <ion-item *ngFor="let item of changes | orderBy : [order]:ordenation" >\n        <ion-thumbnail item-start>\n          <img src="{{\'http://gofidelize.tempsite.ws/service/lojas/\'+item.img}}">\n        </ion-thumbnail>\n        <h2 class="title">{{item.comp}}</h2>\n        <p><ion-icon class="icon" name="md-medal"></ion-icon>{{\' \'+item.prod+\' - \'+item.value+\' pts.\'}}</p>\n        <p><ion-icon class="icon" name="swap"></ion-icon>{{\' \'+item.count+\'x\'}}</p>\n        \n      </ion-item>\n   </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/my-changes/my-changes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_user_info__["a" /* UserInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], MyChangesPage);
    return MyChangesPage;
}());

//# sourceMappingURL=my-changes.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_user_info__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cpf_info_cpf_info__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserPage = (function () {
    function UserPage(platform, navCtrl, navParams, service, userInfo, functionPrv, storage, geolocation, event) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.userInfo = userInfo;
        this.functionPrv = functionPrv;
        this.storage = storage;
        this.geolocation = geolocation;
        this.event = event;
        this.wishes = 0;
        this.exchanges = 0;
        this.user = { name: "", email: "", pass: "", cpf: "", birth: "", gender: "", fkgender: 0, phone: "" };
        this.id = (this.userInfo.cpf);
        //this.id = this.navParams.get("cpf")
        console.log(this.id);
        //document.querySelector("ion-tabs")['style'].display = 'none'
    }
    UserPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad UserPage');
        this.getUser(this.id);
    };
    UserPage.prototype.getUser = function (cpf) {
        var _this = this;
        this.service.getUserInfo(cpf)
            .subscribe(function (data) {
            console.log(data);
            _this.itens = data;
            _this.user.name = _this.itens[0].name;
            _this.user.email = _this.itens[0].email;
            _this.user.pass = _this.itens[0].pass;
            _this.user.cpf = _this.itens[0].cpf;
            _this.user.gender = _this.itens[0].gender;
            _this.user.fkgender = _this.itens[0].fkgender;
            _this.user.phone = _this.itens[0].phone;
            if (_this.itens[0].birth != "//") {
                _this.user.birth = _this.itens[0].birth;
            }
            else {
                _this.user.birth = "";
            }
            console.log(_this.user);
        }, function (err) { return console.log(err); });
    };
    UserPage.prototype.getItensFav = function (id) {
        var _this = this;
        var val = (this.userInfo.cpf);
        this.service.getItensFav(val)
            .subscribe(function (data) {
            var i = 1;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var value = data_1[_i];
                _this.fav_count = i++;
            }
            console.log(_this.fav_count);
        }, function (err) { return console.log(err); });
    };
    UserPage.prototype.getCountScores = function (uid) {
        var _this = this;
        this.service.countScores(uid)
            .subscribe(function (data) {
            _this.count_score = data;
            console.log(data);
        });
    };
    UserPage.prototype.upUser = function () {
        var _this = this;
        this.service.upUser(this.user)
            .then(function (data) {
            console.log(data);
            var toast = JSON.stringify(data);
            _this.functionPrv.toast(toast, 3000);
            _this.getUser(_this.user.cpf);
        });
    };
    UserPage.prototype.logout = function () {
        this.userInfo.email = "";
        this.userInfo.name = "";
        this.userInfo.cpf = "";
        this.userInfo.pass = "";
        this.storage.set('email', "");
        this.storage.set('name', "");
        this.storage.set('cpf', "");
        this.storage.set('pass', "");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__cpf_info_cpf_info__["a" /* CpfInfoPage */]);
    };
    UserPage.prototype.openPage = function (page) {
        this.navCtrl.push(page, { param: this.userInfo.cpf });
    };
    UserPage.prototype.countWish = function () {
        var _this = this;
        var user = (this.userInfo.cpf);
        this.service.countWish(user)
            .subscribe(function (data) {
            _this.wishes = data;
        });
    };
    UserPage.prototype.countExc = function () {
        var _this = this;
        var user = (this.userInfo.cpf);
        this.service.countExc(user)
            .subscribe(function (data) {
            _this.exchanges = data;
        });
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/user/user.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>\n        Minha Conta\n      </ion-title>\n      <ion-buttons end>\n      <button ion-button icon-only (tap)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n        Sair\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n    <h2 class="head">Dados Pessoais</h2>\n    <ion-item>\n      <ion-label >Cpf:</ion-label>\n      <ion-input type="text" disabled="true" [(ngModel)]="user.cpf"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label >Name:</ion-label>\n      <ion-input type="text"  [(ngModel)]="user.name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label >Fone:</ion-label>\n      <ion-input  type="text" name="phone" [brmasker]="{mask:\'(00) 00000-0000\', len:15}" [(ngModel)]="user.phone" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label >Aniversário:</ion-label>\n      <ion-input required name="birth" [brmasker]="{mask:\'00/00/0000\', len:10}" [(ngModel)]="user.birth"></ion-input>\n    </ion-item>\n    <ion-list>\n      <ion-item>\n        <ion-label>Sexo</ion-label>\n        <ion-select [(ngModel)]="fkgender" placeholder="{{user.gender}}">\n          <ion-option value="{{user.fkgender}}" selected="true">{{user.gender}}</ion-option>\n          <ion-option value="1">Feminino</ion-option>\n          <ion-option value="2">Masculino</ion-option>\n          <ion-option value="3">Outro</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n      <h2 class="head">Dados da Conta</h2>\n  \n    <ion-item>\n      <ion-label >Email:</ion-label>\n      <ion-input type="email" value="{{user.email}}" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label >Senha:</ion-label>\n      <ion-input type="password" value="{{user.pass}}" [(ngModel)]="user.pass"></ion-input>\n    </ion-item>\n    <button ion-button block icon-right (tap)="upUser()">Salvar<ion-icon name="send"></ion-icon></button>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_user_info__["a" /* UserInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* FunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_changes_my_changes__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_news__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service_user_info__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, service, uInfo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.uInfo = uInfo;
        this.changes = __WEBPACK_IMPORTED_MODULE_2__my_changes_my_changes__["a" /* MyChangesPage */];
        this.home = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.user = __WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */];
        this.news = __WEBPACK_IMPORTED_MODULE_5__news_news__["a" /* NewsPage */];
        this.email = "";
        this.email = this.uInfo.email;
        this.getNew();
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad TabsPage:'+data);
    };
    TabsPage.prototype.getNew = function () {
        var _this = this;
        this.service.getNewItem(this.email)
            .subscribe(function (data) {
            _this.valbadge = data;
            console.log(data);
        }, function (err) { return console.log(err); });
        setInterval(function () {
            _this.service.getNewItem(_this.email)
                .subscribe(function (data) {
                _this.valbadge = data;
                console.log(data);
            }, function (err) { return console.log(err); });
        }, 9000);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/david/Documents/terapia-continuada/src/pages/tabs/tabs.html"*/'<ion-tabs color="light">\n  <ion-tab tabIcon="search" tabTitle="Explorar" [root]="home" tabBadge="" tabBadgeStyle="danger"></ion-tab>\n  <!-- <ion-tab tabIcon="ribbon" tabTitle="Trocas" [root]="changes" tabBadge="" tabBadgeStyle="danger"></ion-tab> -->\n  <ion-tab tabIcon="notifications" tabTitle="Novidades" [root]="news" [tabBadge]="valbadge" tabBadgeStyle="danger"></ion-tab>\n  <ion-tab tabIcon="person" tabTitle="Perfil" [root]="user"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/david/Documents/terapia-continuada/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_service_user_info__["a" /* UserInfoProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.js.map