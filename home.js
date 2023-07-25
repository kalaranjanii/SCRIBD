// menubar

const navBar = document.querySelector("nav"),
        menuBtns = document.querySelectorAll(".menu-icon"),
        overlay = document.querySelector(".overlay");

      menuBtns.forEach((menuBtn) => {
        menuBtn.addEventListener("click", () => {
          navBar.classList.toggle("open");
        });
      });

      overlay.addEventListener("click", () => {
        navBar.classList.remove("open");
      });

      // signinbtn

  // function show1() {
  //   document.getElementById('signinbtn').classList.add('show');
    
  // }  
    
   
  // login

  const formOpenBtn = document.querySelector("#signinbtn"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

// login
function fun1(){
  var email1=document.getElementById('email1').value;
  var pw2=document.getElementById('pw2').value;
if(email1=='admin'&&pw2=='admin'){
  
  // alert('succ');
  // window.location.assign('index1.html');
  window.open('index1.html','_self');
}
else{
  alert('Enter a valid input field')
}
}
//signup
function fun(){
  var email=document.getElementById('email').value;
  var pw=document.getElementById('pw').value;
  var pw1=document.getElementById('pw1').value;
if(email=='admin'&&pw=='admin' &&pw1==='admin'){
  
  // alert('succ');
  // window.location.assign('home_page1.html');
  window.open('index1.html','_self');
  // window.onload('home_page1.html','_self');
}
else{
  alert('Enter a valid input field')
}
}

