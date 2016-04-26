$(
	
	function(){	
		//inizializzo la grafica;
		initApp();
		var a1 = $('#a1');
		var a2 = $('#a2');
		var a3 = $('#a3');
		var a99= $('#a99');
		//ROUTER DI VISUALIZZAZIONE PAGINE:
		a1.on('click', function(){ visualizza('#page0','#page99');});
		a2.on('click', function(){ visualizza('#page0','#page1');});
		a3.on('click', function(){ visualizza('#page1','#page0');});	
		a99.on('click', function(){ visualizza('#page99','#page0');});	
				
	}
		
)

//inizializzazione dell'applicazione
function initApp(){
	$('#page1').hide();
	$('#page99').hide();
}

// Funzione per il cambio di visualizzazione della pagina:
function visualizza(p1,p2){
						
		$(p1).hide();
		$(p2).show();
		
		
	};