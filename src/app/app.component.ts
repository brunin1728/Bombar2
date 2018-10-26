import { CuponsPage } from './../pages/cupons/cupons';
import { InicioPage } from './../pages/inicio/inicio';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CadTelPage } from '../pages/cad-tel/cad-tel';
import { CadNomeSenhaPage } from '../pages/cad-nome-senha/cad-nome-senha';
import { IndiqueamigoPage } from '../pages/indiqueamigo/indiqueamigo';
import { SlidePage } from '../pages/slide/slide';
import { PerfilPage } from '../pages/perfil/perfil';
import { ListaBarPage } from '../pages/lista-bar/lista-bar';
import { ApiProvider } from '../providers/api/api';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { Storage } from '@ionic/storage';



@Component({
  templateUrl: 'app.html',
  providers: [
    ApiProvider
  ]
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;
  private IF_ETAPA = localStorage.getItem('ETAPA') ? localStorage.getItem('ETAPA').length : null;
  private ETAPA: any;



  public NOME: any;


  rootPage: any;

  pages: Array<{title: string, component: any}>;




etapas(){
  this.storage.get('NOME').then((val) => {
    this.NOME = val;
  });


  //this.NOME = localStorage.getItem('NOME');
  this.ETAPA = localStorage.getItem('ETAPA');

  if(this.IF_ETAPA == null){
     this.rootPage = InicioPage;
  }else{

     if(this.ETAPA == '1'){

    this.rootPage = CadNomeSenhaPage;
  }else if(this.ETAPA == '2'){
    this.rootPage = IndiqueamigoPage;
  }else if(this.ETAPA == '3'){

    this.rootPage = SlidePage;
  }else if(this.ETAPA == '4'){
    this.rootPage = HomePage;
  }

  }

}


  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public ApiProvider: ApiProvider,
    private backgroundGeolocation: BackgroundGeolocation,
    private storage: Storage,
    public events: Events
  ) {

    this.etapas();
    this.initializeApp();


    events.subscribe('NOME', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.NOME = user;
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage },
      { title: 'Perfil', component: PerfilPage },
      { title: 'Lista Bares', component: ListaBarPage },
      { title: 'Voucher', component: CuponsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();


    });





  }

  openPage(page) {

    this.nav.setRoot(page.component);

  }
}
