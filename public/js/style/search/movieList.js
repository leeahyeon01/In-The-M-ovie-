const app = document.getElementById("app");
const main = document.createElement("main");
app.appendChild(main);


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