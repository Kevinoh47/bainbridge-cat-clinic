var items = [];
var prices = [];

function Cart (items, prices) {
  this.items = items;
  this.prices = prices;
  var subtotal = 0;

  this.getSubtotal = function() {

    var i, len = prices.length;
    for (i=0; i<len; ++i) {
      if (i in prices) {
        //regex courtesy of http://www.josscrowcroft.com/2011/code/format-unformat-money-currency-javascript/
        subtotal += parseFloat(prices[i].replace(/[^0-9-.]/g, ''));
      }
    }
    return subtotal;
  }
}

var elCart = document.getElementById('shopping-cart');

function addToCart(e) {
  e.preventDefault();
  var target = e.target;
  var itemSKU = target.id;
  var grandparent = target.parentNode.parentNode;
  var itemName = grandparent.getElementsByClassName('prod-name')[0].innerText;
  var itemPrice = grandparent.getElementsByClassName('prod-price')[0].innerText;

  items.push(itemName);
  prices.push(itemPrice);
}

function displayCart(e) {
  addToCart(e);

  var myCart = new Cart(items, prices);
  var mySubtotal = myCart.getSubtotal();
  var elCart = document.getElementById('shopping-cart');

  //TODO: replace with a call to a function that formats a list
  elCart.innerHTML = myCart.items;
}

var el = document.getElementById('product-tables');
el.addEventListener('click', function(e) {
  displayCart(e);
}, false);

