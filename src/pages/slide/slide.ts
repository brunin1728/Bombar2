import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {
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
    this.menuCtrl.enable(true, 'myMenu');
    this.splashScreen.hide();
  }

  pular(){
    localStorage.setItem("ETAPA", "4");

    //window.location.reload();
    this.nativePageTransitions.fade(this.options)
    .then()
    .catch();


   this.nativePageTransitions.fade(this.options);
   //window.location.reload();
    this.navCtrl.setRoot(HomePage);
  }

}
