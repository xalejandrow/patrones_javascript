const express = require('express')
const axios = require('axios')
const { get } = require('./s6_v33_inyeccion_de_dependencias_v2_handlers')
const app = express()
const port = 3000

app.get('/', get(axios))

app.listen(port, () => console.log(`Example app listening on port ${port}`))

// Versión usando handlers