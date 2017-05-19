import {Injectable} from "@angular/core";

@Injectable()
export class ListDataProvider {

    public message: any = "I'm new here";

    constructor() {

    }

    setMessage(message) {
        this.message = message;
    }

}
