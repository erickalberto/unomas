//JavaScript
	
$(document).ready(function(e){
	$('#principal1'). height($('#page1').height());//calcular el alto de la pantalla del dispositivo 	
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		
		$('.celda').bind('touchstart',function(){$(this).addClass('tocada');audio.play($(this).attr('id'));});
		
		$('.celda').bind('touchend',function(){$(this).removeClass('tocada');});
		
   
	
	},false); //deviceready
});//ready