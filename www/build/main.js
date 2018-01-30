webpackJsonp([1],{

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/busqueda/busqueda.module": [
		300,
		3
	],
	"../pages/login/login.module": [
		299,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_usuario_usuario__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_carrito_carrito__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_producto__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_productos_productos__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, _ps, _cp, _up) {
        this.navCtrl = navCtrl;
        this._ps = _ps;
        this._cp = _cp;
        this._up = _up;
        this.productoPage = __WEBPACK_IMPORTED_MODULE_2__producto_producto__["a" /* ProductoPage */];
    }
    HomePage.prototype.siguiente_pagina = function (infiniteScroll) {
        this._ps.cargar_todos().then(function () {
            infiniteScroll.complete();
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button (click)="_up.cerrar_sesion()" *ngIf="_up.activo()">\n            Cerrar sesión\n        </button>\n        </ion-buttons>\n        <ion-title>\n            RDS Commerce\n        </ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="_cp.ver_carrito()">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge color="danger" class="carrito-numero" *ngIf="_cp.items.length > 0" >                        \n                    {{_cp.items.length}}\n                </ion-badge>\n            </button> &nbsp; &nbsp;\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-grid>\n        <ion-row *ngFor="let pares of _ps.productos">\n            <ion-col *ngFor="let item of pares" [navParams]="{ producto: item }" [navPush]="productoPage">\n                <img [src]="item.codigo | imagen">\n\n                <p>\n                    {{item.producto}}\n                    <br> {{item.precio_compra | currency:"MXN":code}}\n                </p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-infinite-scroll (ionInfinite)="siguiente_pagina($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Cargando más productos...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_productos_productos__["a" /* ProductosProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_carrito_carrito__["a" /* CarritoProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_carrito_carrito__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductoPage = (function () {
    function ProductoPage(navCtrl, navParams, http, _cp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this._cp = _cp;
        this.producto = {};
        console.log(this.navParams.get("producto"));
        this.producto = this.navParams.get("producto");
    }
    ProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-producto',template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\producto\producto.html"*/'<!--\n  Generated template for the ProductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{producto.producto}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <img [src]="producto.codigo | imagen">\n    <div padding>\n        <h4>{{producto.producto}}</h4>\n        <p><strong>Precio: </strong>{{producto.precio_compra | currency:\'MXN\':symbol}}</p>\n        <p>{{producto.descripcion}}\n            <br>\n            <strong>{{producto.proveedor}}</strong>\n        </p>\n        <button ion-button block icon-left (click)="_cp.agregar_carrito(producto)">\n          <ion-icon name="cart"></ion-icon>\n          Agregar al carrito\n        </button>\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\producto\producto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_carrito_carrito__["a" /* CarritoProvider */]])
    ], ProductoPage);
    return ProductoPage;
}());

//# sourceMappingURL=producto.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenesDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdenesDetallePage = (function () {
    function OrdenesDetallePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrdenesDetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdenesDetallePage');
    };
    OrdenesDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ordenes-detalle',template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\ordenes-detalle\ordenes-detalle.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Pedido: {{orden.id}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center>\n    <ion-list>\n        <ion-item *ngFor="let item of orden.detalle">\n            <img [src]="item.codigo | imagen">\n            <h5>{{item.producto}}</h5>\n            <p>\n                {{item.descripcion}}\n            </p>\n            <p>\n                {{item.precio_compra | currency:\'MXP\':code}}\n            </p>\n        </ion-item>\n    </ion-list>\n\n    <button ion-button block color="danger" (click)="borrar_orden(orden.id)">\n    Eliminar orden\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\ordenes-detalle\ordenes-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], OrdenesDetallePage);
    return OrdenesDetallePage;
}());

//# sourceMappingURL=ordenes-detalle.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_paginas__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TabsPage = (function () {
    function TabsPage() {
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__index_paginas__["d" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_1__index_paginas__["c" /* CategoriasPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_1__index_paginas__["g" /* OrdenesPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_1__index_paginas__["a" /* BusquedaPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab tabIcon="home" tabTitle="Inicio" [root]="tab1"></ion-tab>\n    <ion-tab tabIcon="star" tabTitle="Categorías" [root]="tab2"></ion-tab>\n    <ion-tab tabIcon="list" tabTitle="Pedidos" [root]="tab3"></ion-tab>\n    <ion-tab tabIcon="search" tabTitle="Bosqueda" [root]="tab4"></ion-tab>\n\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\tabs\tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_index_servicios__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, _up) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._up = _up;
        this.correo = "";
        this.contrasena = "";
    }
    LoginPage.prototype.ingresar = function () {
        var _this = this;
        this._up.ingresar(this.correo, this.contrasena).subscribe(function () {
            if (_this._up.activo()) {
                _this.viewCtrl.dismiss(true);
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\login\login.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons>\n            <button ion-button (click)="viewCtrl.dismiss(false)">\n              Cerrar\n          </button>\n        </ion-buttons>\n        <ion-title>Inicia sesión</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item>\n            <ion-label floating>Correo Electronico</ion-label>\n            <ion-input type="email" [(ngModel)]="correo"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Contraseña</ion-label>\n            <ion-input type="password" [(ngModel)]="contrasena"></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button block [disabled]="correo.length < 5 || contrasena.length < 5" (click)="ingresar()">\n      Iniciar sesión\n    </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_index_servicios__["c" /* UsuarioProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_carrito_carrito__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_productos_productos__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_usuario_usuario__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//Paginas






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["a" /* BusquedaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["b" /* CarritoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["c" /* CategoriasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["e" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["g" /* OrdenesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["f" /* OrdenesDetallePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["h" /* PorCategoriasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["i" /* ProductoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["j" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/busqueda/busqueda.module#BusquedaPageModule', name: 'BusquedaPage', segment: 'busqueda', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["a" /* BusquedaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["b" /* CarritoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["c" /* CategoriasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["e" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["g" /* OrdenesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["f" /* OrdenesDetallePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["h" /* PorCategoriasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["i" /* ProductoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["j" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_carrito_carrito__["a" /* CarritoProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_productos_productos__["a" /* ProductosProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_usuario_usuario__["a" /* UsuarioProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imagen_imagen__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__imagen_imagen__["a" /* ImagenPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__imagen_imagen__["a" /* ImagenPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagenPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_url_servicios__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ImagenPipe = (function () {
    function ImagenPipe() {
    }
    ImagenPipe.prototype.transform = function (codigo) {
        return __WEBPACK_IMPORTED_MODULE_1__config_url_servicios__["a" /* URL_IMAGENES */] + codigo + ".jpg";
    };
    ImagenPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'imagen',
        })
    ], ImagenPipe);
    return ImagenPipe;
}());

//# sourceMappingURL=imagen.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_index_servicios__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarritoPage = (function () {
    function CarritoPage(navCtrl, navParams, _cp, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cp = _cp;
        this.viewCtrl = viewCtrl;
    }
    CarritoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrito',template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\carrito\carrito.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-buttons>\n            <button ion-button (click)="viewCtrl.dismiss()">\n        Cerrar\n      </button>\n        </ion-buttons>\n\n        <ion-title>Carrito de Compras</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div text-center *ngIf="_cp.items.length === 0" class="carrito_vacio">\n\n        <ion-icon name="ios-cart-outline" class="icon-5x"></ion-icon>\n        <br> Su carrito esta vacio\n    </div>\n\n    <div *ngIf="_cp.items.length != 0">\n\n        <ion-grid>\n            <ion-row *ngFor="let item of _cp.items; let i = index;">\n                <ion-col>\n                    <img [src]="item.codigo | imagen">\n                </ion-col>\n                <ion-col>\n\n                    <p>{{ item.producto }}</p>\n                    <p>{{ item.precio_compra | currency:\'USD\':true }}</p>\n\n                    <button ion-button color="danger" outline block small (click)="_cp.remove_item(i)">\n            Eliminar\n          </button>\n\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <hr>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <h3>\n                        <strong>Total:</strong> {{ _cp.total_carrito | currency:\'USD\':true }}\n                    </h3>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <button ion-button block (click)="_cp.realizar_pedido()">\n      Realizar Pedido\n    </button>\n\n\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\carrito\carrito.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_index_servicios__["a" /* CarritoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], CarritoPage);
    return CarritoPage;
}());

//# sourceMappingURL=carrito.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_index_servicios__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriasPage = (function () {
    function CategoriasPage(navCtrl, navParams, _ps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ps = _ps;
        this.categoria = {};
        this.porCategorias = __WEBPACK_IMPORTED_MODULE_3__index_paginas__["h" /* PorCategoriasPage */];
    }
    CategoriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categorias',template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\categorias\categorias.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Categorías</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list>\n        <button ion-item *ngFor="let categoria of _ps.categorias" [navPush]="porCategorias" [navParams]="{ categoria: categoria }">\n\n          <ion-icon [name]="categoria.icono" item-left></ion-icon>\n        {{categoria.linea}}\n    </button>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\categorias\categorias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_index_servicios__["b" /* ProductosProvider */]])
    ], CategoriasPage);
    return CategoriasPage;
}());

//# sourceMappingURL=categorias.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrito_carrito__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ordenes_detalle_ordenes_detalle__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdenesPage = (function () {
    function OrdenesPage(navCtrl, navParams, _cp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cp = _cp;
        this.ordenesDetalle = __WEBPACK_IMPORTED_MODULE_3__ordenes_detalle_ordenes_detalle__["a" /* OrdenesDetallePage */];
    }
    OrdenesPage.prototype.ionViewDidLoad = function () {
        console.log('Cargando ordenes');
        this._cp.cargar_ordenes();
    };
    OrdenesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ordenes',template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\ordenes\ordenes.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Pedidos</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <button ion-item *ngFor="let orden of _cp.ordenes" [navPush]="ordenesDetalle" [navParams]="{orden: orden}">\n\n      <strong>ID del pedido</strong>{{orden.id}}\n    </button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\ordenes\ordenes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_carrito_carrito__["a" /* CarritoProvider */]])
    ], OrdenesPage);
    return OrdenesPage;
}());

//# sourceMappingURL=ordenes.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PorCategoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_index_servicios__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PorCategoriasPage = (function () {
    function PorCategoriasPage(navCtrl, navParams, _ps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ps = _ps;
        this.categoria = {};
        this.productoPage = __WEBPACK_IMPORTED_MODULE_3__index_paginas__["i" /* ProductoPage */];
        console.log(this.navParams.get("categoria"));
        this.categoria = this.navParams.get("categoria");
        this._ps.cargar_por_categoria(this.categoria.id);
    }
    PorCategoriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-por-categorias',template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\por-categorias\por-categorias.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{categoria.linea}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item *ngFor="let item of _ps.por_categoria">\n            <ion-thumbnail item-start>\n                <img [src]="item.codigo | imagen">\n            </ion-thumbnail>\n            <h3>{{ item.producto }}</h3>\n            <p>{{ item.proveedor }}</p>\n            <button ion-button clear item-end [navPush]="productoPage" [navParams]="{ producto: item }">Ver más</button>\n        </ion-item>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\por-categorias\por-categorias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_index_servicios__["b" /* ProductosProvider */]])
    ], PorCategoriasPage);
    return PorCategoriasPage;
}());

//# sourceMappingURL=por-categorias.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { HomePage } from '../pages/home/home';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusquedaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__producto_producto__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_productos_productos__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BusquedaPage = (function () {
    function BusquedaPage(navCtrl, navParams, _pp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._pp = _pp;
        this.productoPage = __WEBPACK_IMPORTED_MODULE_0__producto_producto__["a" /* ProductoPage */];
    }
    BusquedaPage.prototype.buscar_productos = function (ev) {
        var valor = ev.target.value;
        console.log(valor);
        this._pp.buscar_producto(valor);
    };
    BusquedaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-busqueda',template:/*ion-inline-start:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\busqueda\busqueda.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Buscar Productos</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-searchbar (ionInput)="buscar_productos($event)"></ion-searchbar>\n\n    <ion-list>\n        <ion-item *ngFor="let item of _pp.resultados" [navPush]="productoPage" [navParams]="{ producto: item }">\n            {{ item.producto }}\n        </ion-item>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IBM_ADMIN\Desktop\ionic\ecommerce\src\pages\busqueda\busqueda.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_productos_productos__["a" /* ProductosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_productos_productos__["a" /* ProductosProvider */]) === "function" && _c || Object])
    ], BusquedaPage);
    return BusquedaPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=busqueda.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usuario_usuario__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_url_servicios__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Plugin storage

// usuario service


// paginas del modal

var CarritoProvider = (function () {
    function CarritoProvider(http, alertCtrl, platform, storage, modalCtrl, _us) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this._us = _us;
        this.items = [];
        this.total_carrito = 0;
        this.ordenes = [];
        console.log('Hello Carrito Provider');
        this.cargar_storage();
        this.actualizar_total();
    }
    CarritoProvider.prototype.remove_item = function (idx) {
        this.items.splice(idx, 1);
        this.guardar_storage();
    };
    CarritoProvider.prototype.realizar_pedido = function () {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var codigos = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            codigos.push(item.codigo);
        }
        data.append("items", codigos.join(","));
        var url = __WEBPACK_IMPORTED_MODULE_6__config_url_servicios__["b" /* URL_SERVICIOS */] + "/pedidos/realizar_orden/" + this._us.token + "/" + this._us.id_usuario;
        this.http.post(url, data)
            .subscribe(function (resp) {
            var respuesta = resp.json();
            if (respuesta.error) {
                // mostramos error
                _this.alertCtrl.create({
                    title: "Error en la orden",
                    subTitle: respuesta.mensaje,
                    buttons: ["OK"]
                }).present();
            }
            else {
                // todo bien!
                _this.items = [];
                _this.alertCtrl.create({
                    title: "Orden realizada!",
                    subTitle: "Nos contactaremos con usted próximamente",
                    buttons: ["OK"]
                }).present();
            }
        });
    };
    CarritoProvider.prototype.ver_carrito = function () {
        var _this = this;
        var modal;
        if (this._us.token) {
            //mostrar pagina del carrito
            modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["b" /* CarritoPage */]);
        }
        else {
            // mostrar el login
            modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["e" /* LoginPage */]);
        }
        modal.present();
        modal.onDidDismiss(function (abrirCarrito) {
            console.log(abrirCarrito);
            if (abrirCarrito) {
                _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["b" /* CarritoPage */]).present();
            }
        });
    };
    CarritoProvider.prototype.agregar_carrito = function (item_parametro) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.codigo == item_parametro.codigo) {
                this.alertCtrl.create({
                    title: "Item existe",
                    subTitle: item_parametro.producto + ", ya se encuentra en su carrito de compras",
                    buttons: ["OK"]
                }).present();
                return;
            }
        }
        this.items.push(item_parametro);
        this.actualizar_total();
        this.guardar_storage();
    };
    CarritoProvider.prototype.actualizar_total = function () {
        this.total_carrito = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            this.total_carrito += Number(item.precio_compra);
        }
    };
    CarritoProvider.prototype.guardar_storage = function () {
        if (this.platform.is("cordova")) {
            // dispositivo
            this.storage.set('items', this.items);
        }
        else {
            // computadora
            localStorage.setItem("items", JSON.stringify(this.items));
        }
    };
    CarritoProvider.prototype.cargar_storage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is("cordova")) {
                // dispositivo
                _this.storage.ready()
                    .then(function () {
                    _this.storage.get("items")
                        .then(function (items) {
                        if (items) {
                            _this.items = items;
                        }
                        resolve();
                    });
                });
            }
            else {
                // computadora
                if (localStorage.getItem("items")) {
                    //Existe items en el localstorage
                    _this.items = JSON.parse(localStorage.getItem("items"));
                }
                resolve();
            }
        });
        return promesa;
    };
    CarritoProvider.prototype.cargar_ordenes = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_6__config_url_servicios__["b" /* URL_SERVICIOS */] + "/pedidos/obtener_pedidos/" + this._us.token + "/" + this._us.id_usuario;
        this.http.get(url)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            if (data.error) {
                // manejar el error
            }
            else {
                _this.ordenes = data.ordenes;
            }
        });
    };
    CarritoProvider.prototype.borrar_orden = function (orden_id) {
        var url = __WEBPACK_IMPORTED_MODULE_6__config_url_servicios__["b" /* URL_SERVICIOS */] + "/pedidos/borrar_pedido/" + this._us.token + "/" + this._us.id_usuario + "/" + orden_id;
        return this.http.delete(url)
            .map(function (resp) { return resp.json(); });
    };
    CarritoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__usuario_usuario__["a" /* UsuarioProvider */]])
    ], CarritoProvider);
    return CarritoProvider;
}());

//# sourceMappingURL=carrito.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__busqueda_busqueda__ = __webpack_require__(301);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__busqueda_busqueda__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrito_carrito__ = __webpack_require__(263);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__carrito_carrito__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categorias_categorias__ = __webpack_require__(264);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__categorias_categorias__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(210);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ordenes_ordenes__ = __webpack_require__(265);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__ordenes_ordenes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ordenes_detalle_ordenes_detalle__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__ordenes_detalle_ordenes_detalle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__por_categorias_por_categorias__ = __webpack_require__(266);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__por_categorias_por_categorias__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__producto_producto__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__producto_producto__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_tabs__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a"]; });










//# sourceMappingURL=index.paginas.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return URL_SERVICIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL_IMAGENES; });
var URL_SERVICIOS = "http://localhost:8012/rest/index.php";
var URL_IMAGENES = "http://localhost:8012/rest/public/img/productos/";
//# sourceMappingURL=url.servicios.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carrito_carrito__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__carrito_carrito__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__productos_productos__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__productos_productos__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_usuario__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__usuario_usuario__["a"]; });



//# sourceMappingURL=index.servicios.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_url_servicios__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsuarioProvider = (function () {
    function UsuarioProvider(http, alertCtrl, storage, platform) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.platform = platform;
        console.log('Hello UsuarioProvider Provider');
        this.cargar_storage();
    }
    UsuarioProvider.prototype.activo = function () {
        if (this.token) {
            return true;
        }
        else {
            return false;
        }
    };
    UsuarioProvider.prototype.ingresar = function (correo, contrasena) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* URLSearchParams */]();
        data.append("correo", correo);
        data.append("contrasena", contrasena);
        var url = __WEBPACK_IMPORTED_MODULE_3__config_url_servicios__["b" /* URL_SERVICIOS */] + "/login";
        return this.http.post(url, data).map(function (resp) {
            var data_resp = resp.json();
            console.log(data_resp);
            if (data_resp.error) {
                _this.alertCtrl.create({
                    title: "Error al iniciar sesión",
                    subTitle: data_resp.mensaje,
                    buttons: ["OK"]
                }).present();
            }
            else {
                _this.token = data_resp.token;
                _this.id_usuario = data_resp.id_usuario;
                _this.guardar_storage();
            }
        });
    };
    UsuarioProvider.prototype.cerrar_sesion = function () {
        this.token = null;
        this.id_usuario = null;
        //guardar en el storage
        this.guardar_storage();
    };
    UsuarioProvider.prototype.guardar_storage = function () {
        if (this.platform.is("cordova")) {
            //Dispositivo móvil
            this.storage.set('token', this.token);
            this.storage.set('id_usuario', this.id_usuario);
        }
        else {
            //Ordenador
            if (this.token) {
                localStorage.setItem("token", this.token);
                localStorage.setItem("id_usuario", this.id_usuario);
            }
            else {
                localStorage.removeItem("token");
                localStorage.removeItem("id_usuario");
            }
        }
    };
    UsuarioProvider.prototype.cargar_storage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is("cordova")) {
                _this.storage.ready().then(function () {
                    _this.storage.get("token").then(function (token) {
                        _this.token = token;
                    });
                    _this.storage.get("id_usuario").then(function (id_usuario) {
                        if (id_usuario) {
                            _this.id_usuario = id_usuario;
                        }
                        resolve();
                    });
                });
            }
            else {
                //compuadora
                if (localStorage.getItem("token")) {
                    //Existen datos en el storage del navegador
                    _this.token = localStorage.getItem("token");
                    _this.id_usuario = localStorage.getItem("id_usuario");
                }
                resolve();
            }
        });
        return promesa;
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProductosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductosProvider = (function () {
    function ProductosProvider(http) {
        this.http = http;
        this.pagina = 0;
        this.categoria = "lineas";
        this.productos = [];
        this.categorias = [];
        this.por_categoria = [];
        this.resultados = [];
        this.cargar_todos();
        this.cargar_categorias();
    }
    ProductosProvider.prototype.cargar_categorias = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["b" /* URL_SERVICIOS */] + "/" + this.categoria;
        this.http.get(url).map(function (resp) { return resp.json(); }).subscribe(function (data) {
            if (data.error) {
            }
            else {
                _this.categorias = data.lineas;
                console.log(_this.categorias);
            }
        });
    };
    ProductosProvider.prototype.cargar_por_categoria = function (categoria) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["b" /* URL_SERVICIOS */] + "/productos/por_tipo/" + categoria;
        this.http.get(url).map(function (resp) { return resp.json(); }).subscribe(function (data) {
            console.log(data.productos);
            _this.por_categoria = data.productos;
        });
    };
    ProductosProvider.prototype.cargar_todos = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["b" /* URL_SERVICIOS */] + "/productos/todos/" + _this.pagina;
            _this.http.get(url).map(function (resp) { return resp.json(); }).subscribe(function (data) {
                if (data.error) {
                }
                else {
                    var nuevaData = _this.agrupar(data.productos, 2);
                    (_a = _this.productos).push.apply(_a, nuevaData);
                    _this.pagina += 1;
                }
                resolve();
                var _a;
            });
        });
        return promesa;
    };
    ProductosProvider.prototype.agrupar = function (arr, tamano) {
        var nuevoArreglo = [];
        for (var index = 0; index < arr.length; index += tamano) {
            nuevoArreglo.push(arr.slice(index, index + tamano));
        }
        console.log(nuevoArreglo);
        return nuevoArreglo;
    };
    ProductosProvider.prototype.buscar_producto = function (termino) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["b" /* URL_SERVICIOS */] + "/productos/buscar/" + termino;
        this.http.get(url)
            .subscribe(function (resp) {
            var data = resp.json();
            _this.resultados = data.productos;
            console.log(_this.resultados);
        });
    };
    ProductosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ProductosProvider);
    return ProductosProvider;
    var _a;
}());

//# sourceMappingURL=productos.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map