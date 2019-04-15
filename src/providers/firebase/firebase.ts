//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class FirebaseProvider {

  //Variável para receber o caminho onde será gravado no banco de dados
  private dbRef;

  constructor(
    public db: AngularFireDatabase,
    //public http: HttpClient
    ) {
    //console.log('Hello FirebaseProvider Provider');

      //Atribuindo a variável o caminho esperado do RealTime Database, se o caminho não existir ele será criado
      this.dbRef = this.db.list('/ionic/youtube/codeExpertsLearning/app00-firebaseProject/courses');
      //console.log('this.dbRef', this.dbRef);

  }

  //Salvar no banco de dados
  save(course: any) {
    //Através do caminho para o banco de dados, iremos salvar o course e exibir um log
    this.dbRef.push(course)
              .then(r => console.log(r));
  }

}