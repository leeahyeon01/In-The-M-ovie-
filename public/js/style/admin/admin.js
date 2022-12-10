function admin() {
  const root = document.getElementById('root');
console.dir(root);
const aside = root.children[0].children[0];
const main = root.children[0].children[1];
const clickDiv = document.getElementsByClassName('clickDiv');
const menuDiv = document.getElementById('menuDiv');    

menuDiv.addEventListener('click', (event) => {        
    let datasetValue = event.target.dataset.divdat;
    if (datasetValue !== undefined) {          
      for (let i = 0; i < clickDiv.length; i++) {
        if (clickDiv[i].dataset.divdat !== datasetValue) {
          clickDiv[i].style.color = "white";
          clickDiv[i].style.fontWeight = "";
        }
      }            
      event.target.style.color = "coral";
      event.target.style.fontWeight = "bold";
    }
  });

window.addEventListener('hashchange', ()=>{
  const urlHash = window.location.href;
  let getValue = urlHash.substring(urlHash.indexOf("#")+1, urlHash.length);
});    

const addUser = document.getElementById('addUser');
const upDatUser = document.getElementById('upDatUser');
const upMedia = document.getElementById('upMedia');
const mngBoard = document.getElementById('mngBoard');
const statVsitor = document.getElementById('statVsitor');

const targetAddUser = document.getElementById('targetAddUser');
const targetUpDatUser = document.getElementById('targetUpDatUser');
const targetUpMedia = document.getElementById('targetUpMedia');
const targetMngBoard = document.getElementById('targetMngBoard');
const targetStatVisior = document.getElementById('targetStatVisior');

const menuClient = document.getElementById('menuClient');
const menuContent = document.getElementById('menuContent');
const menuStat = document.getElementById('menuStat');

menuClient.children[1].style.height = "0";
menuClient.children[1].style.overflow = "hidden";

menuContent.children[1].style.height = "0";
menuContent.children[1].style.overflow = "hidden";

menuStat.children[1].style.height = "0";
menuStat.children[1].style.overflow = "hidden";

let clToggle = true, conToggle = true, statToggle = true;
let countCl = 0, countCon = 0, countStat = 0;

const framerate = 120 / 1000;

function dropDownEvent(targetDiv, toggle, count) {
  targetDiv.children[0].addEventListener('click', () => {
    if (toggle) {
      let dropDown = setInterval(() => {
        targetDiv.children[1].style.height = `${count++}px`;
        if (count > 60) {
          clearInterval(dropDown);
          toggle = !toggle;
        }
      }, framerate);
    } else {
      let dropUp = setInterval(() => {
        targetDiv.children[1].style.height = `${count--}px`;
        toggle = !toggle;
        if (count < 0) {
          clearInterval(dropUp);
          toggle = !toggle;
        }
      }, framerate);
    }
  });
}

dropDownEvent(menuClient, clToggle, countCl);
dropDownEvent(menuContent, conToggle, countCon);
dropDownEvent(menuStat, statToggle, countStat);
}

admin();