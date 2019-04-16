import { ToastProvider } from './../../providers/toast/toast';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Course } from '../../models/course.model';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  public course = new Course('', '', '');

  constructor(
    public firebaseProvider: FirebaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastProvider: ToastProvider) {

    this.course = this.navParams.get('course');
    //console.log('this.course', this.course);

  }

  update(course: Course) {
    //console.log('course', course);
    //console.log('course', course.key);

    this.firebaseProvider.update(course)
                         //Quando um curso for atualizado vamos chamar a home
                         .then(resolved => {
                           this.toastProvider.show('Course updated succesfully', 3000).present();
                           this.navCtrl.setRoot(HomePage);
                         });
  }

  remove(course: Course) {
    this.firebaseProvider.remove(course)
                         //Quando um curso for removido vamos chamar a home
                         .then(resolved => {
                            this.toastProvider.show('Course removed succesfully', 3000).present();
                            this.navCtrl.setRoot(HomePage);
    });
  }


}
