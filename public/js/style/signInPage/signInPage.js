const app = document.getElementById("app");

function formMaker(){
  const form = document.createElement("form");
  form.setAttribute("action", "post");
  form.setAttribute("id", "form");
  form.setAttribute("onsubmit", "return false");
  app.appendChild(form);
  // app > form

  const nicNameDiv = document.createElement("div");
  form.appendChild(nicNameDiv);
  // app >  form > div:nth-child(1)

  const nicNameInput = document.createElement("input");
  nicNameInput.setAttribute("type", "name");
  nicNameInput.setAttribute("id", "name");
  nicNameInput.setAttribute("name", "nicName");
  nicNameInput.setAttribute("placeholder", "닉네임");
  nicNameDiv.appendChild(nicNameInput);
  // app >  form > div:nth-child(1) > input

  const confirmButtonDiv = document.createElement("div");
  form.appendChild(confirmButtonDiv);
  // app > form > div:nth-child(2)

  const confirmButton = document.createElement("button");
  confirmButtonDiv.appendChild(confirmButton);
  confirmButton.textContent = "중복확인";
  // app > form > div:nth-child(2) > button

  const emailDiv = document.createElement("div");
  form.appendChild(emailDiv);
  // app > form >  div:nth-child(3)

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "name");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("placeholder", "이메일");
  emailDiv.appendChild(emailInput);
  // app > form > div:nth-child(3) > input

  const passwordDiv = document.createElement("div");
  form.appendChild(passwordDiv);
  // app > form > div:nth-child(4)

  const passowrdInput = document.createElement("input");
  passowrdInput.setAttribute("type", "password");
  passowrdInput.setAttribute("id", "password");
  passowrdInput.setAttribute("name", "password");
  passowrdInput.setAttribute("placeholder", "비밀번호");
  passwordDiv.appendChild(passowrdInput);
  // app > form > div:nth-child(4) > input

  const psConfirmDiv = document.createElement("div");
  form.appendChild(psConfirmDiv);
  // app > form > div:nth-child(5)

  const psConfirmInput = document.createElement("input");
  psConfirmInput.setAttribute("type", "password");
  psConfirmInput.setAttribute("id", "psConfirm");
  psConfirmInput.setAttribute("name", "psConfirm");
  psConfirmInput.setAttribute("placeholder", "비밀번호 확인");
  psConfirmDiv.appendChild(psConfirmInput);
  // app > form > div:nth-child(5) > input

  const signInButtonDiv = document.createElement("div");
  form.appendChild(signInButtonDiv);
  // app > form > div:nth-child(6)

  const signInButton = document.createElement("button");
  signInButtonDiv.appendChild(signInButton);
  signInButton.textContent = "가입하기";
  // app > form > div:nth-child(6) >  button

  const span = document.createElement("span");
  form.appendChild(span);
  span.textContent = "OR";
  // app > form > span

  const loginDiv = document.createElement("div");
  form.appendChild(loginDiv);
  // app > form > div:nth-child(8)

  const loginInput = document.createElement("input");
  loginInput.setAttribute("type", "name");
  loginInput.setAttribute("id", "googleLogin");
  loginInput.setAttribute("name", "googleLogin");
  loginInput.setAttribute("placeholder", "Google Login");
  loginDiv.appendChild(loginInput);
  // app > form > div:nth-child(8) > input
}

formMaker();