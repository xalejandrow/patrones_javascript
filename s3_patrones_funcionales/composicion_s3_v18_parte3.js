// Sección 3, Video 18. Composición Parte 1

const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto' },
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz' },
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez' },
    { edad: 1, nombre: 'Sofia', apellido: 'Zapata' },
];

const compose = (...fns) => x => fns.reduceRight((y,f) => f(y), x);

const filter = f => xs => xs.filter(f);

const head = xs => xs[0];

const formateo = x => ({
    nombreCompleto = `${x.nombre} ${x.apellido}`,
    edad: x.edad,
});

const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`;


 /*  Lo sustituimos por compose
   formato(formateo(head(data.filter(x => x.edad < 2)))); */


/* const traePrimerInfante = compose(
        formato,
        formateo,
        head,
        xs => xs.filter(x => edad < 2),
    ); */

const traePrimerInfante = compose(
       formato,
       formateo,
       head,
       filter(x => edad < 2),
    );


  


