(function($) {
  $(function() {
    var counter = 25;
  var timer = moment.duration(1, "seconds").timer({loop: true},function() {
    counter--;
    $('#time').text(counter);
    if(counter === 0) {
      timer.stop();
    }
  });


  }); // end of document ready
})(jQuery); // end of jQuery name space