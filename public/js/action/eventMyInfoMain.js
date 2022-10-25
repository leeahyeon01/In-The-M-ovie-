const eventTag  = {
  showImage: ()=>{
    let newImg = document.getElementById('image-show').lastElementChild;
    newImg.style.visibility = "visible";
  },

  deleteimage: ()=>{
    const parent = document.getElementById('image-show');
    const child = document.querySelector('#image-show>img');
    parent.removeChild(child);
    // *parent.innerHTML = ""; 
    // *removeChild가 더 정석적이지만 복잡해서 나중에는 innerHTML =""; 을 더 많이 쓰게 될 것. 둘 다 상관없지만 편하게 쓰려면 innerHTML=""; 쓰는게 좋음. 
    parent.style.visibility = "visible";
  },
  // ----사진 삭제할 수 있고 삭제하면 다시 기본 사진 뜨게 만든 함수-------- 

  minLength: ()=>{
    const psValue = passwordInput.value;
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
  },
  //---------------------비밀번호 유효성 검사--------------------------
  password: ()=>{
    // const pass1 = tag.password.value;
    const pass1 = passwordInput.value;
    // const pass2 = tag.psConfirm.value;
    const pass2 = confirmInput.value;
    if(pass1 !== pass2){
      alert("비밀번호가 일치하지 않습니다");
      return false;
    } 
  },
  //--------------비밀번호 일치하는지 확인하는 함수---------------------- 

  init: ()=>{
    withdrawButton.addEventListener('click', function(){
      modalDiv.style.visibility="visible";
    });
    modalButton2.addEventListener('click', function(){
      modalDiv.style.visibility="hidden";
    });
  }
  //--------------------------모달 함수-----------------------------
}


export default eventTag;