function checkUserName() {
  var elMsg=document.getElementById('username-feedback');
  if (this.value.length < 5) {
    elMsg.textContent = 'The name field requires 5 or more characters.';
  } else {
    elMsg.textContent = '';
  }
}
var elUsername = document.getElementById('username');
elUsername.addEventListener("blur", checkUserName, false);