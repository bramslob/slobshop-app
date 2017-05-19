import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {ListPage} from "../list/list";
import {ListDataProvider} from "../../providers/list-data/list-data";

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

    constructor(public navCtrl: NavController, public navParams: NavParams, public listDataService: ListDataProvider) {
        this.pushPage = ListPage;
    }

    ionViewDidLoad() {
        this.listDataService.overview();
    }

}
