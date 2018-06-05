var items = [];
var prices = [];
var productMap = new Map();

function Cart(myItems, myPrices, myProdMap) {
  this.items = myItems;
  this.prices = myPrices;
  this.prodMap = myProdMap;
  var subtotal = 0;
  this.getSubtotal = function getSubtotal() {
    var len = prices.length;
    for (var i = 0; i < len; i++) {
      if (i in prices) {
        //  regex courtesy of http://www.josscrowcroft.com/2011/code/format-unformat-money-currency-javascript/
        subtotal += parseFloat(prices[i].replace(/[^0-9-.]/g, ''));
      }
    }
    return subtotal.toFixed(2);
  };
}

function addToLists(e) {
  e.preventDefault();
  var target = e.target;
  var grandparent = target.parentNode.parentNode;
  var itemName = grandparent.getElementsByClassName('prod-name')[0].innerText;
  var itemPrice = grandparent.getElementsByClassName('prod-price')[0].innerText;

  items.push(itemName);
  prices.push(itemPrice);
  productMap.set(itemName, itemPrice);
}

function formatCart(cart) {
  var myCart = cart;
  var mySubTotals = 'Subtotal: $ ' + myCart.getSubtotal();
  var newSubAmountNode = document.createTextNode(mySubTotals);
  var myProdMap = myCart.prodMap;

  var myCartList = document.getElementById('shopping-cart-list');
  // remove current children
  while (myCartList.firstChild) {
    var removeElement = myCartList.firstChild;
    myCartList.removeChild(removeElement);
  }

  //  build/rebuild item list
  var newLi;
  var newText;

  for (var entry of myProdMap.entries()) {
    newLi = document.createElement('li');
    newText = document.createTextNode(entry[0] + ': ' + entry[1]);
    newLi.appendChild(newText);
    myCartList.appendChild(newLi);
  }

  // build subtotal display
  if (!document.getElementById('cart-subtotal')) {
    //  get parent node
    var mySubtotalDisplay = document.getElementById('shopping-cart');
    //  build new div
    var newDiv = document.createElement('div');
    var newAttId = document.createAttribute('id');
    newAttId.value = 'cart-subtotal';
    newDiv.setAttributeNode(newAttId);
    // append sub amount to new div
    newDiv.appendChild(newSubAmountNode);
    //  append new div to parent node
    mySubtotalDisplay.appendChild(newDiv);
  } else {
    var mySubtotalDiv = document.getElementById('cart-subtotal');
    // remove current children
    while (mySubtotalDiv.firstChild) {
      var removeEl = mySubtotalDiv.firstChild;
      mySubtotalDiv.removeChild(removeEl);
    }
    mySubtotalDiv.appendChild(newSubAmountNode);
  }
}

function displayCart(e) {
  addToLists(e);
  var myCart = new Cart(items, prices, productMap);
  formatCart(myCart);
}

//  event listener delegates from the table container.
var el = document.getElementById('product-tables');
el.addEventListener('click', function (e) {
  displayCart(e);
}, false);

