const saludar = name => console.log(`Hola soy ${name}`);
const despedir = () => console.log(`Adios!`);
const dormir = () => console.log(`Zzzzz...`);


const Persona = {
    nombre: 'lala',
    saludar: function () { saludar(this.nombre) }
}

// Usando una Clase
class Persona {
    constructor() {
        this.nombre = 'Lala'
    }

    saludar() {
        saludar(this.nombre)
    }

    despedir() { despedir() }

    dormir() { dormir() }
}

class Robot {
    constructor() {
        this.nombre = 'Lala'
    }

    saludar() {
        saludar(this.nombre)
    }

    despedir() { despedir() }
    
}