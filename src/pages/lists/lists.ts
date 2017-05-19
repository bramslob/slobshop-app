import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {ListDataProvider} from "../../providers/list-data/list-data";
import {ListPage} from "../list/list";
import {ListCreatePage} from "../list-create/list-create";
import {ListUpdatePage} from "../list-update/list-update";

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

    detailPage: any;
    createPage: any;
    editPage: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public listDataService: ListDataProvider) {
        this.detailPage = ListPage;
        this.createPage = ListCreatePage;
        this.editPage = ListUpdatePage;
    }

    ionViewDidLoad() {
        this.listDataService.overview();
    }

}
