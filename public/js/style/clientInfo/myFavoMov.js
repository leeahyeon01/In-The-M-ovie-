import styleMaker from "./styleMaker.js";


const app = document.getElementById('app');
const aside = document.createElement("aside");
app.appendChild(aside);
const main = document.createElement("main");
app.appendChild(main);
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


//==========================
styleMaker.mainTagMaker(main, "div", "div", 6);
styleMaker.mainTagMaker(main, "div", "div", 1);