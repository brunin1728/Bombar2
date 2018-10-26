import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { HomePage } from '../home/home';
import { AtualizarPage } from '../atualizar/atualizar';
import { ApiProvider } from '../../providers/api/api';
import { Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public TELEFONE = this.navParams.get('TELEFONE');
  public SENHA = this.navParams.get('SENHA');
  loader: any;
  public DADOS: any;


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
    private storage: Storage,
    private nativePageTransitions: NativePageTransitions,
    public loadingCtrl: LoadingController,
    public ApiProvider: ApiProvider,
    public events: Events
  ) {
  }




  LoadingAbre() {
    this.loader = this.loadingCtrl.create({
      content: "Tentando realizar login..."
    });
    this.loader.present();
  }

  LoadingFecha(){
  this.loader.dismiss();
  }




  createUser(user) {
    this.events.publish('NOME', user, Date.now());
  }



  login() {



    //CADASTRANDO DADOS
    this.LoadingAbre();



    this.ApiProvider.LoginUsuario(this.TELEFONE, this.SENHA).subscribe(data=>{
     //console.log(data);
         const response = (data as any);
         const objeto_retorno = JSON.parse(response._body);

           this.DADOS = objeto_retorno;
console.log(this.DADOS);


if(this.DADOS.STATUS == 1){
  this.storage.set('TELEFONE', this.TELEFONE);
  this.storage.set('NOME', this.DADOS.NOME);
  this.createUser(this.DADOS.NOME);
  this.storage.set('ID', this.DADOS.ID);
  this.LoadingFecha();
  localStorage.setItem("ETAPA", "4");



  this.nativePageTransitions.fade(this.options)
  .then()
  .catch();


 this.nativePageTransitions.fade(this.options);

 this.navCtrl.setRoot(HomePage);

}else{
  swal("Erro ao logar!", "Seu usuário ou senha estão incorretos ou o usuário não existe.", "error");
  this.LoadingFecha();
}




     },error=>{
       console.log(error);
       this.LoadingFecha();
       swal("Algo deu errado...", "Por favor verifique sua internet.", "error");
     }



    )














   // localStorage.setItem("TELEFONE", this.TELEFONE);
   // localStorage.setItem("SENHA", this.SENHA);
    //localStorage.setItem("NOME", "Bruno Carvalho");


  // this.ir();


  }


ir(){
  setTimeout(this.navCtrl.setRoot(AtualizarPage), 4000);
}


}
