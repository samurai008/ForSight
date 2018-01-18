import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Partner } from '../../models/partner';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage implements OnInit {
  submitted = false;
  model = new Partner(
    1,
    'John',
    'Doe',
    'john.doe@abcd.com',
    'Masters in Eye Sciences',
    'Vasan Eye Care',
    9990008881,
    122,
    988,
    'upload the dang picture yo!'
  )

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  ngOnInit() {
    // this.registerForm = 
  }

  onSubmit() {
    this.submitted = true;
    this.navCtrl.setRoot(HomePage);
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

}
