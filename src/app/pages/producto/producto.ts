import { ProductosProvider } from './../../providers/productos/productos';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarritoProvider } from '../../providers/carrito/carrito';


@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

  producto:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private _cp:CarritoProvider) {

    console.log(this.navParams.get("producto"));
    this.producto = this.navParams.get("producto");    
    
  }

  

}