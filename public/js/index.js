import styleMaker from "./style/style.js";
import indexCss from "./style/indexCss.js";
import vodExpl from "./action/vodEvent.js";

const arrTag = [];
const root = document.getElementById("root");

styleMaker.tagMaker(root, "div", "");

const indexDiv = root.children[0];
const indexDivChilren = ["img", "header", "main", "footer"];

styleMaker.tagMaker(indexDiv, indexDivChilren, "");

const bg_img = indexDiv.children[0];
const header = indexDiv.children[1];
const main = indexDiv.children[2];
const footer = indexDiv.children[3];

bg_img.src = "./source/img/bg_dpimg.png";

styleMaker.tagMaker(header, "div", "");
const menuDiv = header.children[0];
const menuDivChildren = ["div", "div", "div", "div", "div"];
styleMaker.tagMaker(menuDiv, menuDivChildren, "");

const searchDiv = menuDiv.children[0];
searchDiv.textContent = "검색";
searchDiv.style.cursor = "pointer";
searchDiv.addEventListener("click", event => {
  location.href = "/searchMovie";
});
const signDiv = menuDiv.children[1];
signDiv.style.cursor = "pointer";
signDiv.textContent = "로그인";

signDiv.addEventListener("click", event => {
  location.href = "/logIn";
});

const signOutDiv = menuDiv.children[2];
signOutDiv.style.cursor = "pointer";
signOutDiv.textContent = "로그아웃";

const myInfoDiv = menuDiv.children[3];
myInfoDiv.style.cursor = "pointer";
myInfoDiv.textContent = "마이페이지";

myInfoDiv.addEventListener("click", event => {
  location.href = "/myInfo";
});

const boardDiv = menuDiv.children[4];
boardDiv.textContent = "게시판";
boardDiv.style.cursor = "pointer";
boardDiv.addEventListener("click", event => {
  location.href = "/board";
});

const mainChildren = ["div", "section"];
styleMaker.tagMaker(main, mainChildren);

const randomDiv = main.children[0];
const section = main.children[1];

const genreArr = [
  "코믹",
  "공포",
  "액션",
  "어드벤처",
  "로맨스",
  "드라마",
  "SF",
  "범죄/느와르",
];

styleMaker.ranBtnMaker(randomDiv, genreArr);
styleMaker.singleCssMulipleStyling(randomDiv.children, indexCss.randomDivCss);

for (let i = 0; i < randomDiv.children.length; i++) {
  const target = randomDiv.children[i];
  console.log(target);
  target.addEventListener("click", event => {
    popup("/randomMovie", "랜덤 영화 추천!", 730, 820, 100, 200, "no");
    //location.href = '/randomMovie';
  });
}

function popup(url, name, width, height, top, left, location) {
  const option = `width = ${width}, height = ${height}, top = ${top}, left = ${left}, location = ${location}`;
  window.open(url, name, option);
  // 500 500 100 200 no
}

const sectionChidren = ["div", "div"];
styleMaker.tagMaker(section, sectionChidren);

const explDiv = section.children[0];
explDiv.id = "explDiv";
styleMaker.tagMaker(explDiv, "div", "설명구간");

const vodDiv = section.children[1];
styleMaker.tagMaker(vodDiv, "video");
vodDiv.style.width = "88%";

const mainVod = vodDiv.children[0];
mainVod.src = "./source/vod/Gongjo2.mp4";
mainVod.autoplay = true;
mainVod.controls = true;
mainVod.loop = true;
mainVod.muted = true;
mainVod.style.width = "100%";

vodExpl(mainVod, explDiv, "mouseover", "flex", "mouseout", "none");

arrTag.push(indexDiv);
arrTag.push(bg_img);
arrTag.push(header);
arrTag.push(menuDiv);
arrTag.push(main);
arrTag.push(randomDiv);
arrTag.push(section);
arrTag.push(explDiv);
arrTag.push(vodDiv);
arrTag.push(footer);

styleMaker.styling(arrTag, indexCss.indexCss);

//footer.style.display = "flex";
//footer.style.height = "30vh";

styleMaker.tagMaker(footer, "div", "");
const footerDiv = footer.children[0];
const footerDivChildren = ["div", "div", "div"];
styleMaker.tagMaker(footerDiv, footerDivChildren, "");
const footerDivChildren1 = footerDiv.children[0];
footerDivChildren1.innerHTML = "사업자번호 : 123-45-678910  대표: 이아연";
const footerDivChildren2 = footerDiv.children[1];
footerDivChildren2.innerHTML =
  "(12345) 대전광역시 서구 대덕로 182, 오라클빌딩 3층";
const footerDivChildren3 = footerDiv.children[2];
footerDivChildren3.innerHTML =
  "전화 : 010-159-7598  팩스 : 042-4562-1456  이메일 : support@google.com";
// footer 내용 추가

footerDiv.style.width = "auto";
footerDiv.style.height = "100px";
footerDiv.style.display = "flex";
footerDiv.style.flexDirection = "column";
footerDiv.style.alignContent = "center";
footerDiv.style.justifyContent = "center";

// footerDivChildren1.style.width = "70%";
footerDivChildren1.style.height = "auto";
// footerDivChildren2.style.width = "70%";
footerDivChildren2.style.height = "auto";
// footerDivChildren3.style.width = "70%";
footerDivChildren3.style.height = "auto";
