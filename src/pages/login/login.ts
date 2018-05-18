import { Component } from '@angular/core';
import { NavController , LoadingController} from 'ionic-angular'
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public nvCtrl: NavController, public loadingCtrl: LoadingController){
  }

  enterSystem() {

  let loader = this.loadingCtrl.create({
    content: 'Cargando',
    duration: 3000
  }
  );
  loader.present();

  setTimeout(()=>{
    this.nvCtrl.setRoot(HelloIonicPage);
  },2000);
  
  //console.log('ionViewDidLoad LoginPage');
  //this.nvCtrl.setRoot(HelloIonicPage);
  }

}
