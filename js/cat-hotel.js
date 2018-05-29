(function(){
  //cat hotel object
  var catHotel ={
    name: 'Winslow Kitty Inn',
    kennelRate: '35',
    buyingClubDiscount: '9',
    offerPrice: function() {
      var offerRate = this.kennelRate - this.buyingClubDiscount;
      return offerRate;
    }
  };

  //update page with offer details
  var catHotelName, kennelRate, specialRate;

  catHotelName = document.getElementById('catHotelName');
  kennelRate = document.getElementById('kennelRate');
  specialRate = document.getElementById('specialRate');

  catHotelName.textContent = catHotel.name;
  kennelRate.textContent = '$' + catHotel.kennelRate;
  specialRate.textContent = '$' + catHotel.offerPrice();

  //calculate offer expiry
  var expiryMsg, today, elOfferEnds;

  function offerExpires(today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    weekFromToday = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000));

    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    monthNames = ['January','February','March','April','May','June','Juy','August','September','October','November','December'];

    //build the expiry date string:
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    expiryMsg = 'Offer expires next ';
    expiryMsg += day + '!<br />(<i>' + date + ' ' + month + ' ' + year + '</i>)';
    return expiryMsg;
  }

  today = new Date();
  elOfferEnds = document.getElementById('offerEnds');
  elOfferEnds.innerHTML = offerExpires(today);
}());