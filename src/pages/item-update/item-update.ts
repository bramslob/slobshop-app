import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";

/**
 * Generated class for the ItemUpdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'items-update',
    segment: 'item/update/:id'
})
@Component({
    selector: 'page-item-update',
    templateUrl: 'item-update.html',
})
export class ItemUpdatePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ItemUpdatePage');
    }

}
