let app = document.body.children[0];
console.dir(app);
let body = [];
let fieldset_child = [];
function makeParDiv(arry, tagname) {
  if (typeof tagname === "string") {
    arry.push(`<${tagname}>`);
  }
  `</${tagname}>`;
}

function makeChDiv(arry, tagname) {
  if (typeof tagname === "string") {
    fieldset_child.push(`<${tagname}></${tagname}>`);
  }
}
makeParDiv(body, "form");
makeParDiv(body, "fieldset");
app.innerHTML = body.join("");
let form = app.children[0];
form.className = "form";

//fieldset
let fieldset = document.getElementsByTagName("fieldset")[0];
fieldset.className = "fieldset";
console.dir(fieldset);
makeChDiv(fieldset_child, "div");
makeChDiv(fieldset_child, "input");
makeChDiv(fieldset_child, "input");

makeChDiv(fieldset_child, "div");
makeChDiv(fieldset_child, "button");

fieldset.innerHTML = fieldset_child.join("");
let head = fieldset.children[0];
head.innerText = "adminLOGIN";
let textdiv = fieldset.children[3];
let button = fieldset.children[4];

button.innerText = "로그인";

textdiv.innerHTML = `<div>아이디찾기/비밀번호 찾기</div> <div>회원가입</div>`;
