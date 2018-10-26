import { SlidePage } from './../slide/slide';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


@IonicPage()
@Component({
  selector: 'page-indiqueamigo',
  templateUrl: 'indiqueamigo.html',
})
export class IndiqueamigoPage {

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
    public splashScreen: SplashScreen,
    private nativePageTransitions: NativePageTransitions
  ) {
    this.splashScreen.hide();
  }

  compartilharFacebook(){

  }

  compartilharWhats(){

  }


  pular(){
    localStorage.setItem("ETAPA", "3");
    this.navCtrl.setRoot(SlidePage);
  }

}
