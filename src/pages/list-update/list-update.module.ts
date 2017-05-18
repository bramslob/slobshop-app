import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListUpdatePage } from './list-update';

@NgModule({
  declarations: [
    ListUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(ListUpdatePage),
  ],
  exports: [
    ListUpdatePage
  ]
})
export class ListUpdatePageModule {}
