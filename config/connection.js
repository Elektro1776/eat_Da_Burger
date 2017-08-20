const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
  });
}

connection.connect(() => {
  console.log(' CONNECTED TO DB', connection.threadId);
});

module.exports = connection;
