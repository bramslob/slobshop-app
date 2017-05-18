import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";

/**
 * Generated class for the ListUpdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'lists-update',
    segment: 'lists/update/:id'
})
@Component({
    selector: 'page-list-update',
    templateUrl: 'list-update.html',
})
export class ListUpdatePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListUpdatePage');
    }

}
