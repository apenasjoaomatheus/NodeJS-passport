 // get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'matheus',
  password: '38960032',
  database: 'passportJS'
});


module.exports = {

    findByID: function(id) {
      return connection.promise().query('select * from users where id =?', [id])
    },

    findByUserName: function(username) {    
        return connection.promise().query('select * from users where login=?', [username])
    }

}
