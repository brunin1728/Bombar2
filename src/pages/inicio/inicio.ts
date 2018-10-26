import { CadTelPage } from './../cad-tel/cad-tel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {


  private options: NativeTransitionOptions = {
      direction: 'up',
      duration: 300,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public splashScreen: SplashScreen,
    private nativePageTransitions: NativePageTransitions


  ) {
    this.menuCtrl.enable(false, 'myMenu');
    this.splashScreen.hide();
  }

CadTelefone(){

  this.nativePageTransitions.fade(this.options)
  .then()
  .catch();


 this.nativePageTransitions.fade(this.options);

  this.navCtrl.push(CadTelPage);
}

CadFacebook(){

}

Entrar(){

  this.nativePageTransitions.fade(this.options)
  .then()
  .catch();


 this.nativePageTransitions.fade(this.options);

  this.navCtrl.push(LoginPage);
}



  ionViewDidEnter() {

  }

}
