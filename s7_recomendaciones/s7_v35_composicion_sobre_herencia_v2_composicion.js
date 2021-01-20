class Persona {
    constructor(){
        this.nombre = 'lala'
    }

    saludar(){
        console.log(`Hola soy ${this.nombre}`);
    }
}


class Perro extends Persona{

}

// Si después hay más clases que hereden de Persona o de Perro (que hereda de Persona), 
// van a tener propiedades y métodos que no van a necesitar
// por lo tanto, van a quedar cosas que no van a ser necesarias.
