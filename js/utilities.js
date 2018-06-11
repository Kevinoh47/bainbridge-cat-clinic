function updateCopyRight(copyright) {
  var myCopyright = copyright;
  var myText = myCopyright.innerText;

  if (myText.length > 0) {
    myCopyright.innerText = myText.slice(0, 1) + ' ' + new Date().getFullYear() + ' ' + myText.slice(2, myText.length);
  }
  return myCopyright;
}
var myCopyright = document.getElementById('copyright');
updateCopyRight(myCopyright);

