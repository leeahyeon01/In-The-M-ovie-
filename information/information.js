// const root = document.getElementById('root');
// const password = document.getElementById('password');
// const psConfirm = document.getElementById('psConfirm');
// const nickname = document.getElementById('nickname');
// const submit = document.getElementById('submit');
// const button = document.getElementById('button');

const tag={
  root:document.getElementById('root'),
  fileLabel:document.getElementById('lbFile'),
  fileInput: document.getElementById('file'),
  saveButton:document.getElementById('saveButton'),
  IDLabe:document.getElementById('lbID'),
  password:document.getElementById('password'),
  psConfirm:document.getElementById('psConfirm'),
  nickname:document.getElementById('nickname'),
  modify:document.getElementById('modify'),
  withdraw:document.getElementById('withdraw'),

  modal:document.getElementById('modal'),
  mButton1:document.getElementById('mButton1'),
  mButton2:document.getElementById('mButton2')
}
// ------------태그들 객체로 묶음--------------------------

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


// function deleteimage(){
//   const file = input.files;
//   console.log(file)
//   const arrayFile = Array.from(file);
//   console.log(arrayFile);
//   const emptyAarry = arrayFile.splice(0);
//   console.log(arrayFile);
  
//   let obj = {...arrayFile}
//   console.log(obj);
//   let container = document.getElementById('image-show');
//   container.appendChild(obj);
// }
// 아니 뭐 객체를 배열로 바꾸고 배열초기화하고 다시 객체로 바꾸고 이딴거 필요 없었네 



//* function loadFile(input){
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



const psConfirm = tag.psConfirm;
psConfirm.onclick = minLength;

function minLength(){
  const psValue = tag.password.value;
  let regPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;
  // /^[a-zA-Z0-9].*[!,@,^,*,%,#,&,_,~];
  // /^(?=.*[a-zA-Z0-9])(?=.*[!,@,^,*,%,#,&,_,~])(?=.[0-9])/;

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


const modify = tag.modify;
modify.onclick = password;

function password(){
  const pass1 = tag.password.value;
  const pass2 = tag.psConfirm.value;
  if(pass1 !== pass2){
    alert("비밀번호가 일치하지 않습니다");
    return false;
  } 
  
}

//--------------비밀번호 일치하는지 확인하는 함수---------------------- 


function init(){
  tag.withdraw.addEventListener('click', function(){
    tag.modal.style.visibility="visible";
  });
  tag.mButton2.addEventListener('click', function(){
    tag.modal.style.visibility="hidden";
  });
}
init();
// --------------------------모달 함수-----------------------------

