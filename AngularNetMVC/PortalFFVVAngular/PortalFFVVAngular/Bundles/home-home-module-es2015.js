(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/contacto/contacto.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/contacto/contacto.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>contacto works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/inicio/inicio.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/inicio/inicio.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Inicio</h1>\r\n<div class=\"row\">\r\n<div class=\"col-md-4\">\r\n    <div class=\"list-group\">\r\n        <a class=\"list-group-item\" routerLink=\"/Home/Contacto\">Contactanos!!</a>\r\n        <a href=\"#\" class=\"list-group-item\">Nosotros!!</a>\r\n      </div>\r\n</div>\r\n<div class=\"col-md-4\"></div>\r\n<div class=\"col-md-4\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/contacto/contacto.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/contacto/contacto.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/contacto/contacto.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/contacto/contacto.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactoComponent = class ContactoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacto',
        template: __webpack_require__(/*! raw-loader!./contacto.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/contacto/contacto.component.html"),
        styles: [__webpack_require__(/*! ./contacto.component.css */ "./src/app/home/contacto/contacto.component.css")]
    })
], ContactoComponent);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/home/inicio/inicio.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/home/contacto/contacto.component.ts");





const routes = [
    {
        path: 'contacto', component: _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_4__["ContactoComponent"]
    },
    {
        path: 'inicio', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/home/inicio/inicio.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/home/contacto/contacto.component.ts");






let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"], _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__["ContactoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/inicio/inicio.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/inicio/inicio.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/inicio/inicio.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/inicio/inicio.component.ts ***!
  \*************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InicioComponent = class InicioComponent {
    constructor() { }
    OnInit() {
    }
};
InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: __webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/inicio/inicio.component.html"),
        styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/home/inicio/inicio.component.css")]
    })
], InicioComponent);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map