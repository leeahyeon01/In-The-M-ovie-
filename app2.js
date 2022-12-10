const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mysqlConObj = require('./config/mysql');
const db = mysqlConObj.init();
const port = 3050;
const request = require('request');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const mysqlConnection = require('./config/mysql');

mysqlConObj.open(db);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res, next)=>{
  // const sql = `select * from movieapi`
  const api_KEY = '7204O8KH4D5547Q3JBB7';
  const genre = "SF"; //SF 코메디 공포
  const startDate = "20220901";
  const apiURL = ` https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${encodeURI(api_KEY)}&detail=Y&genre=${encodeURI(genre)}&releaseDts=${encodeURI(startDate)}&listCount=50`;

  const options = {
    method : 'GET',
    url : apiURL,
  }



  request (options, (err, res, body)=>{
    if(err){
      throw new Error(err);
    }

    // const data = request.response.Data[0].Result;
    let info = JSON.parse(body);
    // console.log(info.Data[0].Result[0])

    // for(let i in info['Data']['Result']){
    //   console.log(info['Data']['Result'])
    //   console.log(info['Data'][i]['Result'][i]['title']);
    // }

    const data = info.Data[0].Result;
    // console.log(data);
    const movieDataList = [];

    for(key in data){
      let title = data[key].title;
      let repRlsDate = data[key].repRlsDate;
      let nation = data[key].nation;
      let rating = data[key].rating;
      let runtime = data[key].runtime;
      let genre = data[key].genre;
      let directors = data[key].directors.director[0].directorNm;
      let codes = data[key].Codes.Code[0].CodeNo;
      let plots = data[key].plots.plot[0].plotText;
      let actors = data[key].actors.actor[0].actorNm + ',' + data[key].actors.actor[1].actorNm;

      // + "," + data[key].actors.actor[3].actorNm + data[key].actors.actor[4].actorNm

      console.log('제목:' + data[key].title)
      console.log('개봉일: ' + data[key].repRlsDate)
      console.log('제작국가: ' + data[key].nation)
      console.log('관람등급: ' + data[key].rating)
      console.log('상영시간: ' + data[key].runtime)
      console.log('장르: ' + data[key].genre)
      console.log('감독: ' + data[key].directors.director[0].directorNm)
      console.log('영화코드: ' + data[key].Codes.Code[0].CodeNo)
      console.log('줄거리: ' + data[key].plots.plot[0].plotText)
      console.log('출연배우: '  + data[key].actors.actor[0].actorNm, data[key].actors.actor[1].actorNm);
      console.log("")

        
        // , data[key].actors.actor[1].actorNm, data[key].actors.actor[2].actorNm, data[key].actors.actor[3].actorNm, data[key].actors.actor[4].actorNm)

        movieDataList.push([title, repRlsDate, nation, rating, runtime, genre, directors, codes, plots, actors])
        console.log(movieDataList);
    }
      
      const sql = 'insert into movieapi (title, repRlsDate, nation, rating, runtime, genre, directors, codes, plots, actors) values?';
      const param = [movieDataList];

      db.query(sql, param, function(err, rows, fields){
        if(err){
          console.log(err);
        } else{
          console.log(rows);
        }
      });
      
  })
    
});

  



app.listen(port, ()=>{
  console.log('3050 서버 start');
})












