const styleMaker = {
  tagMaker : (container, tagName, content) => {
  
    const tagArr = [];
    if (Array.isArray(tagName) === false) {
      tagArr.push(`<${tagName}>${content}</${tagName}>`);
      container.innerHTML = tagArr.join("");
    } else {
      for (let i = 0; i < tagName.length; i++) {
        tagArr.push(`<${tagName[i]}>${content}</${tagName[i]}>`);
      }
      container.innerHTML = tagArr.join("");
    }
  },

  styling : (tag, css) => {
    for (let i = 0; i < tag.length; i++) {
      const stOb = css[i];
      for (let cssKey in stOb) {
        tag[i].style[cssKey] = stOb[cssKey];
      }
    }
  },

  singleCssMulipleStyling : (tag, css) => {
    for (let i = 0; i < tag.length; i++) {
      const stOb = css;
      for (let cssKey in stOb) {
        tag[i].style[cssKey] = stOb[cssKey];
      }
    }
  },

  ranBtnMaker: (tag, genreName) => {
    const tagArr = [];
    for (let i = 0; i < genreName.length; i++) {
      tagArr.push(`<div id="genre-${i + 1}" dataset-randomgenre=${i+1} > <div> ${genreName[i]} </div> </div>`);
    }
    tag.innerHTML = tagArr.join("");
  },
}

export default styleMaker;