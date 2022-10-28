import express from 'express';
import path from 'path';
import mysql from 'mysql';
import request from 'request';
import * as fs from 'fs';

const dbconfig = {
  host: 'localhost',
  user: 'root',
  password: 'TheoHernandez19!',
  port:'8282',
  database: 'in_the_m'
}

const connection = mysql.createConnection(dbconfig);

const app = express();
app.set('port', process.env.PORT || 3000);

const __dirname = path.resolve();

app.use('/public', express.static(__dirname + '/public'));
app.use('/source', express.static(__dirname + '/source'));

app.use(express.json());
app.use(express.urlencoded({extended : true}));

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

app.get('/noticeBoard', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/views/board/noticeBoard/noticeBoard.html'));
});

app.get('/movieParam', (req, res) => {
  console.log(req);
  console.log(req.query);
  console.log(req.query.title);
  let nation;
  switch (req.query.nation) {
    case "ko":
      nation = "대한민국";
      break;
    case "en":
      nation = "미국";
      break;
  }
  res.send(`
  <!DOCTYPE html>
  <html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>  
  <link rel="stylesheet" href="./public/css/movieInfo/movieInfor.css" defer/>
</head>

<body>
  <div id="root">
    <div class="maindiv">      
      <div class="section">
        <div class="poster">
        <img src="https://image.tmdb.org/t/p/original${req.query.poster}" style="width: 100%;"/>
        </div>
        <div class="informa"><span> </span>
          <div>${req.query.title}</div> <span>평점 </span>
          <div>⭐⭐⭐⭐⭐${req.query.rate}</div> <span>개요 </span>
          <div>액션/범죄| ${nation}|129분 |${req.query.date} 개봉</div> <span>감독</span>
          <div>이석훈</div> <span>등급</span>
          <div>[국내]15세 관람가</div> <span>출연</span>
          <div>현빈</div> <span> </span>
          <div>${req.query.text} </div>
        </div>
      </div>
      <div class="like"><button>찜하기💗</button></div>
    </div>
  </div>
</body>
</html>
`);
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
    fs.readFile("./build/dbhtml.html", "utf-8", (err, data) => {
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


app.get("/dbtest4", (req, res) => {
  connection.query("SELECT * FROM director", (error, rows) => {
    if (error) throw error;
    console.log(`data : ${rows}`);
    //res.send(rows);
    fs.readFile("./build/dbhtml.html", "utf-8", (err, data) => {
      if (err) throw err;
      console.log(data);
      const temp = data.replace('<ymh>', rows[0].DIRECTOR_NAME);
      res.send(temp);
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

app.post('/writeText', (req, res) => { 
  const title = req.body.forum_title;
  const writer = req.body.ueser_name;
  const context = req.body.user_message;
  
  const sql = "INSERT INTO `board_` (`BOARD_TITLE`,`BOARD_CONTEXT`,`USER_NAME`) VALUES ('"+title+"','"+writer+"','"+context+"')";
  
  connection.query(sql, (err, result, field) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  });
  res.redirect('/writeFrame');
});

app.post("/signUp", (req, res) => {
  console.log(req);
  console.log(req.body);
  const nicName = req.body.nicName;
  const email = req.body.email;
  const password = req.body.password;
  const sql =
    "INSERT INTO `users` (`nickname`, `email`, `password`) VALUES ('" +
    nicName +
    "', '" +
    email +
    "', '" +
    password +
    "')";
  connection.query(sql, (err, result, field) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Sever Error");
    }
  });
  res.redirect("/signInPage");
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});