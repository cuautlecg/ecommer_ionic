import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CarritoProvider } from "../../providers/index.servicios";

@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {

  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _cp:CarritoProvider,
              private viewCtrl: ViewController) {
  }

  

}
