import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slides = [
    {
      title: "Welcome to Take Me Home Tonight!",
      description: "The app that takes you home no matter what state your consciousness is.",
      image: "assets/imgs/TMHT2.png",
    },
    {
      title: "How Does It Work?",
      description: "<b>TMHT</b> is an easy-to-use app that allows you to navigate your way home with the push of a button.",
      image: "assets/imgs/question.png",
    },
    {
      title: "Add Contacts!",
      description: "You can add up to <b>5</b> additional contacts and addresses.",
      image: "assets/imgs/contacts.png",
    }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

}