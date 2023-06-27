export class Producto{
    _id?: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    imagen: string;
    precio: number;
    descripcion: string;

    constructor(nombre: string, categoria:string,ubicacion:string,precio:number,imagen:string,descripcion:string){
        this.nombre=nombre;
        this.categoria=categoria;
        this.ubicacion=ubicacion;
        this.precio=precio;
        this.descripcion=descripcion;
        this.imagen = imagen;
    }
}
