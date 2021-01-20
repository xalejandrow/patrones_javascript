 // callback hell
const fn = () => {
    ajax(() => {
        ajax(() => {
            ajax(()=> {

            })
        })
    })
}

// Para resolver el problema de los callbacks, se usarion las promedas (promises)
const fn1 = () => {
    ajax()
        .then(() => {
            const a = 1
            return ajax()
        })
        .then(() => {
            return ajax()
        })
        .then(() => {
            return ajax()
        })
        .then(() => {
            console.log(a); //da error porque no está definido
            return ajax()
        })
}