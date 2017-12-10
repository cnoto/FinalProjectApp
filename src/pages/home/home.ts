import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards: any;

  constructor(public navCtrl: NavController, public dataService: DataProvider, public alertCtrl:AlertController) {
    // this.cards = this.dataService.cardList;
  }

  // ionViewDidLoad(){
  //   this.cards = this.dataService.items;
  // }

  gotoInfoPage(){
    this.navCtrl.push('InfoPage');
  }

  gotoContactPage(){
    this.navCtrl.push('ContactPage');
  }

  updateCard(card):void {
    let prompt = this.alertCtrl.create({
      title: 'Update Card',
      message: "Add the following information to update your card.",
      inputs : [
        {
          name: 'cardDesc',
          value: card.cardDesc
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.dataService.updateCardDescription(card.id, data.cardDesc);
          }
        }
      ]

    });
    prompt.present();
  }

  addCard():void {
    let prompt = this.alertCtrl.create({
      title: 'Add Card',
      message: "Add the following information to add card.",
      inputs : [
        {
          name: 'cardName',
          placeholder: 'User Name'
        },
        {
          name: 'cardDesc',
          placeholder: 'Card Description'
        },
        {
          name: 'cardImg',
          placeholder: 'Put an image URL'
        },
        {
          name: 'avatarImg',
          placeholder: 'Add user image'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            data["likes"] = 0;
            let today = new Date();
            data["date"] = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
            this.dataService.addNewCard(data);
          }
        }
      ],

    });
    prompt.present();
  }

  deleteCard(id):void {
    this.dataService.deleteCard(id);
  }

  gotoItemDesc(){
    this.navCtrl.push('ItemDescPage');
  }

}
