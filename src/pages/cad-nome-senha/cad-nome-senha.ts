import { ApiProvider } from './../../providers/api/api';
import { IndiqueamigoPage } from './../indiqueamigo/indiqueamigo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';
import { SplashScreen } from '@ionic-native/splash-screen';



@IonicPage()
@Component({
  selector: 'page-cad-nome-senha',
  templateUrl: 'cad-nome-senha.html',
  providers: [
    ApiProvider
  ]
})
export class CadNomeSenhaPage {

   public TELEFONE = localStorage.getItem('TELEFONE');
   public NOME = this.navParams.get('NOME');
   public SENHA= this.navParams.get('SENHA');
   public RETORNO: any;
   loader: any;


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
    public ApiProvider: ApiProvider,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    private nativePageTransitions: NativePageTransitions,
    public splashScreen: SplashScreen,
    public events: Events
  ) {
    this.splashScreen.hide();
  }


  LoadingAbre() {
    this.loader = this.loadingCtrl.create({
      content: "Salvando informações..."
    });
    this.loader.present();
  }

  LoadingFecha(){
  this.loader.dismiss();
  }


  createUser(user) {
    this.events.publish('NOME', user, Date.now());
  }



salvar(nome,telefone,senha){
     //CADASTRANDO DADOS
  this.LoadingAbre();



   this.ApiProvider.salvarUsusario(nome, telefone, senha).subscribe(data=>{
    //console.log(data);
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

          this.RETORNO = objeto_retorno.STATUS;



if(this.RETORNO == '1'){





  this.nativePageTransitions.fade(this.options)
  .then()
  .catch();


 this.nativePageTransitions.fade(this.options);

  this.navCtrl.setRoot(IndiqueamigoPage);
  this.LoadingFecha();
}else{
  this.LoadingFecha();
}

    },error=>{
      console.log(error);

      //this.showAlert("Algo deu errado...", "Por favor verifique sua internet.", "Beleza");
    }



   )
}




  avancar(){
    this.storage.set('TELEFONE', this.TELEFONE);
    this.storage.set('NOME', this.NOME);
    this.createUser(this.NOME);
    this.storage.set('SENHA', this.SENHA);

    //localStorage.setItem("NOME", this.NOME);
    //localStorage.setItem("TELEFONE", this.TELEFONE);
    //localStorage.setItem("SENHA", this.SENHA);

    localStorage.setItem("ETAPA", "2");
    this.salvar(this.NOME, this.TELEFONE, this.SENHA);

  }
}
