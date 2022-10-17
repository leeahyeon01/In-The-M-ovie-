let root = document.body.children[0];

let tableheade = [];
let boardhead = ["NO", "글제목", "작성자", "날짜"];
let boardbody = ["NO1", "출퇴근 없는 삶", "", "이아연", "20221004"];

for (let i = 0; i < 1; i++) {
  tableheade.push(`<thead>`);
  for (let l = 0; l < boardhead.length; l++) {
    tableheade.push(`<td>${boardhead[l]}</td>`);
  }

  tableheade.push(`</thead>`);
}

for (let i = 0; i < 5; i++) {
  tableheade.push(`<tr>`);
  for (let i = 0; i < boardhead.length; i++) {
    tableheade.push(`<td>${boardbody[i]}</td>`);
  }
  tableheade.push(`</tr>`);
}

tableheade.unshift(`<table>`);
tableheade.push(`</table>`);
root.innerHTML = tableheade.join("");

let table = root.children[0];
console.dir(table);
table.style.border = "solid 2px black";
table.style.width = " 1000px";
table.style.height = "400px";

let tr = table.children[0].children[0];
console.dir(tr);
tr.style.bordr = "solid 2px pink";
let td = table.children[0].children[0].children[1];
console.dir(td);
td.className = "td";
td.style.border = "solid 2px pink";
td.style.columnSpan = "2";
