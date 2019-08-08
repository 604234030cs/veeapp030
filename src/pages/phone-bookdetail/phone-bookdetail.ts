import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-bookdetail',
  templateUrl: 'phone-bookdetail.html',
})
export class PhoneBookdetailPage {

  contact = {name:'', telephone:'', imageUrl:''};

  constructor(public navCtrl: NavController, public navP: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookdetailPage');
    this.contact = this.navP.data;
    console.log(this.contact);
  }

}//end class
