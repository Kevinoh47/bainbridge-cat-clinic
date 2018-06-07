// // Helper function to add an event listener
// function addEvent (el, event, callback) {
//   if ('addEventListener' in el) {                  // If addEventListener works
//     el.addEventListener(event, callback, false);   // Use it
//   } else {                                         // Otherwise
//     el['e' + event + callback] = callback;         // CreateIE fallback
//     el[event + callback] = function () {
//       el['e' + event + callback](window.event);
//     };
//     el.attachEvent('on' + event, el[event + callback]);
//   }
// }

// // Helper function to remove an event listener
// function removeEvent(el, event, callback) {
//   if ('removeEventListener' in el) {                      // If removeEventListener works
//     el.removeEventListener(event, callback, false);       // Use it
//   } else {                                                // Otherwise
//     el.detachEvent('on' + event, el[event + callback]);   // Create IE fallback
//     el[event + callback] = null;
//     el['e' + event + callback] = null;
//   }
// }

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

