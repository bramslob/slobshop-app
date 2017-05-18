import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {ListPage} from "../list/list";

/**
 * Generated class for the ListsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'lists',
    segment: 'lists'
})
@Component({
    selector: 'page-lists',
    templateUrl: 'lists.html',
})
export class ListsPage {

    pushPage: any;
    list: [any] = [
        {i: 1, name: 'list 1', checked: false}
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.pushPage = ListPage;
    }

}
