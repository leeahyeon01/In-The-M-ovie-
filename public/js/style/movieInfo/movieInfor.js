let root = document.getElementById("root");
root.innerHTML = `<div></div>`;

let mainDiv = root.children[0];
mainDiv.className = "maindiv";
console.dir(mainDiv);

let body = [];
let sectionArray = [];
let movieInfoArray = [];

function makeDiv(arry, tagname) {
  if (typeof tagname === "string") {
    arry.push(`<${tagname}></${tagname}>`);
  }
}

makeDiv(body, "div");
makeDiv(body, "div");
makeDiv(body, "div");

mainDiv.innerHTML = body.join("");

//head
let head = mainDiv.children[0];
console.dir(head);
head.className = "head";
head.innerHTML = `<div>x</div>`;

//section
let section = mainDiv.children[1];
console.dir(section);
section.className = "section";

makeDiv(sectionArray, "div");
makeDiv(sectionArray, "div");

section.innerHTML = sectionArray.join("");

console.dir(section);

const poster = section.children[0];
poster.className = "poster";

//section - movieInformaion
const informa = section.children[1];
informa.className = "informa";
// console.log("하이");

function imortMovieInfor(arry, tagname, content, intormation) {
  if (typeof tagname === "string") {
    arry.push(`<span>${content}</span><${tagname}>${intormation}</${tagname}>`);
  }
}

imortMovieInfor(movieInfoArray, "div", " ", "공조2:인터내셔널");

imortMovieInfor(movieInfoArray, "div", "평점 ", "⭐⭐⭐⭐⭐8.04");
imortMovieInfor(
  movieInfoArray,
  "div",
  "개요 ",
  "액션/범죄| 한국|129분 |2022.09.07 개봉"
);
imortMovieInfor(movieInfoArray, "div", "감독", "이석훈");
imortMovieInfor(movieInfoArray, "div", "등급", "[국내]15세 관람가");
imortMovieInfor(movieInfoArray, "div", "출연", "현빈");
imortMovieInfor(
  movieInfoArray,
  "div",
  " ",
  "경찰 내 최고 엘리트 조직 내 사과 소속영위 조직에서 유일하게 믿고따르는 윤과장과 함께 f1 레이서 출신의 사업가 정재철을 잡기위해 수사망을 조여가던 시연은 무리한 강압수사를 벌였다는 오명을 쓰고 뺑소니 전담반으로 좌천된다 "
);

informa.innerHTML = movieInfoArray.join(" ");

let like = mainDiv.children[2];

like.className = "like";
like.innerHTML = `<button>찜하기💗</button>`;
