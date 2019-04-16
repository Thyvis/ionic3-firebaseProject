import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Providers
import { FirebaseProvider } from './../../providers/firebase/firebase';

//Models
import { Course } from '../../models/course.model';
import { ToastProvider } from '../../providers/toast/toast';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-save',
  templateUrl: 'save.html',
})
export class SavePage {

  /* course = {
    'title': '',
    'price': '',
    'description': ''
  }; */

  //Aqui refatoramos o código acima para que seja utlizado um modelo de objeto para um course
  //Houve uma segunda refatoração já que as propriedades não podem ser undefined
  //Parece que por causa do ID está dando um erro
  public course = new Course('', '', '');

  constructor(
    public dbService: FirebaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastProvider: ToastProvider) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SavePage');
  }

  save(course: Course) {
    //console.log(course);
    this.dbService.save(course).then(resolved => {
      this.toastProvider.show('Course saved succesfully', 3000).present();
      this.navCtrl.setRoot(HomePage);
    });

  }

}
