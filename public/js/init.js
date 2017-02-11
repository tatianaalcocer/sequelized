(function($) {
  $(function() {
    var counter = 25;
    $('#time').text(counter);
  var timer = moment.duration(1, "seconds").timer({
    loop: true,
    start: false
  },function() {
    counter--;
    $('#time').text(counter);
    if(counter === 0) {
      timer.stop();
    }
  });
  $('#start-button').on('click', function() {
    if($('#start-button').text() === 'Start') {
      $('#start-button').text('Pause');
    } else {
      $('#start-button').text('Start');
    }
    if(timer.isStopped() || !timer.started) {
      timer.start();
    } else {    
      timer.stop();
    }
  });
  $('#restart-button').on('click', function() {
    counter = 25;
    $('#time').text(counter);
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space