import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";

import {MyApp} from "./app.component";
import {ListsPage} from "../pages/lists/lists";
import {ListPage} from "../pages/list/list";
import {ListCreatePage} from "../pages/list-create/list-create";
import {ListUpdatePage} from "../pages/list-update/list-update";
import {ItemCreatePage} from "../pages/item-create/item-create";
import {ItemUpdatePage} from "../pages/item-update/item-update";
import {ListDataProvider} from "../providers/list-data/list-data";

@NgModule({
    declarations: [
        MyApp,
        ListsPage,
        ListPage,
        ListCreatePage,
        ListUpdatePage,
        ItemCreatePage,
        ItemUpdatePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ListsPage,
        ListPage,
        ListCreatePage,
        ListUpdatePage,
        ItemCreatePage,
        ItemUpdatePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ListDataProvider
    ]
})
export class AppModule {
}
