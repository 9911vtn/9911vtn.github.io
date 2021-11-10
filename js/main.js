function f1() {
    now = new Date();
        var thday = new Array ("Sunday","Monday", "Tuesday","Wendnesday","Thursday","Friday","Saturday");
        var thmonth = new Array ("January","February","March","April","May","June", "July","August","September",
        "October","November","December");
        // document.write("วัน" + thday[now.getDay()]+ "ที่ "+ now.getDate()+ " " +
        // thmonth[now.getMonth()]+ " " + (1900+now.getYear()+543));
        document.write(thday[now.getDay()] + ", " + now.getDate() + " " + thmonth[now.getMonth()]+ " " + (1900+now.getYear()));
}

var btn = $('#btt');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});