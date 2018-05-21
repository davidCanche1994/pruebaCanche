import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: string[];
  constructor(public navCtrl: NavController){
    this.items = [ 'Los Millers','Que paso ayer?','Todo un Parto','Avengers Infinity War','Matrix','John Wick'];

  }

  /*   icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['game-controller-b','videocam','time', 'text', 'subway', 'star',
    'snow'];

    this.items = [];
    for(let i = 1; i <= this.icons.length; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  } */
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {item:item});
  }
}
