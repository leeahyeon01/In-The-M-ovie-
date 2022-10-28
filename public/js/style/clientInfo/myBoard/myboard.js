import styleMaker from "../styleMaker.js";

let root = document.body.children[0];

const aside = document.createElement("aside");
root.appendChild(aside);
const main = document.createElement("main");
root.appendChild(main);
// ------------------------app > aside --------------------------------


aside.innerHTML = `
  ${styleMaker.elememt("div")}
  ${styleMaker.elememt('div')}
  `;
  // ------------------app > aside > div*2 -------------------------------

  const div1 = document.querySelector("#root>aside>div:nth-child(1)");
  const div2 = document.querySelector("#root>aside>div:nth-child(2)");


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


const boardTable = `
<section class="notice">
      <div class="page-title">
        <div class="container">
          <h3>게시판</h3>
        </div>
      </div>
      <!-- board seach area -->
      <div id="board-search">
        <div class="container">
          <div class="search-window">
            <form action="">
              <div class="search-wrap">
                <label for="search" class="blind">공지사항 내용 검색</label>
                <input
                  id="search"
                  type="search"
                  name=""
                  placeholder="검색어를 입력해주세요."
                  value=""
                />
                <button type="submit" class="btn btn-dark">검색</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- board list area -->
      <div id="board-list">
        <div class="container">
          <table class="board-table">
            <thead>
              <tr>
                <th scope="col" class="th-num">번호</th>
                <th scope="col" class="th-title">제목</th>
                <th scope="col" class="th-writer">작성자</th>
                <th scope="col" class="th-date">등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <th>
                  <a href="#!">[공지사항] 개인정보 처리방침 변경안내처리방침</a>
                  <p>테스트</p>
                </th>
                <td>운영자</td>
                <td>2017.07.13</td>
              </tr>
              <tr>
                <td>3</td>
                <th>
                  <a href="/noticeBoard">지금부터는</a>
                </th>
                <td>ㅁㅁㅁ</td>
                <td>2017.06.15</td>
              </tr>
              <tr>
                <td>2</td>
                <th>
                  <a href="/noticeBoard">죄송합니다</a>
                </th>
                <td>ㅁㅁㅁ</td>
                <td>2017.06.15</td>
              </tr>
              <tr>
                <td>1</td>
                <th>
                  <a href="/noticeBoard">안녕하세요</a>
                </th>
                <td>ㅁㅁㅁ</td>
                <td>2017.06.15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>`;
main.innerHTML = boardTable;



// let tableheade = [];
// let boardhead = ["NO", "글제목", "작성자", "날짜"];
// let boardbody = ["NO1", "출퇴근 없는 삶", "", "이아연", "20221004"];

// for (let i = 0; i < 1; i++) {
//   tableheade.push(`<thead>`);
//   for (let l = 0; l < boardhead.length; l++) {
//     tableheade.push(`<td>${boardhead[l]}</td>`);
//   }

//   tableheade.push(`</thead>`);
// }

// for (let i = 0; i < 5; i++) {
//   tableheade.push(`<tr>`);
//   for (let e = 0; e < boardbody.length; e++) {    
//     if (e === 1) {
//       tableheade.push(`<td class = intoTheContext>${boardbody[e]}</td>`);
//     } else {
//       tableheade.push(`<td>${boardbody[e]}</td>`);
//     }
//   }
//   tableheade.push(`</tr>`);
// }

// const intoTheContext = document.getElementsByClassName('intoTheContext');
// console.dir(intoTheContext);
// console.log(typeof intoTheContext);
// console.log(Array.isArray(intoTheContext));



// tableheade.unshift(`<table>`);
// tableheade.push(`</table>`);
// main.innerHTML = tableheade.join("");



// console.dir(intoTheContext);
// for (let i = 0; i < intoTheContext.length; i++) {
//   const target = intoTheContext[i];
//   //console.log(target);
//   target.addEventListener('click', (event) => { 
//     //console.log('a');
//     location.href = '/textContent';
//   });
// }



// let table = main.children[0];
// console.dir(table);
// table.style.border = "solid 2px black";
// table.style.width = " 1000px";
// table.style.height = "400px";

// let tr = table.children[0].children[0];
// console.dir(tr);
// tr.style.bordr = "solid 2px pink";
// let td = table.children[0].children[0].children[1];
// console.dir(td);
// td.className = "td";
// td.style.border = "solid 2px pink";
// td.style.columnSpan = "2";
