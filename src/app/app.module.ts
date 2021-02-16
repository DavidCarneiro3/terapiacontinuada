import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { ModalItensPage } from '../pages/modal-itens/modal-itens';
import { SigninPage } from '../pages/signin/signin';
import { IonicStorageModule } from '@ionic/storage';
import { SignupPage } from '../pages/signup/signup';
import { UserPage } from '../pages/user/user';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { CpfInfoPage } from '../pages/cpf-info/cpf-info';
import { TabsPage } from '../pages/tabs/tabs';
import { MyChangesPage } from '../pages/my-changes/my-changes';
import { NewsPage } from '../pages/news/news';
import { NewsItemPage } from '../pages/news-item/news-item';
import { CategoriesPage } from '../pages/categories/categories';
import { CatItensPage } from '../pages/cat-itens/cat-itens';
import { HomeGuestPage } from '../pages/home-guest/home-guest';
import { ProdGuestPage } from '../pages/prod-guest/prod-guest';
import { ExchangePage } from '../pages/exchange/exchange';
import { ChangeEndPage } from '../pages/change-end/change-end';

//pipes
import { OrderBy } from '../pipes/orderBy';
import { CurrencyPipe } from '@angular/common';

//services
import { ServiceProvider } from '../providers/service/service';
import { UserInfoProvider } from '../providers/service/user-info';

//providers
import { FunctionProvider } from '../providers/service/functions';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { CallNumber } from '@ionic-native/call-number';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
//components
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';













@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalItensPage,
    OrderBy,
    SigninPage,
    SignupPage,
    UserPage,
    ForgotPasswordPage,
    ProgressBarComponent,
    CpfInfoPage,
    TabsPage,
    MyChangesPage,
    NewsPage,
    NewsItemPage,
    CategoriesPage,
    CatItensPage,
    HomeGuestPage,
    ProdGuestPage,
    ExchangePage,
    ChangeEndPage
    
  ],
  imports: [
    BrowserModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp, {
        platforms: {
            ios: {
                backButtonText: 'Voltar'
            }
        }
    }),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalItensPage,
    SigninPage,
    SignupPage,
    UserPage,
    ForgotPasswordPage,
    ProgressBarComponent,
    CpfInfoPage,
    TabsPage,
    MyChangesPage,
    NewsPage,
    NewsItemPage,
    CategoriesPage,
    CatItensPage,
    HomeGuestPage,
    ProdGuestPage,
    ExchangePage,
    ChangeEndPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    UserInfoProvider,
    FunctionProvider,
    Geolocation,
    GoogleMaps,
    LocalNotifications,
    CallNumber,
    CurrencyPipe,
    LaunchNavigator
    
  ]
})
export class AppModule {}