class MiClase {
    constructor(p1,p2){
        this.propiedad = p1;
        this.propiedad2 = p2;
    }

    metodo() {
        //soy un método de prototipo

    }
}


const instancia = new MiClase(4,2);
console.log(instancia);