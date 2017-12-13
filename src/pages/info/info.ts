import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
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

    maps: any;

    constructor(public navCtrl: NavController, public dataService: DataProvider, public navParams: NavParams, public alertCtrl: AlertController) {
        // this.card = this.navParams.data;
        this.maps = this.dataService.mapList;
    }

    updateMap(map): void {
        let prompt = this.alertCtrl.create({
            title: 'Update Address',
            message: "Add the following information to update your address.",
            inputs: [
                {
                    name: 'address',
                    value: map.address
                },
                {
                    name: 'city',
                    value: map.city
                },
                {
                    name: 'state',
                    value: map.state
                },
                {
                    name: 'zipcode',
                    value: map.zipcode
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
                        this.dataService.updateMap(map.id, data);
                    }
                }
            ]

        });
        prompt.present();
    }

    deleteMap(map): void {
        this.dataService.deleteMap(map);
    }

    addMap(): void {
        let prompt = this.alertCtrl.create({
            title: 'Add Location',
            message: "Add the following information to add an address.",
            inputs: [
                {
                    name: 'address',
                    placeholder: 'Enter your address'
                },
                {
                    name: 'city',
                    placeholder: 'Enter your city'
                },
                {
                    name: 'state',
                    placeholder: 'Enter your state'
                },
                {
                    name: 'zipcode',
                    placeholder: 'Enter your zipcode'
                },
                {
                    name: 'miles',
                    placeholder: 'Enter the miles'
                },
                {
                    name: 'minutes',
                    placeholder: 'Enter the minutes'
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
                        this.dataService.addNewMap(data);
                    }
                }
            ],

        });
        prompt.present();
    }

    // updateCardDescription(cardID, newDesc): void {
    //     this.maps.update({"cardDesc": newDesc});
    // }

    ionViewDidLoad() {
        console.log('ionViewDidLoad InfoPage');
    }

}
