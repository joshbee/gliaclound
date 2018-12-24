var time = 0;
var hh = 0;
var mm = 0;
var ss = 0;
var timerInterval;
var startNum = 0;
var pauseNum = 0;
var stopNum = 0;


$(document).ready(function() {
	timerInit();
	$('.start_btn').on('click',startTimer);
	$('.pause_btn').on('click',pauseTimer);
	$('.stop_btn').on('click',stopTimer);
});

function timerInit(){
  $(".hh").html('00');
  $(".mm").html('00');
  $(".ss").html('00');
}

function startTimer(){
	if(startNum == 0){
		startNum = 1;
		pauseNum = 0;
		stopNum = 0;
	}
	if(stopNum == 1){
		timerInit();
	}

	timerInterval = setInterval(showTime , 1000);
}

function pauseTimer(){
	if(startNum == 1){
		startNum = 0;
		pauseNum = 1;
		stopNum = 0;
		clearInterval(timerInterval);
	}
}

function stopTimer(){
	if(startNum == 1 || pauseNum ==1){
		startNum = 0;
		pauseNum = 0;
		stopNum = 1;
		clearInterval(timerInterval);
		time = 0;
	}
}


function showTime(){
	time++;

	var _s = time%60;
	var _m = Math.floor(time / 60);
	var _h = Math.floor(_m /60);

	$(".ss").html(format_number(_s));
	$(".mm").html(format_number(_m));
	$(".hh").html(format_number(_h));
}


function format_number(number) {
	return number< 10 ? '0' + number : number;
}