import { AngularFireList } from '@angular/fire/database';
//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { AngularFireDatabase } from '@angular/fire/database';

//Course
import { Course } from '../../models/course.model';

@Injectable()
export class FirebaseProvider {

  //Variável para receber o caminho onde será gravado no banco de dados
  private dbRef: AngularFireList<Course>;

  constructor(
    public db: AngularFireDatabase,
    //public http: HttpClient
    ) {
    //console.log('Hello FirebaseProvider Provider');

      //Atribuindo a variável o caminho esperado do RealTime Database, se o caminho não existir ele será criado
      this.dbRef = this.db.list('/ionic/youtube/codeExpertsLearning/app00-firebaseProject/courses');
      //console.log('this.dbRef', this.dbRef);

  }

  //Retornar toda a lista no caminho do banco de dados, sempre que um valor for alterado.
  getAll() {
    //console.log('this.dbRef.valueChanges()', this.dbRef.valueChanges());

    //Retorno com o método valueChanges
    //return this.dbRef.valueChanges();

    //Retorno com o método snapshotChanges() para ser tratado onde será chamado
    //return this.dbRef.snapshotChanges();

    //Aqui podemos mapear o objeto para transformar em uma forma mais simplificada onde será chamado usando o snapshotChanges()
    return this.dbRef.snapshotChanges()
                     .pipe(map(data => {
                       //Com a 'data' os dados recebidos para cada linha, vamos transformar, descontruindo cada chave para cada valor
                       return data.map(d => ({ key: d.payload.key, ...d.payload.val() }))
                     }));
  }

  //Salvar no banco de dados
  save(course: any) {
    //Através do caminho para o banco de dados, iremos salvar o course e exibir um log
    this.dbRef.push(course)
              .then(r => console.log(r));
  }

}
