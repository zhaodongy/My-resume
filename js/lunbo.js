$(document).ready(function(){
	var curIndex = 0; 
	imglength = $('.imgList li').length;
	var autoChange = setInterval(function(){ 
        if(curIndex < imglength - 1){ 
            curIndex ++; 
        }else{ 
            curIndex = 0;
        }
        changeTo(curIndex);  
    },2000);
    function changeTo(index){ 
        var goLeft = index * 970;
        $('.imgList').animate({left: '-' + goLeft + 'px'},500);
    }
});	