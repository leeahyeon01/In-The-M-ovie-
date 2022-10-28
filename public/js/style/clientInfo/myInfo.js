import styleMaker from "./myInfoStyleMaker.js";
import eventTag from "../../action/eventMyInfoMain.js";


const app = document.getElementById('app');
const aside = document.createElement("aside");
app.appendChild(aside);
// ------------------------app > aside --------------------------------


aside.innerHTML = `
  ${styleMaker.elememt("div")}
  ${styleMaker.elememt('div')}
  `;
  // ------------------app > aside > div*2 -------------------------------

  const div1 = document.querySelector("#app>aside>div:nth-child(1)");
  const div2 = document.querySelector("#app>aside>div:nth-child(2)");


styleMaker.tagMaker(div1, "div", "p", "", 0);
// -----------------------app > aside > div1 > div ----------------------------
styleMaker.tagMaker(div1, "div", "p", "닉네임", 1 );
// --------------------------app > aside > div1 > div > p ----------------------

styleMaker.tagMaker(div2, "div", "p", "내 정보 수정", 1);
styleMaker.tagMaker(div2, "div", "p", "내가 찜한 영화", 1);
styleMaker.tagMaker(div2, "div", "p", "내가 쓴 글", 1);
console.log(div2);
for (let i = 0; i < div2.children.length; i++) {
  const target = div2.children[i];
  target.addEventListener('click', (event) => {
    switch (i) {
      case 0:
        location.href = '/myInfo';
        break;
      case 1:
        location.href = '/myFavoMov';
        break;
      
      case 2:
        location.href = '/myBoard';
        break;
    }
  });
}
// -------------------------app > aside > div2 > (div > p) *3--------------------



//===================================================================================

const main = document.createElement("main");
app.appendChild(main);
// ------------------------- app > main --------------------------------

// function element(tagName){
//   if(typeof(tagName)==="string"){
//     return `<${tagName}></${tagName}>`;
//   }
// }

main.innerHTML = `
  ${styleMaker.mainElememt("div")}
  ${styleMaker.mainElememt("div")}
  `;

// -------------------------------- app > main > div*2 -----------------------

const mainFirstChild = document.querySelector('#app>main>div:nth-child(1)');

mainFirstChild.innerHTML = `
  ${styleMaker.mainElememt("div")}
  ${styleMaker.mainElememt("div")}
`;
// --------------------- app > main >  div:nth-child(1) > div*2 ----------------

const profileImgTextDiv = mainFirstChild.children[0];
const profileImgP = document.createElement('p');
profileImgTextDiv.appendChild(profileImgP);
profileImgP.innerHTML = "프로필 이미지";
console.log(profileImgP);
// -------------- app > main > div:nth-child(1) > div:nth-child(1) > p ----------

const profileImgDiv = mainFirstChild.children[1];
const fileSelectDiv = document.createElement('div');
profileImgDiv.appendChild(fileSelectDiv);

fileSelectDiv.innerHTML = `
  ${styleMaker.mainElememt("div")}
  ${styleMaker.mainElememt("button")}
`;

const imageShowDiv = fileSelectDiv.children[0];
imageShowDiv.setAttribute("id", "image-show");

const deleButton = fileSelectDiv.children[1];
deleButton.setAttribute("id", "delete");
deleButton.setAttribute("type", "button");

// -------------------app > main > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div id="image-show", button id = "delete"------------------

const imgUploadDiv = document.createElement('div');
profileImgDiv.appendChild(imgUploadDiv);
imgUploadDiv.setAttribute("id", "img-upload");

// --------------- app > main > div:nth-child(1) > div:nth-child(2) > div id = "img-upload" --------------------------------

const form = document.createElement('form');
imgUploadDiv.appendChild(form);
form.setAttribute("method", "post");
form.setAttribute("enctype", "multipart/form-data");

const formChildDiv = document.createElement("div");
form.appendChild(formChildDiv);

const lbFile = document.createElement("label");
formChildDiv.appendChild(lbFile);
lbFile.setAttribute("for", "file");
lbFile.setAttribute("id", "lbFile");

const fileInput = document.createElement('input');
formChildDiv.appendChild(fileInput);
fileInput.setAttribute("type", "file");
fileInput.setAttribute("id", "file");
fileInput.setAttribute("name", "file");
fileInput.setAttribute("accept", "image/*");

// ------------------------- app > main > div:nth-child(1) > div:nth-child(2) > div id = "img-upload" > form > div > label, input -------------------

const saveButton = document.createElement("button");
imgUploadDiv.appendChild(saveButton);
saveButton.setAttribute("id", "saveButton");
saveButton.setAttribute("title", "첨부파일 삭제");
saveButton.innerHTML = "저장";

// ------------------------- app > main > div:nth-child(1) > div:nth-child(2) > div id = "img-upload" > form, button----------------------

// 여기까지 프로필 이미지 부분 ↑↑

// 이제부터 프로필 수정 부분 ↓↓

const mainSecondChild = main.children[1];

mainSecondChild.innerHTML = `
  ${styleMaker.mainElememt("span")}
  ${styleMaker.mainElememt("div")}
`;

const span = mainSecondChild.children[0];
span.innerHTML = "프로필 수정";

// -------------------- app > main > div:nth-child(2) > span ------------------

const profileChangeDiv = mainSecondChild.children[1];

// function tagMaker (parentElement, itemName, itemCount){
//   for(let i = 0; i<itemCount; i++){
//     let item = document.createElement(itemName);
//     parentElement.appendChild(item);
//   }
// }

styleMaker.mainTagMaker(profileChangeDiv, "div", 6);

// ------------------ app > main > div:nth-child(2) > div > div*6 -------------

const idDiv = profileChangeDiv.children[0];

const IDLabel = document.createElement("label");
idDiv.appendChild(IDLabel);
IDLabel.setAttribute("for", "lbID");
IDLabel.setAttribute("id", "lbID");
IDLabel.innerHTML = "아이디";

const idSpan = document.createElement("span");
idDiv.appendChild(idSpan);
idSpan.innerHTML = "현재 아이디(변경불가)";

// ---------- app > main > div:nth-child(2) > div > div(1) > label, span--------

const passwordDiv = profileChangeDiv.children[1];

const passwordLable = document.createElement("label");
passwordDiv.appendChild(passwordLable);
passwordLable.setAttribute("for", "lbPassword");
passwordLable.setAttribute("id", "lbPassword");
passwordLable.innerHTML = "비밀번호 변경";

const passwordInput = document.createElement("input");
passwordDiv.appendChild(passwordInput);
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("id", "password");
passwordInput.setAttribute("name", "infoPassword");
passwordInput.setAttribute("minlength", 5);
passwordInput.setAttribute("maxlength", 16);

// ---------- app > main > div:nth-child(2) > div > div(2) > label, input-------

const psConfirmDiv = profileChangeDiv.children[2];

const confirmLabel = document.createElement("label");
psConfirmDiv.appendChild(confirmLabel);
confirmLabel.setAttribute("for", "lbConfirm");
confirmLabel.setAttribute("id", "lbConfirm");
confirmLabel.innerHTML = "비밀번호 확인";

const confirmInput = document.createElement("input");
psConfirmDiv.appendChild(confirmInput);
confirmInput.setAttribute("type", "password");
confirmInput.setAttribute("id", "psConfirm");
confirmInput.setAttribute("name", "infoPsConfirm");

//------------app > main > div:nth-child(2) > div > div(3) > label, input------- 

const nickNameDiv = profileChangeDiv.children[3];

const nickNameLabel = document.createElement("label");
nickNameDiv.appendChild(nickNameLabel);
nickNameLabel.setAttribute("for", "lbNickName");
nickNameLabel.setAttribute("id", "lbNickName");
nickNameLabel.innerHTML = "닉네임";

const nickNameInput = document.createElement("input");
nickNameDiv.appendChild(nickNameInput);
nickNameInput.setAttribute("type", "nickname");
nickNameInput.setAttribute("id", "nickname");
nickNameInput.setAttribute("name", "user_nickname");
nickNameInput.setAttribute("placeholder", "현재 닉네임(변경가능");

//---------- app > main > div:nth-child(2) > div > div(4) > label, input --------

const modifyDiv = profileChangeDiv.children[4];

const modifyButton = document.createElement("button");
modifyDiv.appendChild(modifyButton);
modifyButton.setAttribute("type", "submit");
modifyButton.setAttribute("id", "modify");
modifyButton.innerHTML = "수정하기";

const withdrawButton = document.createElement("button");
modifyDiv.appendChild(withdrawButton);
withdrawButton.setAttribute("type", "button");
withdrawButton.setAttribute("id", "withdraw");
withdrawButton.innerHTML = "탈퇴하기";

//----------- app > main > div:nth-child(2) > div > div(5) > button *2 ---------

const modalDiv = profileChangeDiv.children[5];

const modalSpan = document.createElement("span");
modalDiv.appendChild(modalSpan);
modalSpan.innerHTML = "정말 탈퇴 하시겠습니까?";

const modalButton1 = document.createElement("button");
modalDiv.appendChild(modalButton1);
modalButton1.setAttribute("type", "submit");
modalButton1.setAttribute("id", "mButton");
modalButton1.innerHTML = "확인";

const modalButton2 = document.createElement("button");
modalDiv.appendChild(modalButton2);
modalButton2.setAttribute("type", "submit");
modalButton2.setAttribute("id", "mButton2");
modalButton2.innerHTML = "취소";

//-------- app > main > div:nth-child(2) > div > div(6) > span, button*2 -------
// 모달 화면




// 여기부터는 자바스크립트 기능 구현 ↓↓


const save = document.getElementById('saveButton');
save.onclick = showImage;

function showImage(){
  let newImg = document.getElementById('image-show').lastElementChild;
  newImg.style.visibility = "visible";
}

const input = document.getElementById('file');

input.addEventListener('change',()=>{
  const file = input.files[0]; //선택된 파일 가져옴
  let newImage = document.createElement("img");
  newImage.setAttribute("class", "img");
  newImage.src = URL.createObjectURL(file);
  newImage.style.width = "150px";
  newImage.style.height = "150px";
  newImage.style.visibility = "hidden";
  newImage.style.objectFit = "contain";

  let container = document.getElementById('image-show');
  container.style.visibility = "hidden";
  container.appendChild(newImage);
  

});
// -----------사진 파일 가져와서 저장하는 함수 --------------------


const delButton = document.getElementById('delete');
delButton.onclick = deleteimage;

function deleteimage(){
  const parent = document.getElementById('image-show');
  const child = document.querySelector('#image-show>img');
  parent.removeChild(child);
  // console.log(parent.children)
  // console.log(child);

  // *parent.innerHTML = ""; 
  // *removeChild가 더 정석적이지만 복잡해서 나중에는 innerHTML =""; 을 더 많이 쓰게 될 것. 둘 다 상관없지만 편하게 쓰려면 innerHTML=""; 쓰는게 좋음. 
  
  parent.style.visibility = "visible";
}
// image-show 부모노드에서 자식 노드인 img 지워버림 
// ----사진 삭제할 수 있고 삭제하면 다시 기본 사진 뜨게 만든 함수-------- 





// //* function loadFile(input){
//   const file = input.files[0]; //선택된 파일 가져옴
//   let newImage = document.createElement("img");
//   newImage.setAttribute("class", "img");
//   newImage.src = URL.createObjectURL(file);
//   newImage.style.width = "100px";
//   newImage.style.height = "100px";
//   newImage.style.visibility = "hidden";
//   newImage.style.objectFit = "contain";

//   const container = document.getElementById('image-show');
//   container.appendChild(newImage);
// };
// *html에 js가 defer로 연결되어 있어서 아직 선언이 안됨, 해결하려면 async써야함. react 쓸거면 이걸로 연습해 보는게 좋음. 



confirmInput.onclick = minLength;

function minLength(){

  const psValue = passwordInput.value;
  let regPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;
  

  if(psValue.length<5 || psValue.length>16){
    alert("비밀번호는 5자리 이상, 16자리 이하로 입력해주세요");
    return false;
    
  } else if(psValue.search(/\s/) != -1){
    alert("비밀번호는 공백 없이 입력해주세요");
    return false;
  }

  if(!regPass.test(psValue)){
    alert("비밀번호는 영문, 숫자, 특수문자(!@^*%#&_~만 허용)를 사용하여 5~16자리 입력해주세요. 영문은 대소문자를 구분합니다.");
    return false;
  } else{
    alert("비밀번호가 정상적으로 입력되었습니다.")
    return true;
  }

}
//---------------------비밀번호 유효성 검사--------------------------



modifyButton.onclick = password;

function password(){
  // const pass1 = tag.password.value;
  const pass1 = passwordInput.value;
  // const pass2 = tag.psConfirm.value;
  const pass2 = confirmInput.value;
  if(pass1 !== pass2){
    alert("비밀번호가 일치하지 않습니다");
    return false;
  } 
  
}

//--------------비밀번호 일치하는지 확인하는 함수---------------------- 


function init(){
  withdrawButton.addEventListener('click', function(){
    modalDiv.style.visibility="visible";
  });
  modalButton2.addEventListener('click', function(){
    modalDiv.style.visibility="hidden";
  });
}
init();
//--------------------------모달 함수-----------------------------

