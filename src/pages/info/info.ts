import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  maps: any = [
    {
      address: '2345 Milkyway Place',
      city: "Zion, ZN 03110",
      minutes: "34",
      miles: "5.2"
    },
    {
      address: '3456 Milkyway Place',
      city: "Zion, ZN 03110",
      minutes: "22",
      miles: "3.8"
    },
    {
      address: '4567 Milkyway Place',
      city: "Zion, ZN 03110",
      minutes: "11",
      miles: "2.2"
    }
  ];

  constructor(public navCtrl: NavController, public dataService: DataProvider, public navParams: NavParams, public alertCtrl:AlertController) {
    // this.card = this.navParams.data;
  }

  updateMap(map):void {
    let prompt = this.alertCtrl.create({
      title: 'Update Address',
      message: "Add the following information to update your address.",
      inputs : [
        {
          name: 'cardDesc',
          value: map.address
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
            this.maps.updateCardDescription(map, data.address);
          }
        }
      ]

    });
    prompt.present();
  }

  deleteCard(map): void {
    let idx = this.maps.indexOf(map);
    this.maps.splice(idx, 1);
  }

  addMap():void {
    let prompt = this.alertCtrl.create({
      title: 'Add Location',
      message: "Add the following information to add an address.",
      inputs : [
        {
          name: 'address',
          placeholder: 'Enter your address'
        },
        {
          name: 'city',
          placeholder: 'Enter your city'
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
            this.maps.addNewCard(data);
          }
        }
      ],

    });
    prompt.present();
  }

  addNewCard(cardInfo): void {
    if (cardInfo) {
      this.maps.add(cardInfo);
    }
  }

  updateCardDescription(cardID, newDesc): void {
    this.maps.update({"cardDesc": newDesc});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
