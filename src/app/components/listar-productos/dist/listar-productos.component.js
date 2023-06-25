"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListarProductosComponent = void 0;
var core_1 = require("@angular/core");
var ListarProductosComponent = /** @class */ (function () {
    function ListarProductosComponent(_productoService, toastr) {
        this._productoService = _productoService;
        this.toastr = toastr;
        this.listProductos = [];
    }
    ListarProductosComponent.prototype.ngOnInit = function () {
        this.obtenerProductos();
    };
    ListarProductosComponent.prototype.obtenerProductos = function () {
        var _this = this;
        this._productoService.getProductos().subscribe(function (data) {
            console.log(data);
            _this.listProductos = data;
        }, function (error) {
            console.log(error);
        });
    };
    ListarProductosComponent.prototype.eliminarProducto = function (id) {
        var _this = this;
        this._productoService.eliminarProducto(id).subscribe(function (data) {
            _this.toastr.error('producto eliminado con exito', id);
            _this.obtenerProductos();
        }, function (error) {
            console.log(error);
        });
    };
    ListarProductosComponent = __decorate([
        core_1.Component({
            selector: 'app-listar-productos',
            templateUrl: './listar-productos.component.html',
            styleUrls: ['./listar-productos.component.scss']
        })
    ], ListarProductosComponent);
    return ListarProductosComponent;
}());
exports.ListarProductosComponent = ListarProductosComponent;
