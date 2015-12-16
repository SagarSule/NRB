/**
 * Notification that the UI is about to transition to a new screen.
 * Perform custom prescreen-transition logic here.
 * @param {String} currentScreenId 
 * @param {String} targetScreenId 
 * @returns {boolean} true to continue transtion; false to halt transition
 */

url = "http://192.168.1.20:8080/";
url1 = "http://192.168.1.21:8080/";
lang = 0;
vol = 0.8;
pause = 0;
var myVar;

phoneui.prePageTransition = function(currentScreenId, targetScreenId) {
  // add custom pre-transition code here
  // return false to terminate transition
  return true;
}

/**
 * Notification that the UI has transitioned to a new screen.
 * 
 * @param {String} newScreenId 
 */
phoneui.postPageTransition = function(newScreenId) {
  
}

/**
 * Notification that the page's HTML/CSS/JS is about to be loaded.
 * Perform custom logic here, f.e. you can cancel request to the server.
 * @param {String} targetScreenId 
 * @returns {boolean} true to continue loading; false to halt loading
 */
phoneui.prePageLoad = function(targetScreenId) {
  // add custom pre-load code here
  // return false to terminate page loading, this cancels transition to page as well
  return true;
}

/**
 * Notification that device orientation has changed. 
 * 
 * @param {String} newOrientation 
 */
phoneui.postOrientationChange = function(newOrientation) {
  
}

//rgb(0,78,149)'}); //Dark Blue
//rgb(0,167,184)'}); //Light Blue


allOff = function()
{
	$('#m1-NRB-a_FHA').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-a_WPOL').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-a_AIRLOCK').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-a_XTABLE').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-a_CHOPPER').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-a_HFLOOR').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-a_ACF').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-a_HCASK').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-a_FPB').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-a_POOLTR1').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-a_TILT').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-a_HDOLLY').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-a_FUELPOOL').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-a_FILTER').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
		
	$('#m1-NRB-o_FULL').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-o_TRUCK').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-o_FPB').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-o_FPIN').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-o_INDEX').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-o_CHOP').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-o_HULL').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	
	$('#m1-NRB-n_Full').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	
	$('#m1-NRB-s_Home').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-s_LED').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-s_Reset').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-s_TV').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-s_Off').css({'background-color': 'rgb(0,78,149)'}); //Dark Blue
	$('#m1-NRB-o_TRUCK').html('TRUCK FORWARD');
	$('#m1-NRB-n_Full').html('HEAD END SYSTEM ANIMATION');

	
}

allOn = function()
{
	$('#m1-NRB-a_FHA').css({'background-color': 'rgb(0,167,184)'}); //Light Blue
	$('#m1-NRB-a_WPOL').css({'background-color': 'rgb(0,167,184)'}); //Light Blue
	$('#m1-NRB-a_AIRLOCK').css({'background-color': 'rgb(0,167,184)'}); //Light Blue
	$('#m1-NRB-a_XTABLE').css({'background-color': 'rgb(0,167,184)'}); //Light Blue
	$('#m1-NRB-a_CHOPPER').css({'background-color': 'rgb(0,167,184)'}); //Light Blue
	$('#m1-NRB-a_HFLOOR').css({'background-color': 'rgb(0,167,184)'}); //Light Blue
	$('#m1-NRB-a_ACF').css({'background-color': 'rgb(0,167,184)'}); //Light Blue
	$('#m1-NRB-a_HCASK').css({'background-color': 'rgb(0,167,184)'}); //Light Blue
	$('#m1-NRB-a_FPB').css({'background-color': 'rgb(0,167,184)'}); //Light Blue
	$('#m1-NRB-a_POOLTR1').css({'background-color': 'rgb(0,167,184)'}); //Light Blue
	$('#m1-NRB-a_TILT').css({'background-color': 'rgb(0,167,184)'}); //Light Blue
	$('#m1-NRB-a_HDOLLY').css({'background-color': 'rgb(0,167,184)'}); //Light Blue
	$('#m1-NRB-a_FUELPOOL').css({'background-color': 'rgb(0,167,184)'}); //Light Blue
	$('#m1-NRB-a_FILTER').css({'background-color': 'rgb(0,167,184)'}); //Light Blue	
}

/**
 * Called when document is loaded.
 */
phoneui.documentReadyHandler = function() {
	$.get(url + "?Stop=0", function(data,status){});
	clearInterval(myVar);
	$('#m1-NRB-area').css({'background-color': 'rgb(196,18,47)'});//rgb(126,139,40)'});
	allOff();
}



function myTimer()
{
	$.get(url + "?isDone=0", function(data,status){
	if (data == '1')
	{
		allOff();
		clearInterval(myVar);
		$('#m1-NRB-mute').css({'-webkit-border-image': 'url(images/unmute.png) 1 1 1 1 stretch stretch'});

	}
});
}

function myTimer1()
{
	$.get(url1 + "?isDone=0", function(data,status){
	if (data == '1')
	{
		$('#m1-NRB-mute').css({'-webkit-border-image': 'url(images/unmute.png) 1 1 1 1 stretch stretch'});
		allOff();
		clearInterval(myVar);
	}
});
}

function myTimer2()
{
	$.get(url + "?isDone=1", function(data,status){
	if (data == '1')
	{
		$('#m1-NRB-mute').css({'-webkit-border-image': 'url(images/unmute.png) 1 1 1 1 stretch stretch'});
		allOff();
		clearInterval(myVar);
	}
});
}

