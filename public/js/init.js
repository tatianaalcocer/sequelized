(function($) {
  $(function() {
  
  var timer = $("#stopwatch").TimeCircles({
    time: {
      Days: {show: false},
      Hours: {show: false}
    },
    // start: false 
  });    
  timer.restart();
  timer.stop();
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
      timer.start();
      started = true; 
    } else {
      $('#start-button').text('Start');
      timer.stop();
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
    timer.restart();
    timer.stop();
    if(started) {
      $('#start-button').text('Start');      
      started = false;
    }
    // counter = 1500000;
    // $('#time').text(moment(counter).format("mm:ss.SSS"));
  });

  $('#done-button').on('click', function() {
    // Post done data to db.
    var timeRemaining = timer.getTime();
    var currentTaskID = $('.stopwatch-container').attr('id');
    console.log(currentTaskID);
    timer.stop();
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space