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
form.setAttribute("method", "POST");
form.setAttribute("id", "form");
form.setAttribute("enctype", "x-www-form-urlencoded");
form.setAttribute("action", "/signIn");

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
head.innerText = "LOGIN";
let textdiv = fieldset.children[3];
let button = fieldset.children[4];

button.innerText = "로그인";
button.type = "submit";

textdiv.innerHTML = `<div>아이디찾기/비밀번호 찾기</div> <div id = 'signUp'>회원가입</div>`;

const signUp = document.getElementById("signUp");

const nickName = fieldset.children[1];
const pwd = fieldset.children[2];

nickName.name = "nickName";
nickName.id = "nickName";
pwd.name = "pwd";
pwd.id = "pwd";

console.log(nickName);
console.log(pwd);

signUp.addEventListener("click", event => {
  location.href = "/signInPage";
});
