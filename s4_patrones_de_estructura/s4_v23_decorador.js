class Macbook { 
    constructor() {
        this.precio = 1000
        this.pantalla = 11.6
    }
}

const macbook = new Macbook();

macbook.agregarMemoria = function() {
    this.precio += 100
}

macbook.agregarMemoria();

console.log(macbook.precio);