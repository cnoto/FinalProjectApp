import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // cards: any;

  constructor(public navCtrl: NavController, public dataService: DataProvider, public alertCtrl:AlertController) {
    // this.cards = this.dataService.cardList;
  }

  // ionViewDidLoad(){
  //   this.cards = this.dataService.items;
  // }

  gotoHomePage(){
    this.navCtrl.push('HomePage');
  }

  gotoInfoPage(){
    this.navCtrl.push('InfoPage');
  }

  gotoContactPage(){
    this.navCtrl.push('ContactPage');
  }

}
