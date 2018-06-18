//  event listeners.
var elJane = document.getElementById('jane');
var elJaneContent = document.getElementById('jane-div');
var elKevin = document.getElementById('kevin');
var elKevinContent = document.getElementById('kevin-div');

elJane.addEventListener('click', function (e) {
  e.preventDefault();
  // add hidden to kevin
  elKevinContent.classList.add('hidden');
  //  remove hidden from jane
  elJaneContent.classList.remove('hidden');
}, false);

elKevin.addEventListener('click', function (e) {
  e.preventDefault();
  // add hidden to jane
  elJaneContent.classList.add('hidden');
  //  remove hidden from jane
  elKevinContent.classList.remove('hidden');
}, false);
