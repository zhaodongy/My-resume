var banner = document.getElementById('banner');
var list = document.getElementById('list');
var imageHeight = 900;
var imageCount = list.getElementsByTagName('img').length;
var currIndex = 0;
var isAnimate = false;
function animate(offset) {		
	var newTop = parseInt(list.style.top) + offset;
	var time = 800;
	var interval = 40;
	var speed = offset / (time / interval); 
	function go() {
		var top = parseInt(list.style.top);
		if (speed > 0 && top >= newTop || speed < 0 && top <= newTop) {			
			clearInterval(timerId);		
			isAnimate = false;			
			top = list.style.top = newTop + 'px';		
			if (parseInt(top) == 0) {					
				list.style.top = -imageHeight * (imageCount - 2) + 'px';
			}
			if ( parseInt(top) == -imageHeight * (imageCount - 1) ) {
				list.style.top = -imageHeight + 'px';
			}
			return;
		}
		list.style.top = top + speed + 'px';
	}
	var timerId = setInterval(go,interval);	
	isAnimate = true;
}
function autoPlay(){	
	if (isAnimate)
		return;	
	currIndex ++;
	if (currIndex > imageCount - 3)
		currIndex = 0;
	animate(-imageHeight); 
}
var timerId = setInterval(autoPlay,2000);
