
//Timer functions
//=======================
function timerStart(){

	//25 mins = 60s x 25 = 1500
	//countdown begins with 1500 seconds
	var secondsLeft = 1500;

	timer = setInterval(decrement, 1000);

	function decrement(){
		console.log(secondsLeft);
		
		//total number of minutes left in countdown
		var minutes = Math.floor(secondsLeft/60);
		//the number of seconds left in each minute
		var seconds = (secondsLeft % 60);

		//To display seconds in HTML, add a '0' in front of single digits
		//e.g. if seconds = 34, no change. if seconds = 9, seconds is changed to 09.
		seconds >= 10 ? seconds : seconds = '0'+seconds;

		
		console.log(minutes);
		console.log(seconds);
		secondsLeft--;
	}

	

}

timerStart();
