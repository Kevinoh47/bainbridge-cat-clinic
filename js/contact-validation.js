function checkUserName(e, minLength) {
  var target = e.target;
  var elMsg = document.getElementById('username-feedback');
  if (target.value.length < minLength) {
    elMsg.textContent = 'The name field requires ' + minLength + ' or more characters.';
  } else {
    elMsg.textContent = '';
  }
}
var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', function (e) {
  checkUserName(e, 4);
}, false);
