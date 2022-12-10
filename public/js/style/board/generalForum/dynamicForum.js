const root = document.getElementById('app');


function createForm(){
  const form = document.createElement('form');
  form.setAttribute("id", "form");
  form.setAttribute("charset", "UTF-8");
  form.setAttribute("method", "post");
  form.setAttribute("onsubmit", "return false");
  // form.setAttribute("action", "./generalForum.html");
  root.appendChild(form);
  // form태그 만듬. 

  const titleDiv = document.createElement('div');
  form.appendChild(titleDiv);
  // form > div

  const titleLabel = document.createElement('label');
  titleLabel.setAttribute("for", "title");
  titleLabel.setAttribute("id", "lbTitle")
  titleLabel.innerHTML = "제목 <br>" 
  titleDiv.appendChild(titleLabel);
  // form >div >label

  const titleInput = document.createElement('input');
  titleInput.setAttribute("type", "title");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("name", "forum_title");
  titleInput.setAttribute("placeholder", "제목을 작성해주세요");
  titleDiv.appendChild(titleInput);
  // form > div > input
// --------- 여기까지 제목, 제목 작성 -----------

  const nameDiv = document.createElement('div');
  form.appendChild(nameDiv);
  // form > 2번째 div

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute("for", "name");
  nameLabel.setAttribute("id", "lbName");
  nameLabel.innerHTML = "작성자 <br>"; 
  nameDiv.appendChild(nameLabel);
  // form > 2번째 div > label

  const nameInput = document.createElement('input');
  nameInput.setAttribute("type", "name");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "ueser_name");
  nameInput.setAttribute("placeholder", "이름을 적어주세요");
  nameDiv.appendChild(nameInput);
  // form > 2번째 div > input
  // -----여기까지 작성자, 이름 작성-----------

  const contentDiv = document.createElement('div');
  form.appendChild(contentDiv);
  // form > 3번째 div 

  const contentLable = document.createElement('label');
  contentLable.setAttribute("for", "contents");
  contentLable.setAttribute("id", "lbContents");
  contentLable.innerHTML = "내용 <br>";
  contentDiv.appendChild(contentLable);
  // form > 3번째 div >label

  const textarea = document.createElement('textarea');
  textarea.setAttribute("type", "submit");
  textarea.setAttribute("id", "msg");
  textarea.setAttribute("name", "user_message");
  contentDiv.appendChild(textarea);
   // form > 3번째 div >textarea
  // -------여기까지 내용, 내용칸--------------

  const buttonDiv = document.createElement('div');
  // buttonDiv.setAttribute("class", "button");
  form.appendChild(buttonDiv);
  // form >  4번째 div

  const submitButton = document.createElement('button');
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "submit");
  submitButton.innerHTML = "등록하기";
  buttonDiv.appendChild(submitButton);
   // form >  4번째 div > button(등록하기)

  const listButton = document.createElement('button');
  listButton.setAttribute("type", "button");
  listButton.setAttribute("id", "listButton");
  listButton.innerHTML = "목록으로";
  buttonDiv.appendChild(listButton);
  // form >  4번째 div > button(목록으로)

  const fileLable = document.createElement("label");
  fileLable.setAttribute("for", "file");
  fileLable.setAttribute("id", "lbFile");
  buttonDiv.appendChild(fileLable);
  // form > 4번째 div > label(파일라벨)

  const fileInput = document.createElement("input");
  fileInput.setAttribute("type", "file");
  fileInput.setAttribute("id", "file");
  fileInput.setAttribute("accept", "image/*");
  buttonDiv.appendChild(fileInput);
// form > 4번째 div > input(파일 인풋)
}
createForm();


const submit = document.getElementById('submit');
submit.addEventListener("click", function(){
  const form = document.getElementById('form');
  const title = document.getElementById('title');
  const name = document.getElementById('name');
  const message = document.getElementById('msg');

  if(title.value.trim()===""){
    alert("제목을 적어주세요");
    return false;
  }else if(name.value.trim()===""){
    alert("이름을 적어주세요");
    return false;
  }else if (message.value.trim()===""){
    alert("내용을 적어주세요");
    return false;
  }

  form.action = "."
  // action 은 form 데이터를 보낼 곳, 어디다 연결해야하지?
  form.method = "post";
  // method 은 폼의 메서드 방식(POST/GET)
  form.submit();
  // submit() 은 서버에 양식 제출하는 form 메서드
})

