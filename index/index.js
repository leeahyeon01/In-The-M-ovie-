const arrTag = [];
const tagMaker = (container, tagName, content) => {
  //this.tagName = tagName;
  //this.content = content;
  let tagArr = [];
  if (Array.isArray(tagName) === false) {
    tagArr.push(`<${tagName}>${content}</${tagName}>`);
    container.innerHTML = tagArr.join("");
  } else {
    for (let i = 0; i < tagName.length; i++) {
      tagArr.push(`<${tagName[i]}>${content}</${tagName[i]}>`);
    }
    container.innerHTML = tagArr.join("");
  }
};

const styling = (tag, css) => {
  for (let i = 0; i < tag.length; i++) {
    const stOb = css[i];
    for (let cssKey in stOb) {
      tag[i].style[cssKey] = stOb[cssKey];
    }
  }
};

// const  styling = (css) => {
//   //console.log(css);
//   for(let objKey in css) {
//     //console.log(objKey);
//     //console.log(css[objKey]);
//     let cssArr = css[objKey];
//     //console.log(Array.isArray(cssArr));
//     //console.log(cssArr);
//     for(let i = 0; i<cssArr.length; i++) {
//       let cssVal = cssArr[i];
//       //console.log(cssVal);
//       if(i === 0) {
//         continue;
//       } else {
//         //console.log(cssVal);
//         for(cssKey in cssVal) {
//           //console.log(cssKey);
//           //console.log(cssArr[0]);
//           cssArr[0].style.cssKey = cssVal[cssKey];
//         }
//       }
//     }
//   }
// }
const root = document.getElementById("root");
console.dir(root);
//root.innerHTML = "<div id='indexDiv'></div>";
//const indexDiv = root.children[0];

tagMaker(root, "div", "");

const indexDiv = root.children[0];
const indexDivChilren = ["img", "header", "main", "footer"];

tagMaker(indexDiv, indexDivChilren, "");
//indexDiv.style.width = '99vw';

const bg_img = indexDiv.children[0];
const header = indexDiv.children[1];
const main = indexDiv.children[2];
const footer = indexDiv.children[3];

bg_img.src = "./source/img/bg_dpimg.png";
// bg_img.style.width = '100%';
// bg_img.style.position = 'absolute';
// bg_img.style.zIndex = '-1';

// header.style.width = '100%';
// header.style.height = '10vh';
// header.style.backgroundColor = 'rgba(45, 45, 45, 0.5)';
// header.style.display = "flex";
// header.style.flexDirection = "row-reverse";
// header.style.flexWrap = "nowrap";
// header.style.alignContent = "center";
// header.style.justifyContent = "flex-start";
// header.style.alignItems = "center";
// //header.style.linearGradient = '(90deg, #303030 0%, rgba(48, 48, 48, 0.5) 70.83%, rgba(48, 48, 48, 0) 100%)';
// header.style.color = 'rgba(214, 214, 214, 1)';

tagMaker(header, "div", "");
const menuDiv = header.children[0];
const menuDivChildren = ["div", "div", "div"];
tagMaker(menuDiv, menuDivChildren, "");
//menuDiv.innerHTML = "<div>검색</div> <div>로그인</div> <div>게시판</div>";
// menuDiv.style.width = '50%';
// menuDiv.style.display = 'flex';
// menuDiv.style.flexDirection = 'row';
// menuDiv.style.flexWrap = 'nowrap';
// menuDiv.style.justifyContent = 'space-evenly';
// menuDiv.style.alignItems = 'center';
// menuDiv.style.alignContent = 'center';
const searchDiv = menuDiv.children[0];
searchDiv.textContent = "검색";
const signDiv = menuDiv.children[1];
signDiv.textContent = "로그인";
const boardDiv = menuDiv.children[2];
boardDiv.textContent = "게시판";
//menuDiv.innerText = "검색 로그인 게시판";

//console.log(main);
const mainChildren = ["div", "section"];
tagMaker(main, mainChildren);
//main.innerHTML= "<div></div><section></section>";
const randomDiv = main.children[0];
const section = main.children[1];
// main.style.width = '100%';
// main.style.display = 'flex';

// randomDiv.style.width = '30%';
// randomDiv.style.color = 'rgba(214, 214, 214, 1)';
// randomDiv.style.display = 'flex';
// randomDiv.style.flexDirection = 'column';
// randomDiv.style.flexWrap = 'wrap';
// randomDiv.style.alignContent = 'center';
// randomDiv.style.justifyContent = 'space-evenly';
// randomDiv.style.alignItems = 'center';

const ranBtnArr = [];
ranBtnArr.push(`<div id="genre-1"></div>`);
ranBtnArr.push(`<div id="genre-2"></div>`);
ranBtnArr.push(`<div id="genre-3"></div>`);
ranBtnArr.push(`<div id="genre-4"></div>`);
ranBtnArr.push(`<div id="genre-5"></div>`);
ranBtnArr.push(`<div id="genre-6"></div>`);
ranBtnArr.push(`<div id="genre-7"></div>`);
ranBtnArr.push(`<div id="genre-8"></div>`);
ranBtnArr.push(`<div id="genre-9"></div>`);
ranBtnArr.push(`<div id="genre-10"></div>`);

randomDiv.innerHTML = ranBtnArr.join("");

for (let i = 0; i < randomDiv.children.length; i++) {
  randomDiv.children[i].innerHTML = "<div>장르</div>";
  randomDiv.children[i].style.width = "8vw";
  randomDiv.children[i].style.height = "2vw";
  randomDiv.children[i].style.display = "flex";
  randomDiv.children[i].style.flexDirection = "row";
  randomDiv.children[i].style.flexWrap = "nowrap";
  randomDiv.children[i].style.alignContent = "center";
  randomDiv.children[i].style.justifyContent = "center";
  randomDiv.children[i].style.alignItems = "center";
  randomDiv.children[i].style.border = "1px solid rgba(214, 214, 214, 1)";
  randomDiv.children[i].style.borderRadius = "27px";
}

// section.style.width = '70%';
// section.style.display = 'flex';
// section.style.flexDirection = 'row';
// section.style.flexWrap = 'nowrap';
// section.style.alignContent = 'center';
// section.style.justifyContent = 'center';
// section.style.alignItems = 'center';
const sectionChidren = ["div", "div"];
tagMaker(section, sectionChidren);
//section.innerHTML = "<div></div> <div></div>";

const explDiv = section.children[0];
tagMaker(explDiv, "div", "설명구간");
// explDiv.style.width = "49%"
// explDiv.style.height = '71%';
// explDiv.style.position = 'absolute';
// explDiv.style.backgroundColor = 'black';
// explDiv.style.opacity = '0.4';
// explDiv.style.display = 'none';
// explDiv.style.left = '34%';
// explDiv.style.color = 'white';
// explDiv.style.fontSize = '5rem';

const vodDiv = section.children[1];
tagMaker(vodDiv, "video");
vodDiv.style.width = "88%";
//vodDiv.innerHTML = '<video autoplay controls loop muted></video>';
const mainVod = vodDiv.children[0];
mainVod.src = "./source/vod/tekken8.mp4";
mainVod.autoplay = true;
mainVod.controls = true;
mainVod.loop = true;
mainVod.muted = true;
console.dir(mainVod);
//mainVod.autoplay = false;
mainVod.style.width = "100%";

mainVod.addEventListener("mouseover", event => {
  mainVod.pause();
  explDiv.style.display = "flex";
});
mainVod.addEventListener("mouseout", event => {
  mainVod.play();
  explDiv.style.display = "none";
});

// footer.style.width = '100%';
// footer.style.height = '10vh';
// footer.style.backgroundColor = 'rgba(45, 45, 45, 0.5)';
// footer.style.color = 'rgba(214, 214, 214, 1)';
footer.textContent = "여기는 푸터";

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

const indexCss = [
  {
    width: "99vw",
  },
  {
    width: "100%",
    position: "absolute",
    zIndex: "-1",
  },
  {
    width: "100%",
    height: "10vh",
    backgroundColor: "rgba(45, 45, 45, 0.5)",
    display: "flex",
    flexDirection: "row-reverse",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "rgba(214, 214, 214, 1)",
  },
  {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
  },
  {
    width: "100%",
    display: "flex",
  },
  {
    width: "30%",
    color: "rgba(214, 214, 214, 1)",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    alignItems: "center",
  },
  {
    width: "49%",
    height: "71%",
    position: "absolute",
    backgroundColor: "black",
    opacity: "0.4",
    display: "none",
    left: "34%",
    color: "white",
    fontSize: "5rem",
  },
  {
    width: "88%",
  },
  {
    width: "100%",
    height: "10vh",
    backgroundColor: "rgba(45, 45, 45, 0.5)",
    color: "rgba(214, 214, 214, 1)",
  },
];

styling(arrTag, indexCss);

//section.style.linearGradinet

//console.dir(root);
//console.dir(indexDiv);

//indexDiv.style.backgroundColor = 'red';
//indexDiv.style.backgroundImage = 'url("./source/img/bg_dpimg.png")';
//indexDiv.style.display = 'flex';
// root.innerHTML="<img/>"
//root.style.width = "99vw";
//root.style.backgroundImage = "url('./source/img/bg_dpimg.png')";
// bg_img.style.width = "99vw";
//console.log(bg_img);
