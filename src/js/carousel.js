var sel=0;
var LIMIT=5;		//number of carousel items

function getsel(){
	for(var i=0;i<LIMIT;i++){
		if(window.document.querySelectorAll(".carousel input")[i].checked)
			return i;
	}
}

function next(){
	sel=getsel();
	sel= (sel+1)%LIMIT;
	window.document.querySelectorAll(".carousel input")[sel].checked=true;
}

function prev(){
	sel=getsel();
	sel= (sel-1+LIMIT)%LIMIT;
	window.document.querySelectorAll(".carousel input")[sel].checked=true;
}

function start_rolling(){
	setInterval(function(){next();}, 8000);
}