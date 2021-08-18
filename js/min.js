$(document).ready(function(){

	$("#ocultar").click(function(){
		$("p").append("Este texto se agrego con el click del boton ocultar");
		$("p").hide(3000);

	})

	$("#mostrar").click(function(){
		$("p").show(3000);
	})

	$("#quitar").click(function(){
		$("p").remove();
	})

	$("#adicionar").click(function(){

		$("#contenedor").append('<br><label for=""> Nombre: </label><input type="text" name="nombre[]">');
	})

	$("#butUno").click(function(){
		$(".uno").hide(3000);

	})

	$("#butDos").click(function(){
		$(".dos").hide(1550);

	})

	$("#automatico").click(function(){
		$("#toggle").toggle(400);

	})


	$(".divmouse").mouseenter(function(){
		alert("usted le dio click a ")
	})




})