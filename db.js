const mysql = require('mysql2')
const config = require('../minimal-server-config.json')

const getDatabases = () => {

    const connection = mysql.createConnection({
        host: config.host || 'localhost',
        user: config.user || 'root',
        password: config.password || '',
        database: config.database || 'sesdb'
    })

    return new Promise((res, rej) => {
        connection.query(
            'select database()',
            (err, results) => {
                console.log('get current database', results)
                return err ? rej(err) : res(results[0]['database()'])
            })
    })

}

module.exports = { getDatabases }
