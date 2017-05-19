import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {ListDataProvider} from "../../providers/list-data/list-data";

/**
 * Generated class for the ListCreatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    name: 'list-create',
    segment: 'lists/create'
})
@Component({
    selector: 'page-list-create',
    templateUrl: 'list-create.html',
})
export class ListCreatePage {

    list = {};

    constructor(public navCtrl: NavController, public navParams: NavParams, public listDataService: ListDataProvider) {
    }

    submit() {
        if (this.list === {}) {
            return;
        }

        this.listDataService.add(this.list).then((val) => {
            console.log(val);
            // this.navCtrl.push('list', ['id' => '']);
        });
    }
}
