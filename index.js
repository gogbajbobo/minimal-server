const express = require('express')
const cors = require('cors')
// const db = require('./db')

const app = express()
const port = 3003

app.use(cors())

app.get('/', (req, res) => {

    console.log('got request from', req.headers['user-agent'])
    const message = `Server successfully get request on port ${ port }`
    return res.send(message)
    // return db.getDatabases()
    //     .then(result => res.json({ message, result}))
    //     .catch(err => res.json({ message, err }))

})

app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`)
})
