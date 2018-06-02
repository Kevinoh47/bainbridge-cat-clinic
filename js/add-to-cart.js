var items = [];
var prices = [];
var productMap = new Map();

function Cart (items, prices, prodMap) {
  this.items = items;
  this.prices = prices;
  this.prodMap = prodMap;
  
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

function addToLists(e) {
  e.preventDefault();
  var target = e.target;
  var itemSKU = target.id;
  var grandparent = target.parentNode.parentNode;
  var itemName = grandparent.getElementsByClassName('prod-name')[0].innerText;
  var itemPrice = grandparent.getElementsByClassName('prod-price')[0].innerText;

  items.push(itemName);
  prices.push(itemPrice);
  productMap.set(itemName, itemPrice);
}

function formatCart(Cart) {
  var myCart = Cart;
  var myItems = myCart.items.slice(); //clone array to avoid using same reference.
  var myPrices = myCart.prices.slice();
  var mySubTotals = myCart.getSubtotal();

  // console.log("items - global:", items);
  // console.log("prices - global:", prices);
  // console.log("myItems:", myItems);
  // console.log("myPrices:", myPrices);
  // console.log("mySubtotals:", mySubTotals);

  var myCartList = document.getElementById('shopping-cart-list');

  //build item list
  var i=0, itemsLen = myItems.length, j=0, pricesLen = myPrices.length;
  var newLi, currentItem,currentPrice,newText;

  for (i; i < itemsLen; i++) {
    if (i in myItems) {
      // unfortunately, in some cases, this is looping twice where it should only loop once...
      for (j; j < pricesLen; j++) {
        if (j in myPrices) {
          newLi = document.createElement('li');
          currentItem = myItems.pop();
          currentPrice = myPrices.pop();
          newText = document.createTextNode(currentItem + ': ' + currentPrice)
          newLi.appendChild(newText);
          myCartList.appendChild(newLi);
        }
      }
    }
  }


  //console.log("productMap", productMap);

  
  // build subtotal display
  // var mySubtotalDisplay = document.getElementById('shopping-cart');
  // var newDiv = document.createElement('div');
  // var newSubAmountNode = document.createTextNode('$ ' + mySubTotals);
  // newDiv.appendChild(newSubAmountNode);

  // if (!document.getElementById("cart-subtotal")) {
  //   // get parent node
  //   var mySubtotalDisplay = document.getElementById('shopping-cart');
  //   //build new div
  //   var newDiv = document.createElement('div');
  //   var newAttId = document.createAttribute("id");       
  //   newAttId.value = "cart-subtotal";                           
  //   newDiv.setAttributeNode(newAttId); 
  //   //create sub amount
  //   var newSubAmountNode = document.createTextNode('$ ' + mySubTotals);
  //   // append sub amount to new div
  //   newDiv.appendChild(newSubAmountNode);
  //   //append new div to parent node
  //   mySubtotalDisplay.appendChild(newDiv);
  // }
  // else {
  //   console.log('yay...')
  //   var mySubtotalDiv = document.getElementById("cart-subtotal");
  //   //newDiv.innerHTML=newSubAmountNode; //TODO not sure this works.
  // }
}

function displayCart(e) {
  addToLists(e);

  var myCart = new Cart(items, prices);
  // var mySubtotal = myCart.getSubtotal();
  // var elCart = document.getElementById('shopping-cart');
  // elCart.innerHTML = myCart.items;

  formatCart(myCart);
}

var el = document.getElementById('product-tables');
el.addEventListener('click', function(e) {
  displayCart(e);
}, false);

