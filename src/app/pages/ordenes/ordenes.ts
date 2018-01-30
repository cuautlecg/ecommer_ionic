import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarritoProvider } from "../../providers/carrito/carrito";
import { OrdenesDetallePage } from "../ordenes-detalle/ordenes-detalle";

@Component({
  selector: 'page-ordenes',
  templateUrl: 'ordenes.html',
})
export class OrdenesPage {

  ordenesDetalle = OrdenesDetallePage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _cp: CarritoProvider) {
  }

  ionViewDidLoad() {
    console.log('Cargando ordenes');
    this._cp.cargar_ordenes();
  }

}
