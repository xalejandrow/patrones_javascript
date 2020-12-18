// Sección 3, Video 16. Programación tácita o point free
const f = (ruta, cb) => {
    // muuchas líneas de código después
    const resultado = computacionPesada();
    cb(resultado);
}

/* Este procedimiento no es conveniente porque dificulta los test unitarios

f('/users', (resultado) => {

});

app.get('/users', (req, res) => {

}); */


const manejaResultado = (resultado) => {

}

f('/users', manejaResultado);