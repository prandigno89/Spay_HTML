$(
	
	function(){	
		//inizializzo la grafica;
		initApp();
		var a1 = $('#a1');
		var a2 = $('#a2');
		var a3 = $('#a3');
		var a4 = $('#a4');
		var a5 = $('#a5');
		var a6 = $('#a6');
		
		var a97= $('#a97');
		var a98= $('#a98');
		var a99= $('#a99');
		var close=$('#close');
		var open=$('#open');
		
		//variabili per setting lingua
		var it = $('#lnit');
		var en = $('#lnen');
		
		
		//ROUTER DI VISUALIZZAZIONE PAGINE:
		a1.on('click', function(){ visualizza('#page0','#page99');} );
		a2.on('click', function(){ visualizza('#page0','#page1');});
		a3.on('click', function(){ visualizza('#page1','#page0');});
		a4.on('click', function(){ visualizza('#page0','#page1'); $('#menu').hide();});
		a5.on('click', function(){ visualizza('#page0','#page2'); $('#menu').hide();});
		a6.on('click', function(){ visualizza('#page2','#page0');});
		a97.on('click', function(){ visualizza('#page98','#page0');});		
		a98.on('click', function(){getPending();});	
		a99.on('click', function(){ visualizza('#page99','#page0');});	
		close.on('click', function(){$('#menu').hide();});
		open.on('click', function(){$('#menu').show();});
		
		//disattivazione menu: open.css("pointer-events", "none");
		//rimozione disattivazione: elem.css('background-color', '')      // remove property
		
		//evento gestione cambio lingua
		it.on('click', function(){
			console.log("cambio lingu in italiano");
			var lang='language/it.json';
			setLanguage(lang);
		})
		en.on('click', function(){
			console.log("change language in english");
			var lang='language/en.json';
			setLanguage(lang);
		})
				
	}
		
)

//inizializzazione dell'applicazione
function initApp(){
	$('#page1').hide();
	$('#page2').hide();
	$('#page99').hide();
	$('#page98').hide();
	$('#menu').hide();
	
	
	//settare la lingua;
	/*SETTING LINGUA ALTERNATIVA*/
        var lang='language/en.json';
		setLanguage(lang);
		
}

// Funzione per il cambio di visualizzazione della pagina:
function visualizza(p1,p2){					
		$(p1).hide();
		$(p2).show();		
};

//richiede l'elenco delle transazioni pending
function getPending(){
	
	$.ajax({
			type:'GET',
			url:"https://10.4.17.250/satispay/test.json",
			//data:{termid : serial_number},
			datatype:'json',
			context:$('body'),
			success:function(data){
			//interpreto il json
			risultato= data.result;
        	$('#risultato').html(risultato);
			visualizza('#page99','#page98'); 
			},
			error:function(xhr, type){
				alert("OPS! Non riesco a comunicare con il server di prenotazione..");
				visualizza('#page99','#page0'); 
			}
		});
}

//invia la selezione effettuata dal merchant al server
function setPayment(decision){
	
}

// Funzione per la lettura del file lingua e settaggio degli elementi in app
function setLanguage(languageFile){
    $.getJSON(languageFile ,function(data){
      
      var myarray= data;
   
    var i;
    for(i = 0; i < myarray.length; i++) {
     //console.log(myarray[i].value);
     $(myarray[i].id).html(myarray[i].value);
     
    }
       
  });      
};
