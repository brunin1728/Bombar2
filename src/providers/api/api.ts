import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ApiProvider {

  private baseApi = "http://bom.bar/dados/index.php?servico=";
  public CIDADE = "1";
  public USUARIO: any;

  //public TELEFONE: any = localStorage.getItem('TELEFONE');
  public TELEFONE: any;

  constructor(public http: Http, private storage: Storage) {

    this.storage.get('TELEFONE').then((val) => {
      this.TELEFONE = val;
    });


    this.storage.get('ID').then((val) => {
      this.USUARIO = val;
    });


  }


salvarUsusario(nome,telefone,senha){
    return this.http.get(this.baseApi + "insert-usuario&NOME=" + nome + "&TELEFONE=" + telefone + "&SENHA=" + senha);
   }



VerificaTel(telefone){
  return this.http.get(this.baseApi + "verifica-tel&telefone=" + telefone);
 }



cupons(){
  return this.http.get(this.baseApi + "lista-cupons");
 }


 MeusPontos(){
  return this.http.get(this.baseApi + "pontos-usuario&telefone=" + this.TELEFONE);
 }


 MeusCupons(){
  return this.http.get(this.baseApi + "cupons-usuario&usuario=" + this.USUARIO);
 }


 ListaBares(page = 1){
  return this.http.get(this.baseApi + "lista-bares&cidade=" + this.CIDADE + "&page=" + page);
 }


 DetalhesBar(bar){
  return this.http.get(this.baseApi + "detalhe-bar&id=" + bar);
 }


 TrocarCupom(id){
  return this.http.get(this.baseApi + "trocar-cupom&id=" + id + "&usuario=" + this.USUARIO);
 }


 DadosUsuario(){
  return this.http.get(this.baseApi + "dados-usuario&id=usuario=" + this.USUARIO);
 }


 LoginUsuario(usuario,senha){
  return this.http.get(this.baseApi + "login-usuario&usuario=" + usuario + "&senha=" + senha);
 }
}
