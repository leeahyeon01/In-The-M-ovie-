import styleMaker from '../../style/style.js';


const app = document.getElementById("app");
const main = document.createElement("main");
const header = document.createElement("header");
const footer = document.createElement("footer");

// header.style.width = "100vw";
// header.style.height = "10vh";
// header.style.backgroundColor = "rgba(45, 45, 45, 0.5)";

app.appendChild(header);
app.appendChild(main);
app.appendChild(footer);

const headerChildren = `<div><div></div><div></div><div></div><div></div><div></div></div>`;
header.innerHTML = headerChildren;
for (let i = 0; i < header.children[0].children.length; i++) {
  const target = header.children[0].children[i];
  target.style.cursor = "pointer";
  switch (i) {
    case 0:
      target.textContent = "검색";
      target.addEventListener('click', (event) => {
        location.href = '/searchMovie';
      });
      break;
    
    case 1:
      target.textContent = "로그인";
      target.addEventListener('click', (event) => {
        location.href = '/logIn';
      });
      break;
    
    case 2:
      target.textContent = "로그아웃";      
      break;
    
    case 3:
      target.textContent = "마이페이지";
      target.addEventListener('click', (event) => {
        location.href = '/myInfo';
      });
      break;
    case 4:
      target.textContent = "게시판";
      target.addEventListener('click', (event) => {
        location.href = '/board';
      });
      break;
  }
}

// function elemnet(tagName){
//   if(typeof(tagName)==="string"){
//     return `<${tagName}></${tagName}>`;
//   }
// }

// app.innerHTML = `
//   ${elemnet("div")}
//   ${elemnet("div")}
//   ${elemnet("div")}
//   `;
// ----------------#app > div *3-----------------------------

function tagMaker (parentElement, containerName, itemName, itemCount){
  const container = document.createElement(containerName);
  for(let i = 0; i < itemCount; i++){
    let item = document.createElement(itemName);
    container.appendChild(item);
  }

  parentElement.appendChild(container);
}

tagMaker(main, "div", "div", 5);
tagMaker(main, "div", "div", 5);
tagMaker(main, "div", "div", 5);
// -------------------#app > main > (div > div*5) *3--------------------------
// for (let i = 0; i < main.children.length; i++) {
//   const target = main.children[i];
//   for (let e = 0; e < target.children.length; e++) {
//     target.children[e].addEventListener('click', (event) => { 
//       popup('/movieInfo', '검색한 영화!', 730, 820, 100, 200, 'no');
//     });
//   }
// }

// function popup(url, name, width, height, top, left, location){    
//   const option = `width = ${width}, height = ${height}, top = ${top}, left = ${left}, location = ${location}`;
//   window.open(url, name, option);
//   // 500 500 100 200 no
// }

styleMaker.tagMaker(footer, "div", "");
const footerDiv = footer.children[0];
const footerDivChildren = ["div", "div", "div"];
styleMaker.tagMaker(footerDiv, footerDivChildren, "");
const footerDivChildren1 = footerDiv.children[0];
footerDivChildren1.innerHTML = "사업자번호 : 123-45-678910  대표: 이아연";
const footerDivChildren2 = footerDiv.children[1];
footerDivChildren2.innerHTML = "(12345) 대전광역시 서구 대덕로 182, 오라클빌딩 3층";
const footerDivChildren3 = footerDiv.children[2];
footerDivChildren3.innerHTML = "전화 : 010-159-7598  팩스 : 042-4562-1456  이메일 : support@google.com" 
// footer 내용 추가

footerDiv.style.width = "auto";
footerDiv.style.height = "300px";
footerDiv.style.display = "flex";
footerDiv.style.flexDirection = "column";
footerDiv.style.alignContent = "center";
footerDiv.style.justifyContent = "space-around";

// footerDivChildren1.style.width = "70%";
footerDivChildren1.style.height = "auto";
// footerDivChildren2.style.width = "70%";
footerDivChildren2.style.height = "auto";
// footerDivChildren3.style.width = "70%";
footerDivChildren3.style.height = "auto";


// API
// ======================================================================================================
const backdropDivArr = [];
//console.log(main);
//console.log(main.children);
// console.log(main.children[0]);
// console.log(main.children[0].children[0]);

for (let i = 0; i < main.children.length; i++) {
  const target = main.children[i];
  //console.log(target);
  for (let ii = 0; ii < target.children.length; ii++) {
    //console.log(target.children[ii]);
    backdropDivArr.push(target.children[ii]);
  }
}


const apiKey = "c4fc9ca86ccc89b226126b6beccd9731";
const id = 550;
const movie_id = "tt0137523"; // 파이트 클럽 둘중 아무거나 싸도 다 됨

const para_id = 496243;

const posterSize = 'w500'; //w92 w154, w185, w342, w500, w780, original
const posterSizew500 = 'w500';
const posterSizeOri = 'original';

const lanKo = 'ko'
const lanEn = 'en-US';

const query = 'avengers'; // 원하는 영화 검색

const boxOfficeArr = ['범죄도시 2', '탑건: 매버릭', '한산: 용의 출현', '공조 2', '닥터 스트레인지 2', '헌트', '쥬라기 월드: 도미니언	', '마녀 2', '토르: 러브 앤 썬더', '미니언즈 2', '비상선언', '스파이더맨: 노 웨이 홈', '육사오	', '헤어질 결심', '외계+인 1부'];
const movieCodeArr = [619803, 361743]
/*
https://api.themoviedb.org/3/search/movie?api_key=c4fc9ca86ccc89b226126b6beccd9731&language=ko&page=1&include_adult=true&query='공조 2'
*/

function popup(url, name, width, height, top, left, location){    
  const option = `width = ${width}, height = ${height}, top = ${top}, left = ${left}, location = ${location}`;
  window.open(url, name, option);
  // 500 500 100 200 no
}

const tmdbInfo = (query, targetDiv) => {  
    const url = `https://api.themoviedb.org/3/search/movie?api_key=c4fc9ca86ccc89b226126b6beccd9731&language=ko&page=1&include_adult=true&query=${query}`;
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "json";
    request.send();
    request.addEventListener("load", () => {
      const apiDat = request.response;
      console.log(apiDat);
      console.log(apiDat.results[0]);
      console.log(apiDat.results[0].backdrop_path);

      targetDiv.style.backgroundImage = `url("https://image.tmdb.org/t/p/original/${apiDat.results[0].backdrop_path}")`;

      targetDiv.style.backgroundSize = "cover";
      const urlParam = `/movieParam?title=${apiDat.results[0].title}&rate=${apiDat.results[0].vote_average}&nation=${apiDat.results[0].original_language}&text=${apiDat.results[0].overview}&date=${apiDat.results[0].release_date}&poster=${apiDat.results[0].poster_path}`;
      targetDiv.addEventListener('click', (event) => { 
        popup(urlParam, '검색한 영화!', 730, 820, 100, 200, 'no');
      });     
    });
}

for (let i = 0; i < boxOfficeArr.length; i++) {
  tmdbInfo(boxOfficeArr[i], backdropDivArr[i]);
}






function tmdb(apiKey, id, posterSize, posterSizew500) {
  //기본영화 정보      
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();
  request.addEventListener("load", () => {
    const apiDat = request.response;
    console.log(`TMDB`);
    console.log(apiDat);
    console.log(apiDat.backdrop_path);
    console.log(apiDat.poster_path);

    // const imgPoster = `https://image.tmdb.org/t/p/${posterSize}/${apiDat.poster_path}`;
    // const posterurl = `https://www.themoviedb.org/t/p/${posterSize}/voddFVdjUoAtfoZZp2RUmuZILDI.jpg`;
    // const imgUrl = `https://image.tmdb.org/t/p/${posterSizew500}/${apiDat.backdrop_path}`;


    // root.innerHTML = `<img src="${imgUrl}" /> <img src="${imgPoster}" /> <img src="${posterurl}" /> <div></div> <div></div> <div></div>`;

  });
}

//tmdb(apiKey, id, posterSize, posterSizew500);