let root = document.body.children[0];
console.dir(root);
let tableheade = [];
let boardhead = ["NO", "글제목", "작성자", "날짜"];
let boardbody = ["NO1", "출퇴근 없는 삶", "이아연", "20221004"];

for (let i = 0; i < 1; i++) {
  tableheade.push(`<thead>`);
  for (let l = 0; l < boardhead.length; l++) {
    tableheade.push(`<td>${boardhead[l]}</td>`);
  }
  tableheade.push(`</thead>`);
}

for (let i = 0; i < 5; i++) {
  tableheade.push(`<tr>`);
  for (let e = 0; e < boardbody.length; e++) {    
    if (e === 1) {
      tableheade.push(`<td class = intoTheContext>${boardbody[e]}</td>`);
    } else {
      tableheade.push(`<td>${boardbody[e]}</td>`);
    }
  }
  tableheade.push(`</tr>`);
}

const intoTheContext = document.getElementsByClassName('intoTheContext');
console.dir(intoTheContext);
console.log(typeof intoTheContext);
console.log(Array.isArray(intoTheContext));

//console.dir(intoTheContext(0));

// intoTheContext.addEventListener('click', (event) => { 
//   //console.log('a');
//   //location.href = '/textContent';
// });
// intoTheContext[0].addEventListener('click', (event) => { 
//   location.href = '/textContent';
// });
console.dir(intoTheContext);
for (let i = 0; i < intoTheContext.length; i++) {
  const target = intoTheContext[i];
  //console.log(target);
  target.addEventListener('click', (event) => { 
    //console.log('a');
    location.href = '/textContent';
  });
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
