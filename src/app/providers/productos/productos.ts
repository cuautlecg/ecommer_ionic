import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from "../../config/url.servicios";
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductosProvider {

  pagina: number = 0;
  categoria: string = "lineas";
  productos: any[] = [];
  categorias: any[] = [];
  por_categoria:any[] = [];
  resultados:any[] = [];

  
  constructor(public http: Http) {
    this.cargar_todos();
    this.cargar_categorias();
  }

  cargar_categorias(){
    let url = URL_SERVICIOS + "/" + this.categoria;

    this.http.get(url).map(resp => resp.json()).subscribe(data => {
      
      if (data.error) {

      } else {
        this.categorias = data.lineas;
        console.log(this.categorias);
      }

    });
  }

  cargar_por_categoria(categoria: number){

    let url = URL_SERVICIOS + "/productos/por_tipo/" + categoria;

    this.http.get(url).map( resp => resp.json()).subscribe( data => {
      console.log(data.productos);
      this.por_categoria = data.productos;
    })
  }

  cargar_todos() {

    let promesa = new Promise( (resolve, reject) => {
      let url = URL_SERVICIOS + "/productos/todos/" + this.pagina;

      this.http.get(url).map(resp => resp.json()).subscribe(data => {
        if (data.error) {

        } else {
          let nuevaData = this.agrupar(data.productos, 2);
          this.productos.push(...nuevaData);
          this.pagina += 1;
        }

        resolve();

      });
    });    

    return promesa;

  }

  private agrupar( arr:any, tamano:number){

    let nuevoArreglo = [];
    for (let index = 0; index < arr.length; index+=tamano) {
      nuevoArreglo.push( arr.slice(index, index+tamano));      
    }
    console.log(nuevoArreglo);
    return nuevoArreglo;

  }

  buscar_producto(termino: string) {

    let url = URL_SERVICIOS + "/productos/buscar/" + termino;

    this.http.get(url)
      .subscribe(resp => {

        let data = resp.json();

        this.resultados = data.productos;
        console.log(this.resultados);

      });

  }

}
