const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/', async (req,res) => {
    const {data} = await axios.get('https://jsonplaceholder/typicode.com/users')
    res.send(data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))

// Versión antes de usar handlers