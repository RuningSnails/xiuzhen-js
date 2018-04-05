window.onload= function() {
	var data = "";
	for (var i = 0; i < 9; i++) {
		data += '<div class="box"></div>';
	}
	document.getElementById("boxlist").innerHTML = data;
}

function Twinkle(){
	var c = Math.ceil(Math.random()*9)-1;
	var k = Math.ceil(Math.random()*9)-1;
	var b = Math.ceil(Math.random()*9)-1;
	while (c == b || c == k || b == k){
	    c = Math.ceil(Math.random()*9)-1;
		k = Math.ceil(Math.random()*9)-1;
		b = Math.ceil(Math.random()*9)-1;
	}
	var num = new Array(k,b,c);
	for (var i = 0;i < 9; i++) {
		document.getElementsByClassName("box")[i].style.backgroundColor ="orange";
	}

	for (var i = 0; i < 3; i++) {
		var x = Math.ceil(Math.random()*255);
		var y = Math.ceil(Math.random()* 255);
		var z = Math.ceil(Math.random()* 255);
		if(x == 255 &&  x == 165 && z == 0){
			x = Math.ceil(Math.random()*255);
			y = Math.ceil(Math.random()* 255);
			z = Math.ceil(Math.random()* 255);
		}
		var a = num[i];
		document.getElementsByClassName("box")[a].style.backgroundColor ="rgb("+x+","+y+","+x+")";
	}
}
var bloo = "";
function start(){
	clearInterval(bloo);
	bloo = setInterval("Twinkle()",1000);
}
function stop(){
	for (var i = 0;i < 9; i++) {
		document.getElementsByClassName("box")[i].style.backgroundColor ="orange";
	}
	clearInterval(bloo);
}
