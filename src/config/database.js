const sql = require('mssql') //thư viện dùng sql
const sqlConfig = {
    user: "sa",
    password: "Password.1",
    database: "TestNodeJs",
    server: "localhost",
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
}
console.log(sql.connect(sqlConfig))
module.exports =  sql.connect(sqlConfig);;