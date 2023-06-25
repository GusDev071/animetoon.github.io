"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductoService = void 0;
var core_1 = require("@angular/core");
var ProductoService = /** @class */ (function () {
    function ProductoService(http) {
        this.http = http;
        this.url = 'http://localhost:4000/api/productos/';
    }
    ProductoService.prototype.getProductos = function () {
        return this.http.get(this.url);
    };
    ProductoService.prototype.eliminarProducto = function (id) {
        return this.http["delete"](this.url + id);
    };
    ProductoService.prototype.registarProducto = function (producto) {
        return this.http.post(this.url, producto);
    };
    ProductoService.prototype.obtenerProducto = function (id) {
        return this.http.get(this.url + id);
    };
    ProductoService.prototype.editarProducto = function (id, producto) {
        return this.http.put(this.url + id, producto);
    };
    ProductoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductoService);
    return ProductoService;
}());
exports.ProductoService = ProductoService;
