function checkpw() {
  var id = $("#id").val();
  var email = $("#email").val();
  var pw = $("#password").val();
  var cpw = $("password_check").val();
  //val()메서드는 입력받은 value값을 가져오거나 원하는 값으로 set이 가능합니다.

  if (id.lengeh < 4 || id.lengeh >= 20) alert("id가 양식에 접합하지 않습니다");
  else if (pw.lengeh < 4 || cpw.lengeh < 4)
    alert("비밀번호는 4자 이상입력해주세요");
  else {
    $.ajax({
      url: "signinpage2.html",
      type: "POST",
      data: {
        pw: pw,
        id: id,
        email: email,
      },
      success: function (data) {
        if (data === "중복id") {
          alert("이미 존재하는 id입니다");
        } else if (data === "성공") {
          alert("정상적으로 회원가입이 되었습니다.");
        }
      },
    });
  }
}
