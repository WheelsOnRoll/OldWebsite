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
	sel=(sel<LIMIT-1)?sel+1:0;
	window.document.querySelectorAll(".carousel input")[sel].checked=true;
}

function prev(){
	sel=getsel();
	sel=(sel)?sel-1:LIMIT-1;
	window.document.querySelectorAll(".carousel input")[sel].checked=true;
}