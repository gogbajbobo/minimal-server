const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send(`Server successfully get request on port ${ port }`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`)
})
