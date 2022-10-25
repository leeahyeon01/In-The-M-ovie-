
const styleMaker = {
  tagMaker : (parentElement, containerName, itemName, text, itemCount) =>{
    const container = document.createElement(containerName);
    for(let i = 0; i<itemCount; i++){
      let item = document.createElement(itemName);
      item.textContent = text;
      container.appendChild(item);
    }

    parentElement.appendChild(container);
  },

  elememt : (tagName) =>{
    if(typeof(tagName)==="string"){
      return `<${tagName}></${tagName}>`;
    }
  },

  mainTagMaker : (parentElement, itemName, itemCount)=>{
    for(let i = 0; i<itemCount; i++){
      let item = document.createElement(itemName);
      parentElement.appendChild(item);
    }
  },

  mainElememt : (tagName) =>{
    if(typeof(tagName)==="string"){
      return `<${tagName}></${tagName}>`;
    }
  }
}

export default styleMaker;
