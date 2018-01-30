import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from "../../providers/index.servicios";
import { PorCategoriasPage } from "../index.paginas";

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  categoria:any = {};

  porCategorias = PorCategoriasPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _ps: ProductosProvider) {
  }

}
