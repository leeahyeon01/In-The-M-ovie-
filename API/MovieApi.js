// export default function movie(targetDiv) {
//   let totalData = [];
//   const api_KEY = "835E6U193MJ4LQ7PW30W";
//   const title = "공조";
//   const api_URL = ` https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${api_KEY}&detail=Y&query=${title}`;

//   const request = new XMLHttpRequest();
//   request.open("GET", api_URL);
//   request.responseType = "json";
//   request.send();
//   request.addEventListener("load", () => {
//     const data = request.response;
//     console.dir(data);
//     const poster = data.Data[0].Result[0].posters;

//     console.log(poster);
//     const Afterposter = poster.split("|");
//     console.log(Afterposter[0]);
//     targetDiv.innerHTML = `<img src="${Afterposter[0]}" alt="poster image">`;

//     const posterImg = targetDiv.children[0];
//     console.dir(posterImg);
//     posterImg.style.width = "300px";
//     posterImg.style.height = " 400px";
//   });
// }

// movie();
function genre(releaseDts, genre) {
  let array = [];
  const api_KEY = "835E6U193MJ4LQ7PW30W";

  const api_URL = ` https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${api_KEY}&detail=Y&query=${genre}&releaseDts${releaseDts}&listCount=50`;

  const request = new XMLHttpRequest();
  request.open("GET", api_URL);
  request.responseType = "json";
  request.send();
  request.addEventListener("load", () => {
    const data = request.response;
    console.dir(data);

    const title = data.Data[0].Result[0].title;
    const rating = data.Data[0].Result[0].rating;
    const nation = data.Data[0].Result[0].nation;
    const prodYear = data.Data[0].Result[0].prodYear;
    const director = data.Data[0].Result[0].directors.director[0].directorNm;

    const poster = data.Data[0].Result[0].posters;
    const Afterposter = poster.split("|");

    for (let i = 0; i < 12; i++) {
      const actors = data.Data[0].Result[0].actors.actor[i].actorNm;

      console.log(actors);
      // array.push(actors, title, rating, nation, prodYear, director);
    }

    //array.push = [title, rating, nation, prodYear, director];

    //객체에 넣음
    const movieINfor = {
      title: data.Data[0].Result[0].title,
      rating: data.Data[0].Result[0].rating,
      nation: data.Data[0].Result[0].nation,
      prodYear: data.Data[0].Result[0].prodYear,
      director: data.Data[0].Result[0].directors.director[0].directorNm,
      Afterposter: poster.split("|"),
    };
    console.log(movieINfor.title, movieINfor.Afterposter[0]);
  });
}

genre("20170217", "로맨스");

function movie(startDate, genre) {
  const api_KEY = "7204O8KH4D5547Q3JBB7";
  const api_URL = ` https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${api_KEY}&detail=Y&genre=${genre}&releaseDts=${startDate}&listCount=50`;
  const request = new XMLHttpRequest();
  request.open("GET", api_URL);
  request.responseType = "json";
  request.send();
  request.addEventListener("load", () => {
    const data = request.response.Data[0].Result;
    console.dir(data);
    for (let i = 0; i < 10; i++) {
      class movieData {
        constructor(
          title,
          repRlsDate,
          nation,
          rating,
          runtime,
          posters,
          genre,
          directors,
          codes,
          plots,
          actors
        ) {
          //directors, codes, plots, actors
          this.title = title;
          this.repRlsDate = repRlsDate;
          this.nation = nation;
          this.rating = rating;
          this.runtime = runtime;
          this.posters = posters;
          this.genre = genre;
          this.directors = directors;
          this.codes = codes;
          this.plots = plots;
          this.actors = actors;
        }
        // get movieD(){
        //   return `movieD(${this.directors})`
        // }
      }
      let moviedata = new movieData(
        data[i].title,
        data[i].repRlsDate,
        data[i].nation,
        data[i].rating,
        data[i].runtime,
        data[i].posters,
        data[i].genre,
        data[i].directors.director[0].directorNm,
        data[i].Codes.Code[0].CodeNo,
        data[i].plots.plot[0].plotText,
        data[i].actors.actor[0].actorNm
      );
      const movieApiQuery = `INSERT INTO 'in_the_m'.'movieapi' ('title', 'resRlsDate', 'nation', rating', 'runtime', 'genre', 'directors', 'codes', 'plots', 'actors') VALUES (${data[i].title}, ${data[i].repRlsDate}, ${data[i].nation}, ${data[i].rating}, ${data[i].runtime}, ${data[i].posters}, ${data[i].genre}, ${data[i].directors.director[0].directorNm}, ${data[i].Codes.Code[0].CodeNo}, ${data[i].plots.plot[0].plotText}, ${data[i].actors.actor[0].actorNm});`;
      console.log(moviedata);
    }
  });
}
movie("202208015", "SF");
