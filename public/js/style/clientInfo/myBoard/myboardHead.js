let root = document.body.children[0];
console.dir(root);

let headlist = ["자유게시판", "공지", "Q&A"];
let headDiv = [];

for (let i = 0; i < headlist.length; i++) {
  headDiv.push(`<div>${headlist[i]}</div>`);
}
headDiv.unshift("<div>");
headDiv.push("</div>");
root.innerHTML = headDiv.join("");

let mainDiv = root.children[0];
mainDiv.style.display = "flex";
mainDiv.style.alignItems = "center";
mainDiv.style.justifyContent = "space-around";

for (let i = 0; i < 3; i++) {
  let tab = mainDiv.children[i];

  console.dir(tab);

  tab.addEventListener("mouseover", function () {
    tab.style.color = "red";
    tab.style.fontWeight = "bolder";
  });

  tab.addEventListener("mouseout", function () {
    tab.style.color = "black";
    tab.style.fontWeight = "lighter";
  });
}
