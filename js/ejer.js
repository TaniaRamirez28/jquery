$(document).ready(function(){

	$(".uno").click(function(){
		$(".uno").remove();

	})

	$(".dos").click(function(){
		$(".dos").remove();

	})

	$(".tres").click(function(){
		$(".tres").remove();

	})

////////////Ejercicio 2/////////////////////////////////////////////

	$("#ocultar").click(function(){
		$(".p").hide(3000);

	})

////////////////////////Ejercicio 3/////////////////////////////	
	
	$("#p1").mouseenter(function(){
		alert("usted le dio click a este parrafo")
	})

/////////////////////Ejercicio 4/////////////////////////////////////

	
	$("#toggle").click(function(){
		$(".p2").toggle(400);
	})	

	$("#toggle").click(function(){
		$(".p3").toggle(400);
	})

//////////////////Ejercicio 5//////////////////////////////////////

	$(".fade").click(function(){
		$("#div1").fadetoggle("blur");
		$("#div2").fadetoggle("slow");
		$("#div3").fadetoggle(3000);
	})

////////////Ejercicio 6///////////////////////////////////////////		

})