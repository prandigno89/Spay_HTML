$(
	
	function(){	
		//inizializzo la grafica;
		initApp();
		var a1 = $('#a1');
		var a2 = $('#a2');
		var a3 = $('#a3');
		var a4 = $('#a4');
		var a97= $('#a97');
		var a98= $('#a98');
		var a99= $('#a99');
		var close=$('#close');
		var open=$('#open');
		//ROUTER DI VISUALIZZAZIONE PAGINE:
		a1.on('click', function(){ visualizza('#page0','#page99');});
		a2.on('click', function(){ visualizza('#page0','#page1');});
		a3.on('click', function(){ visualizza('#page1','#page0');});
		a4.on('click', function(){ visualizza('#page0','#page1'); $('#menu').hide();});
		a97.on('click', function(){ visualizza('#page98','#page0');});		
		a98.on('click', function(){ visualizza('#page99','#page98'); window.print();});	
		a99.on('click', function(){ visualizza('#page99','#page0');});	
		close.on('click', function(){$('#menu').hide();});
		open.on('click', function(){$('#menu').show();});
				
	}
		
)

//inizializzazione dell'applicazione
function initApp(){
	$('#page1').hide();
	$('#page99').hide();
	$('#page98').hide();
	$('#menu').hide();
	
	
	//settare la lingua;
		
}

// Funzione per il cambio di visualizzazione della pagina:
function visualizza(p1,p2){					
		$(p1).hide();
		$(p2).show();		
};

//richiede l'elenco delle transazioni pending
function getPending(){
	
}

//invia la selezione effettuata dal merchant al server
function setPayment(decision){
	
}
