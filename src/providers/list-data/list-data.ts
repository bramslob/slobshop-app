import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";

@Injectable()
export class ListDataProvider {

    public lists: any = [];

    constructor(private storage: Storage) {
        this.storage.get('lists').then((val) => {
            if (val === null) {
                this.makeEmptyList();
            }
        });

    }

    makeEmptyList() {
        this.storage.set('lists', []);

        return [];
    }

    overview() {
        this.storage.get('lists').then((val) => {
            this.lists = val;
        });
    }
}
