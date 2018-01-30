import { UsuarioProvider } from './../../providers/usuario/usuario';
import { CarritoProvider } from './../../providers/carrito/carrito';
import { ProductoPage } from './../producto/producto';
import { PipesModule } from './../../pipes/pipes.module';
import { ProductosProvider } from './../../providers/productos/productos';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productoPage = ProductoPage;

  constructor(public navCtrl: NavController, 
              private _ps: ProductosProvider, 
              private _cp: CarritoProvider,
              private _up: UsuarioProvider) {

  }

  siguiente_pagina( infiniteScroll ){
    this._ps.cargar_todos().then( () => {
      infiniteScroll.complete();
    });
  }

}
