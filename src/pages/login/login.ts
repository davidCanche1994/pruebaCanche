import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { NavController , LoadingController} from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public signup: FormGroup; 
  constructor(public nvCtrl: NavController, public loadingCtrl: LoadingController, public formBuilder: FormBuilder){
    this.signup = formBuilder.group({
      "usuario": new FormControl("",Validators.required),
      "password": new FormControl("",Validators.compose([Validators.required,Validators.pattern('^[0-9]+[0-9]\d*$')]))
    })
  }

/*   onSubmit(form){
    console.log(form);
    let valid = {
      'usuario': form.usuario,
      'password': form.password
    }
  } */
  onSubmit() {
  let loader = this.loadingCtrl.create({
    content: 'Cargando',
    duration: 3000
  }
  );
  loader.present();

  setTimeout(()=>{
    this.nvCtrl.setRoot(HelloIonicPage);
  },2000);
  }
}