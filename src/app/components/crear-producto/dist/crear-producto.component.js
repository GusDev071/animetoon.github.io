"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CrearProductoComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CrearProductoComponent = /** @class */ (function () {
    function CrearProductoComponent(fb, router, toastr, _productoServices, aRouter) {
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this._productoServices = _productoServices;
        this.aRouter = aRouter;
        this.titulo = 'crear producto';
        this.productoForm = this.fb.group({
            producto: ['', forms_1.Validators.required],
            categoria: ['', forms_1.Validators.required],
            ubicacion: ['', forms_1.Validators.required],
            precio: ['', forms_1.Validators.required],
            descripcion: ['', forms_1.Validators.required],
            imagen: ['', forms_1.Validators.required]
        });
        this.id = this.aRouter.snapshot.paramMap.get('id');
    }
    CrearProductoComponent.prototype.agregarProducto = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g;
        console.log(this.productoForm);
        console.log((_a = this.productoForm.get('producto')) === null || _a === void 0 ? void 0 : _a.value);
        var PRODUCTO = {
            nombre: (_b = this.productoForm.get('producto')) === null || _b === void 0 ? void 0 : _b.value,
            categoria: (_c = this.productoForm.get('categoria')) === null || _c === void 0 ? void 0 : _c.value,
            ubicacion: (_d = this.productoForm.get('ubicacion')) === null || _d === void 0 ? void 0 : _d.value,
            precio: (_e = this.productoForm.get('precio')) === null || _e === void 0 ? void 0 : _e.value,
            imagen: (_f = this.productoForm.get('imagen')) === null || _f === void 0 ? void 0 : _f.value,
            descripcion: (_g = this.productoForm.get('descripcion')) === null || _g === void 0 ? void 0 : _g.value
        };
        if (this.id !== null) {
            //editamos producto 
            this._productoServices.editarProducto(this.id, PRODUCTO).subscribe(function (data) {
                _this.toastr.success(PRODUCTO.nombre, 'Manga fue Actualizado con éxito');
                _this.router.navigate(['/']);
            }, function (error) {
                console.log(error);
                _this.productoForm.reset();
            });
        }
        else {
            //agregamos producto 
            console.log(PRODUCTO);
            this._productoServices.registarProducto(PRODUCTO).subscribe(function (data) {
                _this.toastr.success(PRODUCTO.nombre, 'Manga Registrado');
                _this.router.navigate(['/']);
            }, function (error) {
                console.log(error);
                _this.productoForm.reset();
            });
        }
    };
    CrearProductoComponent.prototype.esEditar = function () {
        var _this = this;
        if (this.id !== null) {
            this.titulo = 'Editar producto';
            this._productoServices.obtenerProducto(this.id).subscribe(function (data) {
                _this.productoForm.setValue({
                    producto: data.nombre,
                    categoria: data.categoria,
                    ubicacion: data.ubicacion,
                    precio: data.precio,
                    imagen: data.imagen
                });
            });
        }
    };
    CrearProductoComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file);
            reader_1.onload = function () {
                _this.productoForm.patchValue({
                    imagen: reader_1.result
                });
            };
        }
    };
    CrearProductoComponent.prototype.ngOnInit = function () {
        this.esEditar();
    };
    CrearProductoComponent = __decorate([
        core_1.Component({
            selector: 'app-crear-producto',
            templateUrl: './crear-producto.component.html',
            styleUrls: ['./crear-producto.component.scss']
        })
    ], CrearProductoComponent);
    return CrearProductoComponent;
}());
exports.CrearProductoComponent = CrearProductoComponent;
