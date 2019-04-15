import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Providers
import { FirebaseProvider } from './../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-save',
  templateUrl: 'save.html',
})
export class SavePage {

  course = {
    'title': '',
    'price': '',
    'description': ''
  };

  constructor(
    public dbService: FirebaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {

      //Criar referência para o caminho a ser salvo no banco de dados

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavePage');
  }

  save(course) {
    //console.log(course);
    this.dbService.save(course);

  }

}
