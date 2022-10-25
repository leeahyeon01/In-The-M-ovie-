import express from 'express';
import path from 'path';
import mysql from 'mysql';
import request from 'request';
import fs from 'fs';


//import dbconfig from './build/db.js'

//const dbconfig = require('./build/db.js');

const dbconfig = {
  host: 'localhost',
  user: 'root',
  password: 'TheoHernandez19!',
  port:'8282',
  database: 'in_the_m'
}

const connection = mysql.createConnection(dbconfig);

//const express = require('express');

//console.log(path);
const app = express();
app.set('port', process.env.PORT || 3000);

const __dirname = path.resolve();

app.use('/public', express.static(__dirname + '/public'));
app.use('/source', express.static(__dirname + '/source'));

app.get('/', (req, res) => { 
  //res.send('Hello, Express');
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/adminLogin', (req, res) => { 
  res.sendFile(path.join(__dirname, '/public/views/admin/adminLogin.html'));
});

app.get('/adminPage', (req, res) => { 
  res.sendFile(path.join(__dirname, '/public/views/admin/adminiPage.html'));
});

app.get('/myInfo', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/clientInfo/myInfo.html'));
});

app.get('/myFavoMov', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/clientInfo/myFavoMov.html'));
});

app.get('/myBoard', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/clientInfo/myBoard/myboard.html'));
});


app.get('/writeFrame', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/board/writeForum.html'));
});

app.get('/searchMovie', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/search/movieList.html'));
});

app.get('/boardHead', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/clientInfo/myBoard/myboardHead.html'));
});

app.get('/board', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/board/board.html'));
});

app.get('/textContent', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/board/textContent.html'));
});

app.get('/logIn', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/logIn/login.html'));
});

app.get('/movieInfo', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/movieInfo/movieInfor.html'));
});



app.get('/signInPage', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/signInPage/signInPage.html'));
});

app.get('/slider', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/slider/moveSlide.html'));
});

app.get('/randomMovie', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/randomMovie/randomMovie.html'));
});


app.get('/apiDB', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/apiDB.html'));
});




app.get('/dbtest', (req, res) => {
  connection.query('SELECT * FROM director', (error, rows) => {
    if (error) throw error;
    console.log(`data : ${rows}`);
    res.send(rows);
  });
});

app.get("/dbtest3", (req, res) => {
  connection.query("SELECT * FROM director", (error, rows) => {
    if (error) throw error;
    console.log(`data : ${rows}`);
    //res.send(rows);
    fs.readFile("./public/index.html", "utf-8", (err, data) => {
      for (let i = 0; i < data.length; i++) {
        console.log(`data[${i}] : ${data[i]}`);        
        // i = 417, 418사이가 root태그 안
      }
      const front = data.slice(0, 417);
      const back = data.slice(418, data.length - 1);
      const total = [rows[0].DIRECTOR_NAME];
      total.unshift(front);
      total.push(back);
      console.log(total);
      res.send(`${total}`);
    });
  });
});



// app.get('/dbtest2', (req, res) => { 
//   connection.query('SELECT * FROM director', (error, rows) => {
//     if (error) throw error;
//     console.log(`data : ${rows}`);
//     const html = readFileSync(__dirname + '/build/apiDB.html');
//     res.json({html: html.toString(), data: rows});
//   });
// });






app.get('/dbPage', (req, res) => { 
  connection.query('SELECT * FROM director', (error, rows) => {
    if (error) throw error;
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>In-The-M-ovie- Express!</title>    
    </head>
    <body>
        <div id="app">
         rows : ${rows} <br/>
         rows[0] :${rows[0]} <br/>
         rows[0].DIRECTOR_SEQ :  ${rows[0].DIRECTOR_SEQ} <br/>
         rows[0].DIRECTOR_NAME : ${rows[0].DIRECTOR_NAME} <br/>
         rows[0].DIRECTOR_CODE : ${rows[0].DIRECTOR_CODE} <br/>
        </div>        
    </body>
    </html>`);
    //console.log(`data : ${rows}`);
    console.log(rows);
    console.dir(rows);
    console.dir(rows[0]);
    console.dir(rows[0].DIRECTOR_SEQ);
    //console.dir(typeof rows);
    //console.dir(Array.isArray(rows));
  });
});

app.get('/api', (req, res) => {
  const apiURL = 'https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?';  
  const apiKey = '7204O8KH4D5547Q3JBB7';
  const genre = "로맨스";
  const startDate = 20220222;
  const kmdb_url = `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=7204O8KH4D5547Q3JBB7&detail =Y&genre=${encodeURI(genre)}&releaseDts=20221009&listCount=50`;

  const options = {
    method: 'GET',
    url: kmdb_url,
    headers: {
      Cookie: 'JSESSIONID=E5F2C3985D522765327DD7D107C07129'
    }
  }

  request(options, (error, response) => {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>In-The-M-ovie - Express!</title>
    </head>
    <body>
        <div id="app">
         api : ${response.body}
        </div>        
    </body>
    </html>`);
  });
});


app.listen(app.get('port'), () => { 
  console.log(app.get('port'), '번 포트에서 대기 중');
});
