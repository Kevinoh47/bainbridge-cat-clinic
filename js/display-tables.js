// the getSelectValues function is courtesy of https://stackoverflow.com/questions/14972708/how-to-get-all-selected-option-text-form-multi-select-using-javascript
function GetSelectValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
    // console.log(result);
  }
  return result;
}


function displayHiddenElements(e) {
  e.preventDefault();
  var elMultiSelect=document.getElementById('product-types');
  var selected = GetSelectValues(elMultiSelect);
  
  for (i=0; i < selected.length; i++) {
    var currParDiv = document.getElementById(selected[i]).parentElement;
    var currClass = currParDiv.getAttribute('class');

    if (currParDiv.hasAttribute('class') && currClass == 'hidden') {
      currParDiv.setAttribute('class', 'visible');
    }
  }
}
var elDisplayProds = document.getElementById('show-products-submit');
elDisplayProds.addEventListener("click", displayHiddenElements, false);

