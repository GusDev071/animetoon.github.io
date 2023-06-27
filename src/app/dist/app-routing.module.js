"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var crear_producto_component_1 = require("./components/crear-producto/crear-producto.component");
var listar_productos_component_1 = require("./components/listar-productos/listar-productos.component");
var principal_component_1 = require("./components/principal/principal.component");
var aboutus_component_1 = require("./components/aboutus/aboutus.component");
var routes = [
    { path: '', component: principal_component_1.PrincipalComponent },
    { path: 'listas', component: listar_productos_component_1.ListarProductosComponent },
    { path: 'crear-producto', component: crear_producto_component_1.CrearProductoComponent },
    { path: 'editar-producto/:id', component: crear_producto_component_1.CrearProductoComponent },
    { path: 'aboutus', component: aboutus_component_1.AboutusComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
