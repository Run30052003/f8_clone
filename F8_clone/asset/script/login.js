
const formLogin = document.querySelector(".login")
const btnCloseFormLogin = document.getElementById("cancel").addEventListener("click", function() {
  formLogin.style.display = "none"
})

const userName = document.querySelector(".login--username")
const passWord = document.querySelector(".login--password")
const submitEventLogin = document.getElementById("submit_btn").addEventListener("click", function() {
  const username = userName.value
  const passw = passWord.value

  const userNameAdmin = "thuydungcute"
  const passwAdmin = "1234"

  if (username === userNameAdmin && passw === passwAdmin)
  {
    alert('đăng nhập thành công');
    formLogin.style.display = "none";
  }
  else if(username === "" || passw === ""){
    alert('Bạn chưa nhập tài khoản hoặc mật khẩu ')
  }
  else{
    alert('mật khẩu hoặc tài khoản sai ');
  }
})
