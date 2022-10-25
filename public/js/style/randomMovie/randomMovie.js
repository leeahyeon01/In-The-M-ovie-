const app = document.getElementById("app");

function elememt(tagName){
  if(typeof(tagName)==="string"){
    return `<${tagName}></${tagName}>`;
  }
}

app.innerHTML = `
  ${elememt('div')}
  ${elememt('span')}
  ${elememt('button')}
`;
// app > div(drawer), span, button
const drawer = app.children[0];
const span = app.children[1];
const button = app.children[2];

span.innerHTML = "공조2";
button.innerHTML = "다른영화 추천 받기";


function tagMaker (parentElement, containerName, itemName, itemCount){
  const container = document.createElement(containerName);
  for(let i = 0; i < itemCount; i++){
    let item = document.createElement(itemName);
    container.appendChild(item);
  }

  parentElement.appendChild(container);
}

tagMaker(drawer, "div", "div", 2);
// app > div(drawer) > div(card) > div(front) > div(back)

const card = drawer.children[0];
const front = card.children[0];
const back = card.children[1];

const movieInfoDiv = document.createElement("div");
back.appendChild(movieInfoDiv);


function textTagMaker (parentElement, containerName, itemName, text, itemCount){
  const container = document.createElement(containerName);
  for(let i = 0; i<itemCount; i++){
    let item = document.createElement(itemName);
    item.textContent =text;
    container.appendChild(item);
  }

  parentElement.appendChild(container);
}



textTagMaker(movieInfoDiv, "div", "span", "개봉: 2022.09.07", 1);
textTagMaker(movieInfoDiv, "div", "span", "장르: 액션, 코미디", 1);
textTagMaker(movieInfoDiv, "div", "span", "러닝타임: 129분", 1);
textTagMaker(movieInfoDiv, "div", "span", "출연: 현빈, 유해진, 윤아, 다니엘 헤니, 진선규", 1);

let isClick = true;

drawer.addEventListener('click', ()=>{
  if(isClick===true){
    isClick = false;
    console.log(isClick);

    card.style.transformStyle = "preserve-3d";
    card.style.transform = "rotateY(180deg)";
    card.style.transition = "1s";
  } else{
    isClick = true;
    console.log(isClick);

    card.style.transformStyle = "preserve-3d";
    card.style.transform = "rotateY(0deg)";
    card.style.transition = "1s";
    front.style.backfaceVisibility = "visible";
  }
})

