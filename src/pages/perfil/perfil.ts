import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers: [
    ApiProvider
  ]
})
export class PerfilPage {

  loader: any;
  public PONTOS: any;
  public CUPONS: any;
  public NOMEP: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public ApiProvider: ApiProvider,
    private storage: Storage,
  ) {
  }


  LoadingAbre() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando informações..."
    });
    this.loader.present();
  }

  LoadingFecha(){
  this.loader.dismiss();
  }





DadosUsuario(){
  //CADASTRANDO DADOS
 this.LoadingAbre();



 this.ApiProvider.MeusPontos().subscribe(data=>{
  //console.log(data);
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);

        this.PONTOS = objeto_retorno.TOTAL;


console.log(this.PONTOS);
this.LoadingFecha();

  },error=>{
    console.log(error);
    this.LoadingFecha();
    swal("Algo deu errado...", "Por favor verifique sua internet.", "error");
  }



 )
}

CuponsUsuario(){



 this.ApiProvider.MeusCupons().subscribe(data=>{
  //console.log(data);
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);

        this.CUPONS = objeto_retorno.CUPOM;





  },error=>{
    console.log(error);

  }



 )
}





  ionViewDidEnter() {
   //this.NOMEP = localStorage.getItem('NOME');

   this.storage.get('NOME').then((val) => {
    this.NOMEP = val;
  });

    this.CuponsUsuario();
    this.DadosUsuario();
  }

}
