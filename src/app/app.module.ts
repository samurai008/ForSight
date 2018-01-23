import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { QRScanner } from '@ionic-native/qr-scanner';
import { QRScannerMock } from '@ionic-native-mocks/qr-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NavbarComponent } from '../components/navbar/navbar';
import { RegisterPage } from '../pages/register/register';
import { HideDirective } from '../directives/hide/hide';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileImageComponent } from '../components/profile-image/profile-image';
import { QrScannerPage } from '../pages/qr-scanner/qr-scanner';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NavbarComponent,
    RegisterPage,
    HideDirective,
    ProfilePage,
    QrScannerPage ,
    ProfileImageComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NavbarComponent, 
    RegisterPage, 
    QrScannerPage ,
    ProfilePage, 
    ProfileImageComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: QRScanner, useClass: QRScannerMock}, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
