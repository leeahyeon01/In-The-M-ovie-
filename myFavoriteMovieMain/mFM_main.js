const app = document.getElementById("app");
const main = document.createElement("main");
app.appendChild(main);

function tagMaker(parentElement, containerName, itemName, itemCount){
  const container = document.createElement(containerName);
  for(let i = 0; i<itemCount; i++){
    let item = document.createElement(itemName);
    container.appendChild(item);
  }
  parentElement.appendChild(container);
}

tagMaker(main, "div", "div", 6);
tagMaker(main, "div", "div", 1);