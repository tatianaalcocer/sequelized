(function($) {
  $(function() {
    //Current location in the browser
    var currentLocation = window.location.origin;
    // console.log(currentLocation)
    //Text in todo input field
    //When submit button is clicked...
    $('#todoSubmit').on('click', function(){
      var todoInput = $('#todoInput').val();
      var msg = {};
      msg['body'] = todoInput;

      console.log(todoInput)
      //API route in the server to post a todo item
      var route = '/api/new'
      //URL for AJAX call
      var URL = currentLocation + route;
      console.log(URL)
      $.post(URL, msg, function(data){
        $('#todoInput').val('');
      })
    })

  }); // end of document ready
})(jQuery); // end of jQuery name space
