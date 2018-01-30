import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from "../../providers/index.servicios";
import { ProductoPage } from "../index.paginas";

@Component({
  selector: 'page-por-categorias',
  templateUrl: 'por-categorias.html',
})
export class PorCategoriasPage {

  categoria:any = {};
  productoPage = ProductoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _ps: ProductosProvider) {
    console.log(this.navParams.get("categoria")); 
    this.categoria = this.navParams.get("categoria");

    this._ps.cargar_por_categoria(this.categoria.id);
  }


}
