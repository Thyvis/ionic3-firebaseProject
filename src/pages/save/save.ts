import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Providers
import { FirebaseProvider } from './../../providers/firebase/firebase';

//Models
import { Course } from '../../models/course.model';

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
  public course: Course;

  constructor(
    public dbService: FirebaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavePage');
  }

  save(course) {
    //console.log(course);
    this.dbService.save(course);

  }

}
