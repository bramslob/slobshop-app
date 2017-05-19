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

    add(list) {
        console.log(list);
        return this.storage.get('lists').then((current_lists) => {
            current_lists.push(list);
            return this.storage.set('lists', current_lists);
        })
    }
}
