// module.exports = {
//   host: 'localhost',
//   user: 'root',
//   passsword: 1234,
//   database: 'inthem'
// }

const dbconfig = {
  host: 'localhost',
  user: 'root',
  passsword: '1234',
  port: '3306',
  database: 'inthem'
}

export default dbconfig;


// import express from 'express';
// import mysql from 'mysql';


// const express = require('express');
// const mysql      = require('mysql');
// const dbconfig   = require('./config/database.js');
// const connection = mysql.createConnection(dbconfig);

// const app = express();

// // configuration =========================
// app.set('port', process.env.PORT || 3001);

// app.get('/', (req, res) => {
//   res.send('Root');
// });

// app.get('/users', (req, res) => {
//   connection.query('SELECT * from Users', (error, rows) => {
//     if (error) throw error;
//     console.log('User info is: ', rows);
//     res.send(rows);
//   });
// });

// app.listen(app.get('port'), () => {
//   console.log('Express server listening on port ' + app.get('port'));
// });

// // config/database.js
// module.exports = {
//   host     : 'localhost',
//   user     : '< MySQL username >',
//   password : '< MySQL password >',
//   database : 'my_db'
// };






// const { query } = require('express');
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   port: "8282",
//   password: 'TheoHernandez19!',
//   database: 'my_db'
// });

// // console.log(connection);
// // console.log("=================asdsadasdasdas==============");
// // connection.query = "anbasdsadasd";
// // console.log(connection.query);
// //console.log(query);
// // connection.connect();

// connection.query('SELECT * from Users', (error, rows, fields) => {
//   if (error) throw error;
//   console.log('User info is : ', rows);
// });

// connection.end();