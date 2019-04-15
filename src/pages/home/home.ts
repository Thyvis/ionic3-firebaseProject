import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Providers
import { FirebaseProvider } from './../../providers/firebase/firebase';

//Pages
import { SavePage } from '../save/save';
import { Observable } from 'rxjs';

//Models
import { Course } from '../../models/course.model';

//Firebase
//import { AngularFireAction, DatabaseSnapshot } from '@angular/fire/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /*
  Atributo para receber os cursos vindo do ProviderFirebase.
  Como o Provider retorna um Observable contendo uma lista com todos os cursos do banco de dados
  Vamos tipá-lo como um Observable do tipo array de cursos
  */
  //Aqui usamos para quando o retorno do método do dbService virá como valueChanges()
  //public courses: Observable<Course[]>;

  //Aqui usamos para quando o retorno do método do dbService virá como snapshotChanges() sem estar simplificado
  //public courses: Observable<AngularFireAction<DatabaseSnapshot<Course>>[]>;

  //Aqui usamos para quando o retorno do método do dbService virá como snapshotChanges() simplificado
  //O retorno será um Observable do tipo array de um objeto, mas esse objeto é o mesmo que o modelo e poderia ser simplicado ainda mais como mais a frente
  /* public courses: Observable<{
    key: string;
    title: string;
    price: string;
    description: string;
  }[]>; */

  //Simplificando o tipo dde courses acima
  protected courses: Observable<Course[]>;

  constructor(
    public dbService: FirebaseProvider,
    public navCtrl: NavController) {

      //console.log('this.dbService.getAll()', this.dbService.getAll());
      //Nosso método 'valueChanges()' do provider vai retornar um Observable
      //this.courses = this.dbService.getAll();
      //console.log('this.courses', this.courses);

      //Nosso método 'snapshotChanges()' do provider vai retornar um Observable<AngularFireAction<DatabaseSnapshot<Course>>[]>
      //this.courses = this.dbService.getAll();
      /* //Vamos nos inscrever para pegar os valores
      this.courses.subscribe(d => {
        //retorna o nosso datasnapshot
        //console.log('d', d);
        //Aqui vamos pecorrer cada objeto do datasnaphot
        d.forEach(d1 => {
          //Exibir a chave
          //console.log('d1.key', d1.key);
          //Exibir os valores
          //console.log('d1.payload.val()', d1.payload.val());
        });
      }); */

      //Simplificamos o código acima para manipular os dados direto no provider
      this.courses = this.dbService.getAll();
      //console.log(this.courses.subscribe(received => {console.log('received', received)}));

  }

  add() {
    this.navCtrl.push(SavePage);
  }

  goToSingle(key) {
    alert(key);
  }

}
