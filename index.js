const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const password = document.getElementById('password');
const passwordRetype = document.getElementById('password-retype');



passwordRetype.addEventListener("input", ()=> {
  if (password.value === passwordRetype.value){
      console.log('ok');
      passwordRetype.setCustomValidity("");

  }else{
    passwordRetype.setCustomValidity("Passwords not same");
    console.log('not ok');
  }
})

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting an e-mail address!");
    } else {
      email.setCustomValidity("");
    }
});