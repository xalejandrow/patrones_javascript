const user = new User();

const init = () => {
    user.on('login', userLoggedIn)
    user.on('login', retrieveInitData)
    // y las funciones que necesite
}

const userLoggedIn = () => {
    // usuario inició sesión
}

app.init()

// en algún lugar de nuestra app
const login = () => {
    // lógica del inicio de sesión
    // ...

    //  luego:
    user.trigger('login')
}

login()