import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListCreatePage } from './list-create';

@NgModule({
  declarations: [
    ListCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ListCreatePage),
  ],
  exports: [
    ListCreatePage
  ]
})
export class ListCreatePageModule {}
