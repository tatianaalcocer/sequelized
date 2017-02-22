(function($) {
  $(function() {
  
  $("#stopwatch").TimeCircles({
    time: {
      Days: {show: false},
      Hours: {show: false}
    },
    // start: false 
  });    
  $('#stopwatch').TimeCircles().restart();
  $('#stopwatch').TimeCircles().stop();
    // var counter = 1500000;
    // $('#time').text(moment(counter).format("mm:ss.SSS"));
  // var timer = moment.duration(1, "milliseconds").timer({
  //   loop: true,
  //   start: false
  // },function() {
  //   counter--;
  //   $('#time').text(moment(counter).format("mm:ss.SSS"));
  //   if(counter === 0) {
  //     timer.stop();
  //   }
  // });
  var started = false;
  $('#start-button').on('click', function() {
    if(!started) {
      $('#start-button').text('Pause');
      $('#stopwatch').TimeCircles().start();
      started = true; 
    } else {
      $('#start-button').text('Start');
      $('#stopwatch').TimeCircles().stop();
      started = false;
    }
    // if($('#start-button').text() === 'Start') {
    //   $('#start-button').text('Pause');
    // } else {
    //   $('#start-button').text('Start');
    // }
    // if(timer.isStopped() || !timer.started) {
    //   timer.start();
    // } else {    
    //   timer.stop();
    // }
  });
  $('#restart-button').on('click', function() {
    $('#stopwatch').TimeCircles().restart();
    $('#stopwatch').TimeCircles().stop();
    if(started) {
      $('#start-button').text('Start');      
      started = false;
    }
    // counter = 1500000;
    // $('#time').text(moment(counter).format("mm:ss.SSS"));
  });

  $('#done-button').on('click', function() {
    // Post done data to db.
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space