const mysql = require('mysql2')

const getDatabases = () => {

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'sesdb'
    })

    return new Promise((res, rej) => {
        connection.query(
            'select database()',
            (err, results) => {
                return err ? rej(err) : res(results[0]['database()'])
            })
    })

}

module.exports = { getDatabases }
