// mixin
let mixin = {
    saludar() {
        console.log(`Hola ${this.nombre}`);
    },
    despedir() {
        console.log(`Chao ${this.nombre}`);
    }
};

// clase
class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

// aumentamos el prototipo
Object.assign(Usuario.prototype,mixin);


const usuario = new Usuario('Chanchito feliz');
usuario.saludar();